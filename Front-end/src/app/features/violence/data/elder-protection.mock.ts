import type { ElderProtectionGuide } from '../models';

export const MOCK_ELDER_PROTECTION_GUIDE: ElderProtectionGuide = {
  title: 'Proteção do Idoso',
  subtitle: 'Material Educativo — Tipos de Violência',
  overview:
    'Reconhecer os tipos de violência é o primeiro passo para proteger. Este material foi elaborado com base nas diretrizes do Ministério dos Direitos Humanos e da Cidadania.',
  violenceTypes: [
    {
      id: 'physical',
      title: 'Violência Física',
      subtitle: 'A forma mais visível, mas nem sempre perceptível',
      icon: 'FI',
      emoji: '🥊',
      severity: 'critical',
      summary:
        'Os abusos físicos constituem a forma de violência mais perceptível, mas nem sempre o agressor comete agressões com sinais evidentes. Beliscões, empurrões e tapas são igualmente considerados violência física.',
      details: [
        'Ocorre predominantemente dentro do próprio lar da pessoa idosa',
        'Praticada majoritariamente por pessoas próximas: filhos, cônjuge, netos ou cuidadores',
        'Nem toda agressão física deixa marcas visíveis — atenção a comportamentos e relatos'
      ],
      signs: [
        'Hematomas e machucados sem explicação clara',
        'Fraturas ou lesões incompatíveis com a história relatada',
        'Medo ou agitação na presença de determinada pessoa',
        'Retraimento social repentino',
        'Marcas de beliscões, arranhões ou tapas'
      ],
      whatToDo: [
        'Documente lesões com fotografias datadas antes de qualquer atendimento',
        'Leve o idoso a uma UPA ou Hospital para registro médico imediato',
        'Registre Boletim de Ocorrência na Delegacia de Polícia ou DEAM',
        'Acione o Disque 100 para denúncia sigilosa e gratuita',
        'Contate o CREAS (Centro de Referência Especializado em Assistência Social) do município'
      ],
      stat: {
        value: '129,5 mil',
        label: 'violações físicas registradas (jan–mai/2023)',
        trend: '+106%'
      },
      legalNote: 'Constitui crime tipificado no Estatuto da Pessoa Idosa (Lei 10.741/2003) com pena de reclusão.',
      whoPerpetuates: ['Filhos', 'Cônjuge/Companheiro', 'Netos', 'Cuidadores domiciliares']
    },
    {
      id: 'psychological',
      title: 'Abuso Psicológico',
      subtitle: 'Crime silencioso que compromete a dignidade',
      icon: 'PS',
      emoji: '🧠',
      severity: 'critical',
      summary:
        'A violência psicológica é crime passível de pena de detenção. Ocorre por meio de agressões verbais, menosprezo, humilhação, afastamento familiar e restrição à liberdade de expressão — qualquer ação que gere sofrimento emocional.',
      details: [
        'Afeta profundamente a autoimagem, identidade e autoestima do idoso',
        'Frequentemente acompanha outros tipos de violência',
        'Difícil de ser reconhecida por familiares e pelo próprio idoso'
      ],
      signs: [
        'Humor deprimido persistente, isolamento social',
        'Medo de falar ou expressar opiniões na presença do agressor',
        'Alterações repentinas no comportamento (agressividade, choro frequente)',
        'Relatos de humilhações, xingamentos ou ameaças',
        'Confusão sobre seus próprios direitos e vontades',
        'Sinais de ansiedade intensa em interações familiares'
      ],
      whatToDo: [
        'Acolha o idoso com escuta ativa, sem julgamentos',
        'Documente relatos com data, hora e descrição detalhada',
        'Separe o idoso do agressor em ambiente seguro sempre que possível',
        'Encaminhe para acompanhamento psicológico especializado',
        'Registre B.O. e acione o Disque 100 — a denúncia pode ser feita pelo cuidador'
      ],
      stat: {
        value: '120,3 mil',
        label: 'violações psicológicas registradas (jan–mai/2023)',
        trend: '+40%'
      },
      legalNote: 'Crime com pena de detenção de 6 meses a 1 ano, conforme Art. 99 do Estatuto da Pessoa Idosa.'
    },
    {
      id: 'neglect',
      title: 'Negligência, Abandono e Violência Institucional',
      subtitle: 'Omissão que também é crime',
      icon: 'NG',
      emoji: '🏠',
      severity: 'high',
      summary:
        'A negligência é a recusa ou omissão de cuidados essenciais. O abandono manifesta-se pela ausência de amparo pelos responsáveis. A violência institucional ocorre em ambientes públicos ou privados (hospitais, clínicas, asilos) por ação desatenciosa ou omissa de funcionários.',
      details: [
        'Negligência: não oferecer alimentação, medicação, higiene ou suporte emocional necessários',
        'Abandono: deixar o idoso sem assistência de qualquer responsável',
        'Violência institucional: maus-tratos em hospitais, ILPI, clínicas e unidades de saúde'
      ],
      signs: [
        'Desnutrição, desidratação ou emagrecimento sem causa médica aparente',
        'Higiene corporal precária e roupas inadequadas',
        'Feridas por pressão (escaras) por falta de reposicionamento',
        'Medicamentos não administrados ou vencidos',
        'Isolamento total, sem visitas familiares ou sociais',
        'Relatos de maus-tratos em instituições'
      ],
      whatToDo: [
        'Verifique se o idoso está recebendo alimentação, medicação e higiene adequadas',
        'Constate o ambiente onde vive — condições de segurança e conforto',
        'Em caso de negligência familiar: acione o CRAS, CREAS ou Ministério Público',
        'Em caso de violência institucional: registre queixa na Ouvidoria da instituição e no Conselho de Ética',
        'Disque 100 para denúncia sigilosa 24h por dia'
      ],
      stat: {
        value: '57,3 mil',
        label: 'violações de negligência + abandono (jan–mai/2023)',
        trend: '+855% no abandono'
      },
      legalNote: 'Abandono de idoso: pena de detenção de 6 meses a 3 anos, com agravante se resultar em lesão.',
      vulnerableGroups: ['Idosos acamados', 'Idosos com demência', 'Idosos sem rede familiar ativa']
    },
    {
      id: 'financial',
      title: 'Abuso Financeiro',
      subtitle: 'Exploração dos recursos sem consentimento',
      icon: 'FN',
      emoji: '💰',
      severity: 'high',
      summary:
        'Caracterizada pela exploração imprópria e ilegal ou uso não consentido dos recursos financeiros do idoso. O violador se apropria indevidamente de dinheiro, cartões e bens, geralmente usando da confiança da vítima.',
      details: [
        'Frequente entre familiares, conhecidos e instituições financeiras',
        'Idosos com pouca instrução financeira são especialmente vulneráveis',
        'Muitas vítimas não percebem estar sendo exploradas devido ao vínculo afetivo com o agressor'
      ],
      signs: [
        'Contas atrasadas e falta de dinheiro para itens básicos',
        'Movimentações financeiras não reconhecidas pelo idoso',
        'Transferências bancárias suspeitas ou saques em caixa eletrônico',
        'Familiar assumindo controle total das finanças sem autorização formal',
        'Idoso assina documentos sem compreender o que está assinando',
        'Privação de acesso ao próprio benefício ou aposentadoria'
      ],
      whatToDo: [
        'Ajude o idoso a verificar extratos bancários regularmente',
        'Oriente sobre golpes financeiros (principalmente telefonemas e links suspeitos)',
        'Sugira uma conta conjunta com pessoa de confiança para monitoramento',
        'Registre B.O. em Delegacia de Crimes Patrimoniais',
        'Contate o banco para bloqueio imediato em caso de fraude comprovada',
        'Acione o Ministério Público para representar o idoso em casos graves'
      ],
      stat: {
        value: '15,2 mil',
        label: 'violações financeiras registradas (jan–mai/2023)',
        trend: '+73%'
      },
      legalNote: 'Crime de estelionato ou furto qualificado, com agravante por ser praticado contra idoso.',
      whoPerpetuates: ['Filhos e netos', 'Cuidadores contratados', 'Conhecidos de confiança', 'Instituições financeiras']
    },
    {
      id: 'patrimonial',
      title: 'Violência Patrimonial',
      subtitle: 'Comprometimento ilícito do patrimônio',
      icon: 'PT',
      emoji: '📜',
      severity: 'moderate',
      summary:
        'É qualquer prática ilícita que comprometa o patrimônio do idoso: forçá-lo a assinar documentos sem explicação, alterações em testamento, procurações que excedem os poderes conferidos, antecipação de herança ou venda de bens sem consentimento espontâneo.',
      details: [
        'Frequentemente disfarçada como "ajuda familiar" ou "planejamento sucessório"',
        'A autonomia do idoso é direito fundamental garantido pela Constituição Federal',
        'Idosos com quadro demencial são os mais vulneráveis a este tipo de violência'
      ],
      signs: [
        'Documentos importantes desaparecendo do alcance do idoso',
        'Pressão familiar para assinar escrituras, procurações ou testamentos',
        'Transferência de imóveis sem que o idoso relate ter concordado',
        'Advogados desconhecidos frequentando a residência',
        'Familiar tomando posse de bens e objetos pessoais'
      ],
      whatToDo: [
        'Nunca assine documentos sem ler ou ter um advogado de confiança presente',
        'Guarde cópias de todos os documentos pessoais e patrimoniais',
        'Consulte a Defensoria Pública gratuitamente para orientação jurídica',
        'Registre ocorrência policial em caso de falsificação de assinatura',
        'Entre em contato com o Ministério Público para curatela protetiva se necessário'
      ],
      legalNote: 'Pode configurar estelionato, falsificação de documento e abuso de incapaz — todos crimes.',
      vulnerableGroups: ['Idosos com Alzheimer', 'Idosos sem herdeiros diretos próximos', 'Idosos dependentes']
    },
    {
      id: 'sexual',
      title: 'Violência Sexual',
      subtitle: 'Violação da intimidade e dignidade',
      icon: 'SX',
      emoji: '🚨',
      severity: 'critical',
      summary:
        'Os abusos visam obter contato sexual ou práticas íntimas através de coação, violência física ou ameaças. Podem ocorrer na própria casa, praticados por pessoas da família, e em instituições de cuidado.',
      details: [
        'Mulheres idosas com limitações físicas de locomoção são mais vulneráveis',
        'Idosos com Alzheimer, esquizofrenia ou outras doenças neuropsiquiátricas têm dificuldade de relatar a violência',
        'Pode ocorrer de forma velada, dificultando o reconhecimento por terceiros'
      ],
      signs: [
        'Lesões genitais, hematomas em regiões íntimas ou dificuldade de locomoção',
        'Sangramento, corrimento ou infecções urinárias de repetição sem causa clínica',
        'Comportamento de esquiva, medo ou agitação extrema ao ser cuidado',
        'Relatos confusos ou indiretos sobre toques ou situações indesejadas',
        'Choro, isolamento ou recusa de higiene íntima'
      ],
      whatToDo: [
        'Leve o idoso imediatamente a uma UPA ou hospital — atendimento de urgência',
        'Não higienize o idoso antes do exame médico legal para preservar evidências',
        'Registre Boletim de Ocorrência com urgência',
        'Solicite acompanhamento psicológico especializado para o idoso',
        'Contate o CREAS e o Ministério Público para medidas protetivas de urgência',
        'Disque 100 ou LIGUE 180 (violência contra a mulher) de forma sigilosa'
      ],
      legalNote: 'Crime hediondo com pena de 6 a 10 anos de reclusão, com agravante para vítimas idosas.',
      vulnerableGroups: ['Mulheres idosas com limitação física', 'Idosos com demência', 'Idosos sem rede de proteção']
    },
    {
      id: 'discrimination',
      title: 'Discriminação (Etarismo)',
      subtitle: 'Preconceito pela idade — também é crime',
      icon: 'DS',
      emoji: '⚖️',
      severity: 'moderate',
      summary:
        'Refere-se a comportamentos discriminatórios, ofensivos e desrespeitosos pela condição de envelhecimento. O etarismo (ou idadismo/ageísmo) compromete direitos fundamentais, excluindo o idoso nos contextos social, cultural, psicológico e político.',
      details: [
        'Etarismo pode ser explícito (insultos, desqualificação) ou estrutural (exclusão de sistemas, interfaces inacessíveis)',
        'Manifestações cotidianas: infantilização, ignorar a opinião do idoso, tratá-lo como incapaz',
        'O Brasil tipificou o etarismo como crime em 2023 (Lei 14.723/2023)'
      ],
      signs: [
        'Comentários desrespeitosos sobre limitações físicas ou cognitivas do idoso',
        'Decisões tomadas sem consultar o idoso sobre sua própria vida',
        'Exclusão do idoso de conversas familiares ou decisões domésticas',
        'Atendimentos de saúde que desconsideram as queixas do idoso',
        'Tratamento infantilizado ou com desdém por profissionais de saúde'
      ],
      whatToDo: [
        'Preserve sempre a autonomia e opinião do idoso nas decisões que lhe dizem respeito',
        'Denuncie atendimentos discriminatórios ao Conselho Regional da categoria profissional',
        'Registre ocorrência policial em casos de discriminação explícita',
        'Oriente o idoso sobre seus direitos — compartilhe este material',
        'Acione o Disque 100 para violações de direitos por discriminação etária'
      ],
      legalNote: 'Discriminação por idade: pena de reclusão de 1 a 3 anos e multa (Lei 14.723/2023).'
    }
  ],
  warningSigns: [
    'Mudança repentina de humor, medo ou silêncio.',
    'Lesões, quedas ou dores frequentes sem explicação.',
    'Perda de peso, desidratação, higiene precária ou remédios sem controle.',
    'Falta de dinheiro para itens básicos apesar de renda regular.',
    'Isolamento imposto por familiares, cuidadores ou instituições.'
  ],
  immediateActions: [
    'Converse em local seguro, com calma e respeito.',
    'Anote datas, sinais observados e pessoas envolvidas.',
    'Procure a Unidade Básica de Saúde, CRAS, CREAS, Conselho do Idoso ou Delegacia.',
    'Em risco imediato, acione emergência pelo 190 ou serviço de saúde pelo 192.',
    'Para denúncia de violações de direitos humanos, ligue Disque 100.'
  ],
  channels: [
    {
      id: 'disque-100',
      title: 'Disque 100',
      detail: 'Direitos Humanos — sigiloso e gratuito 24h',
      actionLabel: 'Ligar 100',
      href: 'tel:100',
      tone: 'primary'
    },
    {
      id: 'samu',
      title: 'SAMU',
      detail: 'Urgências médicas — atendimento imediato',
      actionLabel: 'Ligar 192',
      href: 'tel:192',
      tone: 'danger'
    },
    {
      id: 'ligue-180',
      title: 'Ligue 180',
      detail: 'Central de Atendimento à Mulher Idosa',
      actionLabel: 'Ligar 180',
      href: 'tel:180',
      tone: 'pink'
    },
    {
      id: 'ministerio-publico',
      title: 'Ministério Público',
      detail: 'Protege direitos fundamentais da pessoa idosa',
      actionLabel: 'Ligar 127',
      href: 'tel:127',
      tone: 'neutral'
    }
  ],
  rights: [
    { id: 'right-1', text: 'Direito à vida com dignidade e respeito' },
    { id: 'right-2', text: 'Direito à saúde, alimentação, educação e convivência familiar' },
    { id: 'right-3', text: 'Proteção contra qualquer tipo de negligência, discriminação, violência ou exploração' },
    { id: 'right-4', text: 'Direito à liberdade, à autonomia e ao respeito por sua vontade' },
    { id: 'right-5', text: 'Direito de ser ouvido e ter sua opinião respeitada em todas as decisões' }
  ],
  reference:
    'BRASIL. Ministério dos Direitos Humanos e da Cidadania. Violências contra a pessoa idosa: saiba quais são as mais recorrentes e o que fazer nesses casos. Brasília, DF, 2023. Disponível em: gov.br/mdh.'
};
