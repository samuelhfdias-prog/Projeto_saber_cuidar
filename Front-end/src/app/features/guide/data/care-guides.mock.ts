import type { GuideCategoryGroup, GuideFeatureItem, GuideItem, GuideTutorialItem, PracticalGuide, TutorialVideo } from '../models';

const GUIDE_ROUTE_PREFIX = '/guia-pratico';
const EDUCATIONAL_WARNING = 'Este guia é educativo e não substitui orientação de profissionais de saúde.';

const BED_BATH_VIDEO: TutorialVideo = {
  id: 'video-banho-leito',
  youtubeId: 'Y0woaElMsXA',
  title: 'Banho de leito',
  description: 'Vídeo auxiliar para revisar os cuidados durante o banho no leito.',
  externalUrl: 'https://www.youtube.com/watch?v=Y0woaElMsXA',
  relatedGuideSlug: 'banho-de-leito'
};

const ORAL_HYGIENE_VIDEO: TutorialVideo = {
  id: 'video-higiene-bucal-acamada',
  youtubeId: 'Ub1W0_kV57o',
  title: 'Como manter a saúde da boca na pessoa acamada',
  description: 'Veja uma demonstração de como auxiliar na higiene bucal de uma pessoa acamada.',
  externalUrl: 'https://www.youtube.com/watch?v=Ub1W0_kV57o',
  relatedGuideSlug: 'higiene-bucal'
};

const DIAPER_CHANGE_VIDEO: TutorialVideo = {
  id: 'video-troca-fralda-idoso',
  youtubeId: 'PX13v8miNRI',
  title: 'Fica a Dica - Melhor forma de trocar a fralda do idoso',
  description: 'Veja uma demonstração dos cuidados necessários durante a troca de fralda da pessoa idosa.',
  externalUrl: 'https://www.youtube.com/watch?v=PX13v8miNRI',
  source: 'Farmácias Pague Menos',
  relatedGuideSlug: 'troca-de-fralda'
};

const RASH_PREVENTION_VIDEO: TutorialVideo = {
  id: 'video-prevencao-assaduras',
  youtubeId: 'o16JToC0-_8',
  title: 'Prevenção de assaduras',
  description: 'Vídeo tutorial com orientações para reduzir umidade, atrito e irritações na pele.',
  externalUrl: 'https://www.youtube.com/watch?v=o16JToC0-_8',
  relatedGuideSlug: 'prevencao-assaduras'
};

const FALL_PREVENTION_VIDEO: TutorialVideo = {
  id: 'video-prevencao-quedas',
  youtubeId: 'USlT7kzS1FM',
  title: 'Prevenção de quedas',
  description: 'Demonstração em vídeo com cuidados para deixar a rotina e o ambiente mais seguros.',
  externalUrl: 'https://www.youtube.com/watch?v=USlT7kzS1FM',
  relatedGuideSlug: 'prevencao-quedas'
};

