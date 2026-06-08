import { randomUUID } from 'crypto';
import { ObservationRecord } from './health.model';

const observationRecords: ObservationRecord[] = [
  {
    id: 'obs-001',
    patientId: 'patient-001',
    category: 'vital',
    inputData: {
      systolicPressure: 158,
      diastolicPressure: 98,
      heartRate: 88,
      oxygenSaturation: 96,
      temperature: 36.8,
    },
    recordedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    analysisResult: {
      detectedRisk: 'high',
      diagnosticFindings: [
        'Pressão arterial elevada (158/98 mmHg) — grau II (Hipertensão Estágio 2)',
        'Frequência cardíaca levemente elevada (88 bpm)',
        'Saturação de oxigênio dentro do limite aceitável (96%)',
      ],
      clinicalRecommendations: [
        'Aferição adicional em 30 minutos para confirmar a tendência',
        'Verificar horário da última dose de anti-hipertensivo (Losartana)',
        'Reduzir estímulos e garantir repouso imediato',
        'Contatar médico responsável se nova aferição mantiver valores elevados',
        'Acionar SAMU (192) se pressão ultrapassar 180/110 mmHg',
      ],
      requiresImmediateAttention: true,
    },
  },
  {
    id: 'obs-002',
    patientId: 'patient-001',
    category: 'pele',
    inputData: {
      notes:
        'Observada área de hiperemia (vermelhidão) na região sacral com diâmetro aproximado de 3 cm. Pele íntegra, sem vesículas ou ulceração. Paciente relata leve desconforto ao toque.',
      location: 'Região sacral (cóccix)',
      imageFileReference: 'obs-skin-2024-01-15-sacral.jpg',
    },
    recordedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), 
    analysisResult: {
      detectedRisk: 'medium',
      diagnosticFindings: [
        'Hiperemia localizada na região sacral — provável estágio inicial de lesão por pressão (Estágio 1)',
        'Pele íntegra — sem ulceração ativa no momento da observação',
        'Paciente com mobilidade reduzida — fator de risco para progressão',
      ],
      clinicalRecommendations: [
        'Iniciar protocolo de mudança de decúbito a cada 2 horas',
        'Aplicar creme protetor de barreira na região afetada',
        'Utilizar colchão caixa de ovo ou anti-escaras',
        'Registrar e fotografar diariamente para monitoramento da evolução',
        'Comunicar enfermeiro ou médico para avaliação presencial',
      ],
      requiresImmediateAttention: false,
    },
  },
  {
    id: 'obs-003',
    patientId: 'patient-002',
    category: 'comportamento',
    inputData: {
      notes:
        'Paciente apresentou episódio de agitação intensa às 14h, não reconheceu a cuidadora e tentou sair do quarto repetidamente. Acalmou após 25 minutos com orientação e música familiar.',
      agitationLevel: 8,
      hasConfusion: true,
      refusedFood: true,
    },
    recordedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), 
    analysisResult: {
      detectedRisk: 'high',
      diagnosticFindings: [
        'Episódio de agitação intensa (nível 8/10) com duração de 25 minutos',
        'Desorientação temporopessoal — não reconheceu cuidadora familiar',
        'Tentativa de evasão do ambiente — risco de queda e acidente',
        'Recusa alimentar associada — possível impacto na hidratação e nutrição',
        'Padrão compatível com Síndrome do Entardecer (Sundowning) — comum no Alzheimer',
      ],
      clinicalRecommendations: [
        'Documentar horário, duração e gatilhos do episódio para análise de padrão',
        'Avaliar necessidade de ajuste de medicação com o neurologista responsável',
        'Garantir hidratação e oferecer alimentos de fácil aceitação após acalmar',
        'Manter ambiente calmo, com iluminação adequada nas horas da tarde',
        'Implementar rotina estruturada e previsível para reduzir episódios futuros',
        'Comunicar família sobre o episódio e orientar sobre o Sundowning',
      ],
      requiresImmediateAttention: true,
    },
  },
];


export class HealthRepository {
  private readonly records: ObservationRecord[] = observationRecords;
  save(record: Omit<ObservationRecord, 'id'>): ObservationRecord {
    const newRecord: ObservationRecord = { id: randomUUID(), ...record };
    this.records.push(newRecord);
    return newRecord;
  }
  findByPatientId(patientId: string): ObservationRecord[] {
    return this.records
      .filter((r) => r.patientId === patientId)
      .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
  }
  findById(id: string): ObservationRecord | undefined {
    return this.records.find((r) => r.id === id);
  }
  findAll(): ObservationRecord[] {
    return [...this.records].sort(
      (a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
    );
  }
}

export const healthRepository = new HealthRepository();
