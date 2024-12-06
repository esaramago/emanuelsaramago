import { custom } from "astro:schema"

export const languages = {
  pt: 'Português',
  en: 'English',
}

export const defaultLang = 'pt'

export const ui = {
  pt: {
    title: 'Emanuel Saramago | Faço websites',
    description: 'Página pessoal de Emanuel Saramago. UI Design e Frontend-Development',
    hero: {
      heading1: 'Sou o Emanuel Saramago',
      heading2: 'e faço websites.',
      text1: 'Sou um designer e developer freelancer a trabalhar a partir de Lisboa.',
      text2: 'Com a ajuda de ferramentas fantásticas, crio experiências completas para si e para o seu negócio.',
    },
    services: {
      title: 'Como posso ajudar',
      items: [
        {
          title: 'UI Design',
          description: 'Faço o design do seu website.',
          tag: 'Design',
        },
        {
          title: 'Print Design',
          description: 'Faço os seus cartões pessoais, menu de restaurante, etc',
          tag: 'Design',
        },
        {
          title: 'Sites institucionais',
          description: 'Dou vida ao site do seu negócio.',
          tag: 'Development'
        },
        {
          title: 'Blogs',
          description: 'Faço com que as suas palavras se espalhem.',
          tag: 'Development'
        },
        {
          title: 'E-commerce',
          description: 'Faço com que venda online.',
          tag: 'Development'
        },
      ]
    },
    work: {
      title: 'Algum do meu trabalho',
      works: [
        {
          title: 'Associação Vale Grande',
          description: 'Atualização do site de uma associação cultural, feito com Wordpress.<br>Fiz algumas melhorias de design e à edição de conteúdos',
        },
        {
          title: 'Sóstratadores',
          description: 'Um site de fisioterapia ao domicílio, feito com Wordpress.<br>Fiz o logótipo, o design do site e o desenvolvimento.',
        },
        {
          title: 'Allianza',
          description: 'Redesign de um site de apoio à ferrovia ibérica, como voluntário.',
        },
        {
          title: 'Dantestamp',
          description: 'Uma loja online que vende arte feita com selos usados.<br>Feito com Vue.js.',
        },
        {
          title: 'Geotur',
          description: 'Site de uma agência de viagens espanhola feita com Nuxt.js.',
        },
        {
          title: 'Fito',
          description: 'Site com uma lista de localizações de árvores do Sistema de Informação de Fitossanidade Florestal.<br>Feito com Vue.js.',
        },
        {
          title: 'Geostar',
          description: 'Site da conhecida agência de viagens.<br>Fiquei responsável pelo código frontend',
        },
      ]
    },

    pricing: {
      title: 'Planos à sua medida',
      customPrice: 'Preço à medida',
      levels: [
        {
          title: 'Base',
          description: 'Website com o essencial',
          features: [
            'Design à medida',
            '3 páginas',
            'Formulário de contacto',
            'Domínio .com ou .pt (1 ano grátis)',
            'Email (1 ano grátis)',
            'Painel de administração',
            'Ferramentas SEO',
          ],
          price: 300,
        },
        {
          title: 'Avançado',
          description: 'Para quem quer chegar mais longe',
          features: [
            'Design à medida',
            'Páginas ilimitadas',
            'Formulário de contacto avançado',
            'Domínio .com ou .pt (1 ano grátis)',
            'Email (1 ano grátis)',
            'Painel de administração',
            'Ferramentas SEO',
          ],
          price: 1500,
        },
        {
          title: 'Profissional',
          description: 'Leve a sua empresa a outro nível',
          features: [
            'Design à medida',
            'Páginas ilimitadas',
            'Formulários de contacto avançados',
            'Domínio .com ou .pt (1 ano grátis)',
            'Email (1 ano grátis)',
            'Painel de administração',
            'Ferramentas SEO',
            'Loja online',
            'E mais...'
          ]
        }
      ]
    },

    brands: {
      title: 'Marcas com que trabalhei',
    },

    technologies: {
      title: 'Tecnologias que uso',
    },

    interested: 'Interessado?',
    contactme: 'Contacte-me',
    andmore: 'E mais...',
    from: 'desde',
    copyright: 'emanuelsaramago © Todos os direiros reservados',

    email: {
      subject: 'Contacto de emanuelsaramago.com',
      body: 'Olá Emanuel, estou a contactar para...'
    },
  },
  en: {
    title: 'Emanuel Saramago | I make websites',
    description: 'Personal page of Emanuel Saramago. UI Design and Frontend-Development',
    hero: {
      heading1: 'I am Emanuel Saramago',
      heading2: 'and I make websites.',
      text1: 'I am a freelance designer and developer working from Lisbon.',
      text2: 'With the help of fantastic tools, I create complete experiences for you and your business.',
    },
    services: {
      title: 'How can I help',
      items: [
        {
          title: 'UI Design',
          description: 'I design your website.',
          tag: 'Design',
        },
        {
          title: 'Print Design',
          description: 'I make your business cards, restaurant menu, etc.',
          tag: 'Design',
        },
        {
          title: 'Institutional websites',
          description: 'I bring your business website to life.',
          tag: 'Development'
        },
        {
          title: 'Blogs',
          description: 'I make your words spread.',
          tag: 'Development'
        },
        {
          title: 'E-commerce',
          description: 'I make you sell online.',
          tag: 'Development'
        },
      ]
    },
    work: {
      title: 'Some of my work',
      works: [
        {
          title: 'Associação Vale Grande',
          description: 'Update of a cultural association website, made with Wordpress.<br>I made some design improvements and content editing',
        },
        {
          title: 'Sóstratadores',
          description: 'A home physiotherapy website, made with Wordpress.<br>I made the logo, the site design and the development.',
        },
        {
          title: 'Allianza',
          description: 'Redesign of a website to support the Iberian railway, as a volunteer.',
        },
        {
          title: 'Dantestamp',
          description: 'An online store that sells art made with used stamps.<br>Made with Vue.js.',
        },
        {
          title: 'Geotur',
          description: 'Website of a Spanish travel agency made with Nuxt.js.',
        },
        {
          title: 'Fito',
          description: 'Website with a list of tree locations from the Forest Phytosanitary Information System.<br>Made with Vue.js.',
        },
        {
          title: 'Geostar',
          description: 'Website of the well-known travel agency.<br>I was responsible for the frontend code',
        },
      ]
    },
    pricing: {
      title: 'Plans tailored to you',
      customPrice: 'Custom price',
      levels: [
        {
          title: 'Base',
          description: 'Website with the essentials',
          features: [
            'Custom design',
            '3 pages',
            'Contact form',
            'Domain .com or .pt (1 year free)',
            'Email (1 year free)',
            'Administration panel',
            'SEO tools',
          ],
          price: 300,
        },
        {
          title: 'Advanced',
          description: 'For those who want to go further',
          features: [
            'Custom design',
            'Unlimited pages',
            'Advanced contact form',
            'Domain .com or .pt (1 year free)',
            'Email (1 year free)',
            'Administration panel',
            'SEO tools',
          ],
          price: 1500,
        },
        {
          title: 'Professional',
          description: 'Take your company to another level',
          features: [
            'Custom design',
            'Unlimited pages',
            'Advanced contact forms',
            'Domain .com or .pt (1 year free)',
            'Email (1 year free)',
            'Administration panel',
            'SEO tools',
            'Online store',
            'And more...'
          ]
        }
      ]
    },
    brands: {
      title: 'Brands I worked with'
    },
    technologies: {
      title: 'Technologies I use'
    },
    interested: 'Interested?',
    andmore: 'And more...',
    from: 'from',
    contactme: 'Contact me',
    copyright: 'emanuelsaramago © All rights reserved',

    email: {
      subject: 'Contact from emanuelsaramago.com',
      body: 'Hello Emanuel, I am contacting you to...'
    },
  },
} as const