const BED_BATH_GUIDE: PracticalGuide = {
  id: 'guide-bed-bath',
  slug: 'banho-de-leito',
  title: 'Banho de Leito',
  category: 'Higiene',
  shortDescription: 'Higiene completa com segurança e conforto',
  icon: 'BED',
  tone: 'blue',
  stepsCount: 7,
  cardMeta: '7 passos · inclui dicas e vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'O que é?',
      description:
        'O banho no leito é realizado em pessoas que não conseguem se locomover até o chuveiro, sendo feito com segurança na própria cama. Esse cuidado ajuda na higiene, conforto, prevenção de assaduras, feridas e infecções.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: [
        'Bacia.',
        'Água morna.',
        'Sabonete líquido neutro.',
        'Esponjas, ao menos duas.',
        'Toalhas.',
        'Escova de dentes.',
        'Lençóis limpos.',
        'Forro plástico.',
        'Roupas limpas.',
        'Luvas de borracha.',
        'Creme hidratante.',
        'Comadre ou papagaio, se necessário.'
      ]
    },
    {
      id: 'before-start',
      title: 'Antes de começar',
      type: 'list',
      items: [
        'Separe todos os materiais antes de iniciar.',
        'Explique o procedimento para a pessoa.',
        'Mantenha portas e janelas fechadas para evitar frio.',
        'Preserve a privacidade da pessoa cuidada.',
        'Proteja o colchão com plástico ou forro impermeável.',
        'Higienize as mãos e use luvas.'
      ]
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      description: 'Abra cada etapa para ler com calma durante o cuidado.',
      type: 'steps',
      steps: [
        {
          id: 'prepare-room',
          order: 1,
          title: 'Prepare o ambiente',
          description:
            'Feche janelas e portas para evitar correntes de ar. Reúna toalhas, sabonete líquido neutro, esponjas e roupa limpa antes de começar.',
          tip: 'Teste a água no pulso antes de iniciar.',
          duration: '5 min'
        },
        {
          id: 'position-patient',
          order: 2,
          title: 'Posicione a pessoa',
          description:
            'Eleve a cama a uma altura confortável para você, evitando curvar a coluna. Explique cada passo antes de realizá-lo e mantenha privacidade com lençol sobre as partes não lavadas.',
          tip: 'Converse durante o procedimento para reduzir ansiedade.'
        },
        {
          id: 'wash-face',
          order: 3,
          title: 'Lave rosto e pescoço',
          description:
            'Com esponja úmida, limpe os olhos do canto interno para o externo. Use movimentos suaves. Aplique sabonete no rosto, pescoço e orelhas com outra esponja e enxágue bem.',
          duration: '3 min'
        },
        {
          id: 'clean-arms-torso',
          order: 4,
          title: 'Tronco e membros superiores',
          description:
            'Lave braços e tronco com movimentos cuidadosos. Preste atenção às dobras, como axilas, região sob as mamas e dobras do cotovelo. Seque cada área lavada.',
          tip: 'Observe hematomas, vermelhidão, feridas ou outras alterações na pele.',
          duration: '5 min'
        },
        {
          id: 'intimate-care',
          order: 5,
          title: 'Região íntima',
          description:
            'Use material exclusivo para esta região. Faça a higiene com delicadeza, sem esfregar, e troque a água se necessário. Seque bem, especialmente as dobras.',
          duration: '3 min'
        },
        {
          id: 'clean-legs-feet',
          order: 6,
          title: 'Pernas, pés e costas',
          description:
            'Vire a pessoa cuidadosamente para o lado, usando travesseiro de apoio se necessário. Lave e observe a região das costas, nádegas, pernas e pés, com atenção entre os dedos.',
          tip: 'Verifique regiões de apoio, como sacro, calcanhares e cotovelos.',
          duration: '5 min'
        },
        {
          id: 'finish-care',
          order: 7,
          title: 'Finalização e conforto',
          description:
            'Aplique hidratante quando indicado, vista roupa limpa, organize a cama e posicione a pessoa confortavelmente com apoios adequados.',
          duration: '5 min'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Cuidados importantes',
      description: 'Observe estes pontos durante todo o procedimento.',
      type: 'warning',
      items: [
        'O cuidador deve proteger as mãos com luvas quando indicado.',
        'A pessoa deve permanecer coberta sempre que possível.',
        'A privacidade deve ser respeitada durante todo o procedimento.',
        'A pele deve ser bem seca, principalmente em dobras.',
        'Observe vermelhidão, feridas, assaduras, dor ou lesões por pressão.',
        'Em caso de feridas, dor intensa, febre ou piora do estado geral, procure orientação profissional.',
        EDUCATIONAL_WARNING
      ]
    },
    {
      id: 'video',
      title: 'Vídeo auxiliar',
      description: BED_BATH_VIDEO.description,
      type: 'video',
      videoId: BED_BATH_VIDEO.id
    }
  ],
  videos: [BED_BATH_VIDEO]
};

