import { HealthRepository } from './health.repository';
import {
  ObservationCategory,
  ObservationInputData,
  ObservationRecord,
  AnalysisResult,
  AnalysisRiskLevel,
  VitalSignsData,
  SkinObservationData,
  ExcretionObservationData,
  BehaviorObservationData,
} from './health.model';
import {
  CreateObservationRequestDto,
  AnalyzeObservationResponseDto,
  SaveObservationResponseDto,
} from './health.dto';

export class HealthService {
  constructor(private readonly repository: HealthRepository) {}

  // ───────────────────────────────────────────────────────────────────────────
  // Motor de Análise Clínica (Simulação de IA)
  // ───────────────────────────────────────────────────────────────────────────

  private analyzeVitalSigns(data: VitalSignsData): AnalysisResult {
    const findings: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    if (data.systolicPressure !== undefined && data.diastolicPressure !== undefined) {
      const sys = data.systolicPressure;
      const dia = data.diastolicPressure;

      if (sys >= 180 || dia >= 110) {
        riskScore += 4;
        findings.push(
          `Crise hipertensiva detectada: ${sys}/${dia} mmHg — risco imediato de AVC e infarto.`
        );
        recommendations.push('ACIONAR SAMU IMEDIATAMENTE (192) — crise hipertensiva.');
        recommendations.push('Manter paciente em repouso absoluto, deitado.');
      } else if (sys >= 160 || dia >= 100) {
        riskScore += 3;
        findings.push(
          `Hipertensão Estágio 2 (${sys}/${dia} mmHg) — requer atenção imediata.`
        );
        recommendations.push('Contatar médico responsável em até 30 minutos.');
        recommendations.push('Verificar última dose de anti-hipertensivo e horário previsto.');
      } else if (sys >= 140 || dia >= 90) {
        riskScore += 2;
        findings.push(
          `Hipertensão Estágio 1 (${sys}/${dia} mmHg) — monitoramento necessário.`
        );
        recommendations.push('Reaferir em 30 minutos. Reduzir estímulos ambientais.');
      } else if (sys < 90 || dia < 60) {
        riskScore += 3;
        findings.push(
          `Hipotensão detectada (${sys}/${dia} mmHg) — risco de queda e síncope.`
        );
        recommendations.push('Manter paciente deitado com pernas elevadas.');
        recommendations.push('Oferecer hidratação oral se consciente. Contatar médico.');
      } else {
        findings.push(`Pressão arterial normal (${sys}/${dia} mmHg).`);
      }
    }

    if (data.temperature !== undefined) {
      const temp = data.temperature;
      if (temp >= 39.5) {
        riskScore += 3;
        findings.push(`Febre alta (${temp}°C) — risco de convulsão e desidratação grave.`);
        recommendations.push('Acionar atendimento médico urgente. Compressas mornas e hidratação.');
      } else if (temp >= 38.0) {
        riskScore += 2;
        findings.push(`Febre moderada (${temp}°C) — investigar causa infecciosa.`);
        recommendations.push('Administrar antipirético conforme prescrição. Monitorar a cada hora.');
      } else if (temp < 35.5) {
        riskScore += 3;
        findings.push(`Hipotermia (${temp}°C) — emergência clínica.`);
        recommendations.push('Aquecer paciente com cobertores. ACIONAR SAMU (192).');
      } else {
        findings.push(`Temperatura corporal normal (${temp}°C).`);
      }
    }

    if (data.bloodGlucose !== undefined) {
      const glucose = data.bloodGlucose;
      if (glucose < 70) {
        riskScore += 4;
        findings.push(`Hipoglicemia grave (${glucose} mg/dL) — risco imediato de coma.`);
        recommendations.push('Oferecer açúcar, suco ou glucose oral SE consciente.');
        recommendations.push('ACIONAR SAMU (192) imediatamente se inconsciente.');
      } else if (glucose < 80) {
        riskScore += 2;
        findings.push(`Hipoglicemia leve (${glucose} mg/dL) — ação imediata necessária.`);
        recommendations.push('Oferecer lanche com carboidrato simples. Monitorar em 15 minutos.');
      } else if (glucose > 300) {
        riskScore += 3;
        findings.push(`Hiperglicemia grave (${glucose} mg/dL) — risco de cetoacidose.`);
        recommendations.push('Contatar médico urgente. Verificar prescrição de insulina de correção.');
      } else if (glucose > 180) {
        riskScore += 2;
        findings.push(`Hiperglicemia moderada (${glucose} mg/dL) — acima da meta terapêutica.`);
        recommendations.push('Verificar horário da última refeição e última dose de insulina/antidiabético.');
      } else {
        findings.push(`Glicemia dentro dos valores esperados (${glucose} mg/dL).`);
      }
    }

    if (data.oxygenSaturation !== undefined) {
      const spo2 = data.oxygenSaturation;
      if (spo2 < 90) {
        riskScore += 4;
        findings.push(`Hipoxemia grave (SpO2: ${spo2}%) — insuficiência respiratória.`);
        recommendations.push('ACIONAR SAMU (192). Posicionar em Fowler (semi-sentado).');
      } else if (spo2 < 94) {
        riskScore += 2;
        findings.push(`Saturação de O2 reduzida (SpO2: ${spo2}%) — atenção necessária.`);
        recommendations.push('Verificar permeabilidade de vias aéreas. Comunicar médico.');
      } else {
        findings.push(`Saturação de oxigênio normal (SpO2: ${spo2}%).`);
      }
    }

    if (data.heartRate !== undefined) {
      const hr = data.heartRate;
      if (hr > 120) {
        riskScore += 3;
        findings.push(`Taquicardia significativa (${hr} bpm) — investigar causa subjacente.`);
        recommendations.push('ECG e avaliação médica urgente. Verificar sinais de infecção ou dor.');
      } else if (hr < 50) {
        riskScore += 3;
        findings.push(`Bradicardia importante (${hr} bpm) — risco de síncope.`);
        recommendations.push('Posicionar deitado. Monitorar consciência. Contatar médico.');
      } else {
        findings.push(`Frequência cardíaca dentro do intervalo aceitável (${hr} bpm).`);
      }
    }

    let detectedRisk: AnalysisRiskLevel;
    if (riskScore >= 4) detectedRisk = 'high';
    else if (riskScore >= 2) detectedRisk = 'medium';
    else detectedRisk = 'low';

    if (findings.length === 0) {
      findings.push('Nenhum dado de sinal vital foi fornecido para análise.');
      recommendations.push('Envie pelo menos um valor de sinal vital para obter uma análise.');
    }

    if (recommendations.length === 0) {
      recommendations.push('Continuar monitoramento rotineiro. Nenhuma ação urgente necessária.');
    }

    return {
      detectedRisk,
      diagnosticFindings: findings,
      clinicalRecommendations: recommendations,
      requiresImmediateAttention: riskScore >= 4,
    };
  }

