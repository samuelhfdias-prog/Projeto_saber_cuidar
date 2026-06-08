export type WellnessQuestionTone = 'mood' | 'sleep' | 'energy';

export interface WellnessOption {
  id: string;
  emoji: string;
  label: string;
  score: number;
}

export interface WellnessQuestion {
  id: string;
  question: string;
  icon: string;
  tone: WellnessQuestionTone;
  options: readonly WellnessOption[];
}

export interface WellnessCheckInDraft {
  answers: Record<string, string>;
}