const DIAPER_CHANGE_GUIDE: PracticalGuide = {
  id: 'guide-diaper-change',
  slug: 'troca-de-fralda',
  title: 'Troca de Fralda',
  category: 'Higiene',
  shortDescription: 'Higiene segura e preservação da dignidade',
  icon: 'ST',
  tone: 'green',
  stepsCount: 6,
  cardMeta: '6 passos · inclui dicas e vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'A troca de fralda deve ser realizada com atenção à higiene, ao conforto, à segurança e à preservação da dignidade da pessoa cuidada.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: [
        'Fralda limpa.',
        'Luvas descartáveis, quando indicadas.',
        'Água e sabonete suave.',
        'Toalha ou pano macio.',
        'Saco para descarte.',
        'Roupa limpa, quando necessário.',
        'Produto de proteção da pele, quando recomendado.'
      ]
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      description: 'Abra cada etapa para ler com calma durante o cuidado.',
      type: 'steps',
      steps: [
        {
          id: 'prepare-environment',
          order: 1,
          title: 'Preparar o ambiente',
          description: 'Separe todos os materiais antes de iniciar e mantenha o ambiente reservado e seguro.'
        },
        {
          id: 'hand-hygiene',
          order: 2,
          title: 'Higienizar as mãos',
          description: 'Higienize as mãos antes do procedimento e utilize equipamentos de proteção quando necessários.'
        },
        {
          id: 'remove-used-diaper',
          order: 3,
          title: 'Retirar a fralda usada',
          description: 'Abra e retire a fralda com cuidado, evitando movimentos bruscos e preservando a privacidade.'
        },
        {
          id: 'clean-region',
          order: 4,
          title: 'Realizar a higiene',
          description: 'Limpe delicadamente a região íntima, removendo todos os resíduos.'
        },
        {
          id: 'dry-observe-skin',
          order: 5,
          title: 'Secar e observar a pele',
          description: 'Seque bem a região, principalmente as dobras, e observe se existem feridas ou áreas avermelhadas.'
        },
        {
          id: 'place-clean-diaper',
          order: 6,
          title: 'Colocar a fralda limpa',
          description: 'Posicione a fralda corretamente. Ela deve ficar firme, mas sem apertar.'
        }
      ]
    },
    {
      id: 'important-care',
      title: 'Cuidados importantes',
      type: 'list',
      items: [
        'Nunca deixar a pessoa sozinha em uma superfície elevada.',
        'Evitar movimentos bruscos.',
        'Explicar o que será feito.',
        'Preservar a privacidade.',
        'Trocar a fralda quando estiver suja ou muito úmida.',
        'Observar regularmente a pele.'
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [EDUCATIONAL_WARNING]
    },
    {
      id: 'video',
      title: 'Vídeo auxiliar',
      description: DIAPER_CHANGE_VIDEO.description,
      type: 'video',
      videoId: DIAPER_CHANGE_VIDEO.id
    }
  ],
  videos: [DIAPER_CHANGE_VIDEO]
};

