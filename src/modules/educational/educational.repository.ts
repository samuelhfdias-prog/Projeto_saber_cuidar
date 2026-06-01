import { ViolenceType, EmergencyContact } from './educational.model';

// ─────────────────────────────────────────────────────────────────────────────
// Dados Seed — Tipos de Violência contra o Idoso
// ─────────────────────────────────────────────────────────────────────────────

const violenceTypes: ViolenceType[] = [
  {
    id: 'violence-001',
    title: 'Violência Física',
    subtitle: 'Agressão corporal e maus-tratos físicos',
    iconIdentifier: 'fist',
    severity: 'crítica',
    description:
      'Uso intencional de força física que causa dor, lesão, incapacidade ou morte. Inclui golpes, empurrões, queimaduras, contenção física abusiva e uso inapropriado de medicamentos para sedação.',
    details: [
      'Tapas, socos, chutes ou qualquer golpe físico',
      'Empurrões e quedas provocadas',
      'Queimaduras por objetos ou líquidos quentes',
      'Contenção física desnecessária (amarrar, prender)',
      'Supermedicalização para sedação e controle comportamental',
      'Privação de alimentação, água ou higiene essencial',
    ],
    warningSignals: [
      'Hematomas, cortes ou queimaduras sem explicação plausível',
      'Fraturas frequentes ou em estágios diferentes de cicatrização',
      'Medo excessivo na presença do cuidador ou familiar',
      'Tremores, nervosismo ou alterações bruscas de comportamento',
      'Explicações contraditórias sobre lesões por parte do cuidador',
      'Idoso reluta em falar sobre como se machucou',
    ],
    legalNote:
      'Art. 99 do Estatuto do Idoso (Lei 10.741/2003): Expor a perigo a integridade e saúde física ou psíquica do idoso — pena de detenção de 6 meses a 1 ano e multa.',
    recommendedActions: [
      'Registre a ocorrência imediatamente no CRAS, CREAS ou Delegacia',
      'Documente as lesões com fotos datadas',
      'Ligue para o Disque 100 (Direitos Humanos)',
      'Acione o SAMU (192) se houver risco imediato à vida',
      'Solicite avaliação médica urgente e guarde laudos',
      'Acione o Ministério Público se o agressor for familiar',
    ],
    commonPerpetrators: ['Cônjuges', 'Filhos adultos', 'Cuidadores contratados', 'Netos'],
    vulnerableGroups: [
      'Idosos com demência ou dependência funcional total',
      'Idosos sem rede de apoio familiar',
      'Idosos em instituições de longa permanência',
    ],
    statistic: {
      value: '27,4%',
      description:
        'dos casos de violência notificados contra idosos no Brasil envolvem agressão física (Ministério da Saúde, 2022).',
      trend: 'crescente',
    },
  },
  {
    id: 'violence-002',
    title: 'Violência Psicológica',
    subtitle: 'Danos emocionais, humilhação e controle',
    iconIdentifier: 'brain-broken',
    severity: 'alta',
    description:
      'Ações ou omissões que causam dano emocional, diminuição da autoestima, danos ao desenvolvimento pessoal ou degradação. Inclui humilhações, ameaças, isolamento social, chantagem e infantilização.',
    details: [
      'Humilhação, ridicularização e apelidos depreciativos',
      'Ameaças de abandono, institucionalização ou punição',
      'Isolamento social forçado (proibição de visitas, telefone)',
      'Controle excessivo sobre decisões pessoais',
      'Ignorar sistematicamente o idoso (silêncio punitivo)',
      'Chantagem emocional e manipulação afetiva',
      'Infantilização (tratar como criança incapaz)',
    ],
    warningSignals: [
      'Depressão, ansiedade ou tristeza persistente',
      'Insônia ou pesadelos frequentes',
      'Retraimento social e perda de interesse em atividades',
      'Expressões de inutilidade, vergonha ou culpa excessiva',
      'Comportamento deferente e medroso com o cuidador',
      'Relatos de insultos ou humilhações do cuidador',
    ],
    legalNote:
      'Art. 99 do Estatuto do Idoso (Lei 10.741/2003) e Lei Maria da Penha (Lei 11.340/2006) quando a vítima é mulher idosa em contexto doméstico.',
    recommendedActions: [
      'Encaminhe para acompanhamento psicológico especializado',
      'Denuncie ao CREAS (Centro de Referência Especializado de Assistência Social)',
      'Acione o Conselho do Idoso da cidade',
      'Ligue para o Disque 100',
      'Documente os episódios com datas e descrições detalhadas',
    ],
    commonPerpetrators: ['Filhos', 'Cônjuges', 'Netos', 'Cuidadores informais'],
    vulnerableGroups: [
      'Idosos com baixa autoestima ou histórico de depressão',
      'Idosos financeiramente dependentes de familiares',
      'Idosos viúvos ou com redes sociais reduzidas',
    ],
    statistic: {
      value: '34,1%',
      description:
        'das notificações de violência contra idosos no SINAN (2022) correspondem a violência psicológica — a categoria mais prevalente.',
      trend: 'crescente',
    },
  },
  {
    id: 'violence-003',
    title: 'Violência Financeira',
    subtitle: 'Exploração patrimonial e econômica',
    iconIdentifier: 'money-stolen',
    severity: 'alta',
    description:
      'Exploração imprópria ou ilegal dos recursos financeiros e patrimônio do idoso. Inclui roubo de aposentadoria, falsificação de documentos, pressão para alteração de testamento e gestão fraudulenta de bens.',
    details: [
      'Subtração de aposentadoria, pensão ou benefícios',
      'Uso não autorizado de cartões bancários e senhas',
      'Pressão para doação, venda ou transferência de bens',
      'Falsificação de documentos e assinaturas',
      'Alteração de testamento mediante coação',
      'Serviços prestados superfaturados ao idoso',
      'Tutela ou curatela utilizadas de forma abusiva',
    ],
    warningSignals: [
      'Saques bancários frequentes e inexplicáveis',
      'Privação de necessidades básicas apesar de ter renda',
      'Novo "amigo" ou familiar distante com controle financeiro',
      'Idoso sem acesso ao próprio dinheiro ou documentos',
      'Assinar documentos sem entender o conteúdo',
      'Dívidas inesperadas em nome do idoso',
    ],
    legalNote:
      'Art. 102 do Estatuto do Idoso: Apropriar-se de ou desviar bens, proventos ou pensão do idoso — reclusão de 1 a 4 anos e multa. Também configura crime de estelionato (art. 171 do Código Penal).',
    recommendedActions: [
      'Registre boletim de ocorrência na Delegacia de Polícia',
      'Bloqueie cartões e acesse extratos bancários',
      'Consulte advogado para proteção patrimonial urgente',
      'Notifique o Ministério Público para instaurar inquérito',
      'Acione a Defensoria Pública (atendimento gratuito)',
      'Ligue para o Disque 100',
    ],
    commonPerpetrators: ['Filhos e netos', 'Cônjuges', 'Cuidadores contratados', 'Vizinhos oportunistas', 'Golpistas externos'],
    vulnerableGroups: [
      'Idosos com demência ou incapacidade cognitiva',
      'Idosos com alto patrimônio ou benefícios significativos',
      'Idosos socialmente isolados',
    ],
    statistic: {
      value: '1 em cada 6',
      description:
        'idosos brasileiros sofre alguma forma de exploração financeira ao longo da vida (Pesquisa Fiocruz, 2021).',
      trend: 'crescente',
    },
  },
  {
    id: 'violence-004',
    title: 'Abandono e Negligência',
    subtitle: 'Omissão de cuidados essenciais',
    iconIdentifier: 'person-alone',
    severity: 'crítica',
    description:
      'Recusa ou falha em cumprir as obrigações de cuidado com o idoso. Inclui abandono material, afetivo e negligência com saúde, higiene, alimentação e segurança do ambiente doméstico.',
    details: [
      'Abandono em hospitais, asilos ou vias públicas',
      'Privação de medicamentos, alimentos e água',
      'Omissão de higiene pessoal (banho, troca de fraldas)',
      'Deixar o idoso sem supervisão em situações de risco',
      'Não levar o idoso às consultas médicas necessárias',
      'Recusar moradia ao idoso dependente',
    ],
    warningSignals: [
      'Desnutrição, desidratação ou perda de peso acentuada',
      'Higiene pessoal precária e roupas inadequadas',
      'Úlceras de pressão (escaras) em idosos acamados',
      'Moradia insalubre, fria ou sem condições de segurança',
      'Idoso relata que "ninguém cuida" dele',
      'Consultas médicas em atraso ou medicamentos vencidos',
    ],
    legalNote:
      'Art. 98 do Estatuto do Idoso: Abandonar o idoso em hospitais, casas de saúde, entidades de longa permanência ou congêneres — pena de detenção de 6 meses a 3 anos e multa. Também dever constitucional (Art. 230 da CF/88).',
    recommendedActions: [
      'Ligue imediatamente para o SAMU (192) se houver risco à vida',
      'Acione o Conselho Tutelar ou o CREAS da região',
      'Registre ocorrência policial documentando as condições encontradas',
      'Solicite internação hospitalar urgente se necessário',
      'Acione o Ministério Público para tutela de urgência',
      'Ligue para o Disque 100',
    ],
    vulnerableGroups: [
      'Idosos em situação de rua',
      'Idosos completamente dependentes de terceiros',
      'Idosos com família disfuncional ou conflituosa',
    ],
    statistic: {
      value: '19,8%',
      description:
        'das notificações de violência contra idosos no Brasil são por negligência e abandono (SINAN 2022).',
      trend: 'estável',
    },
  },
  {
    id: 'violence-005',
    title: 'Violência Sexual',
    subtitle: 'Abuso e exploração sexual do idoso',
    iconIdentifier: 'shield-broken',
    severity: 'crítica',
    description:
      'Atos ou tentativas de atos sexuais sem o consentimento do idoso. Inclui contato sexual forçado, exibicionismo forçado, assédio e exploração sexual comercial. Frequentemente subnotificada por vergonha ou medo.',
    details: [
      'Contato físico sexual sem consentimento',
      'Exposição forçada a material pornográfico',
      'Voyeurismo e exibicionismo forçado',
      'Assédio sexual verbal ou escrito',
      'Exploração sexual comercial de idosos vulneráveis',
    ],
    warningSignals: [
      'Lesões genitais, anais ou hematomas na região pélvica',
      'Infecções sexualmente transmissíveis inexplicáveis',
      'Comportamento retraído, ansiedade intensa ou pânico',
      'Resistência a exames médicos na região íntima',
      'Relatos vagos de "algo ruim" que aconteceu',
    ],
    legalNote:
      'Art. 217-A e 213 do Código Penal (estupro de vulnerável) com agravante de ser cometido contra pessoa maior de 60 anos (Art. 61, II, "h" do CP). Reclusão de 8 a 15 anos.',
    recommendedActions: [
      'Acione o SAMU (192) ou Pronto-Socorro imediatamente',
      'Não higienize o local ou o corpo antes do exame forense',
      'Registre boletim de ocorrência na Delegacia da Mulher ou DP',
      'Solicite perícia do IML com urgência',
      'Ofereça suporte psicológico especializado',
      'Ligue para o Disque 100 e o Ligue 180',
    ],
    commonPerpetrators: ['Cuidadores contratados', 'Familiares próximos', 'Vizinhos', 'Funcionários de instituições'],
    statistic: {
      value: '4,7%',
      description:
        'das notificações contra idosos são de violência sexual, mas estima-se que 90% dos casos não sejam reportados (OMS, 2021).',
      trend: 'estável',
    },
  },
  {
    id: 'violence-006',
    title: 'Autonegligência',
    subtitle: 'Quando o idoso coloca a si mesmo em risco',
    iconIdentifier: 'self-neglect',
    severity: 'moderada',
    description:
      'Comportamento do próprio idoso que ameaça sua saúde, segurança ou bem-estar. Ocorre quando o idoso recusa cuidados necessários, abandona tratamentos ou não atende às suas próprias necessidades básicas. Frequentemente associada a depressão, demência ou isolamento social.',
    details: [
      'Recusa sistemática em tomar medicamentos prescritos',
      'Abandono de tratamentos médicos em andamento',
      'Negligência com higiene pessoal e moradia',
      'Acúmulo compulsivo de objetos (síndrome de Diógenes)',
      'Isolamento social voluntário e recusa de ajuda',
      'Alimentação inadequada ou recusa em se alimentar',
    ],
    warningSignals: [
      'Moradia em condições insalubres por escolha do idoso',
      'Desnutrição e perda de peso sem causa médica aparente',
      'Higiene precária apesar de ter condições de fazê-la',
      'Acúmulo excessivo de objetos sem valor',
      'Declarações de não querer mais viver',
      'Abandono de consultas e exames periódicos',
    ],
    legalNote:
      'A autonegligência requer abordagem ética sensível que equilibre a autonomia do idoso (Art. 2° do Estatuto) com seu direito à vida e saúde. Intervenção judicial pode ser necessária em casos de incapacidade cognitiva.',
    recommendedActions: [
      'Aborde o idoso com empatia, sem julgamentos',
      'Encaminhe para avaliação geriátrica e neuropsicológica',
      'Acione o CRAS ou CREAS para suporte social',
      'Considere avaliação de incapacidade civil se necessário',
      'Envolva a rede de suporte familiar e comunitária',
      'Ofereça grupos de convivência e atividades sociais',
    ],
    vulnerableGroups: [
      'Idosos com depressão grave ou luto recente',
      'Idosos com demência inicial não diagnosticada',
      'Idosos que vivem sozinhos sem rede de apoio',
    ],
    statistic: {
      value: '58%',
      description:
        'dos casos de autonegligência em idosos estão associados a algum transtorno mental não tratado, como depressão ou demência (ABRAZ, 2023).',
      trend: 'crescente',
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Dados Seed — Canais de Proteção e Denúncia
// ─────────────────────────────────────────────────────────────────────────────

const emergencyContacts: EmergencyContact[] = [
  {
    name: 'Disque 100',
    description:
      'Canal oficial do Ministério dos Direitos Humanos para denúncias de violações aos direitos de idosos, crianças e grupos vulneráveis. Atendimento sigiloso, gratuito e 24 horas.',
    phoneNumber: '100',
    highlightColor: '#1976D2',
    available24h: true,
    isFree: true,
  },
  {
    name: 'SAMU',
    description:
      'Serviço de Atendimento Móvel de Urgência. Acione imediatamente em casos de risco à vida, lesões físicas graves, quedas com suspeita de fratura ou estado de inconsciência.',
    phoneNumber: '192',
    highlightColor: '#D32F2F',
    available24h: true,
    isFree: true,
  },
  {
    name: 'Ligue 180',
    description:
      'Central de Atendimento à Mulher, incluindo mulheres idosas vítimas de violência doméstica. Oferece orientação jurídica, apoio psicológico e encaminhamento a serviços de proteção.',
    phoneNumber: '180',
    highlightColor: '#7B1FA2',
    available24h: true,
    isFree: true,
  },
  {
    name: 'Polícia Militar',
    description:
      'Acione em situações de flagrante delito, ameaças imediatas ou quando o agressor estiver no local. A PM pode garantir a segurança imediata e encaminhar ao hospital se necessário.',
    phoneNumber: '190',
    highlightColor: '#1B5E20',
    available24h: true,
    isFree: true,
  },
  {
    name: 'Bombeiros',
    description:
      'Acionamento para resgate em acidentes domésticos, quedas com vítima presa, incêndios ou qualquer situação de emergência que exija resgate especializado.',
    phoneNumber: '193',
    highlightColor: '#E65100',
    available24h: true,
    isFree: true,
  },
  {
    name: 'CREAS',
    description:
      'Centro de Referência Especializado de Assistência Social. Oferece acompanhamento psicossocial e jurídico a famílias e indivíduos em situação de risco ou violação de direitos. Localizado no seu município.',
    phoneNumber: 'Consulte prefeitura local',
    highlightColor: '#0097A7',
    available24h: false,
    isFree: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Classe Repositório (Singleton)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * EducationalRepository — camada de acesso a dados para conteúdo educativo.
 *
 * Padrão Singleton garantido via exportação de instância única.
 * Substitua os arrays seed por queries ao banco de dados quando disponível.
 */
export class EducationalRepository {
  private readonly violenceTypes: ViolenceType[] = violenceTypes;
  private readonly emergencyContacts: EmergencyContact[] = emergencyContacts;

  /**
   * Retorna todos os tipos de violência cadastrados no sistema.
   * @returns Array completo de ViolenceType.
   */
  findAllViolenceTypes(): ViolenceType[] {
    return [...this.violenceTypes];
  }

  /**
   * Busca um tipo de violência pelo seu ID.
   * @param id ID do tipo de violência.
   * @returns O ViolenceType encontrado ou `undefined`.
   */
  findViolenceTypeById(id: string): ViolenceType | undefined {
    return this.violenceTypes.find((v) => v.id === id);
  }

  /**
   * Retorna todos os canais de proteção e denúncia.
   * @returns Array completo de EmergencyContact.
   */
  findAllEmergencyContacts(): EmergencyContact[] {
    return [...this.emergencyContacts];
  }
}

export const educationalRepository = new EducationalRepository();
