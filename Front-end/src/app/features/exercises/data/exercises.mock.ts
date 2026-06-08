import type { ExerciseItem } from '../models';

export const MOCK_EXERCISES: readonly ExerciseItem[] = [
  {
    id: 'exercise-heel-raise',
    title: 'Elevar os calcanhares',
    category: 'Circulação',
    icon: 'LEG',
    sets: 3,
    reps: '10 repetições',
    description: 'Ajuda na circulação das pernas e no fortalecimento da panturrilha.',
    videoUrl: 'https://www.youtube.com/watch?v=9cKe2I-Ta14',
    steps: [
      'Sente-se com a coluna apoiada.',
      'Mantenha os pés apoiados no chão.',
      'Eleve apenas os calcanhares, ficando na ponta dos pés.',
      'Desça devagar até apoiar novamente.',
      'Repita o movimento com calma.'
    ],
    precautions: [
      'Não faça movimentos rápidos.',
      'Pare se sentir dor ou tontura.',
      'Mantenha o idoso sentado e seguro.'
    ],
    completedToday: false,
    tone: 'blue'
  },
  {
    id: 'exercise-seated-leg-extension',
    title: 'Extensão de pernas sentado',
    category: 'Força',
    icon: 'ST',
    sets: 3,
    reps: '10 repetições cada perna',
    description: 'Fortalece as pernas e ajuda na mobilidade.',
    videoUrl: 'https://www.youtube.com/watch?v=BmnTbnDZ8LE',
    steps: [
      'Sente-se com a coluna reta.',
      'Mantenha os pés no chão.',
      'Estenda uma perna para frente.',
      'Segure por alguns segundos.',
      'Volte devagar e repita com a outra perna.'
    ],
    precautions: [
      'Não force o joelho.',
      'Faça o movimento devagar.',
      'Pare se houver dor.'
    ],
    completedToday: false,
    tone: 'green'
  },
  {
    id: 'exercise-toe-raise',
    title: 'Ponta dos pés',
    category: 'Equilíbrio',
    icon: 'SH',
    sets: 3,
    reps: '10 repetições',
    description: 'Trabalha equilíbrio e ativação das pernas.',
    videoUrl: 'https://www.youtube.com/watch?v=hODsBVy5hIs',
    steps: [
      'Fique sentado ou em pé com apoio.',
      'Eleve os calcanhares lentamente.',
      'Fique na ponta dos pés por alguns segundos.',
      'Desça devagar.',
      'Repita com cuidado.'
    ],
    precautions: [
      'Se estiver em pé, use apoio.',
      'Não faça sem supervisão se houver risco de queda.',
      'Evite movimentos bruscos.'
    ],
    completedToday: false,
    tone: 'orange'
  },
  {
    id: 'exercise-shoulder-rotation',
    title: 'Rotação de ombros',
    category: 'Mobilidade',
    icon: 'OMB',
    sets: 3,
    reps: '10 círculos para frente e para trás',
    description: 'Ajuda na mobilidade dos ombros e reduz tensão.',
    videoUrl: 'https://www.youtube.com/watch?v=7mAwmvfL4VI',
    steps: [
      'Sente-se confortavelmente.',
      'Relaxe os braços ao lado do corpo.',
      'Gire os ombros para frente.',
      'Depois gire os ombros para trás.',
      'Mantenha a respiração tranquila.'
    ],
    precautions: [
      'Não force a amplitude.',
      'Pare se sentir dor no ombro.',
      'Faça movimentos lentos.'
    ],
    completedToday: false,
    tone: 'purple'
  },
  {
    id: 'exercise-seated-arm-flexion',
    title: 'Flexão dos braços sentado',
    category: 'Força',
    icon: 'ARM',
    sets: 3,
    reps: '10 repetições',
    description: 'Fortalece braços e auxilia em tarefas diárias.',
    videoUrl: 'https://www.youtube.com/watch?v=qreMDL_hHos',
    steps: [
      'Sente-se com boa postura.',
      'Mantenha os braços ao lado do corpo.',
      'Flexione os cotovelos lentamente.',
      'Volte à posição inicial.',
      'Repita sem pressa.'
    ],
    precautions: [
      'Não use peso sem orientação.',
      'Evite se houver dor no braço ou ombro.',
      'Mantenha o movimento controlado.'
    ],
    completedToday: false,
    tone: 'red'
  },
  {
    id: 'exercise-chair-hip-lift',
    title: 'Tirar o quadril da cadeira',
    category: 'Core',
    icon: 'CORE',
    sets: 3,
    reps: '10 repetições',
    description: 'Ajuda na força do tronco e na mobilidade funcional.',
    videoUrl: 'https://www.youtube.com/watch?v=0f__v22nRwg',
    steps: [
      'Sente-se em uma cadeira firme.',
      'Apoie bem os pés no chão.',
      'Incline levemente o corpo para frente.',
      'Faça força para tirar um pouco o quadril da cadeira.',
      'Volte devagar.'
    ],
    precautions: [
      'Use uma cadeira estável.',
      'Não faça se houver risco de queda.',
      'O cuidador deve acompanhar de perto.'
    ],
    completedToday: false,
    tone: 'cyan'
  },
  {
    id: 'exercise-ankle-circles',
    title: 'Círculos com tornozelos',
    category: 'Circulação',
    icon: 'TOR',
    sets: 3,
    reps: '10 círculos cada pé',
    description: 'Estimula circulação e mobilidade dos tornozelos.',
    videoUrl: 'https://www.youtube.com/watch?v=6PVDpWX4fnY',
    steps: [
      'Sente-se confortavelmente.',
      'Levante levemente um pé.',
      'Faça círculos com o tornozelo.',
      'Repita para o outro lado.',
      'Troque o pé e repita.'
    ],
    precautions: [
      'Não force o tornozelo.',
      'Faça o movimento devagar.',
      'Pare se sentir dor.'
    ],
    completedToday: false,
    tone: 'blue'
  },
  {
    id: 'exercise-arm-raise',
    title: 'Elevação dos braços',
    category: 'Mobilidade',
    icon: 'BRA',
    sets: 3,
    reps: '10 repetições',
    description: 'Melhora a mobilidade dos ombros e braços.',
    videoUrl: 'https://www.youtube.com/watch?v=I9sFOw8V4vU',
    steps: [
      'Sente-se com a coluna reta.',
      'Mantenha os braços relaxados.',
      'Eleve os braços lentamente até onde for confortável.',
      'Desça devagar.',
      'Repita o movimento.'
    ],
    precautions: [
      'Não ultrapasse o limite de conforto.',
      'Evite se houver dor intensa no ombro.',
      'Faça sem pressa.'
    ],
    completedToday: false,
    tone: 'purple'
  },
  {
    id: 'exercise-open-close-hands',
    title: 'Abrir e fechar as mãos',
    category: 'Mobilidade',
    icon: 'MAO',
    sets: 3,
    reps: '10 repetições',
    description: 'Estimula a circulação e mobilidade das mãos.',
    videoUrl: 'https://www.youtube.com/watch?v=0y427P9Z_3I',
    steps: [
      'Mantenha os braços apoiados.',
      'Abra bem as mãos.',
      'Feche os dedos suavemente.',
      'Repita o movimento.',
      'Mantenha a respiração tranquila.'
    ],
    precautions: [
      'Não force os dedos.',
      'Pare se houver dor.',
      'Faça movimentos leves.'
    ],
    completedToday: false,
    tone: 'green'
  },
  {
    id: 'exercise-seated-side-stretch',
    title: 'Alongamento lateral sentado',
    category: 'Alongamento',
    icon: 'AL',
    sets: 3,
    reps: '10 segundos cada lado',
    description: 'Ajuda a alongar o tronco e melhorar a mobilidade.',
    videoUrl: 'https://www.youtube.com/watch?v=g4HpK7vd1VI',
    steps: [
      'Sente-se com a coluna reta.',
      'Apoie bem os pés no chão.',
      'Incline o tronco levemente para um lado.',
      'Segure por alguns segundos.',
      'Volte ao centro e repita para o outro lado.'
    ],
    precautions: [
      'Não force a coluna.',
      'Evite movimentos rápidos.',
      'Pare se sentir dor ou tontura.'
    ],
    completedToday: false,
    tone: 'orange'
  }
];