const ORAL_HYGIENE_GUIDE: PracticalGuide = {
  id: 'guide-oral-hygiene',
  slug: 'higiene-bucal',
  title: 'Higiene Bucal',
  category: 'Higiene',
  shortDescription: 'Limpeza da boca, dentes, gengivas, língua e próteses',
  icon: 'ORAL',
  tone: 'blue',
  stepsCount: 6,
  cardMeta: '6 passos · inclui orientações e vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'A higiene bucal deve ser realizada mesmo quando a pessoa não possui dentes. Sempre que possível, faça a limpeza após as refeições e após o uso de medicamentos que possam deixar resíduos na boca.\n\nQuando a pessoa não consegue realizar a higiene sozinha, o cuidador deve auxiliá-la com segurança, respeito e cuidado.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: [
        'Escova de dentes com cerdas macias.',
        'Pequena quantidade de pasta dental.',
        'Fio dental, quando possível.',
        'Copo com água.',
        'Toalha.',
        'Bacia, caso a pessoa esteja na cama.',
        'Gaze ou pano limpo e macio.',
        'Recipiente para prótese dentária.'
      ]
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      description: 'Abra cada etapa para ler com calma durante o cuidado.',
      type: 'steps',
      steps: [
        {
          id: 'position-person',
          order: 1,
          title: 'Posicionar a pessoa',
          description:
            'Coloque a pessoa sentada diante da pia. Caso esteja acamada, mantenha a cabeça e o tronco elevados e utilize uma bacia.'
        },
        {
          id: 'prepare-brush',
          order: 2,
          title: 'Preparar a escova',
          description:
            'Use uma escova de cerdas macias e uma pequena quantidade de pasta dental, evitando excesso de espuma.'
        },
        {
          id: 'brush-teeth',
          order: 3,
          title: 'Escovar os dentes',
          description:
            'Escove todas as superfícies dos dentes com movimentos leves e cuidadosos. Sempre que possível, utilize também o fio dental.'
        },
        {
          id: 'clean-mouth',
          order: 4,
          title: 'Limpar gengivas, bochechas e língua',
          description:
            'Utilize uma escova macia, gaze ou pano limpo umedecido em água.\n\nA limpeza da língua deve ser feita de dentro para fora, com cuidado para não introduzir a escova profundamente.'
        },
        {
          id: 'rinse-mouth',
          order: 5,
          title: 'Enxaguar a boca',
          description:
            'Auxilie a pessoa a enxaguar a boca e eliminar os resíduos. Tenha atenção redobrada quando houver dificuldade para engolir.'
        },
        {
          id: 'finish-care',
          order: 6,
          title: 'Finalizar o cuidado',
          description:
            'Limpe e guarde os materiais utilizados. Observe se existem feridas, sangramentos, dor, inchaço ou outras alterações.'
        }
      ]
    },
    {
      id: 'dental-prosthesis',
      title: 'Próteses dentárias',
      type: 'steps',
      steps: [
        {
          id: 'remove-brush-prosthesis',
          order: 1,
          title: 'Retirar e escovar a prótese',
          description:
            'Retire cuidadosamente a prótese móvel e faça a limpeza fora da boca com uma escova separada para essa finalidade.'
        },
        {
          id: 'clean-mouth-with-prosthesis',
          order: 2,
          title: 'Limpar a boca',
          description:
            'Limpe as gengivas, bochechas e língua utilizando escova macia, gaze ou pano limpo umedecido.'
        },
        {
          id: 'rinse-store-prosthesis',
          order: 3,
          title: 'Enxaguar e guardar',
          description:
            'Enxágue bem a prótese antes de recolocá-la. Quando necessário, guarde-a em recipiente limpo e seguro.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Não utilize água sanitária, álcool ou produtos abrasivos sem orientação profissional.',
        EDUCATIONAL_WARNING
      ]
    },
    {
      id: 'video',
      title: 'Vídeo auxiliar',
      description: ORAL_HYGIENE_VIDEO.description,
      type: 'video',
      videoId: ORAL_HYGIENE_VIDEO.id
    }
  ],
  videos: [ORAL_HYGIENE_VIDEO]
};

const RASH_PREVENTION_GUIDE: PracticalGuide = {
  id: 'guide-rash-prevention',
  slug: 'prevencao-assaduras',
  title: 'Prevenção de Assaduras',
  category: 'Cuidados com a pele',
  shortDescription: 'Cuidados para diminuir umidade, atrito e irritações na pele',
  icon: 'PELE',
  tone: 'orange',
  stepsCount: 4,
  cardMeta: '4 cuidados · inclui vídeo',
  hasTips: true,
  hasVideo: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'As assaduras são lesões que podem aparecer nas dobras do corpo e na região das nádegas. Elas podem ser provocadas pela umidade, pelo calor, pelo atrito ou pelo contato prolongado com urina e fezes.\n\nA pele pode ficar avermelhada, sensível ou apresentar pequenas lesões.',
      type: 'introduction'
    },
    {
      id: 'care-steps',
      title: 'Cuidados principais',
      type: 'steps',
      steps: [
        {
          id: 'clean-region',
          order: 1,
          title: 'Higienizar a região',
          description:
            'Realize a higiene íntima sempre que a pessoa evacuar ou urinar. Faça a limpeza delicadamente e sem esfregar.'
        },
        {
          id: 'dry-carefully',
          order: 2,
          title: 'Secar cuidadosamente',
          description: 'Seque bem a região após a higiene, principalmente as dobras da pele.'
        },
        {
          id: 'reduce-moisture-friction',
          order: 3,
          title: 'Diminuir umidade e atrito',
          description:
            'Mantenha a pele limpa, seca e arejada. Utilize roupas e fraldas adequadas, sem apertar excessivamente.'
        },
        {
          id: 'observe-skin',
          order: 4,
          title: 'Observar a pele',
          description:
            'Verifique diariamente se existem áreas avermelhadas, doloridas, feridas, bolhas ou outras alterações.'
        }
      ]
    },
    {
      id: 'video',
      title: 'Vídeo tutorial',
      description: RASH_PREVENTION_VIDEO.description,
      type: 'video',
      videoId: RASH_PREVENTION_VIDEO.id
    },
    {
      id: 'warning',
      title: 'Sinais de alerta',
      type: 'warning',
      items: [
        'Procure orientação profissional caso a região apresente feridas, secreção, sangramento, mau cheiro, dor intensa, febre ou não apresente melhora.',
        EDUCATIONAL_WARNING
      ]
    }
  ],
  videos: [RASH_PREVENTION_VIDEO]
};