  private analyzeSkinObservation(data: SkinObservationData): AnalysisResult {
    const notes = data.notes.toLowerCase();
    const findings: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    if (notes.includes('úlcera') || notes.includes('ulceração') || notes.includes('escara')) {
      riskScore += 4;
      findings.push('Úlcera por pressão confirmada — requer cuidado especializado imediato.');
      recommendations.push('Limpeza com soro fisiológico 0,9% e curativo adequado à fase.');
      recommendations.push('Encaminhar para avaliação de enfermagem especializada.');
    }

    if (notes.includes('hiperemia') || notes.includes('vermelho') || notes.includes('rubor')) {
      riskScore += 2;
      findings.push('Hiperemia localizada detectada — possível Estágio 1 de lesão por pressão.');
      recommendations.push('Iniciar protocolo de mudança de decúbito a cada 2 horas.');
      recommendations.push('Aplicar creme protetor de barreira. Registrar e monitorar.');
    }

    if (notes.includes('pus') || notes.includes('secreção') || notes.includes('infecção')) {
      riskScore += 3;
      findings.push('Sinais de infecção local detectados — risco de septicemia.');
      recommendations.push('Coleta de amostra para cultura. Contatar médico urgentemente.');
    }

    if (notes.includes('necrose') || notes.includes('enegrecida') || notes.includes('eschar')) {
      riskScore += 4;
      findings.push('Tecido necrótico detectado — Estágio 3 ou 4 de lesão por pressão.');
      recommendations.push('ENCAMINHAR PARA HOSPITAL. Desbridamento cirúrgico pode ser necessário.');
    }

    if (notes.includes('hematoma') || notes.includes('roxo') || notes.includes('equimose')) {
      riskScore += 2;
      findings.push('Hematoma ou equimose detectada — investigar causa (queda, trauma ou violência).');
      recommendations.push('Verificar histórico de quedas ou trauma recente.');
      recommendations.push('Avaliar possibilidade de violência física se não houver causa plausível.');
    }

    if (data.location) {
      findings.push(`Localização reportada: ${data.location}.`);
    }

    if (data.imageFileReference) {
      findings.push(`Imagem de referência registrada: ${data.imageFileReference}.`);
      recommendations.push('Comparar com imagem anterior para avaliar evolução da lesão.');
    }

    if (findings.length === 0) {
      findings.push('Observação de pele registrada. Nenhuma alteração crítica identificada nas notas.');
      recommendations.push('Manter monitoramento rotineiro da integridade cutânea.');
      riskScore = 0;
    }

    let detectedRisk: AnalysisRiskLevel;
    if (riskScore >= 4) detectedRisk = 'high';
    else if (riskScore >= 2) detectedRisk = 'medium';
    else detectedRisk = 'low';

    return {
      detectedRisk,
      diagnosticFindings: findings,
      clinicalRecommendations: recommendations,
      requiresImmediateAttention: riskScore >= 4,
    };
  }

