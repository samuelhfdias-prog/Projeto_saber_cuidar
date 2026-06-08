import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppStateComponent, PageShellComponent } from '../../../shared/components';
import { sanitizeText, trackById } from '../../../shared/utils';
import type { HealthObservation, HealthObservationDraft, HealthTool } from '../models';
import { HealthAiService } from '../services/health-ai.service';

interface FeedbackState {
  type: 'error' | 'success';
  title: string;
  message: string;
}

@Component({
  selector: 'app-health-ai',
  standalone: true,
  imports: [AppStateComponent, CommonModule, PageShellComponent, ReactiveFormsModule],
  templateUrl: './health-ai.page.html',
  styleUrls: ['./health-ai.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthAiPage implements OnDestroy {
  @ViewChild('videoElement') videoElement?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement?: ElementRef<HTMLCanvasElement>;

  cameraStream: MediaStream | null = null;
  capturedImage: string | null = null;
  showCamera = false;
  private readonly healthAiService = inject(HealthAiService);

  readonly observationOptions = this.healthAiService.getObservationOptions();
  readonly trackByObservationId = trackById<HealthObservation>;
  readonly behaviorForm = new FormGroup({
    note: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(600)]
    })
  });
  readonly vitalsForm = new FormGroup({
    bloodPressure: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(18), Validators.pattern(/^\d{2,3}\/\d{2,3}(?:\s?mmHg)?$/i)]
    }),
    temperature: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(8), Validators.pattern(/^(3[0-9]|4[0-3])([,.]\d)?\s?°?C?$/i)]
    }),
    glucose: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(14), Validators.pattern(/^\d{2,3}(?:\s?mg\/dL)?$/i)]
    })
  });

  selectedTool: HealthTool = 'skin';

  feedback: FeedbackState | null = null;

  get selectedObservationId(): string {
    return this.selectedObservation?.id ?? '';
  }

  get selectedObservation(): HealthObservation | undefined {
    return this.observationOptions.find((option) => option.tool === this.selectedTool);
  }

  get captureInstructions(): readonly string[] {
    const instructions: Record<'skin' | 'excretions', readonly string[]> = {
      skin: [
        'Mantenha 20-30 cm de distancia da lesao',
        'Use boa iluminacao - prefira luz natural',
        'Centralize a area afetada no quadro',
        'Inclua referencia de tamanho (ex: moeda)'
      ],
      excretions: [
        'Fotografe em fundo branco ou neutro',
        'Boa iluminacao - evite sombras',
        'Mostre cor e consistencia claramente',
        'Inclua contexto do recipiente para escala'
      ]
    };

    return this.selectedTool === 'skin' || this.selectedTool === 'excretions'
      ? instructions[this.selectedTool]
      : [];
  }

  get behaviorInstructions(): readonly string[] {
    return [
      'Descreva com detalhes os sintomas observados',
      'Indique quando comecou e duracao',
      'Se gravar video, mantenha camera estavel',
      'Registre horario e condicoes ambientais'
    ];
  }

  selectObservation(option: HealthObservation): void {
    this.selectTool(option.tool);
  }

  selectTool(tool: HealthTool): void {
    this.selectedTool = tool;
    this.feedback = null;
    this.stopCamera();
    this.showCamera = false;
    this.capturedImage = null;
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }

  async openCamera(): Promise<void> {
    this.showCamera = true;
    this.capturedImage = null;
    this.feedback = null;
    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setTimeout(() => {
        if (this.videoElement?.nativeElement) {
          this.videoElement.nativeElement.srcObject = this.cameraStream;
        }
      }, 50);
    } catch (err) {
      this.showCamera = false;
      this.feedback = {
        type: 'error',
        title: 'Câmera indisponível',
        message: 'Não foi possível acessar a câmera. Verifique as permissões do dispositivo.'
      };
    }
  }

  capturePhoto(): void {
    if (!this.videoElement || !this.canvasElement) return;
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    
    if (context && video.videoWidth > 0 && video.videoHeight > 0) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.capturedImage = canvas.toDataURL('image/png');
      this.stopCamera();
    }
  }

  stopCamera(): void {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
  }

  confirmCapture(): void {
    this.showCamera = false;
    this.feedback = {
      type: 'success',
      title: 'Imagem pronta',
      message: 'A imagem capturada foi armazenada e está pronta para análise.'
    };
  }

  retakePhoto(): void {
    this.capturedImage = null;
    this.openCamera();
  }

  chooseCaptureSource(source: 'camera' | 'gallery'): void {
    if (source === 'camera') {
      this.openCamera();
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.capturedImage = reader.result as string;
            this.showCamera = false;
            this.feedback = {
              type: 'success',
              title: 'Imagem da galeria carregada',
              message: 'A imagem está pronta para ser analisada.'
            };
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    }
  }

  async analyzeImage(): Promise<void> {
    if (!this.capturedImage) {
      this.feedback = {
        type: 'error',
        title: 'Nenhuma imagem',
        message: 'Capture ou selecione uma imagem antes de analisar.'
      };
      return;
    }
    
    this.feedback = {
      type: 'success',
      title: 'Analisando imagem...',
      message: 'A IA está processando sua imagem. Aguarde um instante.'
    };

    try {
      const category = this.selectedTool === 'skin' ? 'pele' : 'excreção';
      const inputData = { notes: '', imageBase64: this.capturedImage };
      const response = await this.healthAiService.analyzeObservation(category, inputData);
      
      const findings = response.data?.analysisResult?.diagnosticFindings?.join(' ');
      
      this.feedback = {
        type: 'success',
        title: 'Análise concluída',
        message: findings || 'Análise realizada com sucesso.'
      };
    } catch (error) {
      this.feedback = {
        type: 'error',
        title: 'Erro na análise',
        message: 'Não foi possível conectar ao servidor de IA.'
      };
    }
  }

  sendBehaviorVideo(): void {
    this.feedback = {
      type: 'success',
      title: 'Video preparado',
      message: 'O video sera anexado ao registro quando o envio de midia estiver conectado.'
    };
  }

  async submitBehavior(): Promise<void> {
    this.behaviorForm.controls.note.setValue(sanitizeText(this.behaviorForm.controls.note.value, 600));

    if (this.behaviorForm.invalid) {
      this.behaviorForm.markAllAsTouched();
      this.feedback = {
        type: 'error',
        title: 'Revise o comportamento',
        message: 'Descreva o comportamento observado antes de salvar ou analisar.'
      };
      return;
    }

    this.feedback = {
      type: 'success',
      title: 'Analisando comportamento...',
      message: 'A IA está analisando os dados. Aguarde um instante.'
    };

    try {
      const response = await this.healthAiService.analyzeObservation('comportamento', {
        notes: this.behaviorForm.controls.note.value
      });
      const findings = response.data?.analysisResult?.diagnosticFindings?.join(' ');
      this.feedback = {
        type: 'success',
        title: 'Análise de Comportamento Concluída',
        message: findings || 'Comportamento registrado e analisado.'
      };
    } catch (error) {
      this.feedback = {
        type: 'error',
        title: 'Erro na análise',
        message: 'Não foi possível conectar ao servidor de IA.'
      };
    }
  }

  async submitVitals(): Promise<void> {
    this.vitalsForm.controls.bloodPressure.setValue(sanitizeText(this.vitalsForm.controls.bloodPressure.value, 18));
    this.vitalsForm.controls.temperature.setValue(sanitizeText(this.vitalsForm.controls.temperature.value, 8));
    this.vitalsForm.controls.glucose.setValue(sanitizeText(this.vitalsForm.controls.glucose.value, 14));

    const values = this.vitalsForm.getRawValue();
    const hasAnyValue = Object.values(values).some((value) => value.trim().length > 0);

    if (!hasAnyValue) {
      this.feedback = {
        type: 'error',
        title: 'Informe os sinais vitais',
        message: 'Preencha ao menos um valor medido antes de analisar.'
      };
      return;
    }

    if (this.vitalsForm.invalid) {
      this.vitalsForm.markAllAsTouched();
      this.feedback = {
        type: 'error',
        title: 'Revise os sinais vitais',
        message: 'Use formatos validos, como 140/90 mmHg, 37,5 °C ou 145 mg/dL.'
      };
      return;
    }

    this.feedback = {
      type: 'success',
      title: 'Analisando sinais vitais...',
      message: 'A IA está analisando os dados. Aguarde um instante.'
    };

    try {
      const inputData: any = {};
      if (values.bloodPressure) {
        const [sys, dia] = values.bloodPressure.split('/').map(v => parseInt(v.trim()));
        inputData.systolicPressure = sys;
        inputData.diastolicPressure = dia;
      }
      if (values.temperature) inputData.temperature = parseFloat(values.temperature.replace(',', '.'));
      if (values.glucose) inputData.bloodGlucose = parseInt(values.glucose.trim());

      const response = await this.healthAiService.analyzeObservation('vital', inputData);
      const findings = response.data?.analysisResult?.diagnosticFindings?.join(' ');
      
      this.feedback = {
        type: 'success',
        title: 'Sinais Vitais Analisados',
        message: findings || 'Análise concluída com sucesso.'
      };
    } catch (error) {
      this.feedback = {
        type: 'error',
        title: 'Erro na análise',
        message: 'Não foi possível conectar ao servidor de IA.'
      };
    }
  }

  vitalError(controlName: 'bloodPressure' | 'temperature' | 'glucose'): string {
    const control = this.vitalsForm.controls[controlName];

    if (!control.invalid || !control.touched) {
      return '';
    }

    if (control.hasError('maxlength')) {
      return 'Use um valor mais curto.';
    }

    return 'Informe um valor em formato valido.';
  }

  behaviorError(): string {
    const control = this.behaviorForm.controls.note;

    if (!control.invalid || !control.touched) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Descreva a observacao.';
    }

    if (control.hasError('minlength')) {
      return 'Escreva pelo menos 10 caracteres.';
    }

    if (control.hasError('maxlength')) {
      return 'Use no maximo 600 caracteres.';
    }

    return 'Revise este campo.';
  }
}
