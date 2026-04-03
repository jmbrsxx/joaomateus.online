  import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'pt' | 'es' | 'de' | 'fr';

// Import images as assets for proper Vite handling
import gardeningLandingPage from '/images/GardeningLandingPage.png';
import dentistryClinics from '/images/DentistryClinics.png';
import encanadorFix from '/images/EncanadorFix.png';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}

const defaultLang: Lang = 'pt';

export const I18nContext = createContext<I18nContextValue>({
  lang: defaultLang,
  setLang: () => {},
  t: (p: string) => p,
});

// Complete translations object
const translations: Record<Lang, Record<string, any>> = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      bookCall: 'Book a Call',
    },
    hero: {
      badge: 'Full Stack Web Developer',
      title: 'I Create Modern, Fast and Responsive Websites for Companies',
      subtitle: 'Custom websites, functional and focused on performance and usability. Each project is developed with attention to structure and efficiency.',
      bookCall: 'Book a Strategy',
      viewWork: 'View My Work',
      stats: {
        projects: 'Projects Delivered',
        experience: 'Years Experience',
      },
      visualText: 'Revenue Growth Systems',
    },
    chatbot: {
      title: 'AI Assistant',
      subtitle: 'Online now',
      welcome: "Hi! I'm João's AI assistant. How can I help you today? Feel free to ask about services, pricing, or projects.",
      placeholder: 'Type your message...',
      quickQuestions: {
        label: 'Quick questions:',
        price: 'How much do projects cost?',
        time: 'How long does a project take?',
        projects: 'What kind of projects do you work on?',
        contact: 'How can I contact you?'
      },
      responses: {
        greeting: "Hello! Nice to meet you. I'm here to help with any questions about services, projects or how we can work together. What would you like to know?",
        thanks: "You're welcome! Would you like to know anything else? I'm happy to help!",
        price: "Project costs vary from $15K to $150K+ depending on scope and complexity. I charge based on project scope, not hourly rates, because we're both focused on results. Let's schedule a call to discuss your specific needs!",
        project: "I work with custom website development, landing pages and basic integrations. From responsive websites to conversion pages - I build functional web solutions.",
        time: "Generally 8-12 weeks from discovery to launch. Week 1-2: Deep discovery. Week 3-8: Design and construction. Week 9+: Launch and optimization. Timeline depends on scope.",
        website: "I build modern, fast and responsive websites. Each site is optimized for performance and usability. Want to see some examples?",
        contact: "You can book a strategy directly from this site, or send a message through the contact form. I generally respond within 24 hours on business days.",
        default: "That's a great question! I'd love to discuss this with you in a call. You can book a free strategy call to talk about your specific needs and see how I can help your business grow."
      }
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm João Mateus, a full stack web developer focused on creating fast, modern and functional websites.",
        "I have experience in front-end and back-end, developing complete projects from design to implementation.",
        "My goal is to help companies have a professional digital presence through well-structured, responsive websites prepared for growth."
      ],
      stats: { years: 'Years Experience', projects: 'Projects Delivered' },
      focus: 'My Focus',
      focusDesign: 'Design',
      focusDesignDesc: 'Modern and intuitive interfaces.',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Fast sites that improve experience and increase conversions.',
      focusConversion: 'Conversion',
      focusConversionDesc: 'Strategies to transform visitors into customers.',
      focusUX: 'User Experience',
      focusUXDesc: 'Simple and engaging navigation from start to finish.',
    },
    services: {
      heading: 'What I Do',
      sub: 'Services focused on professional and efficient web development.',
      items: [
        { title: 'Website Development', desc: 'Creation of professional, fast and responsive websites for companies.' },
        { title: 'Landing Pages', desc: 'Pages focused on conversion for customer acquisition.' },
        { title: 'Basic Integrations', desc: 'Forms, WhatsApp, email and simple APIs.' },
        { title: 'Performance Optimization', desc: 'Improvement of speed and user experience.' }
      ]
    },
    projects: {
      heading: 'Demonstrative Projects',
      sub: 'Projects developed to demonstrate my web development skills.',
      subtitle: 'A collection of projects that show my ability to create modern and functional websites.',
      description: 'Demonstrative projects with modern design, responsive layout and complete functionality.',
      features: ['Responsive', 'Modern Design', 'Functional'],
      viewWebsite: 'View Project',
      problemHeading: 'The Problem',
      solutionHeading: 'Solution',
      resultHeading: 'Result',
        items: [
          { title: 'Gardening Landing Page', client: 'Project: Green Landscaping', image: gardeningLandingPage, category: 'Landing Page', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Dental Clinic', client: 'Project: Modern Dentist', image: dentistryClinics, category: 'Health', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Plumbing Services', client: 'Project: 24h Plumber', image: encanadorFix, category: 'Services', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' },
          { title: 'Restaurant Website', client: 'Project: Digital Menu', image: gardeningLandingPage, category: 'Restaurant', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Real Estate Platform', client: 'Project: Property Search', image: dentistryClinics, category: 'Real Estate', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Health Website', client: 'Project: Fitness Center', image: encanadorFix, category: 'Health', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' }
        ]
    },
    howIWork: {
      heading: 'How I Work',
      sub: "A simple, direct and focused process on taking your idea off paper and putting your website online with quality.",
      steps: [
        { title: 'Initial Presentation', desc: 'I send a preliminary website model for you to visualize the structure and potential of your project. This helps align expectations from the beginning.', timeline: '' },
        { title: 'Strategic Alignment', desc: 'We have a conversation to understand exactly how you want the website: functionalities, style, pages and objectives. Everything is defined together to ensure the final result is exactly what you need.', timeline: '' },
        { title: 'Agreement Formalization', desc: 'I create a clear and objective contract to define deadlines, values and deliveries. Security and transparency for both sides.', timeline: '' },
        { title: 'Website Development', desc: 'I build the website according to everything that was aligned. Total focus on quality, performance and a good user experience. During this stage, you can follow the progress.', timeline: '' },
        { title: 'Delivery and Publication', desc: 'The website is delivered ready for use. If you already have hosting, I configure and connect to your domain. If you don\'t have it, I can host the website for you. Your website goes live working perfectly.', timeline: '' }
      ],
      keyPoints: {
        transparent: 'Transparent Communication',
        transparentDesc: 'You follow the process and know exactly what is being done.',
        dataDriven: 'Focus on Result',
        dataDrivenDesc: 'The goal is not just having a beautiful website, but a website that works and represents your business well.'
      }
    },
    testimonials: { 
      heading: 'What Clients Say', 
      sub: 'Real feedback from businesses that have seen significant growth after working together.', 
      items: [
        { text: 'João rebuilt our website and the results were immediate. Within 3 months, we went from 200 monthly leads to 1,200. He doesn\'t just build websites — he builds revenue engines.', author: 'Marcus Chen', title: 'CEO, SaaS Company', result: '$2.4M additional revenue' },
        { text: 'The AI automation system he built saved us $18K per month in support costs. Best investment we\'ve made. João thinks like a business owner, not like a developer.', author: 'Sarah Mitchell', title: 'Founder, Service Business', result: '$216K annual savings' },
        { text: 'Our conversion rate went from 2% to 8.7%. João ran tests on every element of the funnel and optimized relentlessly. The data doesn\'t lie.', author: 'David Lopez', title: 'Marketing Director, E-Commerce', result: '+340% conversion increase' },
        { text: 'Working with João is different. He asked about our business metrics before suggesting anything. Built an agency website that generates 250+ qualified leads monthly.', author: 'Emma Rodriguez', title: 'Partner, Marketing Agency', result: '250+ monthly qualified leads' },
        { text: 'The website he built is lightning fast and converts like crazy. Page speed improved 65%, bounce rate cut in half. João understands the connection between speed and revenue.', author: 'James Wilson', title: 'E-Commerce Owner', result: '+65% speed improvement' },
        { text: 'João is a results-first operator. Every decision was based on data. We saw a 340% improvement in key metrics. Phenomenal work.', author: 'Lisa Anderson', title: 'VP Operations, Tech Startup', result: '$5M+ revenue generated' }
      ]
    },
    faq: {
      heading: 'Frequently Asked Questions',
      sub: 'Real answers to the questions I get asked most.',
      items: [
        { question: 'Who do you work with?', answer: 'I work with business owners who want to have a professional presence on the internet and improve their results.' },
        { question: 'What services do you offer?', answer: 'I am a full stack developer and develop complete websites and web applications, including integrations with systems, databases and APIs.' },
        { question: 'How much does a project cost?', answer: 'The project value is $500. Hosting and service maintenance cost $100 per month. This monthly value does not apply if you already have a hosting or maintenance service.' },
        { question: 'How long does a project take?', answer: 'On average, between 1 to 2 weeks, depending on complexity.' },
        { question: 'Do you offer support after launch?', answer: 'Yes. I offer continuous support through the monthly plan, ensuring the website continues to work, updated and optimized.' }
      ]
    },
    contact: {
      heading: "Let's Work Together",
      sub: "Let's talk on WhatsApp to discuss your project and see how I can help you.",
      email: 'Email',
      bookCall: 'Talk on WhatsApp',
      chat: 'Quick Contact',
      responseTime: 'Response Time:',
      responseTimeText: 'Within 24 hours on business days.',
      availability: 'Next Availability:',
      availabilityText: '2-4 weeks depending on current projects.',
      form: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company',
        message: 'Tell me about your project',
        submit: 'Send Message',
        thankYou: "Message Sent! I'll get back to you within 24 hours.",
        placeholder: { name: 'Your name', email: 'your@email.com', company: 'Company name', message: 'What are you looking to build?' },
        projectType: 'Project Type',
        selectProject: 'Select a project type',
        website: 'Website Development',
        ai: 'AI Automation',
        funnel: 'Sales Funnel',
        optimization: 'Conversion Optimization',
        other: 'Other'
      },
      linkedin: 'LinkedIn',
      linkedinText: 'Connect with me'
    },
    footer: {
      brandName: 'João Mateus',
      brandDesc: 'Website development focused on performance and conversion.',
      services: 'Services',
      servicesList: ['Website Development', 'Conversion Optimization', 'User Experience'],
      navigation: 'Navigation',
      navigationList: ['About', 'Portfolio', 'Contact', 'Blog'],
      contact: 'Contact',
      copyright: '© 2026 João Mateus. All rights reserved.'
    },
  },
  pt: {
    nav: {
      work: 'Trabalhos',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
      bookCall: 'Agendar Chamada',
    },
    hero: {
      badge: 'Desenvolvedor Web Full Stack',
      title: 'Crio sites modernos, rápidos e responsivos para empresas',
      subtitle: 'Sites personalizados, funcionais e focados em performance e usabilidade. Cada projeto é desenvolvido com atenção à estrutura e eficiência.',
      bookCall: 'Agendar uma Estratégia',
      viewWork: 'Veja Meu Trabalho',
      stats: {
        projects: 'Projetos Desenvolvidos',
        experience: 'Anos de Experiência',
      },
      visualText: 'Sistemas de Crescimento de Receita',
    },
    chatbot: {
      title: 'Assistente de IA',
      subtitle: 'Online agora',
      welcome: "Olá! Sou o assistente de IA do João. Como posso ajudar você hoje? Sinta-se à vontade para perguntar sobre serviços, preços ou projetos.",
      placeholder: 'Digite sua mensagem...',
      quickQuestions: {
        label: 'Perguntas rápidas:',
        price: 'Quanto custam os projetos?',
        time: 'Quanto tempo leva um projeto?',
        projects: 'Que tipos de projetos você trabalha?',
        contact: 'Como posso entrar em contato?'
      },
      responses: {
        greeting: "Olá! Prazer em conhecê-lo. Estou aqui para ajudar com qualquer dúvida sobre serviços, projetos ou como podemos trabalhar juntos. O que você gostaria de saber?",
        thanks: "De nada! Gostaria de saber mais alguma coisa? Estou feliz em ajudar!",
        price: "Os custos dos projetos variam de $15K a $150K+ dependendo do escopo e complexidade. Cobro baseado no escopo do projeto, não por hora, porque ambos focamos em resultados. Vamos agendar uma chamada para discutir suas necessidades específicas!",
        project: "Trabalho com desenvolvimento de sites personalizados, landing pages e integrações básicas. De sites responsivos a páginas de conversão - construo soluções web funcionais.",
        time: "Geralmente 8-12 semanas do discovery ao lançamento. Semana 1-2: Discovery profundo. Semana 3-8: Design e construção. Semana 9+: Lançamento e otimização. O cronograma depende do escopo.",
        website: "Construo sites modernos, rápidos e responsivos. Cada site é otimizado para performance e usabilidade. Quer ver alguns exemplos?",
        contact: "Você pode agendar uma estratégia diretamente deste site, ou enviar uma mensagem pelo formulário de contato. Geralmente respondo dentro de 24 horas em dias úteis.",
        default: "Essa é uma ótima pergunta! Adoraria discutir isso com você em uma chamada. Você pode agendar uma chamada estratégica gratuita para falar sobre suas necessidades específicas e ver como posso ajudar seu negócio a crescer."
      }
    },
    about: {
      heading: 'Sobre Mim',
      paragraphs: [
        "Sou João Mateus, desenvolvedor web full stack com foco na criação de sites rápidos, modernos e funcionais.",
        "Tenho experiência em front-end e back-end, desenvolvendo projetos completos desde o design até a implementação.",
        "Meu objetivo é ajudar empresas a terem presença digital profissional através de sites bem estruturados, responsivos e preparados para crescimento."
      ],
      stats: { years: 'Anos de experiência', projects: 'Projetos desenvolvidos' },
      focus: 'Meu Foco',
      focusDesign: 'Design',
      focusDesignDesc: 'Interfaces modernas e intuitivas.',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Sites rápidos que melhoram a experiência e aumentam conversões.',
      focusConversion: 'Conversão',
      focusConversionDesc: 'Estratégias para transformar visitantes em clientes.',
      focusUX: 'Experiência do Usuário',
      focusUXDesc: 'Navegação simples e envolvente do início ao fim.',
    },
    services: {
      heading: 'O que eu faço',
      sub: 'Serviços focados em desenvolvimento web profissional e eficiente.',
      items: [
        { title: 'Desenvolvimento de Sites', desc: 'Criação de sites profissionais, rápidos e responsivos para empresas.' },
        { title: 'Landing Pages', desc: 'Páginas focadas em conversão para captação de clientes.' },
        { title: 'Integrações Básicas', desc: 'Formulários, WhatsApp, e-mail e APIs simples.' },
        { title: 'Otimização de Performance', desc: 'Melhoria de velocidade e experiência do usuário.' }
      ]
    },
    projects: {
      heading: 'Projetos Demonstrativos',
      sub: 'Projetos desenvolvidos para demonstrar minhas habilidades em desenvolvimento web.',
      subtitle: 'Uma coleção de projetos que mostram minha capacidade de criar sites modernos e funcionais.',
      description: 'Projetos demonstrativos com design moderno, layout responsivo e funcionalidade completa.',
      features: ['Responsivo', 'Design Moderno', 'Funcional'],
      viewWebsite: 'Ver Projeto',
      problemHeading: 'O Problema',
      solutionHeading: 'Solução',
      resultHeading: 'Resultado',
        items: [
          { title: 'Landing page para Jardineiros', client: 'Projeto: Paisagismo Verde', image: gardeningLandingPage, category: 'Página de Destino', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Clínica Odontológica', client: 'Projeto: Dentista Moderna', image: dentistryClinics, category: 'Saúde', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Serviços de Encanamento', client: 'Projeto: Encanador 24h', image: encanadorFix, category: 'Serviços', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' },
          { title: 'Site de Restaurante', client: 'Projeto: Cardápio Digital', image: gardeningLandingPage, category: 'Restaurante', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Plataforma Imobiliária', client: 'Projeto: Busca de Imóveis', image: dentistryClinics, category: 'Imobiliário', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Site de Saúde', client: 'Projeto: Centro de Fitness', image: encanadorFix, category: 'Saúde', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' }
        ]
    },
    howIWork: {
      heading: 'Como Eu Trabalho',
      sub: "Um processo simples, direto e focado em tirar sua ideia do papel e colocar seu site no ar com qualidade.",
      steps: [
        { title: 'Apresentação Inicial', desc: 'Envio um modelo prévio de site para você visualizar a estrutura e o potencial do seu projeto. Isso ajuda a alinhar expectativas desde o início.' },
        { title: 'Alinhamento Estratégico', desc: 'Realizamos uma conversa para entender exatamente como você quer o site: funcionalidades, estilo, páginas e objetivos. Tudo é definido em conjunto para garantir que o resultado final seja exatamente o que você precisa.' },
        { title: 'Formalização do Acordo', desc: 'Crio um contrato claro e objetivo para definir prazos, valores e entregas. Segurança e transparência para ambos os lados.' },
        { title: 'Desenvolvimento do Site', desc: 'Construo o site conforme tudo que foi alinhado. Foco total em qualidade, performance e uma boa experiência para o usuário. Durante essa etapa, você pode acompanhar o progresso.' },
        { title: 'Entrega e Publicação', desc: 'O site é entregue pronto para uso. Se você já tiver hospedagem, faço a configuração e conexão com seu domínio. Se você não tiver, posso hospedar o site para você. Seu site vai ao ar funcionando perfeitamente.' }
      ],
      keyPoints: {
        transparent: 'Comunicação Transparente',
        transparentDesc: 'Você acompanha o processo e sabe exatamente o que está sendo feito.',
        dataDriven: 'Foco no Resultado',
        dataDrivenDesc: 'O objetivo não é só ter um site bonito, mas um site que funcione e represente bem o seu negócio.'
      }
    },
    testimonials: { 
      heading: 'O que dizem os clientes', 
      sub: 'Feedback real de negócios que viram crescimento significativo após trabalharem comigo.', 
      items: [
        { text: 'João reconstruiu nosso site e os resultados foram imediatos. Em 3 meses, passamos de 200 leads mensais para 1.200. Ele não constrói sites — ele constrói motores de receita.', author: 'Marcus Chen', title: 'CEO, Empresa SaaS', result: '$2.4M receita adicional' },
        { text: 'O sistema de automação de IA que ele construiu nos economizou $18K por mês em custos de suporte. Melhor investimento que fizemos. João pensa como dono de negócio, não como desenvolvedor.', author: 'Sarah Mitchell', title: 'Fundadora, Negócio de Serviços', result: '$216K economia anual' },
        { text: 'Nossa taxa de conversão foi de 2% para 8,7%. João executou testes em cada elemento do funil e otimizou sem parar. Os dados não mentem.', author: 'David Lopez', title: 'Diretor de Marketing, E-Commerce', result: '+340% aumento de conversão' },
        { text: 'Trabalhar com João é diferente. Ele perguntou sobre nossas métricas de negócio antes de sugerir qualquer coisa. Construiu um site de agência que gera 250+ leads qualificados mensais.', author: 'Emma Rodriguez', title: 'Sócia, Agência de Marketing', result: '250+ leads qualificados mensais' },
        { text: 'O site que ele construiu é extremamente rápido e converte como louco. Velocidade da página melhorou 65%, taxa de rejeição reduzida pela metade. João entende a conexão entre velocidade e receita.', author: 'James Wilson', title: 'Dono de E-Commerce', result: '+65% melhoria de velocidade' },
        { text: 'João é um operador focado em resultados. Toda decisão foi baseada em dados. Vimos uma melhoria de 340% nas métricas principais. Trabalho fenomenal.', author: 'Lisa Anderson', title: 'VP Operações, Startup de Tecnologia', result: '$5M+ receita gerada' }
      ]
    },
    faq: {
      heading: 'Perguntas Frequentes',
      sub: 'Respostas reais para as perguntas que mais recebo.',
      items: [
        { question: 'Com quem você trabalha?', answer: 'Trabalho com proprietários de negócios que querem ter uma presença profissional na internet e melhorar seus resultados.' },
        { question: 'Quais serviços você oferece?', answer: 'Sou desenvolvedor full stack e desenvolvo sites e aplicações web completas, incluindo integrações com sistemas, bancos de dados e APIs.' },
        { question: 'Quanto custa um projeto?', answer: 'O valor do projeto é de R$500. A hospedagem e manutenção do serviço custam R$100 por mês. Esse valor mensal não se aplica caso você já possua um serviço de hospedagem ou manutenção.' },
        { question: 'Quanto tempo leva um projeto?', answer: 'Em média, entre 1 a 2 semanas, dependendo da complexidade.' },
        { question: 'Você oferece suporte após o lançamento?', answer: 'Sim. Ofereço suporte contínuo através do plano mensal, garantindo que o site continue funcionando, atualizado e otimizado.' }
      ]
    },
    contact: {
      heading: 'Vamos Trabalhar Juntos',
      sub: "Vamos conversar no WhatsApp para discutir seu projeto e ver como posso ajudá-lo.",
      email: 'Email',
      bookCall: 'Falar no WhatsApp',
      chat: 'Contato Rápido', 
      responseTime: 'Tempo de Resposta:',
      responseTimeText: 'Em até 24 horas em dias úteis.',
      availability: 'Próxima Disponibilidade:',
      availabilityText: '2-4 semanas dependendo dos projetos atuais.',
      form: { 
        name: 'Nome Completo', 
        email: 'Email', 
        company: 'Empresa', 
        message: 'Conte-me sobre seu projeto', 
        submit: 'Enviar Mensagem', 
        thankYou: "Mensagem Enviada! Retornarei em até 24 horas.", 
        placeholder: { name: 'Seu nome', email: 'seu@email.com', company: 'Nome da empresa', message: 'O que você gostaria de construir?' },
        projectType: 'Tipo de Projeto',
        selectProject: 'Selecione um tipo de projeto',
        website: 'Desenvolvimento de Site',
        ai: 'Automação de IA',
        funnel: 'Funil de Vendas',
        optimization: 'Otimização de Conversão',
        other: 'Outro'
      },
      linkedin: 'LinkedIn',
      linkedinText: 'Conecte-se comigo'
    },
    footer: {
      brandName: 'João Mateus',
      brandDesc: 'Desenvolvimento de sites focados em performance e conversão.',
      services: 'Serviços',
      servicesList: ['Desenvolvimento de Sites', 'Otimização de Conversão', 'Experiência do Usuário'],
      navigation: 'Navegação',
      navigationList: ['Sobre', 'Portfólio', 'Contato', 'Blog'],
      contact: 'Contato',
      copyright: '© 2026 João Mateus. Todos os direitos reservados.'
    },
  },
  es: {
    nav: {
      work: 'Trabajo',
      services: 'Servicios',
      about: 'Sobre',
      contact: 'Contacto',
      bookCall: 'Reservar Llamada',
    },
    hero: {
      badge: 'Desarrollador Web Full Stack',
      title: 'Creo sitios web modernos, rápidos y responsivos para empresas',
      subtitle: 'Sitios web personalizados, funcionales y enfocados en rendimiento y usabilidad. Cada proyecto se desarrolla con atención a la estructura y eficiencia.',
      bookCall: 'Reservar una Estrategia',
      viewWork: 'Ver Mi Trabajo',
      stats: {
        projects: 'Proyectos Entregados',
        experience: 'Años de Experiencia',
      },
      visualText: 'Sistemas de Crecimiento de Receita',
    },
    chatbot: {
      title: 'Asistente de IA',
      subtitle: 'En línea ahora',
      welcome: "¡Hola! Soy el asistente de IA de João. ¿Cómo puedo ayudarte hoy? No dudes en preguntar sobre servicios, precios o proyectos.",
      placeholder: 'Escribe tu mensaje...',
      quickQuestions: {
        label: 'Preguntas rápidas:',
        price: '¿Cuánto cuestan los proyectos?',
        time: '¿Cuánto tiempo toma un proyecto?',
        projects: '¿Qué tipo de proyectos trabajas?',
        contact: '¿Cómo puedo contactarte?'
      },
      responses: {
        greeting: "¡Hola! Mucho gusto en conocerte. Estoy aquí para ayudar con cualquier duda sobre servicios, proyectos o cómo podemos trabajar juntos. ¿Qué te gustaría saber?",
        thanks: "¡De nada! ¿Te gustaría saber algo más? Estoy feliz de ayudar.",
        price: "Los costos de los proyectos varían de $15K a $150K+ dependiendo del alcance y complejidad. Cobro basado en el alcance del proyecto, no por hora, porque ambos nos enfocamos en resultados. ¡Agendemos una llamada para discutir tus necesidades específicas!",
        project: "Trabajo con desarrollo de sitios web personalizados, páginas de destino e integraciones básicas. Desde sitios web responsivos hasta páginas de conversión - construyo soluciones web funcionales.",
        time: "Generalmente 8-12 semanas desde el descubrimiento hasta el lanzamiento. Semana 1-2: Descubrimiento profundo. Semana 3-8: Diseño y construcción. Semana 9+: Lanzamiento y optimización. El cronograma depende del alcance.",
        website: "Construyo sitios web modernos, rápidos y responsivos. Cada sitio está optimizado para rendimiento y usabilidad. ¿Quieres ver algunos ejemplos?",
        contact: "Puedes agendar una estrategia directamente desde este sitio, o enviar un mensaje a través del formulario de contacto. Generalmente respondo dentro de 24 horas en días hábiles.",
        default: "¡Esa es una excelente pregunta! Me encantaría discutir esto contigo en una llamada. Puedes agendar una llamada estratégica gratuita para hablar sobre tus necesidades específicas y ver cómo puedo ayudar a tu negocio a crecer."
      }
    },
    about: {
      heading: 'Sobre Mí',
      paragraphs: [
        "Soy João Mateus, desarrollador web full stack enfocado en crear sitios web rápidos, modernos y funcionales.",
        "Tengo experiencia en front-end y back-end, desarrollando proyectos completos desde el diseño hasta la implementación.",
        "Mi objetivo es ayudar a las empresas a tener una presencia digital profesional a través de sitios web bien estructurados, responsivos y preparados para el crecimiento."
      ],
      stats: { years: 'Años de experiencia', projects: 'Proyectos desarrollados' },
      focus: 'Mi Enfoque',
      focusDesign: 'Diseño',
      focusDesignDesc: 'Interfaces modernas e intuitivas.',
      focusPerformance: 'Rendimiento',
      focusPerformanceDesc: 'Sitios rápidos que mejoran la experiencia y aumentan conversiones.',
      focusConversion: 'Conversión',
      focusConversionDesc: 'Estrategias para transformar visitantes en clientes.',
      focusUX: 'Experiencia del Usuario',
      focusUXDesc: 'Navegación simple y atractiva del inicio al fin.',
    },
    services: {
      heading: 'Lo que hago',
      sub: 'Servicios enfocados en desarrollo web profesional y eficiente.',
      items: [
        { title: 'Desarrollo de Sitios Web', desc: 'Creación de sitios web profesionales, rápidos y responsivos para empresas.' },
        { title: 'Páginas de Destino', desc: 'Páginas enfocadas en conversión para captación de clientes.' },
        { title: 'Integraciones Básicas', desc: 'Formularios, WhatsApp, email y APIs simples.' },
        { title: 'Optimización de Rendimiento', desc: 'Mejora de velocidad y experiencia del usuario.' }
      ]
    },
    projects: {
      heading: 'Proyectos Demostrativos',
      sub: 'Proyectos desarrollados para demostrar mis habilidades en desarrollo web.',
      subtitle: 'Una colección de proyectos que muestra mi capacidad para crear sitios web modernos y funcionales.',
      description: 'Proyectos demostrativos con diseño moderno, layout responsivo y funcionalidad completa.',
      features: ['Responsivo', 'Diseño Moderno', 'Funcional'],
      viewWebsite: 'Ver Proyecto',
      problemHeading: 'El Problema',
      solutionHeading: 'Solución',
      resultHeading: 'Resultado',
        items: [
          { title: 'Página de Destino para Jardineros', client: 'Proyecto: Paisajismo Verde', image: gardeningLandingPage, category: 'Página de Destino', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Clínica Odontológica', client: 'Proyecto: Dentista Moderna', image: dentistryClinics, category: 'Salud', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Servicios de Plomería', client: 'Proyecto: Plomero 24h', image: encanadorFix, category: 'Servicios', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' },
          { title: 'Sitio Web de Restaurante', client: 'Proyecto: Menú Digital', image: gardeningLandingPage, category: 'Restaurante', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Plataforma Inmobiliaria', client: 'Proyecto: Búsqueda de Inmuebles', image: dentistryClinics, category: 'Inmobiliario', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Sitio Web de Salud', client: 'Proyecto: Centro de Fitness', image: encanadorFix, category: 'Salud', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' }
        ]
    },
    howIWork: {
      heading: 'Cómo Trabajo',
      sub: "Un proceso simple, directo y enfocado en llevar tu idea del papel y poner tu sitio web en línea con calidad.",
      steps: [
        { title: 'Presentación Inicial', desc: 'Envío un modelo preliminar de sitio web para que visualices la estructura y el potencial de tu proyecto. Esto ayuda a alinear expectativas desde el inicio.', timeline: '' },
        { title: 'Alineación Estratégica', desc: 'Realizamos una conversación para entender exactamente cómo quieres el sitio web: funcionalidades, estilo, páginas y objetivos. Todo se define en conjunto para asegurar que el resultado final sea exactamente lo que necesitas.', timeline: '' },
        { title: 'Formalización del Acuerdo', desc: 'Creo un contrato claro y objetivo para definir plazos, valores y entregas. Seguridad y transparencia para ambas partes.', timeline: '' },
        { title: 'Desarrollo del Sitio Web', desc: 'Construyo el sitio web conforme a todo lo que se alineó. Enfoque total en calidad, rendimiento y una buena experiencia para el usuario. Durante esta etapa, puedes seguir el progreso.', timeline: '' },
        { title: 'Entrega y Publicación', desc: 'El sitio web se entrega listo para usar. Si ya tienes hosting, configuro y conecto a tu dominio. Si no tienes, puedo alojar el sitio web para ti. Tu sitio web sale al aire funcionando perfectamente.', timeline: '' }
      ],
      keyPoints: {
        transparent: 'Comunicación Transparente',
        transparentDesc: 'Sigues el proceso y sabes exactamente qué se está haciendo.',
        dataDriven: 'Enfoque en el Resultado',
        dataDrivenDesc: 'El objetivo no es solo tener un sitio web bonito, sino un sitio web que funcione y represente bien tu negocio.'
      }
    },
    testimonials: { 
      heading: 'Lo que dicen los clientes', 
      sub: 'Retroalimentación real de negocios que han visto crecimiento significativo después de trabajar conmigo.', 
      items: [
        { text: 'João reconstruyó nuestro sitio web y los resultados fueron inmediatos. En 3 meses, pasamos de 200 leads mensuales a 1,200. Él no construye sitios web — construye motores de ingresos.', author: 'Marcus Chen', title: 'CEO, Empresa SaaS', result: '$2.4M ingresos adicionales' },
        { text: 'El sistema de automatización de IA que construyó nos ahorró $18K al mes en costos de soporte. La mejor inversión que hemos hecho. João piensa como dueño de un negocio, no como un desarrollador.', author: 'Sarah Mitchell', title: 'Fundadora, Negocio de Servicios', result: '$216K ahorros anuales' },
        { text: 'Nuestra tasa de conversión pasó del 2% al 8.7%. João ejecutó pruebas en cada elemento del funnel y optimizó sin cesar. Los datos no mienten.', author: 'David Lopez', title: 'Director de Marketing, E-Commerce', result: '+340% aumento de conversión' },
        { text: 'Trabajar con João es diferente. Preguntó sobre nuestras métricas de negocio antes de sugerir cualquier cosa. Construyó un sitio web de agencia que genera 250+ leads calificados mensuales.', author: 'Emma Rodriguez', title: 'Socia, Agencia de Marketing', result: '250+ leads calificados mensuales' },
        { text: 'El sitio web que construyó es lightning rápido y convierte como loco. Velocidad de página mejoró 65%, tasa de rebote reducida a la mitad. João entiende la conexión entre velocidad e ingresos.', author: 'James Wilson', title: 'Dueño de E-Commerce', result: '+65% mejora de velocidad' },
        { text: 'João es un operador enfocado en resultados. Cada decisión fue basada en datos. Vimos una mejora del 340% en métricas clave. Trabajo fenomenal.', author: 'Lisa Anderson', title: 'VP de Operaciones, Startup Tecnológica', result: '$5M+ ingresos generados' }
      ]
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      sub: 'Respuestas reales a las preguntas que más me preguntan.',
      items: [
        { question: '¿Con quién trabajas?', answer: 'Trabajo con propietarios de negocios que quieren tener una presencia profesional en internet y mejorar sus resultados.' },
        { question: '¿Qué servicios ofreces?', answer: 'Soy desarrollador full stack y desarrollo sitios web y aplicaciones web completas, incluyendo integraciones con sistemas, bases de datos y APIs.' },
        { question: '¿Cuánto cuesta un proyecto?', answer: 'El valor del proyecto es de $500. El hosting y mantenimiento del servicio cuestan $100 por mes. Este valor mensual no se aplica si ya tienes un servicio de hosting o mantenimiento.' },
        { question: '¿Cuánto tiempo toma un proyecto?', answer: 'En promedio, entre 1 a 2 semanas, dependiendo de la complejidad.' },
        { question: '¿Ofreces soporte después del lanzamiento?', answer: 'Sí. Ofrezco soporte continuo a través del plan mensual, asegurando que el sitio web continúe funcionando, actualizado y optimizado.' }
      ]
    },
    contact: {
      heading: 'Trabajemos Juntos',
      sub: "Hablemos en WhatsApp para discutir tu proyecto y ver cómo puedo ayudarte.",
      email: 'Email',
      bookCall: 'Hablar en WhatsApp',
      chat: 'Contacto Rápido',
      responseTime: 'Tiempo de Respuesta:',
      responseTimeText: 'Dentro de 24 horas en días hábiles.',
      availability: 'Próxima Disponibilidad:',
      availabilityText: '2-4 semanas dependiendo de proyectos actuales.',
      form: { 
        name: 'Nombre Completo', 
        email: 'Correo', 
        company: 'Empresa', 
        message: 'Cuéntame sobre tu proyecto', 
        submit: 'Enviar Mensaje', 
        thankYou: "¡Mensaje Enviado! Te responderé dentro de 24 horas.", 
        placeholder: { name: 'Tu nombre', email: 'tu@correo.com', company: 'Nombre de la empresa', message: '¿Qué te gustaría construir?' },
        projectType: 'Tipo de Proyecto',
        selectProject: 'Selecciona un tipo de proyecto',
        website: 'Desarrollo Web',
        ai: 'Automatización de IA',
        funnel: 'Funnel de Ventas',
        optimization: 'Optimización de Conversión',
        other: 'Otro'
      },
      linkedin: 'LinkedIn',
      linkedinText: 'Conéctate conmigo'
    },
    footer: {
      brandName: 'João Mateus',
      brandDesc: 'Desarrollo de sitios web enfocados en rendimiento y conversión.',
      services: 'Servicios',
      servicesList: ['Desarrollo de Sitios Web', 'Optimización de Conversión', 'Experiencia del Usuario'],
      navigation: 'Navegación',
      navigationList: ['Sobre', 'Portafolio', 'Contacto', 'Blog'],
      contact: 'Contacto',
      copyright: '© 2026 João Mateus. Todos los derechos reservados.'
    },
  },
  de: {
    nav: {
      work: 'Projekte',
      services: 'Dienstleistungen',
      about: 'Über',
      contact: 'Kontakt',
      bookCall: 'Anruf Buchen',
    },
    hero: {
      badge: 'Full Stack Web Entwickler',
      title: 'Ich erstelle moderne, schnelle und responsive Websites für Unternehmen',
      subtitle: 'Maßgeschneiderte Websites, funktional und fokussiert auf Leistung und Benutzerfreundlichkeit. Jedes Projekt wird mit Aufmerksamkeit für Struktur und Effizienz entwickelt.',
      bookCall: 'Strategie Buchen',
      viewWork: 'Meine Arbeit Sehen',
      stats: {
        projects: 'Projekte Abgeschlossen',
        experience: 'Jahre Erfahrung',
      },
      visualText: 'Systeme für Umsatzwachstum',
    },
    chatbot: {
      title: 'KI-Assistent',
      subtitle: 'Jetzt online',
      welcome: "Hallo! Ich bin Joãos KI-Assistent. Wie kann ich Ihnen heute helfen? Fragen Sie gerne nach Dienstleistungen, Preisen oder Projekten.",
      placeholder: 'Nachricht eingeben...',
      quickQuestions: {
        label: 'Schnelle Fragen:',
        price: 'Was kosten Projekte?',
        time: 'Wie lange dauert ein Projekt?',
        projects: 'An welchen Projekten arbeiten Sie?',
        contact: 'Wie kann ich Sie kontaktieren?'
      },
      responses: {
        greeting: "Hallo! Schön, Sie kennenzulernen. Ich bin hier, um bei Fragen zu Dienstleistungen, Projekten oder unserer Zusammenarbeit zu helfen. Was möchten Sie wissen?",
        thanks: "Gerne! Möchten Sie noch etwas wissen? Ich helfe gerne!",
        price: "Projektkosten variieren je nach Umfang und Komplexität von $15K bis $150K+. Ich berechne basierend auf dem Projektumfang, nicht stündlich, weil wir beide auf Ergebnisse fokussiert sind. Lassen Sie uns einen Anruf vereinbaren, um Ihre spezifischen Bedürfnisse zu besprechen!",
        project: "Ich arbeite mit maßgeschneiderten Website-Entwicklung, Landing-Pages und grundlegenden Integrationen. Von responsiven Websites bis zu Konversionsseiten - ich baue funktionelle Web-Lösungen.",
        time: "Im Allgemeinen 8-12 Wochen vom Discovery bis zum Launch. Woche 1-2: Tiefes Discovery. Woche 3-8: Design und Konstruktion. Woche 9+: Launch und Optimierung. Der Zeitplan hängt vom Umfang ab.",
        website: "Ich baue moderne, schnelle und responsive Websites. Jede Website ist für Leistung und Benutzerfreundlichkeit optimiert. Möchten Sie einige Beispiele sehen?",
        contact: "Sie können eine Strategie direkt von dieser Website aus buchen oder eine Nachricht über das Kontaktformular senden. Ich antworte im Allgemeinen innerhalb von 24 Stunden an Werktagen.",
        default: "Das ist eine großartige Frage! Ich würde das gerne mit Ihnen in einem Anruf besprechen. Sie können einen kostenlosen Strategieanruf vereinbaren, um Ihre spezifischen Bedürfnisse zu besprechen und zu sehen, wie ich Ihrem Unternehmen helfen kann zu wachsen."
      }
    },
    about: {
      heading: 'Über Mich',
      paragraphs: [
        "Ich bin João Mateus, Full Stack Web Entwickler fokussiert auf die Erstellung schneller, moderner und funktionaler Websites.",
        "Ich habe Erfahrung in Front-end und Back-end, entwickle komplette Projekte vom Design bis zur Implementierung.",
        "Mein Ziel ist es, Unternehmen zu helfen, eine professionelle digitale Präsenz durch gut strukturierte, responsive Websites zu haben, die für Wachstum bereit sind."
      ],
      stats: { years: 'Jahre Erfahrung', projects: 'Entwickelte Projekte' },
      focus: 'Mein Fokus',
      focusDesign: 'Design',
      focusDesignDesc: 'Moderne und intuitive Interfaces.',
      focusPerformance: 'Leistung',
      focusPerformanceDesc: 'Schnelle Websites, die die Erfahrung verbessern und Konversionen erhöhen.',
      focusConversion: 'Konversion',
      focusConversionDesc: 'Strategien, um Besucher in Kunden zu verwandeln.',
      focusUX: 'Benutzererfahrung',
      focusUXDesc: 'Einfache und ansprechende Navigation vom Anfang bis zum Ende.',
    },
    services: {
      heading: 'Was ich Tue',
      sub: 'Dienstleistungen fokussiert auf professionelle und effiziente Web-Entwicklung.',
      items: [
        { title: 'Website-Entwicklung', desc: 'Erstellung professioneller, schneller und responsiver Websites für Unternehmen.' },
        { title: 'Landing Pages', desc: 'Seiten fokussiert auf Konversion für Kundengewinnung.' },
        { title: 'Grundlegende Integrationen', desc: 'Formulare, WhatsApp, E-Mail und einfache APIs.' },
        { title: 'Leistungsoptimierung', desc: 'Verbesserung von Geschwindigkeit und Benutzererfahrung.' }
      ]
    },
    projects: {
      heading: 'Demonstrationsprojekte',
      sub: 'Projekte entwickelt, um meine Fähigkeiten in Web-Entwicklung zu demonstrieren.',
      subtitle: 'Eine Sammlung von Projekten, die meine Fähigkeit zeigt, moderne und funktionale Websites zu erstellen.',
      description: 'Demonstrationsprojekte mit modernem Design, responsivem Layout und vollständiger Funktionalität.',
      features: ['Responsiv', 'Modernes Design', 'Funktional'],
      viewWebsite: 'Projekt Ansehen',
      problemHeading: 'Das Problem',
      solutionHeading: 'Lösung',
      resultHeading: 'Ergebnis',
        items: [
          { title: 'Landing Page für Gärtner', client: 'Projekt: Grüne Landschaftspflege', image: gardeningLandingPage, category: 'Landing Page', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Zahnklinik', client: 'Projekt: Moderne Zahnärztin', image: dentistryClinics, category: 'Gesundheit', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Klempnerdienste', client: 'Projekt: Klempner 24h', image: encanadorFix, category: 'Dienstleistungen', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' },
          { title: 'Restaurant-Website', client: 'Projekt: Digitale Speisekarte', image: gardeningLandingPage, category: 'Restaurant', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Immobilienplattform', client: 'Projekt: Immobiliensuche', image: dentistryClinics, category: 'Immobilien', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Gesundheitswebsite', client: 'Projekt: Fitnesszentrum', image: encanadorFix, category: 'Gesundheit', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' }
        ]
    },
    howIWork: {
      heading: 'Wie ich Arbeite',
      sub: "Ein einfacher, direkter und fokussierter Prozess, um Ihre Idee vom Papier zu bringen und Ihre Website online mit Qualität zu stellen.",
      steps: [
        { title: 'Erste Präsentation', desc: 'Ich sende ein vorläufiges Website-Modell, damit Sie die Struktur und das Potenzial Ihres Projekts visualisieren können. Dies hilft, Erwartungen von Anfang an auszurichten.', timeline: '' },
        { title: 'Strategische Abstimmung', desc: 'Wir führen ein Gespräch, um genau zu verstehen, wie Sie die Website möchten: Funktionalitäten, Stil, Seiten und Ziele. Alles wird gemeinsam definiert, um sicherzustellen, dass das Endergebnis genau das ist, was Sie brauchen.', timeline: '' },
        { title: 'Vertragsformalierung', desc: 'Ich erstelle einen klaren und objektiven Vertrag, um Fristen, Werte und Lieferungen zu definieren. Sicherheit und Transparenz für beide Seiten.', timeline: '' },
        { title: 'Website-Entwicklung', desc: 'Ich baue die Website gemäß allem, was abgestimmt wurde. Totaler Fokus auf Qualität, Leistung und eine gute Benutzererfahrung. Während dieser Phase können Sie den Fortschritt verfolgen.', timeline: '' },
        { title: 'Lieferung und Veröffentlichung', desc: 'Die Website wird fertig geliefert. Wenn Sie bereits Hosting haben, konfiguriere ich und verbinde mit Ihrer Domain. Wenn Sie keines haben, kann ich die Website für Sie hosten. Ihre Website geht perfekt funktionierend online.', timeline: '' }
      ],
      keyPoints: {
        transparent: 'Transparente Kommunikation',
        transparentDesc: 'Sie folgen dem Prozess und wissen genau, was gemacht wird.',
        dataDriven: 'Fokus auf Ergebnis',
        dataDrivenDesc: 'Das Ziel ist nicht nur eine schöne Website zu haben, sondern eine Website, die funktioniert und Ihr Geschäft gut repräsentiert.'
      }
    },
    testimonials: { 
      heading: 'Was meine Kunden Sagen', 
      sub: 'Echtes Feedback von Unternehmen, die nach der Zusammenarbeit signifikantes Wachstum gesehen haben.', 
      items: [
        { text: 'João hat unsere Website neu aufgebaut und die Ergebnisse waren sofort. Innerhalb von 3 Monaten sind wir von 200 monatlichen Leads auf 1.200 gegangen. Er baut nicht nur Websites — er baut Umsatzmaschinen.', author: 'Marcus Chen', title: 'CEO, SaaS Unternehmen', result: '$2.4M zusätzlicher Umsatz' },
        { text: 'Das KI-Automatisierungssystem, das er gebaut hat, hat uns $18K pro Monat an Supportkosten gespart. Beste Investition, die wir gemacht haben. João denkt wie ein Geschäftsinhaber, nicht wie ein Entwickler.', author: 'Sarah Mitchell', title: 'Gründerin, Serviceunternehmen', result: '$216K jährliche Einsparungen' },
        { text: 'Unsere Konversionsrate ging von 2% auf 8,7%. João hat Tests an jedem Element des Trichters durchgeführt und unerbittlich optimiert. Die Daten lügen nicht.', author: 'David Lopez', title: 'Marketing Director, E-Commerce', result: '+340% Konversionssteigerung' },
        { text: 'Mit João zu arbeiten ist anders. Er fragte nach unseren Geschäftsmetriken, bevor er irgendetwas vorschlug. Hat eine Agentur-Website gebaut, die 250+ qualifizierte Leads monatlich generiert.', author: 'Emma Rodriguez', title: 'Partnerin, Marketing Agentur', result: '250+ qualifizierte Leads monatlich' },
        { text: 'Die Website, die er gebaut hat, ist blitzschnell und konvertiert wie verrückt. Seiten-Geschwindigkeit verbessert um 65%, Absprungrate halbiert. João versteht die Verbindung zwischen Geschwindigkeit und Umsatz.', author: 'James Wilson', title: 'E-Commerce Inhaber', result: '+65% Geschwindigkeitsverbesserung' },
        { text: 'João ist ein ergebnisorientierter Operator. Jede Entscheidung wurde auf Daten basiert. Wir sahen eine 340% Verbesserung bei wichtigen Metriken. Phänomenale Arbeit.', author: 'Lisa Anderson', title: 'VP Operations, Tech Startup', result: '$5M+ Umsatz generiert' }
      ]
    },
    faq: {
      heading: 'Häufig Gestellte Fragen',
      sub: 'Echte Antworten auf die Fragen, die ich am häufigsten höre.',
      items: [
        { question: 'Mit wem arbeiten Sie?', answer: 'Ich arbeite mit Geschäftsinhabern, die eine professionelle Präsenz im Internet haben und ihre Ergebnisse verbessern möchten.' },
        { question: 'Welche Dienstleistungen bieten Sie?', answer: 'Ich bin Full-Stack-Entwickler und entwickle komplette Websites und Webanwendungen, einschließlich Integrationen mit Systemen, Datenbanken und APIs.' },
        { question: 'Wie viel kostet ein Projekt?', answer: 'Der Projektwert beträgt $500. Hosting und Service-Wartung kosten $100 pro Monat. Dieser monatliche Wert gilt nicht, wenn Sie bereits einen Hosting- oder Wartungsservice haben.' },
        { question: 'Wie lange dauert ein Projekt?', answer: 'Im Durchschnitt zwischen 1 bis 2 Wochen, abhängig von der Komplexität.' },
        { question: 'Bieten Sie Support nach dem Launch?', answer: 'Ja. Ich biete kontinuierlichen Support durch den monatlichen Plan, der sicherstellt, dass die Website weiterhin funktioniert, aktualisiert und optimiert wird.' }
      ]
    },
    contact: { 
      heading: 'Arbeiten wir Zusammen', 
      sub: "Planen Sie einen Strategieanruf, um Ihr Projekt zu besprechen und zu sehen, wie ich Ihnen helfen kann, Ihre Geschäftsziele zu erreichen.", 
      email: 'E-Mail', 
      bookCall: 'Anruf Planen', 
      chat: 'Schneller Kontakt', 
      responseTime: 'Antwortzeit:',
      responseTimeText: 'Innerhalb von 24 Stunden an Werktagen.',
      availability: 'Nächste Verfügbarkeit:',
      availabilityText: '2-4 Wochen je nach aktuellen Projekten.',
      form: { 
        name: 'Vollständiger Name', 
        email: 'E-Mail', 
        company: 'Unternehmen', 
        message: 'Erzählen Sie mir von Ihrem Projekt', 
        submit: 'Nachricht Senden', 
        thankYou: "Nachricht Gesendet! Ich melde mich innerhalb von 24 Stunden.", 
        placeholder: { name: 'Ihr Name', email: 'ihre@email.de', company: 'Firmenname', message: 'Was möchten Sie bauen?' },
        projectType: 'Projekttyp',
        selectProject: 'Projekttyp auswählen',
        website: 'Website-Entwicklung',
        ai: 'KI-Automatisierung',
        funnel: 'Verkaufstrichter',
        optimization: 'Konversionsoptimierung',
        other: 'Andere'
      },
      linkedin: 'LinkedIn',
      linkedinText: 'Mit mir verbinden'
    },
    footer: {
      brandName: 'João Mateus',
      brandDesc: 'Website-Entwicklung mit Fokus auf Leistung und Konversion.',
      services: 'Dienstleistungen',
      servicesList: ['Website-Entwicklung', 'Konversionsoptimierung', 'Benutzererfahrung'],
      navigation: 'Navigation',
      navigationList: ['Über', 'Portfolio', 'Kontakt', 'Blog'],
      contact: 'Kontakt',
      copyright: '© 2026 João Mateus. Alle Rechte vorbehalten.'
    },
  },
  fr: {
    nav: {
      work: 'Travail',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      bookCall: 'Réserver un Appel',
    },
    hero: {
      badge: 'Développeur Web Full Stack',
      title: 'Je crée des sites web modernes, rapides et responsives pour les entreprises',
      subtitle: 'Sites web personnalisés, fonctionnels et axés sur la performance et la convivialité. Chaque projet est développé avec attention à la structure et à l\'efficacité.',
      bookCall: 'Réserver une Stratégie',
      viewWork: 'Voir Mon Travail',
      stats: {
        projects: 'Projets Livrés',
        experience: "Ans d'Expérience",
      },
      visualText: 'Systèmes de Croissance de Receita',
    },
    chatbot: {
      title: 'Assistant IA',
      subtitle: 'En ligne maintenant',
      welcome: "Bonjour! Je suis l'assistant IA de João. Comment puis-je vous aider aujourd'hui? N'hésitez pas à poser des questions sur les services, les prix ou les projets.",
      placeholder: 'Tapez votre message...',
      quickQuestions: {
        label: 'Questions rapides:',
        price: 'Combien coûtent les projets?',
        time: 'Combien de temps prend un projet?',
        projects: 'Quel type de projets travaillez-vous?',
        contact: 'Comment puis-je vous contacter?'
      },
      responses: {
        greeting: "Bonjour! Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur les services, les projets ou notre collaboration. Que souhaiteriez-vous savoir?",
        thanks: "De rien! Souhaiteriez-vous savoir autre chose? Je suis heureux d'aider!",
        price: "Les coûts des projets varient de 15K$ à 150K$+ selon la portée et la complexité. Je facture basé sur la portée du projet, pas à l'heure, car nous sommes tous les deux axés sur les résultats. Planifions un appel pour discuter de vos besoins spécifiques!",
        project: "Je travaille avec le développement de sites web personnalisés, des pages de destination et des intégrations de base. Des sites web responsives aux pages de conversion - je construis des solutions web fonctionnelles.",
        time: "Habituellement 8-12 semaines de la découverte au lancement. Semaine 1-2: Découverte approfondie. Semaine 3-8: Design et construction. Semaine 9+: Lancement et optimisation. Le calendrier dépend de la portée.",
        website: "Je construis des sites web modernes, rapides et responsives. Chaque site est optimisé pour la performance et l'utilisabilité. Voulez-vous voir des exemples?",
        contact: "Vous pouvez réserver une stratégie directement depuis ce site, ou envoyer un message via le formulaire de contact. Je réponds généralement dans les 24 heures en jours ouvrables.",
        default: "C'est une excellente question! J'adorerais en discuter avec vous lors d'un appel. Vous pouvez planifier un appel stratégique gratuit pour parler de vos besoins spécifiques et voir comment je peux aider votre entreprise à croître."
      }
    },
    about: {
      heading: 'À Propos de Moi',
      paragraphs: [
        "Je suis João Mateus, développeur web full stack axé sur la création de sites web rapides, modernes et fonctionnels.",
        "J'ai de l'expérience en front-end et back-end, développant des projets complets du design à l'implémentation.",
        "Mon objectif est d'aider les entreprises à avoir une présence digitale professionnelle grâce à des sites web bien structurés, responsives et préparés pour la croissance."
      ],
      stats: { years: "Ans d'expérience", projects: 'Projets développés' },
      focus: 'Mon Focus',
      focusDesign: 'Design',
      focusDesignDesc: 'Interfaces modernes et intuitives.',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Sites rapides qui améliorent l\'expérience et augmentent les conversions.',
      focusConversion: 'Conversion',
      focusConversionDesc: 'Stratégies pour transformer les visiteurs en clients.',
      focusUX: 'Expérience Utilisateur',
      focusUXDesc: 'Navigation simple et attrayante du début à la fin.',
    },
    services: {
      heading: 'Ce que je Fais',
      sub: 'Services axés sur le développement web professionnel et efficace.',
      items: [
        { title: 'Développement de Sites Web', desc: 'Création de sites web professionnels, rapides et responsives pour les entreprises.' },
        { title: 'Pages de Destination', desc: 'Pages axées sur la conversion pour l\'acquisition de clients.' },
        { title: 'Intégrations de Base', desc: 'Formulaires, WhatsApp, email et APIs simples.' },
        { title: 'Optimisation de Performance', desc: 'Amélioration de la vitesse et de l\'expérience utilisateur.' }
      ]
    },
    projects: {
      heading: 'Projets Démonstratifs',
      sub: 'Projets développés pour démontrer mes compétences en développement web.',
      subtitle: 'Une collection de projets qui montre ma capacité à créer des sites web modernes et fonctionnels.',
      description: 'Projets démonstratifs avec design moderne, layout responsive et fonctionnalité complète.',
      features: ['Responsive', 'Design Moderne', 'Fonctionnel'],
      viewWebsite: 'Voir le Projet',
      problemHeading: 'Le Problème',
      solutionHeading: 'Solution',
      resultHeading: 'Résultat',
        items: [
          { title: 'Page de Destination pour Jardiniers', client: 'Projet: Aménagement Paysager Vert', image: gardeningLandingPage, category: 'Page de Destination', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Clinique Dentaire', client: 'Projet: Dentiste Moderne', image: dentistryClinics, category: 'Santé', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Services de Plomberie', client: 'Projet: Plombier 24h', image: encanadorFix, category: 'Services', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' },
          { title: 'Site Web de Restaurant', client: 'Projet: Carte Digitale', image: gardeningLandingPage, category: 'Restaurant', link: 'https://jmbrsxx.github.io/Landing-Page-jardineiro/' },
          { title: 'Plateforme Immobilière', client: 'Projet: Recherche Immobilière', image: dentistryClinics, category: 'Immobilier', link: 'https://jmbrsxx.github.io/clinica-site/' },
          { title: 'Site Web de Santé', client: 'Projet: Centre de Fitness', image: encanadorFix, category: 'Santé', link: 'https://jmbrsxx.github.io/landing-page-Encanador/' }
        ]
    },
    howIWork: {
      heading: 'Comment je Travaille',
      sub: "Un processus simple, direct et axé sur l'idée de sortir votre idée du papier et de mettre votre site web en ligne avec qualité.",
      steps: [
        { title: 'Présentation Initiale', desc: "J'envoie un modèle préliminaire de site web pour que vous visualisiez la structure et le potentiel de votre projet. Cela aide à aligner les attentes dès le départ.", timeline: '' },
        { title: 'Alignement Stratégique', desc: 'Nous avons une conversation pour comprendre exactement comment vous voulez le site web: fonctionnalités, style, pages et objectifs. Tout est défini ensemble pour assurer que le résultat final est exactement ce dont vous avez besoin.', timeline: '' },
        { title: 'Formalisation du Contrat', desc: 'Je crée un contrat clair et objectif pour définir les délais, valeurs et livraisons. Sécurité et transparence pour les deux parties.', timeline: '' },
        { title: 'Développement du Site Web', desc: "Je construis le site web selon tout ce qui a été aligné. Focus total sur la qualité, la performance et une bonne expérience utilisateur. Pendant cette étape, vous pouvez suivre les progrès.", timeline: '' },
        { title: 'Livraison et Publication', desc: "Le site web est livré prêt à l'emploi. Si vous avez déjà un hébergement, je configure et connecte à votre domaine. Si vous n'en avez pas, je peux héberger le site web pour vous. Votre site web sort en ligne fonctionnant parfaitement.", timeline: '' }
      ],
      keyPoints: {
        transparent: 'Communication Transparente',
        transparentDesc: 'Vous suivez le processus et savez exactement ce qui est fait.',
        dataDriven: 'Focus sur le Résultat',
        dataDrivenDesc: "L'objectif n'est pas seulement d'avoir un beau site web, mais un site web qui fonctionne et représente bien votre entreprise."
      }
    },
    testimonials: { 
      heading: 'Ce que Disent mes Clients', 
      sub: 'Vraie rétroaction d\'entreprises qui ont vu une croissance significative après avoir travaillé avec moi.', 
      items: [
        { text: 'João a reconstruit notre site Web et les résultats ont été immédiats. En 3 mois, nous sommes passés de 200 leads mensuels à 1 200. Il ne construit pas seulement des sites Web — il construit des moteurs de revenus.', author: 'Marcus Chen', title: 'PDG, Entreprise SaaS', result: '$2.4M revenus supplémentaires' },
        { text: 'Le système d\'automatisation IA qu\'il a construit nous a fait économiser 18K$ par mois en coûts de support. Meilleur investissement que nous ayons fait. João pense comme un propriétaire d\'entreprise, pas comme un développeur.', author: 'Sarah Mitchell', title: 'Fondatrice, Entreprise de Services', result: '$216K économies annuelles' },
        { text: 'Notre taux de conversion est passé de 2% à 8,7%. João a effectué des tests sur chaque élément du funnel et a optimisé sans relâche. Les données ne mentent pas.', author: 'David Lopez', title: 'Directeur Marketing, E-Commerce', result: '+340% augmentation de conversion' },
        { text: 'Travailler avec João est différent. Il a demandé nos métriques commerciales avant de suggérer quoi que ce soit. A construit un site d\'agence qui génère 250+ leads qualifiés mensuels.', author: 'Emma Rodriguez', title: 'Associée, Agence Marketing', result: '250+ leads qualifiés mensuels' },
        { text: 'Le site Web qu\'il a construit est extrêmement rapide et convertit comme un fou. Vitesse de page améliorée de 65%, taux de rebond réduit de moitié. João comprend le lien entre vitesse et revenus.', author: 'James Wilson', title: 'Propriétaire E-Commerce', result: '+65% amélioration de vitesse' },
        { text: 'João est un opérateur axé sur les résultats. Chaque décision était basée sur les données. Nous avons vu une amélioration de 340% sur les métriques clés. Travail phénoménal.', author: 'Lisa Anderson', title: 'VP Opérations, Startup Technologique', result: '$5M+ revenus générés' }
      ]
    },
    faq: {
      heading: 'Questions Fréquemment Posées',
      sub: 'Vraies réponses aux questions que l\'on me pose le plus.',
      items: [
        { question: 'Avec qui travaillez-vous?', answer: 'Je travaille avec des propriétaires d\'entreprises qui veulent avoir une présence professionnelle sur internet et améliorer leurs résultats.' },
        { question: 'Quels services offrez-vous?', answer: 'Je suis développeur full stack et je développe des sites web et applications web complets, incluant des intégrations avec des systèmes, bases de données et APIs.' },
        { question: 'Combien coûte un projet?', answer: 'La valeur du projet est de $500. L\'hébergement et la maintenance du service coûtent $100 par mois. Cette valeur mensuelle ne s\'applique pas si vous avez déjà un service d\'hébergement ou de maintenance.' },
        { question: 'Combien de temps prend un projet?', answer: 'En moyenne, entre 1 à 2 semaines, selon la complexité.' },
        { question: 'Offrez-vous un support après le lancement?', answer: 'Oui. J\'offre un support continu à travers le plan mensuel, assurant que le site web continue de fonctionner, mis à jour et optimisé.' }
      ]
    },
    contact: { 
      heading: 'Travaillons Ensemble', 
      sub: "Planifiez un appel stratégique pour discuter de votre projet et voir comment je peux vous aider à atteindre vos objectifs commerciaux.", 
      email: 'Email', 
      bookCall: 'Planifier un Appel', 
      chat: 'Contact Rapide', 
      responseTime: 'Temps de Réponse:',
      responseTimeText: 'Dans les 24 heures en jours ouvrables.',
      availability: 'Prochaine Disponibilité:',
      availabilityText: '2-4 semaines selon les projets en cours.',
      form: { 
        name: 'Nom Complet', 
        email: 'Email', 
        company: 'Entreprise', 
        message: 'Parlez-moi de votre projet', 
        submit: 'Envoyer le Message', 
        thankYou: "Message Envoyé! Je reviendrai vers vous dans les 24 heures.", 
        placeholder: { name: 'Votre nom', email: 'votre@email.fr', company: 'Nom de l\'entreprise', message: 'Que souhaiteriez-vous construire?' },
        projectType: 'Type de Projet',
        selectProject: 'Sélectionnez un type de projet',
        website: 'Développement Web',
        ai: 'Automatisation IA',
        funnel: 'Tunnel de Ventes',
        optimization: 'Optimisation de Conversion',
        other: 'Autre'
      },
      linkedin: 'LinkedIn',
      linkedinText: 'Connectez-vous avec moi'
    },
    footer: {
      brandName: 'João Mateus',
      brandDesc: 'Développement de sites web axés sur la performance et la conversion.',
      services: 'Services',
      servicesList: ['Développement de Sites Web', 'Optimisation de Conversion', 'Expérience Utilisateur'],
      navigation: 'Navigation',
      navigationList: ['À Propos', 'Portfolio', 'Contact', 'Blog'],
      contact: 'Contact',
      copyright: '© 2026 João Mateus. Tous droits réservés.'
    },
  },
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const t = (path: string): any => {
    const parts = path.split('.');
    let obj: any = translations[lang];
    for (const p of parts) {
      if (obj && typeof obj === 'object') {
        obj = obj[p];
      } else {
        return path;
      }
    }
    if (typeof obj === 'function') return obj(new Date().getFullYear());
    return obj ?? path;
  };

  const value: I18nContextValue = { lang, setLang, t };

  return React.createElement(
    I18nContext.Provider,
    { value },
    children
  );
};

export const useTranslation = (): I18nContextValue => {
  const context = useContext(I18nContext);
  return context || { lang: 'en', setLang: () => {}, t: (p: string) => p };
};