  private analyzeExcretionObservation(data: ExcretionObservationData): AnalysisResult {
    const notes = data.notes.toLowerCase();
    const findings: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    if (notes.includes('sangue') || notes.includes('hematúria') || notes.includes('melena')) {
      riskScore += 4;
      findings.push('Presença de sangue nas excreções — emergência clínica.');
      recommendations.push('Encaminhar para avaliação médica imediata. Coletar amostra.');
    }

    if (notes.includes('ausência') || notes.includes('sem urinar') || notes.includes('anúria')) {
      riskScore += 4;
      findings.push('Suspeita de anúria ou oligúria severa — risco de insuficiência renal aguda.');
      recommendations.push('ACIONAR MÉDICO IMEDIATAMENTE. Verificar hidratação e medicamentos.');
    }

    if (notes.includes('diarreia') || notes.includes('aquosa') || notes.includes('líquida')) {
      riskScore += 2;
      findings.push('Episódio de diarreia detectado — risco de desidratação em idosos.');
      recommendations.push('Aumentar ingesta hídrica. Monitorar sinais de desidratação.');
      recommendations.push('Colher histórico alimentar recente. Avaliar uso de laxantes.');
    }

    if (notes.includes('constipação') || notes.includes('obstipação') || notes.includes('sem evacuação')) {
      riskScore += 1;
      findings.push('Constipação intestinal relatada — comum em idosos, requer atenção.');
      recommendations.push('Aumentar ingesta de fibras e líquidos. Avaliar medicamentos constipantes.');
    }

    if (data.color && data.color.toLowerCase() !== 'amarelo' && data.color.toLowerCase() !== 'transparente') {
      riskScore += 1;
      findings.push(`Coloração incomum da excreção: ${data.color} — merece investigação.`);
      recommendations.push('Registrar e monitorar. Comunicar médico se persistir.');
    }

    if (findings.length === 0) {
      findings.push('Padrão de excreção dentro do esperado para a condição do paciente.');
      recommendations.push('Manter monitoramento rotineiro. Registrar qualquer alteração.');
    }

    let detectedRisk: AnalysisRiskLevel;
    if (riskScore >= 4) detectedRisk = 'high';
    else if (riskScore >= 1) detectedRisk = 'medium';
    else detectedRisk = 'low';

    return {
      detectedRisk,
      diagnosticFindings: findings,
      clinicalRecommendations: recommendations,
      requiresImmediateAttention: riskScore >= 4,
    };
  }

