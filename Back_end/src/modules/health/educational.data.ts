export const MOCK_GUIDE_FEATURE = {
  id: 'guide-feature-elder-protection',
  link: '/violence',
  title: 'Proteção do Idoso',
  detail: '7 tipos de violência · Sinais de alerta · Canais de denúncia',
  source: 'Fonte: Ministério dos Direitos Humanos e da Cidadania, 2023',
  icon: 'SH',
  badge: 'Material Educativo'
};

const EDUCATIONAL_WARNING =
  'Aviso: Este material é exclusivamente educativo e não substitui a orientação de um profissional de saúde. Caso tenha dúvidas, consulte o médico ou enfermeiro responsável pelo acompanhamento.';

const BED_BATH_VIDEO = {
  id: 'video-bed-bath-1',
  youtubeId: 'qj8B-fI-z04',
  title: 'Banho de Leito Completo',
  description: 'Passo a passo demonstrativo de um banho no leito com foco na humanização e segurança.',
  externalUrl: 'https://www.youtube.com/watch?v=qj8B-fI-z04',
  source: 'Canal Enfermagem Prática',
  relatedGuideSlug: 'banho-leito'
};

const BED_BATH_GUIDE = {
  id: 'guide-bed-bath',
  slug: 'banho-leito',
  title: 'Banho no Leito',
  category: 'Higiene',
  shortDescription: 'Como realizar a higiene completa de forma segura e confortável',
  icon: 'BL',
  tone: 'blue',
  stepsCount: 12,
  cardMeta: '12 passos · inclui vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'O banho no leito é essencial para a higiene, conforto e avaliação da pele da pessoa acamada. Deve ser realizado de forma humanizada, respeitando o pudor e estimulando a participação do idoso, quando possível.',
      type: 'introduction'
    },
    {
      id: 'video',
      title: 'Demonstração em vídeo',
      description: BED_BATH_VIDEO.description,
      type: 'video',
      videoId: BED_BATH_VIDEO.id
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: [
        '2 bacias com água morna',
        '2 toalhas de banho limpas',
        '2 panos macios ou compressas (para ensaboar e enxaguar)',
        'Sabonete neutro (líquido de preferência)',
        'Luvas de procedimento',
        'Roupas de cama limpas',
        'Roupas limpas para o idoso',
        'Fralda limpa (se necessário)',
        'Creme hidratante adequado',
        'Saco para roupa suja'
      ]
    },
    {
      id: 'step-by-step',
      title: 'Passo a passo',
      type: 'steps',
      steps: [
        {
          id: 'step-1',
          order: 1,
          title: 'Preparação do ambiente',
          description:
            'Feche portas e janelas para evitar correntes de ar. Reúna todo o material perto da cama antes de começar.',
          duration: '2 min'
        },
        {
          id: 'step-2',
          order: 2,
          title: 'Lavagem das mãos',
          description: 'Lave bem as mãos e calce as luvas de procedimento.',
          duration: '1 min'
        },
        {
          id: 'step-3',
          order: 3,
          title: 'Proteção do pudor',
          description:
            'Explique o procedimento ao idoso. Cubra-o com um lençol limpo ou toalha de banho, descobrindo apenas a parte do corpo que está sendo lavada.',
          tip: 'A comunicação constante transmite segurança.',
          duration: '2 min'
        },
        {
          id: 'step-4',
          order: 4,
          title: 'Higiene do rosto',
          description:
            'Use água limpa sem sabão para o rosto (especialmente perto dos olhos, limpando do canto externo para o interno). Seque com cuidado.',
          duration: '3 min'
        },
        {
          id: 'step-5',
          order: 5,
          title: 'Braços e axilas',
          description:
            'Descubra um braço, coloque uma toalha embaixo dele. Lave o braço (do punho até a axila), enxágue e seque. Repita no outro braço.',
          tip: 'Aproveite para verificar sinais de irritação nas axilas.',
          duration: '4 min'
        },
        {
          id: 'step-6',
          order: 6,
          title: 'Tórax e abdômen',
          description:
            'Lave o tórax e o abdômen. Enxágue e seque bem, principalmente sob as mamas e em dobras de pele.',
          duration: '3 min'
        },
        {
          id: 'step-7',
          order: 7,
          title: 'Pernas',
          description:
            'Lave as pernas (do tornozelo até a coxa), enxágue e seque. Troque a água da bacia se necessário.',
          duration: '4 min'
        },
        {
          id: 'step-8',
          order: 8,
          title: 'Pés',
          description:
            'Lave os pés com atenção entre os dedos. A secagem rigorosa é fundamental para evitar fungos.',
          duration: '3 min'
        },
        {
          id: 'step-9',
          order: 9,
          title: 'Costas',
          description:
            'Vire o idoso de lado com cuidado. Lave as costas, enxágue e seque bem.',
          tip: 'Este é o momento ideal para aplicar creme hidratante e fazer uma leve massagem de conforto.',
          duration: '4 min'
        },
        {
          id: 'step-10',
          order: 10,
          title: 'Higiene íntima (Períneo)',
          description:
            'Troque a água, as luvas e o pano novamente. Lave a região íntima sempre da frente para trás, evitando contaminação. Seque com muita delicadeza.',
          duration: '4 min'
        },
        {
          id: 'step-11',
          order: 11,
          title: 'Vestimenta e troca de cama',
          description: 'Vista o idoso com roupas limpas e realize a troca das roupas de cama.',
          duration: '5 min'
        },
        {
          id: 'step-12',
          order: 12,
          title: 'Finalização',
          description:
            'Descarte a água, recolha a roupa suja, retire as luvas e lave as mãos. Posicione o idoso confortavelmente.',
          duration: '2 min'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'A temperatura da água deve ser testada (morna) no seu antebraço antes de iniciar.',
        'Mantenha as grades de segurança da cama elevadas do lado oposto ao que você está.',
        'Observe vermelhidões ou feridas na pele durante o banho e relate à equipe de saúde.',
        EDUCATIONAL_WARNING
      ]
    }
  ],
  videos: [BED_BATH_VIDEO]
};

