import { v4 as uuidv4 } from 'uuid';
import { Patient, Task } from './patient.model';





const patients: Patient[] = [
  {
    id: 'patient-001',
    name: 'Maria Aparecida Santos',
    age: 78,
    healthConditions: ['Hipertensão Arterial', 'Diabetes Tipo 2', 'Osteoporose'],
    photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    activityStatus: 'active',
    admissionDate: '2024-03-15T00:00:00.000Z',
  },
  {
    id: 'patient-002',
    name: 'José Carlos Oliveira',
    age: 83,
    healthConditions: ['Doença de Alzheimer (Fase Leve)', 'Insuficiência Cardíaca Compensada'],
    photoUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    activityStatus: 'monitoring',
    admissionDate: '2024-05-20T00:00:00.000Z',
  },
];





const tasks: Task[] = [

  {
    id: 'task-001',
    patientId: 'patient-001',
    title: 'Administrar Medicação',
    subtitle: 'Metformina 500mg + Losartana 50mg',
    iconIdentifier: 'medication',
    iconBackgroundColor: '#FFF3E0',
    iconColor: '#E65100',
    priority: 'critical',
    scheduledTime: '08:00',
    status: 'done',
    relatedGuideId: 'guide-medication-diabetes',
  },
  {
    id: 'task-002',
    patientId: 'patient-001',
    title: 'Aferição de Pressão Arterial',
    subtitle: 'Registro matutino obrigatório',
    iconIdentifier: 'blood-pressure',
    iconBackgroundColor: '#FCE4EC',
    iconColor: '#C62828',
    priority: 'critical',
    scheduledTime: '08:30',
    status: 'done',
  },
  {
    id: 'task-003',
    patientId: 'patient-001',
    title: 'Café da Manhã',
    subtitle: 'Dieta hipoglicêmica — sem açúcar refinado',
    iconIdentifier: 'food',
    iconBackgroundColor: '#E8F5E9',
    iconColor: '#2E7D32',
    priority: 'high',
    scheduledTime: '09:00',
    status: 'done',
  },
  {
    id: 'task-004',
    patientId: 'patient-001',
    title: 'Caminhada Leve',
    subtitle: '20 minutos no jardim (ritmo tranquilo)',
    iconIdentifier: 'exercise',
    iconBackgroundColor: '#E3F2FD',
    iconColor: '#1565C0',
    priority: 'medium',
    scheduledTime: '10:00',
    status: 'upcoming',
    relatedGuideId: 'guide-physical-activity',
  },
  {
    id: 'task-005',
    patientId: 'patient-001',
    title: 'Medição de Glicemia',
    subtitle: 'Pós-prandial — 2h após o almoço',
    iconIdentifier: 'glucose',
    iconBackgroundColor: '#F3E5F5',
    iconColor: '#6A1B9A',
    priority: 'critical',
    scheduledTime: '14:00',
    status: 'upcoming',
  },
  {
    id: 'task-006',
    patientId: 'patient-001',
    title: 'Medicação da Tarde',
    subtitle: 'Carbonato de Cálcio 1000mg + Vitamina D',
    iconIdentifier: 'medication',
    iconBackgroundColor: '#FFF3E0',
    iconColor: '#E65100',
    priority: 'high',
    scheduledTime: '15:00',
    status: 'upcoming',
  },
  {
    id: 'task-007',
    patientId: 'patient-001',
    title: 'Hidratação',
    subtitle: 'Ingesta de 500ml de água (6° copo do dia)',
    iconIdentifier: 'water',
    iconBackgroundColor: '#E1F5FE',
    iconColor: '#0277BD',
    priority: 'medium',
    scheduledTime: '16:00',
    status: 'overdue',
  },
  {
    id: 'task-008',
    patientId: 'patient-001',
    title: 'Fisioterapia Domiciliar',
    subtitle: 'Exercícios de equilíbrio e fortalecimento',
    iconIdentifier: 'therapy',
    iconBackgroundColor: '#FFF8E1',
    iconColor: '#F57F17',
    priority: 'high',
    scheduledTime: '17:00',
    status: 'now',
    relatedGuideId: 'guide-physiotherapy',
  },

  {
    id: 'task-009',
    patientId: 'patient-002',
    title: 'Administrar Medicação (Alzheimer)',
    subtitle: 'Donepezila 10mg — com o café da manhã',
    iconIdentifier: 'medication',
    iconBackgroundColor: '#FFF3E0',
    iconColor: '#E65100',
    priority: 'critical',
    scheduledTime: '07:30',
    status: 'done',
  },
  {
    id: 'task-010',
    patientId: 'patient-002',
    title: 'Atividade Cognitiva',
    subtitle: 'Leitura de 20 minutos ou palavras cruzadas',
    iconIdentifier: 'brain',
    iconBackgroundColor: '#EDE7F6',
    iconColor: '#4527A0',
    priority: 'high',
    scheduledTime: '09:30',
    status: 'done',
    relatedGuideId: 'guide-cognitive-stimulation',
  },
  {
    id: 'task-011',
    patientId: 'patient-002',
    title: 'Monitoramento Cardíaco',
    subtitle: 'Verificar frequência cardíaca e saturação',
    iconIdentifier: 'heart-monitor',
    iconBackgroundColor: '#FCE4EC',
    iconColor: '#C62828',
    priority: 'critical',
    scheduledTime: '12:00',
    status: 'upcoming',
  },
  {
    id: 'task-012',
    patientId: 'patient-002',
    title: 'Almoço Supervisionado',
    subtitle: 'Dieta cardíaca — baixo teor de sódio',
    iconIdentifier: 'food',
    iconBackgroundColor: '#E8F5E9',
    iconColor: '#2E7D32',
    priority: 'high',
    scheduledTime: '12:30',
    status: 'upcoming',
  },
];





export class PatientRepository {
  private readonly patients: Patient[] = patients;
  private readonly tasks: Task[] = tasks;

  
  findPatientById(id: string): Patient | undefined {
    return this.patients.find((p) => p.id === id);
  }

  
  findTasksByPatientId(patientId: string): Task[] {
    return this.tasks.filter((t) => t.patientId === patientId);
  }

  
  findTaskByIds(patientId: string, taskId: string): Task | undefined {
    return this.tasks.find((t) => t.id === taskId && t.patientId === patientId);
  }

  
  updateTaskStatus(taskId: string, newStatus: Task['status']): Task | undefined {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) return undefined;
    task.status = newStatus;
    return task;
  }

  
  createPatient(patientData: Omit<Patient, 'id'>): Patient {
    const newPatient: Patient = { id: uuidv4(), ...patientData };
    this.patients.push(newPatient);
    return newPatient;
  }

  
  createTask(taskData: Omit<Task, 'id'>): Task {
    const newTask: Task = { id: uuidv4(), ...taskData };
    this.tasks.push(newTask);
    return newTask;
  }
}


export const patientRepository = new PatientRepository();
