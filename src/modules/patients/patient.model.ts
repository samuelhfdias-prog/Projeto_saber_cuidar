// ─────────────────────────────────────────────────────────────────────────────
// Enumerações de domínio (usado como literais de string para compatibilidade JSON)
// ─────────────────────────────────────────────────────────────────────────────

/** Níveis de prioridade de uma Tarefa. */
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';

/** Status possíveis de uma Tarefa ao longo do dia. */
export type TaskStatus = 'done' | 'overdue' | 'upcoming' | 'now';

/** Nível de risco calculado do Paciente com base na conclusão de tarefas. */
export type RiskLevel = 'baixo' | 'moderado' | 'elevado';

/** Status de atividade do Paciente no sistema. */
export type PatientActivityStatus = 'active' | 'inactive' | 'monitoring';

// ─────────────────────────────────────────────────────────────────────────────
// Entidades de Domínio
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Entidade Paciente — representa um idoso sob cuidados no sistema CuidaBem.
 */
export interface Patient {
  /** Identificador único do paciente (UUID). */
  id: string;
  /** Nome completo do paciente. */
  name: string;
  /** Idade em anos completos. */
  age: number;
  /** Lista de condições de saúde ou diagnósticos registrados. */
  healthConditions: string[];
  /** URL da foto de perfil do paciente. */
  photoUrl: string;
  /** Status atual de atividade no sistema. */
  activityStatus: PatientActivityStatus;
  /** Data de ingresso no sistema (ISO 8601). */
  admissionDate: string;
}

/**
 * Entidade Tarefa — representa uma atividade de cuidado agendada para um paciente.
 */
export interface Task {
  /** Identificador único da tarefa (UUID). */
  id: string;
  /** Identificador do paciente ao qual a tarefa pertence. */
  patientId: string;
  /** Título principal da tarefa (ex: "Administrar Medicação"). */
  title: string;
  /** Subtítulo ou descrição complementar da tarefa. */
  subtitle: string;
  /**
   * Identificador string do ícone da tarefa.
   * O front-end Angular mapeia este valor para o componente de ícone correspondente.
   * Exemplo: "medication", "exercise", "food", "checkup".
   */
  iconIdentifier: string;
  /**
   * Cor de fundo do container do ícone no formato hexadecimal ou CSS.
   * Exemplo: "#FFF3E0", "#E8F5E9".
   */
  iconBackgroundColor: string;
  /**
   * Cor do ícone em si no formato hexadecimal ou CSS.
   * Exemplo: "#FF8F00", "#388E3C".
   */
  iconColor: string;
  /** Nível de prioridade da tarefa. */
  priority: TaskPriority;
  /** Horário previsto de execução no formato HH:MM (24h). */
  scheduledTime: string;
  /** Status atual de execução da tarefa. */
  status: TaskStatus;
  /**
   * ID de um guia/protocolo relacionado à tarefa (opcional).
   * Usado para navegar para telas de orientação específicas no front-end.
   */
  relatedGuideId?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Objetos de Transferência de Dados (Output / Response shapes)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Snapshot de risco calculado dinamicamente pelo back-end.
 */
export interface RiskSnapshot {
  /** Nível de risco atual ('baixo' | 'moderado' | 'elevado'). */
  level: RiskLevel;
  /** Taxa de conclusão das tarefas do dia (0-100). */
  completionRate: number;
  /** Total de tarefas agendadas no dia. */
  totalTasks: number;
  /** Total de tarefas concluídas no dia. */
  completedTasks: number;
}

/**
 * Payload completo do Dashboard de um paciente.
 * Retornado pelos endpoints GET e POST do dashboard.
 */
export interface PatientDashboard {
  /** Dados do paciente. */
  patient: Patient;
  /** Lista de tarefas agendadas para o dia atual. */
  dailyTasks: Task[];
  /** Snapshot de risco calculado no momento da requisição. */
  riskSnapshot: RiskSnapshot;
}