const ASSISTED_FEEDING_GUIDE: PracticalGuide = {
  id: 'guide-assisted-feeding',
  slug: 'alimentacao-assistida',
  title: 'Alimentação Assistida',
  category: 'Nutrição',
  shortDescription: 'Nutrição segura com respeito e tempo',
  icon: 'UT',
  tone: 'orange',
  stepsCount: 4,
  cardMeta: '4 passos · inclui dicas',
  hasTips: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'O que é?',
      description:
        'A alimentação assistida requer paciência, posição correta e atenção aos sinais de dificuldade. Uma técnica adequada ajuda a reduzir riscos durante as refeições e favorece a nutrição.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: ['Colher e copo adequados.', 'Guardanapo ou toalha de proteção.', 'Refeição na consistência orientada.']
    },
    {
      id: 'before-start',
      title: 'Antes de começar',
      type: 'list',
      items: [
        'Confirme a consistência da dieta com o profissional responsável.',
        'Posicione a pessoa sentada ou com cabeceira elevada.',
        'Nunca ofereça alimentos com a pessoa totalmente deitada.',
        'Teste a temperatura antes de oferecer.'
      ]
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      type: 'steps',
      steps: [
        {
          id: 'correct-position',
          order: 1,
          title: 'Posição correta',
          description:
            'Ofereça alimentos com a pessoa sentada ou com a cabeceira elevada, conforme orientação recebida. Evite alimentar a pessoa deitada.',
          tip: 'Aguarde um período após a refeição antes de deitar novamente, se houver orientação.'
        },
        {
          id: 'adequate-consistency',
          order: 2,
          title: 'Consistência adequada',
          description:
            'Siga as orientações do nutricionista ou da equipe de saúde. Dieta normal, pastosa, cremosa ou líquida espessada exigem cuidados diferentes.',
          tip: 'Teste a temperatura antes de oferecer.'
        },
        {
          id: 'careful-offering',
          order: 3,
          title: 'Oferta cuidadosa',
          description:
            'Ofereça pequenas porções. Aguarde a deglutição completa antes da próxima colherada. Observe tosse, engasgos ou mudança na voz.'
        },
        {
          id: 'hydration',
          order: 4,
          title: 'Hidratação entre as refeições',
          description:
            'Ofereça líquidos conforme a orientação da equipe de saúde e a tolerância da pessoa. Nunca force a ingestão.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Cuidados importantes',
      type: 'warning',
      items: [
        'Nunca force a ingestão.',
        'Interrompa a oferta se houver engasgo, tosse persistente, falta de ar ou mal-estar.',
        'Procure orientação profissional diante de dificuldade para engolir.',
        EDUCATIONAL_WARNING
      ]
    }
  ]
};

