/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ActionItem {
  label: string;
  href: string;
}

export interface SoundConfig {
  labelOn: string;
  labelOff: string;
  audioSrc?: string;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export interface ChapterItem {
  id: string;
  index: string;
  title: string;
  description: string;
  tag: string;
  image: ImageItem;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  details: string;
  accentColor: string;
  image: ImageItem;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: ImageItem;
  aspect: 'portrait' | 'landscape';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export const siteContent = {
  brand: {
    enabled: true,
    name: 'Casa Pipoca',
    subtitle: 'Ateliê de arte e brincadeira',
    ariaLabel: 'Casa Pipoca - Página inicial',
  },

  header: {
    enabled: true,
    nav: [
      { id: 'sobre', label: 'O Ateliê', href: '#capitulos' },
      { id: 'oficinas', label: 'Oficinas', href: '#servicos' },
      { id: 'galeria', label: 'Galeria', href: '#galeria' },
      { id: 'visite', label: 'Visite', href: '#visite' },
      { id: 'faq', label: 'Dúvidas', href: '#faq' },
      { id: 'uikit', label: 'UI Kit', href: '#uikit' },
    ] as NavItem[],
    primaryAction: {
      label: 'Agendar visita',
      href: '#visite',
    } as ActionItem,
    sound: {
      labelOn: 'Ligar música',
      labelOff: 'Desligar música',
    } as SoundConfig,
  },

  intro: {
    enabled: true,
    tag: 'Arte sem medo de errar',
    headline: 'Onde a curiosidade infantil encontra tintas, argila e espaço para inventar.',
  },

  hero: {
    enabled: true,
    kicker: 'Ateliê de experimentação e arte infantil',
    title: {
      leadingText: 'Um espaço para criar,',
      highlightedWord: 'bagunçar',
      trailingText: 'e descobrir no seu tempo.',
    },
    description:
      'Mesas baixas, luz da manhã e materiais de verdade. Aqui as crianças exploram tintas guache, argila natural e colagens sem receitas prontas nem modelos a copiar.',
    primaryAction: {
      label: 'Conhecer as oficinas',
      href: '#servicos',
    } as ActionItem,
    secondaryAction: {
      label: 'Como funciona',
      href: '#capitulos',
    } as ActionItem,
    metadataNote: 'Turmas pequenas · [faixa etária] · Acompanhamento de educadores artistas',
    image: {
      src: '/src/assets/images/hero.jpg',
      alt: 'Mesa de madeira com potes de tinta guache amarela e vermelha, pincéis e papéis coloridos vistos de cima',
    } as ImageItem,
    mobileImage: {
      src: '/src/assets/images/hero.jpg',
      alt: 'Mesa com materiais de arte e luz natural da manhã',
    } as ImageItem,
  },

  capitulos: {
    enabled: true,
    kicker: 'O ritmo do ateliê',
    title: 'Quatro momentos de um dia de criação',
    items: [
      {
        id: 'cap-1',
        index: '01',
        title: 'Chegar com as mãos limpas',
        tag: 'Acolhimento',
        description:
          'O avental entra em cena e os sapatos descansam. Cada criança encontra sua bancada, escolhe os suportes do dia e inicia o contato com os materiais com calma.',
        image: {
          src: '/src/assets/images/espaco_atelie.jpg',
          alt: 'Aventais de algodão pendurados em cabides de madeira e estantes baixas com materiais de arte',
        },
      },
      {
        id: 'cap-2',
        index: '02',
        title: 'Misturar cores e texturas',
        tag: 'Investigação',
        description:
          'O amarelo encontra o azul sem fórmulas prontas. Testamos densidades de tinta guache, pincéis largos, esponjas naturais e papéis de gramaturas diferentes.',
        image: {
          src: '/src/assets/images/capitulo_tintas.jpg',
          alt: 'Potes de tinta guache espessa sobre paleta de madeira com pincéis e potes de cerâmica',
        },
      },
      {
        id: 'cap-3',
        index: '03',
        title: 'Fazer bagunça organizada',
        tag: 'Expressão livre',
        description:
          'Pintar com os dedos, modelar pequenas formas em argila ou recortar papéis com curvas livres. A sujeira faz parte do processo e aqui é bem-vinda.',
        image: {
          src: '/src/assets/images/capitulo_recortes.jpg',
          alt: 'Recortes de papéis coloridos em formas orgânicas sobre mesa com barbante natural e ferramentas de madeira',
        },
      },
      {
        id: 'cap-4',
        index: '04',
        title: 'Levar para casa ou deixar secando',
        tag: 'Registro',
        description:
          'Os trabalhos vão para o varal de secagem ou para a caixa de lembranças. A experiência vale mais do que o resultado final acabado.',
        image: {
          src: '/src/assets/images/atelie_livre.jpg',
          alt: 'Varal de secagem com pinturas coloridas penduradas com pregadores de madeira em ateliê ensolarado',
        },
      },
    ] as ChapterItem[],
  },

  servicos: {
    enabled: true,
    kicker: 'Encontros e vivências',
    title: 'Formatos pensados para cada idade',
    items: [
      {
        id: 'oficina-pintura',
        title: 'Oficina de Pintura & Cor',
        tag: 'Tintas e suportes',
        description:
          'Exploração de guaches, pigmentos minerais e suportes variados em grandes formatos.',
        details: 'Duração: [duração] · Grupos de até [número] crianças · Faixa etária: [faixa etária]',
        accentColor: 'var(--tema-color-deco-1)',
        image: {
          src: '/src/assets/images/oficina_pintura.jpg',
          alt: 'Mãos de criança segurando pincel grande e experimentando misturas de cores vivas',
        },
      },
      {
        id: 'oficina-argila',
        title: 'Oficina de Argila & Modelagem',
        tag: 'Escultura tátil',
        description:
          'Argila natural úmida, barbotina e instrumentos de madeira para construir relevos e pequenas peças tridimensionais.',
        details: 'Duração: [duração] · Materiais 100% atóxicos · Faixa etária: [faixa etária]',
        accentColor: 'var(--tema-color-deco-2)',
        image: {
          src: '/src/assets/images/oficina_argila.jpg',
          alt: 'Blocos de argila natural úmida e ferramentas de madeira em mesa rústica',
        },
      },
      {
        id: 'atelie-livre',
        title: 'Ateliê Livre & Colagem',
        tag: 'Percurso autônomo',
        description:
          'Bancadas abertas com papéis encorpados, fitas, barbantes e recortes para projetos autorais sem roteiro prévio.',
        details: 'Duração: [duração] · Ritmo individual · Faixa etária: [faixa etária]',
        accentColor: 'var(--tema-color-deco-3)',
        image: {
          src: '/src/assets/images/atelie_livre.jpg',
          alt: 'Espaço com cavaletes de madeira e materiais de colagem organizados para acesso autônomo',
        },
      },
    ] as ServiceItem[],
  },

  galeria: {
    enabled: true,
    kicker: 'Registros do dia a dia',
    title: 'Processos, texturas e descobertas',
    items: [
      {
        id: 'gal-1',
        title: 'Mesa de tintas e pigmentos',
        category: 'Pintura',
        description: 'Potes de guache e misturas feitas pelas próprias crianças durante a experimentação.',
        aspect: 'landscape',
        image: {
          src: '/src/assets/images/hero.jpg',
          alt: 'Vista aérea de tintas, pincéis e papéis coloridos organizados sobre a mesa',
        },
      },
      {
        id: 'gal-2',
        title: 'Mãos em contato com a tinta',
        category: 'Processo',
        description: 'Primeiras camadas de cor aplicadas com pincéis largos e os próprios dedos.',
        aspect: 'landscape',
        image: {
          src: '/src/assets/images/oficina_pintura.jpg',
          alt: 'Mãos experimentando texturas de tinta guache fresca em cartolina',
        },
      },
      {
        id: 'gal-3',
        title: 'Modelagem em argila crua',
        category: 'Argila',
        description: 'Formas orgânicas secando naturalmente sob a luz suave da manhã.',
        aspect: 'landscape',
        image: {
          src: '/src/assets/images/oficina_argila.jpg',
          alt: 'Pequenas peças moldadas em argila úmida dispostas sobre tábua de madeira',
        },
      },
      {
        id: 'gal-4',
        title: 'Varal de secagem e produção',
        category: 'Ateliê',
        description: 'Pinturas coletivas descansando ao vento antes de serem levadas para casa.',
        aspect: 'landscape',
        image: {
          src: '/src/assets/images/atelie_livre.jpg',
          alt: 'Pinturas coloridas penduradas em varal de barbante em sala ensolarada',
        },
      },
      {
        id: 'gal-5',
        title: 'Paletas e misturas espontâneas',
        category: 'Cores',
        description: 'Pincéis descansando sobre recipientes de cerâmica entre uma pincelada e outra.',
        aspect: 'portrait',
        image: {
          src: '/src/assets/images/capitulo_tintas.jpg',
          alt: 'Potes de tinta e pincéis de cerdas naturais descansando após a oficina',
        },
      },
      {
        id: 'gal-6',
        title: 'Recortes e composições gráficas',
        category: 'Colagem',
        description: 'Formas geométricas recortadas em papéis artesanais de gramatura alta.',
        aspect: 'portrait',
        image: {
          src: '/src/assets/images/capitulo_recortes.jpg',
          alt: 'Papéis artesanais coloridos recortados em formatos lúdicos sobre mesa clara',
        },
      },
    ] as GalleryItem[],
  },

  visite: {
    enabled: true,
    kicker: 'Venha nos conhecer',
    title: 'O ateliê de portas abertas',
    description:
      'Agende um horário para conhecer o espaço antes do primeiro encontro do seu filho. Estamos em uma rua tranquila, com luz natural e café coado para os responsáveis.',
    locationLabel: 'Endereço',
    locationValue: '[endereço do ateliê, bairro tranquilo]',
    hoursLabel: 'Horários de visitação',
    hoursValue: '[dias da semana e horários de funcionamento]',
    phoneLabel: 'Contato e WhatsApp',
    phoneValue: '[telefone / WhatsApp para agendamentos]',
    emailLabel: 'E-mail',
    emailValue: '[email de contato institucional]',
    notes: 'Visitas com agendamento prévio para garantir a tranquilidade das oficinas em andamento.',
    action: {
      label: 'Falar conosco',
      href: '#visite',
    },
    image: {
      src: '/src/assets/images/espaco_atelie.jpg',
      alt: 'Canto acolhedor do ateliê com estantes de madeira clara e luz natural matinal',
    },
  },

  depoimentos: {
    enabled: false,
    items: [] as TestimonialItem[],
  },

  faq: {
    enabled: true,
    kicker: 'Perguntas frequentes',
    title: 'Tudo o que os responsáveis precisam saber',
    items: [
      {
        id: 'faq-1',
        question: 'Qual é a faixa etária recomendada para as oficinas?',
        answer:
          'Recebemos crianças a partir de [faixa etária]. As turmas são organizadas em grupos reduzidos de idades próximas para que todos brinquem com conforto e segurança.',
      },
      {
        id: 'faq-2',
        question: 'O que a criança deve vestir no dia da oficina?',
        answer:
          'Roupas confortáveis que possam sujar sem preocupação. Fornecemos aventais de algodão no ateliê, mas a tinta e a argila fazem parte da experiência viva.',
      },
      {
        id: 'faq-3',
        question: 'Os materiais utilizados são seguros e atóxicos?',
        answer:
          'Sim. Usamos exclusivamente tintas à base de água, argila natural sem aditivos sintéticos e papéis livres de ácidos, todos adequados para uso infantil.',
      },
      {
        id: 'faq-4',
        question: 'Os responsáveis precisam acompanhar durante a atividade?',
        answer:
          'Para crianças menores de [idade de corte], um responsável acompanha no espaço. Para os mais velhos, os pais podem permanecer na nossa sala de espera com café ou retornar ao final da oficina.',
      },
      {
        id: 'faq-5',
        question: 'Como funciona o agendamento e a reserva de vagas?',
        answer:
          'As vagas são limitadas para manter a atenção individualizada. As reservas são feitas com antecedência por mensagem ou diretamente pelo formulário de contato.',
      },
    ] as FaqItem[],
  },

  ctaFinal: {
    enabled: true,
    kicker: 'Próxima turma',
    title: 'Reserve um período de criação para seu filho',
    description:
      'Turmas pequenas com até [número de vagas] crianças por horário. Garanta um momento longe das telas e perto da imaginação.',
    primaryAction: {
      label: 'Agendar um encontro',
      href: '#visite',
    },
    secondaryAction: {
      label: 'Tirar dúvidas no WhatsApp',
      href: '#faq',
    },
    tagline: 'Casa Pipoca · Arte viva, curiosidade solta e mãos na massa.',
  },

  rodape: {
    enabled: true,
    brandText: 'Casa Pipoca — Ateliê de arte e brincadeira infantil.',
    disclaimer:
      'Ambiente lúdico e seguro para experimentação de artes visuais, cerâmica e brincadeiras manuais.',
    links: [
      { label: 'O Ateliê', href: '#capitulos' },
      { label: 'Oficinas', href: '#servicos' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Visite', href: '#visite' },
      { label: 'Dúvidas', href: '#faq' },
      { label: 'UI Kit', href: '#uikit' },
    ],
    contactInfo: {
      address: '[endereço do ateliê]',
      hours: '[horário de funcionamento]',
      contact: '[contato]',
    },
    reducedMotionLabel: 'Reduzir animações',
    reducedMotionActiveLabel: 'Animações reduzidas',
    copyright: '© Casa Pipoca. Todos os direitos reservados. Projeto fictício para demonstração de design de interfaces.',
  },
} as const;

export type SiteContent = typeof siteContent;