  private analyzeBehaviorObservation(data: BehaviorObservationData): AnalysisResult {
    const notes = data.notes.toLowerCase();
    const findings: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    if (data.agitationLevel !== undefined) {
      if (data.agitationLevel >= 8) {
        riskScore += 3;
        findings.push(
          `Agitação intensa (nível ${data.agitationLevel}/10) — risco elevado de queda e autolesão.`
        );
        recommendations.push('Garantir ambiente seguro. Remover objetos de risco do alcance.');
        recommendations.push('Contatar médico para avaliação de medicação de resgate.');
      } else if (data.agitationLevel >= 5) {
        riskScore += 2;
        findings.push(`Agitação moderada (nível ${data.agitationLevel}/10) — monitorar de perto.`);
        recommendations.push('Aplicar técnicas de redirecionamento: música, fotos familiares, atividade calma.');
      } else if (data.agitationLevel >= 1) {
        riskScore += 1;
        findings.push(`Agitação leve (nível ${data.agitationLevel}/10) — registrar e monitorar.`);
      }
    }

    if (data.hasConfusion) {
      riskScore += 2;
      findings.push('Desorientação ou confusão mental observada — possível episódio de delirium.');
      recommendations.push('Orientar gentilmente sobre data, local e pessoas. Evitar confronto.');
      recommendations.push('Investigar causas de delirium: infecção, desidratação, medicamentos.');
    }

    if (data.refusedFood) {
      riskScore += 2;
      findings.push('Recusa alimentar registrada — risco de desnutrição e desidratação.');
      recommendations.push('Oferecer alimentos preferidos do paciente em pequenas quantidades.');
      recommendations.push('Avaliar causas: náusea, dor, disfagia ou depressão.');
      recommendations.push('Contatar nutricionista se recusa persistir por mais de 24h.');
    }

    if (notes.includes('agressiv') || notes.includes('bater') || notes.includes('xingar')) {
      riskScore += 2;
      findings.push('Comportamento agressivo detectado — risco para segurança do cuidador.');
      recommendations.push('Manter distância segura. Não confrontar diretamente.');
      recommendations.push('Documentar e comunicar equipe. Avaliar medicação com médico.');
    }

    if (notes.includes('choro') || notes.includes('tristeza') || notes.includes('não quer viver')) {
      riskScore += 3;
      findings.push('Sinais de sofrimento emocional intenso ou ideação depressiva detectados.');
      recommendations.push('AVALIAR RISCO DE SUICÍDIO COM PROFISSIONAL DE SAÚDE MENTAL URGENTE.');
      recommendations.push('Não deixar o paciente sozinho. Remover objetos de risco.');
    }

    if (notes.includes('queda') || notes.includes('caiu')) {
      riskScore += 3;
      findings.push('Ocorrência de queda relatada — alto risco de fratura em idosos.');
      recommendations.push('Verificar integridade física e sinais neurológicos imediatamente.');
      recommendations.push('Acionar SAMU (192) se houver dor, incapacidade de movimentar membros.');
      recommendations.push('Registrar as circunstâncias da queda e comunicar família.');
    }

    if (findings.length === 0) {
      findings.push('Observação comportamental registrada. Padrão dentro do esperado.');
      recommendations.push('Manter estimulação cognitiva e social rotineira.');
    }

    let detectedRisk: AnalysisRiskLevel;
    if (riskScore >= 5) detectedRisk = 'high';
    else if (riskScore >= 2) detectedRisk = 'medium';
    else detectedRisk = 'low';

    return {
      detectedRisk,
      diagnosticFindings: findings,
      clinicalRecommendations: recommendations,
      requiresImmediateAttention: riskScore >= 5,
    };
  }

  private dispatchAnalysis(
    category: ObservationCategory,
    inputData: ObservationInputData
  ): AnalysisResult {
    switch (category) {
      case 'vital':
        return this.analyzeVitalSigns(inputData as VitalSignsData);
      case 'pele':
        return this.analyzeSkinObservation(inputData as SkinObservationData);
      case 'excreção':
        return this.analyzeExcretionObservation(inputData as ExcretionObservationData);
      case 'comportamento':
        return this.analyzeBehaviorObservation(inputData as BehaviorObservationData);
      default: {
        const _exhaustive: never = category;
        throw new Error(`Categoria de observação inválida: ${_exhaustive}`);
      }
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Métodos Públicos (chamados pelos Controllers)
  // ───────────────────────────────────────────────────────────────────────────
  analyzeOnly(dto: CreateObservationRequestDto): AnalyzeObservationResponseDto {
    const analysisResult = this.dispatchAnalysis(dto.category, dto.inputData);

    return {
      category: dto.category,
      analysisResult,
      isPersisted: false,
    };
  }
  analyzeAndSave(dto: CreateObservationRequestDto): SaveObservationResponseDto {
    const analysisResult = this.dispatchAnalysis(dto.category, dto.inputData);

    const record: Omit<ObservationRecord, 'id'> = {
      patientId: dto.patientId,
      category: dto.category,
      inputData: dto.inputData,
      recordedAt: new Date().toISOString(),
      analysisResult,
    };

    return this.repository.save(record);
  }
}