const MEDICATION_GUIDE: PracticalGuide = {
  id: 'guide-medication',
  slug: 'administracao-de-medicacao',
  title: 'Administração de Medicação',
  category: 'Medicação',
  shortDescription: '5 certos para evitar erros',
  icon: 'RX',
  tone: 'purple',
  stepsCount: 4,
  cardMeta: '4 passos · inclui armazenamento',
  hasTips: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'O que é?',
      description:
        'A administração segura de medicamentos é baseada nos 5 certos: pessoa certa, medicamento certo, dose certa, via certa e horário certo. Essa conferência ajuda a reduzir erros.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais necessários',
      type: 'materials',
      items: ['Medicamento prescrito.', 'Copo com água, quando indicado.', 'Receita, prescrição ou orientação para conferência.']
    },
    {
      id: 'before-start',
      title: 'Antes de começar',
      type: 'list',
      items: [
        'Higienize as mãos antes de preparar.',
        'Confira a receita ou prescrição.',
        'Verifique a validade do medicamento.',
        'Nunca administre medicação no escuro ou às pressas.'
      ]
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      type: 'steps',
      steps: [
        {
          id: 'verify-5-rights',
          order: 1,
          title: 'Verifique os 5 certos',
          description:
            'Antes de qualquer medicação, confirme: pessoa certa, medicamento certo, dose certa, via certa e horário certo.',
          tip: 'Nunca administre medicação na escuridão ou às pressas.'
        },
        {
          id: 'prepare-medication',
          order: 2,
          title: 'Prepare o medicamento',
          description:
            'Higienize as mãos. Confira validade, aparência e nome exato. Só parta, triture ou dilua medicamentos quando houver orientação profissional.'
        },
        {
          id: 'administer-with-water',
          order: 3,
          title: 'Administre conforme orientação',
          description:
            'Ofereça o medicamento conforme a via e o modo orientados. Verifique se a pessoa engoliu quando o medicamento for por via oral.'
        },
        {
          id: 'observe',
          order: 4,
          title: 'Observe após o uso',
          description:
            'Observe sinais de reação, como coceira, inchaço, tontura, falta de ar, sonolência excessiva ou piora do estado geral.'
        }
      ]
    },
    {
      id: 'storage',
      title: 'Como armazenar corretamente os medicamentos',
      type: 'steps',
      steps: [
        {
          id: 'clean-packages',
          order: 1,
          title: 'Limpeza',
          description:
            'Higienize as embalagens quando necessário, sem apagar ou danificar rótulos, lacres e informações.'
        },
        {
          id: 'storage-place',
          order: 2,
          title: 'Local de armazenamento',
          description:
            'Guarde os medicamentos protegidos da luz, calor e umidade. Evite cozinha, banheiro e locais próximos a eletrodomésticos que aqueçam.'
        },
        {
          id: 'leaflet-conservation',
          order: 3,
          title: 'Bula e conservação',
          description:
            'Leia a bula e a embalagem para verificar a necessidade de refrigeração e outras condições de armazenamento.'
        },
        {
          id: 'validity',
          order: 4,
          title: 'Validade',
          description: 'Verifique regularmente a validade e não utilize medicamentos vencidos.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Não altere doses, horários, forma de uso ou armazenamento sem orientação profissional.',
        'Só triture comprimidos com autorização profissional explícita.',
        'Não esconda medicamentos em alimentos sem orientação.',
        EDUCATIONAL_WARNING
      ]
    }
  ]
};

