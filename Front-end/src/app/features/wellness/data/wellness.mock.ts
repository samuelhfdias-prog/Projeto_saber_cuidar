import type { WellnessQuestion } from '../models';

export const MOCK_WELLNESS_QUESTIONS: readonly WellnessQuestion[] = [
  {
    id: 'wellness-mood',
    question: 'Como esta seu humor hoje?',
    icon: ':)',
    tone: 'mood',
    options: [
      { id: 'mood-sad', emoji: '😔', label: 'Triste', score: 1 },
      { id: 'mood-neutral', emoji: '😐', label: 'Neutro', score: 2 },
      { id: 'mood-good', emoji: '🙂', label: 'Bem', score: 3 },
      { id: 'mood-great', emoji: '😊', label: 'Otimo', score: 4 },
      { id: 'mood-excellent', emoji: '😁', label: 'Excelente', score: 5 }
    ]
  },
  {
    id: 'wellness-sleep',
    question: 'Como foi o seu sono?',
    icon: 'ZZ',
    tone: 'sleep',
    options: [
      { id: 'sleep-terrible', emoji: '😴', label: 'Pessimo', score: 1 },
      { id: 'sleep-bad', emoji: '😣', label: 'Ruim', score: 2 },
      { id: 'sleep-ok', emoji: '😌', label: 'Ok', score: 3 },
      { id: 'sleep-good', emoji: '🛌', label: 'Bom', score: 4 },
      { id: 'sleep-great', emoji: '✨', label: 'Otimo', score: 5 }
    ]
  },
  {
    id: 'wellness-energy',
    question: 'Qual seu nivel de energia e cansaco?',
    icon: 'EN',
    tone: 'energy',
    options: [
      { id: 'energy-depleted', emoji: '🪫', label: 'Esgotado', score: 1 },
      { id: 'energy-tired', emoji: '😓', label: 'Cansado', score: 2 },
      { id: 'energy-regular', emoji: '😶', label: 'Regular', score: 3 },
      { id: 'energy-good', emoji: '⚡', label: 'Bem', score: 4 },
      { id: 'energy-great', emoji: '🔋', label: 'Otimo', score: 5 }
    ]
  }
];
