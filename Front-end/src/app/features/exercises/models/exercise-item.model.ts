export type ExerciseTone = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'cyan';

export interface ExerciseItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  sets: number;
  reps: string;
  description: string;
  videoUrl: string;
  steps: readonly string[];
  precautions: readonly string[];
  completedToday: boolean;
  tone: ExerciseTone;
}