const HYDRATION_GUIDE: PracticalGuide = {
  id: 'guide-hydration-control',
  slug: 'controle-de-hidratacao',
  title: 'Controle de Hidratação',
  category: 'Saúde',
  shortDescription: 'Prevenção de desidratação em idosos',
  icon: 'H2O',
  tone: 'cyan',
  stepsCount: 4,
  cardMeta: '4 passos · inclui sinais de alerta',
  hasTips: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'O que é?',
      description:
        'O controle da hidratação ajuda a acompanhar a oferta e a aceitação de líquidos, respeitando as condições clínicas e as orientações da equipe de saúde.',
      type: 'introduction'
    },
    {
      id: 'materials',
      title: 'Materiais úteis',
      type: 'materials',
      items: ['Água fresca.', 'Copo com medida.', 'Chás, sucos, caldos ou outras opções orientadas.']
    },
    {
      id: 'steps',
      title: 'Passo a passo',
      type: 'steps',
      steps: [
        {
          id: 'offer-through-day',
          order: 1,
          title: 'Distribua a oferta',
          description:
            'Ofereça líquidos ao longo do dia em pequenas quantidades, conforme aceitação e orientação profissional.'
        },
        {
          id: 'warning-signs',
          order: 2,
          title: 'Observe sinais de alerta',
          description:
            'Observe boca seca, tontura, cansaço incomum, confusão, urina escura ou redução importante do volume urinário.'
        },
        {
          id: 'diversify-liquids',
          order: 3,
          title: 'Diversifique os líquidos',
          description:
            'Água, água de coco, chás, sucos diluídos, caldos e gelatina podem ajudar na aceitação quando forem permitidos.'
        },
        {
          id: 'respect-limits',
          order: 4,
          title: 'Respeite limites e orientações',
          description:
            'Algumas condições exigem restrição ou controle de líquidos. Siga sempre a orientação da equipe de saúde.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Cuidados importantes',
      type: 'warning',
      items: [
        'Nunca force a ingestão, pois pode causar engasgo.',
        'Procure orientação se houver sinais de desidratação ou piora do estado geral.',
        EDUCATIONAL_WARNING
      ]
    }
  ]
};

const TRANSFER_POSITIONING_GUIDE: PracticalGuide = {
  id: 'guide-transfer-positioning',
  slug: 'transferencia-posicionamento-idoso',
  title: 'Transferência e Posicionamento do Idoso',
  category: 'Locomoção',
  shortDescription: 'Mudança de posição, transferência segura e prevenção de lesões',
  icon: 'MOV',
  tone: 'blue',
  stepsCount: 6,
  cardMeta: '6 orientações · inclui imagens',
  hasTips: true,
  status: 'published',
  sections: [
    {
      id: 'introduction',
      title: 'Introdução',
      description:
        'A mudança de posição pode ajudar a prevenir lesões por pressão, desconforto, complicações pulmonares e problemas de circulação.',
      type: 'introduction'
    },
    {
      id: 'bed-to-chair-transfer',
      title: 'Transferência da cama para a cadeira',
      type: 'list',
      items: [
        'Travar as rodas da cama e da cadeira.',
        'Manter-se de frente para a pessoa.',
        'Observar fraqueza ou tontura.',
        'Pedir ajuda da pessoa quando ela conseguir colaborar.',
        'Aproveitar o impulso ao levantar.',
        'Manter a pessoa próxima ao corpo do cuidador.',
        'Não puxar somente pelos braços.'
      ]
    },
    {
      id: 'bedridden-position-change',
      title: 'Mudança de posição do idoso acamado',
      description:
        'A frequência da mudança de posição deve respeitar as condições da pessoa e as orientações da equipe de saúde.',
      type: 'introduction'
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
          imageAlt: 'Ilustração simples de pessoa deitada de costas em decúbito dorsal.',
          orientation: 'Siga a orientação da equipe de saúde para indicar apoios e tempo de permanência.'
        },
        {
          id: 'lateral',
          title: 'Decúbito lateral',
          description: 'Deitado de lado.',
          imageUrl: '/assets/guide/positions/decubito-lateral.svg',
          imageAlt: 'Ilustração simples de pessoa deitada de lado em decúbito lateral.',
          orientation: 'Siga a orientação da equipe de saúde para alternar lados e proteger pontos de apoio.'
        },
        {
          id: 'ventral',
          title: 'Decúbito ventral',
          description: 'Deitado de barriga para baixo.',
          imageUrl: '/assets/guide/positions/decubito-ventral.svg',
          imageAlt: 'Ilustração simples de pessoa deitada de barriga para baixo em decúbito ventral.',
          orientation: 'Siga a orientação da equipe de saúde, pois essa posição pode não ser indicada para todos.'
        }
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Interrompa a transferência se houver tontura, dor, falta de ar ou perda de força.',
        'Peça ajuda quando a pessoa não conseguir colaborar com segurança.',
        EDUCATIONAL_WARNING
      ]
    }
  ]
};

