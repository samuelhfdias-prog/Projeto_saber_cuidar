import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppStateComponent, PageShellComponent } from '../../../shared/components';
import { sanitizeText, trackById } from '../../../shared/utils';
import type { HealthObservation, HealthObservationDraft, HealthTool } from '../models';
import { HealthAiService } from '../services/health-ai.service';
import { ImageUploadService } from '../../../core/services/image-upload.service';
import { HealthAiAnalysisService, AnalysisResponse } from '../services/health-ai-analysis.service';

interface FeedbackState {
  type: 'error' | 'success';
  title: string;
  message: string;
}

export interface VitalRecord {
  id: string;
  date: string;
  time: string;
  bloodPressure?: string;
  temperature?: string;
  glucose?: string;
  responsible: string;
}

@Component({
  selector: 'app-health-ai',
  standalone: true,
  imports: [AppStateComponent, CommonModule, PageShellComponent, ReactiveFormsModule],
  templateUrl: './health-ai.page.html',
  styleUrls: ['./health-ai.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthAiPage implements OnDestroy, OnInit {
  @ViewChild('videoElement') videoElement?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement?: ElementRef<HTMLCanvasElement>;

  cameraStream: MediaStream | null = null;
  capturedImage: string | null = null;
  showCamera = false;
  private readonly healthAiService = inject(HealthAiService);
  private readonly imageUploadService = inject(ImageUploadService);
  private readonly healthAiAnalysisService = inject(HealthAiAnalysisService);
  selectedIdosoId?: number;
  autoSaveEnabled = false;

  observationOptions: HealthObservation[] = [];
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
  
  vitalsHistory: VitalRecord[] = [
    { id: '1', date: '08/06/2026', time: '08:00', bloodPressure: '120/80', glucose: '95', responsible: 'João (Cuidador)' },
    { id: '2', date: '07/06/2026', time: '18:30', temperature: '36,8', responsible: 'Maria (Enfermeira)' },
  ];

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
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.healthAiService.getObservationOptions().subscribe({
      next: (options) => {
        this.observationOptions = options.map(opt => ({
          ...opt,
          tool: (opt as any).id === 'pele' ? 'skin' : (opt as any).id === 'excreção' ? 'excretions' : (opt as any).id === 'comportamento' ? 'behavior' : 'vitals',
          title: (opt as any).name,
          description: (opt as any).name
        }));
        this.cdr.markForCheck();
      },
      error: () => {
        console.error('Failed to load observation options');
      }
    });
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
      title: 'Processando...',
      message: 'Comprimindo imagem (1/3)...'
    };

    try {
      this.feedback.message = 'Enviando imagem (2/3)...';
      const uploadResponse = await this.imageUploadService.uploadImage(
        this.capturedImage,
        this.selectedIdosoId
      );
      this.feedback.message = 'Analisando com IA (3/3)...';
      const category = this.selectedTool === 'skin' ? 'pele' : 'excreção';
      
      console.info(`[AI_LOG][${new Date().toISOString()}] Iniciando análise de imagem... Category: ${category}`);
      const analysisResponse = await this.healthAiAnalysisService.analyzeImage({
        imageUrl: uploadResponse.caminho,
        category,
        notes: '',
        idosoId: this.selectedIdosoId
      });
      console.info(`[AI_LOG][${new Date().toISOString()}] Análise de imagem concluída com sucesso.`);
      const riskEmoji: Record<string, string> = {
        low: '✅',
        medium: '⚠️',
        high: '🔴',
        critical: '🚨'
      };

      this.feedback = {
        type: analysisResponse.diagnosis.requiresImmediateAttention ? 'error' : 'success',
        title: `${riskEmoji[analysisResponse.diagnosis.riskLevel] || '✅'} ${analysisResponse.diagnosis.riskLevel.toUpperCase()}`,
        message: analysisResponse.diagnosis.findings.join('\n\n')
      };
      if (this.autoSaveEnabled) {
        await this.saveAnalysis(analysisResponse);
      }

    } catch (error: any) {
      this.feedback = {
        type: 'error',
        title: 'Erro na análise',
        message: error.message || 'Não foi possível analisar a imagem. Tente novamente.'
      };
    }
  }

  private async saveAnalysis(response: AnalysisResponse): Promise<void> {
  }

  sendBehaviorVideo(): void {
    this.feedback = {
      type: 'success',
      title: 'Video preparado',
      message: 'O video sera anexado ao registro quando o envio de midia estiver conectado.'
    };
  }

  saveMedicalGuideline(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    console.info(`[AI_LOG][${new Date().toISOString()}] Orientações médicas salvas no estado local: ${input.value}`);
    this.feedback = {
      type: 'success',
      title: 'Orientações salvas',
      message: 'As orientações foram registradas para uso em análises futuras.'
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
      console.info(`[AI_LOG][${new Date().toISOString()}] Iniciando análise de comportamento...`);
      const response = await this.healthAiService.analyzeObservation('comportamento', {
        notes: this.behaviorForm.controls.note.value
      });
      console.info(`[AI_LOG][${new Date().toISOString()}] Análise de comportamento concluída com sucesso.`);
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

      console.info(`[AI_LOG][${new Date().toISOString()}] Iniciando análise de sinais vitais... Payload:`, inputData);
      const response = await this.healthAiService.analyzeObservation('vital', inputData);
      console.info(`[AI_LOG][${new Date().toISOString()}] Análise de sinais vitais concluída com sucesso.`);
      const findings = response.data?.analysisResult?.diagnosticFindings?.join(' ');
      
      const now = new Date();
      this.vitalsHistory.unshift({
        id: now.getTime().toString(),
        date: now.toLocaleDateString('pt-BR'),
        time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        bloodPressure: values.bloodPressure,
        temperature: values.temperature,
        glucose: values.glucose,
        responsible: 'Você (Cuidador)'
      });
      this.vitalsForm.reset();
      
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