const ORAL_HYGIENE_GUIDE = {
  id: 'guide-oral-hygiene',
  slug: 'higiene-oral',
  title: 'Higiene Oral',
  category: 'Higiene',
  shortDescription: 'Cuidados com a boca, dentes e próteses',
  icon: 'HO',
  tone: 'cyan',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

const RASH_PREVENTION_GUIDE = {
  id: 'guide-rash-prevention',
  slug: 'prevencao-assaduras',
  title: 'Prevenção de Assaduras',
  category: 'Higiene',
  shortDescription: 'Cuidados com a pele e prevenção de lesões',
  icon: 'PA',
  tone: 'neutral',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

const HYDRATION_GUIDE = {
  id: 'guide-hydration',
  slug: 'hidratacao',
  title: 'Hidratação e Ingesta Hídrica',
  category: 'Alimentação',
  shortDescription: 'Sinais de desidratação e como incentivar a ingestão',
  icon: 'HI',
  tone: 'cyan',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

const ASSISTED_FEEDING_VIDEO = {
  id: 'video-assisted-feeding-1',
  youtubeId: 'p2wK8fEaX-U',
  title: 'Orientações para Alimentação Segura',
  description: 'Postura correta e sinais de engasgo na oferta de dieta via oral.',
  externalUrl: 'https://www.youtube.com/watch?v=p2wK8fEaX-U',
  source: 'Fonoaudiologia Hospitalar',
  relatedGuideSlug: 'alimentacao-assistida'
};

const ASSISTED_FEEDING_GUIDE = {
  id: 'guide-assisted-feeding',
  slug: 'alimentacao-assistida',
  title: 'Alimentação Assistida',
  category: 'Alimentação',
  shortDescription: 'Orientações para uma dieta via oral segura e prevenção de engasgos',
  icon: 'AA',
  tone: 'orange',
  stepsCount: 6,
  cardMeta: '6 passos · inclui vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'A alimentação é um momento fundamental não apenas para a nutrição, mas também para o bem-estar do idoso. A assistência adequada previne engasgos e problemas respiratórios graves, como a pneumonia aspirativa.',
      type: 'introduction'
    },
    {
      id: 'video',
      title: 'Demonstração em vídeo',
      description: ASSISTED_FEEDING_VIDEO.description,
      type: 'video',
      videoId: ASSISTED_FEEDING_VIDEO.id
    },
    {
      id: 'materials',
      title: 'O que observar antes de começar',
      type: 'materials',
      items: [
        'Ambiente tranquilo e sem distrações (ex: TV muito alta).',
        'O idoso deve estar bem acordado (alerta).',
        'Acessórios como óculos ou prótese dentária bem adaptados devem estar em uso, se aplicável.',
        'Consistência do alimento deve seguir rigorosamente a prescrição da equipe (ex: pastoso, líquido engrossado).'
      ]
    },
    {
      id: 'step-by-step',
      title: 'Passo a passo da oferta',
      type: 'steps',
      steps: [
        {
          id: 'step-1',
          order: 1,
          title: 'Posicionamento correto',
          description:
            'A pessoa deve estar sentada a 90 graus (na cadeira ou na cama). A cabeça não deve estar inclinada para trás.',
          tip: 'Uma leve inclinação da cabeça para baixo (queixo no peito) na hora de engolir facilita e torna a deglutição mais segura.',
          duration: '2 min'
        },
        {
          id: 'step-2',
          order: 2,
          title: 'Higiene e preparação',
          description: 'Lave as mãos do idoso e as suas. Verifique a temperatura do alimento.',
          duration: '1 min'
        },
        {
          id: 'step-3',
          order: 3,
          title: 'Ritmo da oferta',
          description:
            'Ofereça porções pequenas (geralmente meia colher de sobremesa ou chá). Aguarde o idoso engolir completamente antes de oferecer a próxima colher.',
          duration: 'Variável'
        },
        {
          id: 'step-4',
          order: 4,
          title: 'Atenção aos sinais',
          description:
            'Fique atento a sinais como tosse durante ou após comer, pigarro constante, mudança na voz (voz "molhada") ou alimento parado na boca.',
          tip: 'Se observar engasgo ou tosse forte, PARE a alimentação e aguarde o idoso recuperar o fôlego.',
          duration: 'Constante'
        },
        {
          id: 'step-5',
          order: 5,
          title: 'Hidratação intercalada',
          description:
            'Ofereça líquidos apenas conforme a orientação da fonoaudiologia (pode ser necessário o uso de espessante para evitar engasgo com líquidos finos).',
          duration: 'Constante'
        },
        {
          id: 'step-6',
          order: 6,
          title: 'Após a refeição',
          description:
            'Realize a higiene oral. Mantenha o idoso sentado ou com a cabeceira elevada por cerca de 30 a 40 minutos para evitar refluxo e aspiração.',
          duration: '40 min'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Nunca ofereça alimentos se a pessoa estiver sonolenta, chorando, muito ofegante ou deitada.',
        'Siga sempre as recomendações de consistência da fonoaudiologia e nutrição.',
        EDUCATIONAL_WARNING
      ]
    }
  ],
  videos: [ASSISTED_FEEDING_VIDEO]
};

const DIAPER_CHANGE_GUIDE = {
  id: 'guide-diaper-change',
  slug: 'troca-fralda',
  title: 'Troca de Fralda',
  category: 'Higiene',
  shortDescription: 'Técnica e cuidados para evitar lesões na pele',
  icon: 'TF',
  tone: 'blue',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

const MEDICATION_GUIDE = {
  id: 'guide-medication',
  slug: 'administracao-medicamentos',
  title: 'Medicação via Oral',
  category: 'Medicação',
  shortDescription: 'Regras de segurança e organização de medicamentos',
  icon: 'AM',
  tone: 'orange',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

const TRANSFER_POSITIONING_VIDEO = {
  id: 'video-transfer-positioning-1',
  youtubeId: 'bL0_A1d_0-g',
  title: 'Técnicas de Transferência',
  description: 'Como transferir o idoso da cama para a cadeira de forma segura para ambos.',
  externalUrl: 'https://www.youtube.com/watch?v=bL0_A1d_0-g',
  source: 'Fisioterapia Geriátrica',
  relatedGuideSlug: 'transferencia-posicionamento'
};

const TRANSFER_POSITIONING_GUIDE = {
  id: 'guide-transfer-positioning',
  slug: 'transferencia-posicionamento',
  title: 'Transferência e Posições',
  category: 'Locomoção',
  shortDescription: 'Como movimentar o idoso de forma segura na cama e para a cadeira',
  icon: 'TP',
  tone: 'blue',
  stepsCount: 5,
  cardMeta: 'Dicas posturais · inclui vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'A mudança de decúbito (posição) e as transferências são essenciais para prevenir lesões por pressão (escaras), melhorar a respiração e promover conforto. É fundamental usar a mecânica corporal correta para proteger também a coluna de quem cuida.',
      type: 'introduction'
    },
    {
      id: 'video',
      title: 'Demonstração em vídeo',
      description: TRANSFER_POSITIONING_VIDEO.description,
      type: 'video',
      videoId: TRANSFER_POSITIONING_VIDEO.id
    },
    {
      id: 'caregiver-posture',
      title: 'Postura do Cuidador',
      type: 'list',
      items: [
        'Mantenha as costas eretas (retas).',
        'Dobre os joelhos para abaixar, não dobre a coluna.',
        'Mantenha os pés afastados para ter uma base de apoio sólida.',
        'Mantenha o peso do idoso próximo ao seu corpo.',
        'Evite torcer o tronco durante o movimento; gire com os pés.'
      ]
    },
    {
      id: 'step-by-step',
      title: 'Mudança de posição do idoso acamado',
      type: 'introduction',
      description: 'A frequência da mudança de posição deve respeitar as condições da pessoa e as orientações.'
    },
    {
      id: 'position-options',
      title: 'Opções de posicionamento',
      description: 'Use as posições apenas quando forem adequadas à condição da pessoa e à orientação recebida.',
      type: 'position-cards',
      positionCards: [
        {
          id: 'dorsal',
          title: 'Decúbito dorsal',
          description: 'Deitado de costas.',
          imageUrl: '/assets/guide/positions/decubito-dorsal.svg',
          imageAlt: 'Ilustração de pessoa deitada de costas',
          orientation: 'Siga a orientação da equipe de saúde.'
        },
        {
          id: 'lateral',
          title: 'Decúbito lateral',
          description: 'Deitado de lado.',
          imageUrl: '/assets/guide/positions/decubito-lateral.svg',
          imageAlt: 'Ilustração de pessoa deitada de lado',
          orientation: 'Siga a orientação da equipe de saúde.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Interrompa a transferência se houver dor.',
        EDUCATIONAL_WARNING
      ]
    }
  ],
  videos: [TRANSFER_POSITIONING_VIDEO]
};

const FALL_PREVENTION_VIDEO = {
  id: 'video-fall-prevention-1',
  youtubeId: 'V9aY3iGzXxw',
  title: 'Dicas de Prevenção de Quedas',
  description: 'Organização do ambiente para evitar acidentes comuns.',
  externalUrl: 'https://www.youtube.com/watch?v=V9aY3iGzXxw',
  source: 'Saúde na Prática',
  relatedGuideSlug: 'prevencao-quedas'
};

const FALL_PREVENTION_GUIDE = {
  id: 'guide-fall-prevention',
  slug: 'prevencao-quedas',
  title: 'Prevenção de Quedas',
  category: 'Segurança',
  shortDescription: 'Identificação de riscos e cuidados para evitar acidentes',
  icon: 'PQ',
  tone: 'orange',
  stepsCount: 7,
  cardMeta: '7 tópicos · inclui vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description: 'As quedas podem causar fraturas.',
      type: 'introduction'
    },
    {
      id: 'video',
      title: 'Demonstração em vídeo',
      description: FALL_PREVENTION_VIDEO.description,
      type: 'video',
      videoId: FALL_PREVENTION_VIDEO.id
    },
    {
      id: 'home-recommendations',
      title: 'Recomendações dentro de casa',
      type: 'list',
      items: [
        'Manter os ambientes iluminados.',
        'Retirar obstáculos.'
      ]
    }
  ],
  videos: [FALL_PREVENTION_VIDEO]
};

const INDEPENDENCE_AUTONOMY_GUIDE = {
  id: 'guide-independence-autonomy',
  slug: 'independencia-autonomia',
  title: 'Independência e Autonomia',
  category: 'Bem-estar',
  shortDescription: 'Incentivo à participação segura nas atividades diárias',
  icon: 'IA',
  tone: 'cyan',
  cardMeta: 'conteúdo em preparação',
  status: 'draft',
  sections: [
    {
      id: 'draft-message',
      title: 'Conteúdo em preparação',
      description: 'Este conteúdo está em preparação.',
      type: 'introduction'
    }
  ]
};

export const MOCK_GUIDE_GROUPS = [
  {
    id: 'hygiene-care',
    title: 'Cuidados de higiene',
    guides: [BED_BATH_GUIDE, DIAPER_CHANGE_GUIDE, ORAL_HYGIENE_GUIDE, RASH_PREVENTION_GUIDE]
  },
  {
    id: 'feeding-hydration',
    title: 'Alimentação e hidratação',
    guides: [ASSISTED_FEEDING_GUIDE, HYDRATION_GUIDE]
  },
  {
    id: 'medication',
    title: 'Medicação',
    guides: [MEDICATION_GUIDE]
  },
  {
    id: 'mobility',
    title: 'Locomoção',
    guides: [TRANSFER_POSITIONING_GUIDE, FALL_PREVENTION_GUIDE, INDEPENDENCE_AUTONOMY_GUIDE]
  }
];

export const MOCK_CARE_GUIDES = MOCK_GUIDE_GROUPS.flatMap((group) => group.guides);

export const MOCK_EXERCISES = [
  {
    id: 'ex-pernas-1',
    number: 1,
    title: 'Dobrar e Esticar os Joelhos',
    category: 'Pernas',
    group: 'Pernas',
    objective: 'Melhorar a circulação e manter a flexibilidade dos joelhos.',
    positioning: ['Idoso deitado de barriga para cima, pernas esticadas.'],
    execution: [
      'Segure suavemente a perna, apoiando uma mão no joelho e outra no calcanhar.',
      'Dobre o joelho levando-o em direção ao peito, sem forçar.',
      'Estique a perna lentamente e retorne à posição inicial.',
      'Faça com a outra perna.'
    ],
    suggestedRepetitions: '5 a 10 vezes em cada perna.',
    pause: '1 minuto de descanso.',
    warning: 'Pare imediatamente se o idoso relatar dor aguda.'
  },
  {
    id: 'ex-bracos-1',
    number: 2,
    title: 'Elevação dos Braços',
    category: 'Braços',
    group: 'Braços',
    objective: 'Manter a mobilidade dos ombros e ajudar na expansão pulmonar.',
    positioning: ['Idoso deitado de barriga para cima ou sentado, com os braços ao lado do corpo.'],
    execution: [
      'Segure suavemente o braço pelo punho e cotovelo.',
      'Levante o braço esticado para cima e para trás, em direção à cabeça.',
      'Desça o braço lentamente até a posição inicial.',
      'Alterne os braços.'
    ],
    suggestedRepetitions: '5 a 10 vezes em cada braço.',
    pause: 'Respirações lentas e profundas no intervalo.',
    warning: 'Pessoas com histórico de deslocamento de ombro devem evitar elevações máximas.'
  }
];

export const MOCK_WELLNESS_QUESTIONS = [
  { id: '1', question: 'Como o idoso se sentiu hoje?', type: 'humor', required: true },
  { id: '2', question: 'Houve episódios de agitação ou confusão mental?', type: 'boolean', required: true },
  { id: '3', question: 'Observações adicionais', type: 'text', required: false }
];

export const MOCK_HEALTH_TYPES = [
  { id: 'pele', name: 'Lesão na Pele / Ferida' },
  { id: 'excreção', name: 'Excreção (Urina/Fezes)' },
  { id: 'comportamento', name: 'Comportamento' },
  { id: 'vital', name: 'Sinais Vitais' }
];

const GUIDE_ROUTE_PREFIX = '/guide';

export const MOCK_GUIDE_ITEMS = MOCK_CARE_GUIDES.map(guide => ({
    id: guide.id,
    slug: guide.slug,
    route: `${GUIDE_ROUTE_PREFIX}/${guide.slug}`,
    title: guide.title,
    tag: guide.category,
    detail: guide.shortDescription,
    steps: guide.stepsCount,
    meta: guide.cardMeta ?? `${guide.stepsCount ?? 0} passos`,
    icon: guide.icon,
    tone: guide.tone,
    status: guide.status
}));

export const MOCK_GUIDE_TUTORIALS = MOCK_CARE_GUIDES
  .flatMap((guide) =>
    (guide.videos ?? []).map((video: any) => ({
      id: `tutorial-${video.id}`,
      title: guide.title,
      category: guide.category,
      detail: video.description,
      link: `${GUIDE_ROUTE_PREFIX}/${guide.slug}`,
      icon: guide.icon,
      videoId: video.id,
      youtubeId: video.youtubeId,
      videoUrl: video.externalUrl
    }))
  );