const FALL_PREVENTION_GUIDE: PracticalGuide = {
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
      description:
        'As quedas podem causar fraturas, medo de caminhar, perda de autonomia e outras complicações.',
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
      id: 'person-factors',
      title: 'Fatores relacionados à pessoa',
      type: 'list',
      items: [
        'Doenças crônicas.',
        'Sedentarismo.',
        'Uso de vários medicamentos.',
        'Alterações visuais ou auditivas.',
        'Fraqueza muscular.',
        'Dificuldade de equilíbrio.',
        'Tontura.'
      ]
    },
    {
      id: 'environment-factors',
      title: 'Fatores relacionados ao ambiente',
      type: 'list',
      items: [
        'Calçados inadequados.',
        'Iluminação insuficiente.',
        'Tapetes soltos.',
        'Escadas sem apoio.',
        'Pisos molhados.',
        'Objetos no caminho.',
        'Móveis mal posicionados.',
        'Falta de corrimão.'
      ]
    },
    {
      id: 'shoes',
      title: 'Sapatos e quedas',
      type: 'list',
      items: [
        'Preferir calçados fechados e firmes.',
        'Utilizar solado antiderrapante.',
        'Evitar calçados muito folgados.',
        'Evitar chinelos que saiam facilmente do pé.',
        'Conferir se o tamanho está correto.'
      ]
    },
    {
      id: 'rugs-wet-floors',
      title: 'Tapetes e pisos molhados',
      type: 'list',
      items: [
        'Evitar tapetes soltos.',
        'Utilizar tapetes antiderrapantes.',
        'Secar pisos molhados imediatamente.',
        'Manter o caminho livre.',
        'Garantir boa iluminação.'
      ]
    },
    {
      id: 'stairs',
      title: 'Escadas e degraus',
      type: 'list',
      items: [
        'Utilizar corrimão.',
        'Instalar fita antiderrapante.',
        'Manter boa iluminação.',
        'Não deixar objetos nos degraus.',
        'Destacar visualmente as bordas quando necessário.'
      ]
    },
    {
      id: 'home-recommendations',
      title: 'Recomendações dentro de casa',
      type: 'list',
      items: [
        'Manter os ambientes iluminados.',
        'Retirar obstáculos.',
        'Instalar barras de apoio quando necessário.',
        'Evitar caminhar apenas de meias.',
        'Levantar-se devagar.',
        'Manter objetos de uso frequente ao alcance.'
      ]
    },
    {
      id: 'warnings',
      title: 'Aviso de segurança',
      type: 'warning',
      items: [
        'Procure orientação profissional quando houver quedas repetidas, tontura, desmaios ou perda de equilíbrio.',
        EDUCATIONAL_WARNING
      ]
    }
  ],
  videos: [FALL_PREVENTION_VIDEO]
};

const INDEPENDENCE_AUTONOMY_GUIDE: PracticalGuide = {
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

export const MOCK_GUIDE_FEATURE: GuideFeatureItem = {
  id: 'guide-feature-elder-protection',
  link: '/violence',
  title: 'Proteção do Idoso',
  detail: '7 tipos de violência · Sinais de alerta · Canais de denúncia',
  source: 'Fonte: Ministério dos Direitos Humanos e da Cidadania, 2023',
  icon: 'SH',
  badge: 'Material Educativo'
};

export const MOCK_GUIDE_GROUPS: readonly GuideCategoryGroup[] = [
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

export const MOCK_CARE_GUIDES: readonly PracticalGuide[] = MOCK_GUIDE_GROUPS.flatMap((group) => group.guides);

function toGuideItem(guide: PracticalGuide): GuideItem {
  return {
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
  };
}

export const MOCK_GUIDE_ITEMS: readonly GuideItem[] = MOCK_CARE_GUIDES.map(toGuideItem);

export const MOCK_GUIDE_TUTORIALS: readonly GuideTutorialItem[] = MOCK_CARE_GUIDES
  .flatMap((guide) =>
    (guide.videos ?? []).map((video) => ({
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
