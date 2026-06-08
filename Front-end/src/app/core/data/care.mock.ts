import type {
  ActivityItem,
  Alert,
  EmergencyContact,
  Medication,
  Patient,
  SupportContact,
  Task,
  Vital
} from '../models';

export const MOCK_PATIENT: Patient = {
  id: 'patient-demo',
  name: 'Paciente Exemplo',
  initials: 'PE',
  age: 78,
  condition: 'Condicoes de saude demonstrativas',
  plan: 'Risco Elevado',
  address: 'Endereco demonstrativo',
  caregiver: 'Cuidador Exemplo'
};

export const MOCK_TODAY_TASKS: readonly Task[] = [
  {
    id: 'task-morning-medication',
    elderlyId: 'patient-demo',
    title: 'Medicacao da manha',
    detail: 'Dose confirmada pela cuidadora',
    time: '08:00',
    status: 'done',
    category: 'medication',
    priority: 'priority',
    icon: 'medical-outline',
    guideId: 'guide-medication',
    guideRoute: '/guia/administracao-de-medicacao',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString(),
    completedByUserId: 'user-demo',
    completedAt: new Date().toISOString()
  },
  {
    id: 'task-hydration',
    elderlyId: 'patient-demo',
    title: 'Hidratacao',
    detail: 'Previsto para 10:00',
    time: '10:00',
    status: 'late',
    category: 'hydration',
    priority: 'attention',
    icon: 'water-outline',
    guideId: 'guide-hydration-control',
    guideRoute: '/guia/controle-de-hidratacao',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-bed-bath',
    elderlyId: 'patient-demo',
    title: 'Banho no leito',
    detail: 'Previsto para 10:30',
    time: '10:30',
    status: 'late',
    category: 'hygiene',
    priority: 'attention',
    icon: 'bed-outline',
    guideId: 'guide-bed-bath',
    guideRoute: '/guia/banho-de-leito',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-light-exercises',
    elderlyId: 'patient-demo',
    title: 'Exercicios leves',
    detail: 'Alongamento supervisionado',
    time: '15:00',
    status: 'next',
    category: 'exercise',
    priority: 'normal',
    icon: 'fitness-outline',
    guideRoute: '/tabs/health',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-wellbeing',
    elderlyId: 'patient-demo',
    title: 'Bem-estar',
    detail: 'Registro de humor da tarde',
    time: '17:30',
    status: 'next',
    category: 'wellness',
    priority: 'normal',
    icon: 'heart-outline',
    guideRoute: '/tabs/profile',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  }
];



export const MOCK_SCHEDULE: readonly Task[] = [
  ...MOCK_TODAY_TASKS,
  {
    id: 'task-blood-test',
    elderlyId: 'patient-demo',
    title: 'Exame de sangue',
    detail: 'Laboratorio central',
    time: 'Amanha, 09:00',
    status: 'next',
    category: 'exam',
    priority: 'normal',
    icon: 'document-text-outline',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-physiotherapy',
    elderlyId: 'patient-demo',
    title: 'Fisioterapia',
    detail: 'Sessao domiciliar',
    time: 'Sex, 10:00',
    status: 'next',
    category: 'therapy',
    priority: 'normal',
    icon: 'fitness-outline',
    createdByUserId: 'user-demo',
    createdAt: new Date().toISOString()
  }
];


export const MOCK_MEDICATIONS: readonly Medication[] = [
  {
    id: 'med-losartana',
    name: 'Losartana',
    dose: '50mg',
    schedule: '08:00 e 20:00',
    status: 'Tomado',
    color: 'teal'
  },
  {
    id: 'med-vitamina-d',
    name: 'Vitamina D',
    dose: '1000 UI',
    schedule: '12:00',
    status: 'Pendente',
    color: 'blue'
  },
  {
    id: 'med-metformina',
    name: 'Metformina',
    dose: '850mg',
    schedule: 'Apos o jantar',
    status: 'Pendente',
    color: 'amber'
  },
  {
    id: 'med-atenolol',
    name: 'Atenolol',
    dose: '25mg',
    schedule: 'Uso continuo',
    status: 'Atrasado',
    color: 'red'
  }
];

export const MOCK_VITALS: readonly Vital[] = [
  {
    id: 'vital-blood-pressure',
    label: 'Pressao',
    value: '12/8',
    helper: 'Dentro do esperado',
    icon: 'pulse-outline'
  },
  {
    id: 'vital-glucose',
    label: 'Glicemia',
    value: '96',
    helper: 'mg/dL em jejum',
    icon: 'water-outline'
  },
  {
    id: 'vital-sleep',
    label: 'Sono',
    value: '7h20',
    helper: 'Noite tranquila',
    icon: 'moon-outline'
  },
  {
    id: 'vital-mood',
    label: 'Humor',
    value: 'Bom',
    helper: 'Registro matinal',
    icon: 'heart-outline'
  }
];

export const MOCK_ALERTS: readonly Alert[] = [
  {
    id: 'alert-routine',
    title: 'Rotina em dia',
    detail: '3 de 4 cuidados programados foram concluidos hoje.',
    tone: 'calm'
  },
  {
    id: 'alert-medication',
    title: 'Medicamento pendente',
    detail: 'Vitamina D ainda precisa ser confirmada.',
    tone: 'warning'
  }
];

export const MOCK_ACTIVITIES: readonly ActivityItem[] = [
  {
    id: 'activity-affective-memory',
    title: 'Memoria afetiva',
    detail: 'Rever fotos antigas e conversar por 10 minutos.',
    icon: 'chatbubble-ellipses-outline',
    time: '10 min'
  },
  {
    id: 'activity-seated-stretching',
    title: 'Alongamento sentado',
    detail: 'Movimentos leves para pescoco, ombros e pernas.',
    icon: 'fitness-outline',
    time: '12 min'
  },
  {
    id: 'activity-guided-hydration',
    title: 'Hidratacao guiada',
    detail: 'Registrar dois copos de agua no periodo da tarde.',
    icon: 'water-outline',
    time: 'Hoje'
  }
];

export const MOCK_EMERGENCY_CONTACTS: readonly EmergencyContact[] = [
  {
    id: 'emergency-samu',
    number: '192',
    name: 'SAMU',
    detail: 'Urgencias Medicas',
    tone: 'samu'
  },
  {
    id: 'emergency-firefighters',
    number: '193',
    name: 'Bombeiros',
    detail: 'Resgate e Emergencias',
    tone: 'fire'
  },
  {
    id: 'emergency-human-rights',
    number: '100',
    name: 'Disque 100',
    detail: 'Denuncia Silenciosa - Direitos Humanos',
    tone: 'rights'
  },
  {
    id: 'emergency-cvv',
    number: '188',
    name: 'CVV',
    detail: 'Apoio Emocional 24h',
    tone: 'cvv'
  }
];

export const MOCK_SUPPORT_CONTACTS: readonly SupportContact[] = [
  {
    id: 'support-health-professional-demo',
    name: 'Profissional de Saude Exemplo',
    role: 'Atendimento clinico',
    phone: '(00) 00000-0000'
  },
  {
    id: 'support-family-demo',
    name: 'Familiar Responsavel Exemplo',
    role: 'Contato familiar',
    phone: '(00) 00000-0000'
  },
  {
    id: 'support-service-demo',
    name: 'Servico de Apoio Exemplo',
    role: 'Atendimento 24h',
    phone: '(00) 00000-0000'
  }
];
