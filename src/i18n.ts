import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'pt' | 'es' | 'de' | 'fr';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}

const defaultLang: Lang = 'en';

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
      badge: 'Digital Builder & Growth Engineer',
      title: 'I Build Websites & AI Systems That Make Businesses Money',
      subtitle: "Custom websites, AI automation, and conversion-focused solutions. I don't build digital decorations — I build revenue engines.",
      bookCall: 'Book a Strategy Call',
      viewWork: 'View My Work',
      stats: {
        projects: 'Projects Delivered',
        revenue: 'Avg Revenue Increase',
        satisfaction: 'Client Satisfaction',
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
        greeting: "Hello! Great to meet you. I'm here to help answer any questions about services, projects, or how we can work together. What would you like to know?",
        thanks: "You're welcome! Is there anything else you'd like to know? I'm happy to help!",
        price: "Project costs vary from $15K to $150K+ depending on scope and complexity. I charge based on project scope, not hourly rates, because we're both focused on outcomes. Let's schedule a call to discuss your specific needs!",
        project: "I work on custom website development, AI automation systems, sales funnels, and conversion optimization. From high-performance websites to AI receptionists and business automation - I build systems that generate revenue.",
        time: "Typically 8-12 weeks from discovery to launch. Week 1-2: Deep discovery. Week 3-8: Design and build. Week 9+: Launch and optimization. Timeline depends on scope.",
        ai: "I build AI automation systems including AI receptionists, lead qualification, customer support automation, and business process automation. These systems can save 20+ hours per week and operate 24/7.",
        website: "I build high-performance, conversion-focused websites. Every site is optimized for speed, SEO, and designed to generate revenue - not just look good. Want to see some examples?",
        contact: "You can book a strategy call directly from this site, or send a message through the contact form. I typically respond within 24 hours on business days.",
        default: "That's a great question! I'd love to discuss this with you in a call. You can book a free strategy call to talk about your specific needs and see how I can help your business grow."
      }
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm João Mateus, and I build digital products that make businesses money. Not websites that look good. Not apps that are \"innovative.\" Products that generate measurable revenue and eliminate inefficiency.",
        "I started building websites when I was 14. I launched my first agency at 22. I've since worked with everyone from bootstrapped startups to 8-figure companies, and I've seen the same pattern repeat: most digital products fail because they're built for aesthetics or features, not for business outcomes.",
        "That changed how I work. Everything I build now is architected around one metric: does it move the business forward? Not \"is it pretty.\" Does it generate leads, reduce costs, increase conversions, or eliminate friction? If it doesn't answer \"yes\" to at least one of those, we redesign it.",
        "I focus on three things: performance, conversion, and automation. I obsess over page load times because every millisecond impacts revenue. I test every button, headline, and call-to-action because data tells the real story. And I build AI and automation systems because they scale what humans can't.",
        "I'm not arrogant about my work — the results speak louder than any pitch. My clients have seen 7-12x revenue increases, businesses saved 20+ hours per week, and conversions improve by an average of 240%. These aren't theoretical numbers. These are businesses that now have breathing room to grow."
      ],
      stats: { years: 'Years Building', projects: 'Projects Delivered', revenue: 'Client Revenue Generated' },
      focus: 'My Focus',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Every millisecond matters. Speed directly impacts revenue.',
      focusConversion: 'Conversion',
      focusConversionDesc: 'Data-driven optimization. Every element tested to maximize ROI.',
      focusAutomation: 'Automation',
      focusAutomationDesc: 'AI and automation systems that scale beyond human capability.',
    },
    services: { 
      heading: 'What I Do', 
      sub: 'Five core services that generate real business outcomes. Each one built on years of experience.', 
      items: [
        { title: 'Custom Website Development', desc: 'High-performance websites built for conversions, not decorations. SEO-optimized, mobile-responsive, and designed to generate revenue.' },
        { title: 'AI Automation & AI Receptionists', desc: 'Automate customer interactions, lead qualification, and business processes. Reduce operational costs while improving customer experience.' },
        { title: 'Sales Funnels & Landing Pages', desc: 'Conversion-focused landing pages and sales funnels. Every element tested and optimized for maximum ROI.' },
        { title: 'Business Process Automation', desc: 'Eliminate manual tasks with intelligent automation. Save 20+ hours per week and eliminate human error.' },
        { title: 'Performance & Conversion Optimization', desc: 'Improve page speed, reduce bounce rates, and increase conversions. Data-driven optimization that moves the business forward.' }
      ]
    },
    projects: { 
      heading: 'Selected Work', 
      sub: 'Recent projects where strategy, execution, and results aligned. Real businesses, real revenue impact.', 
      problemHeading: 'The Problem', 
      solutionHeading: 'What I Built', 
      resultHeading: 'The Result', 
      items: [
        { title: 'E-Commerce Platform Redesign', problem: 'Client was losing customers due to poor checkout experience.', solution: 'Rebuilt the entire platform with focus on conversion optimization, faster load times, and streamlined checkout.', results: '+340% increase in conversions, 45% reduction in cart abandonment', client: 'E-Commerce Retailer' },
        { title: 'AI Receptionist for SaaS', problem: 'SaaS company spending $15K/month on customer support staff.', solution: 'Implemented AI receptionist system to handle 85% of inquiries automatically.', results: '85% automation rate, saved $150K annually, 24/7 customer support', client: 'B2B SaaS Company' },
        { title: 'High-Converting Sales Funnel', problem: 'Low conversion rates on existing landing pages.', solution: 'Created optimized sales funnel with A/B testing of headlines, copy, and CTAs.', results: '$1.2M sales pipeline generated, 12% conversion rate', client: 'Digital Marketing Agency' },
        { title: 'Agency Website with Lead System', problem: 'Agency had no lead generation system on their website.', solution: 'Built conversion-focused website with integrated lead capture and CRM system.', results: '250+ qualified leads per month, $5M+ pipeline', client: 'Marketing Agency' }
      ]
    },
    howIWork: { 
      heading: 'How I Work', 
      sub: "A proven process designed to deliver results. Same methodology that's generated millions in client revenue.", 
      steps: [
        { title: 'Understand Your Business', desc: 'Deep discovery call to understand your goals, challenges, and business metrics. We analyze your competition and identify opportunities.', timeline: 'Week 1-2' },
        { title: 'Design & Build the Solution', desc: 'We design and build your solution with daily progress updates. Transparent process with regular feedback loops and iterations.', timeline: 'Week 3-8' },
        { title: 'Launch, Optimize & Scale', desc: 'Launch with confidence. We monitor performance, optimize based on real data, and scale what works. No guessing, only data.', timeline: 'Week 9+' }
      ],
      keyPoints: {
        transparent: 'Transparent Communication',
        transparentDesc: 'Daily updates, weekly calls, and complete visibility into the development process. You always know what\'s happening.',
        dataDriven: 'Data-Driven Optimization',
        dataDrivenDesc: 'Every decision is backed by data. We test, measure, and optimize continuously to ensure maximum ROI.'
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
      heading: 'Common Questions', 
      sub: 'Real answers to the questions I get asked most.', 
      items: [
        { question: 'Who do you work with?', answer: 'I work with serious business owners and founders who are committed to growth. I focus on founders and CEOs of bootstrapped startups to 8-figure companies. If your goal is real revenue growth, we\'re a good fit.' },
        { question: 'How much do projects cost?', answer: 'Projects range from $15K to $150K+ depending on scope and complexity. I charge based on project scope, not hourly rates, because we\'re both focused on outcomes. Let\'s talk about your specific needs.' },
        { question: 'Do you offer ongoing support?', answer: 'Yes. Most of my clients work with me on retainers after launch for optimization, maintenance, and scaling. I stay involved until the system is generating the revenue targets we set.' },
        { question: 'How long does a project take?', answer: 'Typically 8-12 weeks from discovery to launch. Week 1-2: Deep discovery. Week 3-8: Design and build. Week 9+: Launch and optimization. Timeline depends on scope.' },
        { question: 'Can you integrate with my existing systems?', answer: 'Absolutely. I integrate with existing CRMs, payment processors, email systems, and databases. No need to rebuild everything from scratch. We integrate cleanly with what you have.' },
        { question: 'What if I\'m unsure what I need?', answer: 'Perfect. That\'s what the discovery call is for. I ask deep questions about your business, metrics, and goals. Together we figure out the right solution. You don\'t need to have it all figured out before we talk.' },
        { question: 'Do you handle ongoing optimization?', answer: 'Yes. After launch, I monitor performance, run A/B tests, and optimize continuously. We set KPIs and track everything. The work doesn\'t stop at launch — it gets better from there.' },
        { question: 'What\'s your current availability?', answer: 'I limit my workload to 2-3 projects at a time to ensure quality and deep focus. I\'m selective but I can usually start new projects within 2-4 weeks. Schedule a call to check current capacity.' }
      ]
    },
    contact: { 
      heading: "Let's Work Together", 
      sub: "Schedule a strategy call to discuss your project and see how I can help you achieve your business goals.", 
      email: 'Email', 
      bookCall: 'Schedule a Call', 
      chat: 'Quick Contact', 
      responseTime: 'Typical Response Time:',
      responseTimeText: 'Within 24 hours on business days.',
      availability: 'Next Available Start:',
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
      brandTag: 'Building websites & AI systems that generate revenue.', 
      navigation: 'Navigation', 
      connect: 'Connect', 
      privacy: 'Privacy', 
      terms: 'Terms', 
      copyright: (year: number) => `© ${year} João Mateus. All rights reserved.`,
      services: 'Services',
      company: 'Company',
      websiteDev: 'Website Development',
      aiAutomation: 'AI Automation',
      salesFunnels: 'Sales Funnels',
      conversionOpt: 'Conversion Optimization',
      aboutLink: 'About',
      workLink: 'Work',
      contactLink: 'Contact',
      blog: 'Blog'
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
      badge: 'Construtor Digital e Engenheiro de Crescimento',
      title: 'Eu construo sites e sistemas de IA que fazem dinheiro para empresas',
      subtitle: 'Sites personalizados, automação de IA e soluções focadas em conversão. Não construo decorações digitais — construo motores de receita.',
      bookCall: 'Agendar uma Estratégia',
      viewWork: 'Veja Meu Trabalho',
      stats: {
        projects: 'Projetos Entregues',
        revenue: 'Aumento médio de receita',
        satisfaction: 'Satisfação do cliente',
      },
      visualText: 'Sistemas de Crescimento de Receita',
    },
    chatbot: {
      title: 'Assistente de IA',
      subtitle: 'Online agora',
      welcome: "Olá! Sou o assistente de IA do João. Como posso ajudar você hoje? Feel free to ask about services, pricing, or projects.",
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
        project: "Trabalho com desenvolvimento de sites personalizados, sistemas de automação de IA, funis de vendas e otimização de conversão. De sites de alta performance a recepcionistas de IA e automação de processos - construo sistemas que geram receita.",
        time: "Geralmente 8-12 semanas do discovery ao lançamento. Semana 1-2: Discovery profundo. Semana 3-8: Design e construção. Semana 9+: Lançamento e otimização. O cronograma depende do escopo.",
        ai: "Construo sistemas de automação de IA incluindo recepcionistas de IA, qualificação de leads, automação de suporte ao cliente e automação de processos de negócio. Esses sistemas podem economizar 20+ horas por semana e operar 24/7.",
        website: "Construo sites de alta performance e focados em conversão. Cada site é otimizado para velocidade, SEO e projetado para gerar receita - não apenas parecer bonito. Quer ver alguns exemplos?",
        contact: "Você pode agendar uma estratégia diretamente deste site, ou enviar uma mensagem pelo formulário de contato. Geralmente respondo dentro de 24 horas em dias úteis.",
        default: "Essa é uma ótima pergunta! Adoraria discutir isso com você em uma chamada. Você pode agendar uma chamada estratégica gratuita para falar sobre suas necessidades específicas e ver como posso ajudar seu negócio a crescer."
      }
    },
    about: {
      heading: 'Sobre Mim',
      paragraphs: [
        "Sou João Mateus e construo produtos digitais que fazem dinheiro para empresas. Não construo sites que ficam bonita. Não construo apps \"inovadoras.\" Produtos que geram receita mensurável e eliminam ineficiência.",
        "Comecei a construir sites aos 14 anos. Lancei minha primeira agência aos 22. Desde então, trabajhei com todos, de startups bootstrapadas a empresas de 8 dígitos, e vi o mesmo padrão se repetir: a maioria dos produtos digitais falha porque são construídos para estética ou recursos, não para resultados de negócios.",
        "Isso mudou a forma como trabalho. Tudo o que construo agora é arquitetado em torno de uma métrica: isso move o negócio para frente? Não \"é bonito.\" Gera leads, reduz custos, aumenta conversões ou elimina fricção? Se não responder \"sim\" para pelo menos um deles, redesenhamos.",
        "Foco em três coisas: performance, conversão e automação. Sou obcecado por tempos de carregamento porque cada milissegundo impacta a receita. Testo cada botão, headline e call-to-action porque dados contam a história real. E construo sistemas de IA e automação porque eles escalam o que humanos não conseguem.",
        "Não sou arrogante sobre meu trabalho — os resultados falam mais alto que qualquer pitch. Meus clientes viram aumentos de receita de 7-12x, negócios economizaram 20+ horas por semana, e conversões melhoraram em média 240%. Esses não são números teóricos. Esses são negócios que agora têm espaço para crescer."
      ],
      stats: { years: 'Anos de experiência', projects: 'Projetos entregues', revenue: 'Receita gerada' },
      focus: 'Meu Foco',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Cada milissegundo importa. Velocidade impacta diretamente a receita.',
      focusConversion: 'Conversão',
      focusConversionDesc: 'Otimização baseada em dados. Cada elemento testado para maximizar ROI.',
      focusAutomation: 'Automação',
      focusAutomationDesc: 'Sistemas de IA e automação que escalam além da capacidade humana.',
    },
    services: { 
      heading: 'O que eu faço', 
      sub: 'Cinco serviços principais que geram resultados reais para negócios. Cada um construído com anos de experiência.', 
      items: [
        { title: 'Desenvolvimento de Sites Personalizados', desc: 'Sites de alta performance construídos para conversões, não decorações. Otimizados para SEO, responsivos e projetados para gerar receita.' },
        { title: 'Automação de IA e Recepção com IA', desc: 'Automatize interações com clientes, qualificação de leads e processos de negócio. Reduza custos operacionais melhorando a experiência do cliente.' },
        { title: 'Funis de Vendas e Páginas de Captura', desc: 'Páginas de captura e funis de vendas focados em conversão. Cada elemento testado e otimizado para máximo ROI.' },
        { title: 'Automação de Processos de Negócios', desc: 'Elimine tarefas manuais com automação inteligente. Economize 20+ horas por semana e elimine erros humanos.' },
        { title: 'Otimização de Performance e Conversão', desc: 'Melhore velocidade da página, reduza taxa de rejeição e increase conversões. Otimização baseada em dados que move o negócio para frente.' }
      ]
    },
    projects: { 
      heading: 'Trabalhos Selecionados', 
      sub: 'Projetos recentes onde estratégia, execução e resultados se alinharam. Negócios reais, impacto real em receita.', 
      problemHeading: 'O Problema', 
      solutionHeading: 'Solução', 
      resultHeading: 'Resultado', 
      items: [
        { title: 'Redesign de Plataforma E-Commerce', problem: 'Cliente perdendo clientes devido a má experiência de checkout.', solution: 'Plataforma reconstruída com foco em otimização de conversão, tempos de carregamento mais rápidos e checkout simplificado.', results: '+340% aumento em conversões, 45% redução em abandono de carrinho', client: 'Varejista E-Commerce' },
        { title: 'Recepcionista de IA para SaaS', problem: 'Empresa SaaS gastando $15K/mês em suporte ao cliente.', solution: 'Sistema de recepção com IA implementado para lidar com 85% das consultas automaticamente.', results: '85% taxa de automação, economizado $150K anualmente, suporte 24/7', client: 'Empresa SaaS B2B' },
        { title: 'Funil de Vendas de Alta Conversão', problem: 'Baixas taxas de conversão nas landing pages existentes.', solution: 'Funil de vendas otimizado com testes A/B de headlines, copy e CTAs.', results: '$1.2M pipeline de vendas gerado, 12% taxa de conversão', client: 'Agência de Marketing Digital' },
        { title: 'Site de Agência com Sistema de Leads', problem: 'Agência não tinha sistema de geração de leads em seu site.', solution: 'Site focado em conversão com captura de leads integrada e sistema CRM.', results: '250+ leads qualificados por mês, pipeline de $5M+', client: 'Agência de Marketing' }
      ]
    },
    howIWork: { 
      heading: 'Como eu trabalho', 
      sub: "Um processo testado e provado para entregar resultados. Mesma metodologia que gerou milhões em receita para clientes.", 
      steps: [
        { title: 'Entenda seu Negócio', desc: 'Chamada de descoberta profunda para entender seus objetivos, desafios e métricas de negócio. Analisamos sua competição e identificamos oportunidades.', timeline: 'Semana 1-2' },
        { title: 'Projete e Construa a Solução', desc: 'Projetamos e construímos sua solução com atualizações diárias de progresso. Processo transparente com ciclos regulares de feedback e iterações.', timeline: 'Semana 3-8' },
        { title: 'Lance, Otimize e Escale', desc: 'Lance com confiança. Monitoramos performance, otimizamos baseados em dados reais e escalamos o que funciona. Sem chutes, apenas dados.', timeline: 'Semana 9+' }
      ],
      keyPoints: {
        transparent: 'Comunicação Transparente',
        transparentDesc: 'Atualizações diárias, chamadas semanais e visibilidade completa no processo de desenvolvimento. Você sempre sabe o que está acontecendo.',
        dataDriven: 'Otimização Baseada em Dados',
        dataDrivenDesc: 'Toda decisão é apoiada por dados. Testamos, medimos e otimizamos continuamente para garantir ROI máximo.'
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
        { question: 'Com quem você trabalha?', answer: 'Trabalho com proprietários de negócios e fundadores sérios que estão comprometidos com o crescimento. Foco em fundadores e CEOs de startups bootstrapadas até empresas de 8 dígitos. Se seu objetivo é crescimento real de receita, somos uma boa parceria.' },
        { question: 'Quanto custam os projetos?', answer: 'Projetos variam de $15K a $150K+ dependendo do escopo e complexidade. Cobro baseado no escopo do projeto, não por hora, porque ambos focamos em resultados. Vamos falar sobre suas necessidades específicas.' },
        { question: 'Você oferece suporte contínuo?', answer: 'Sim. A maioria dos clientes trabalha comigo em contratos de manutenção após o lançamento para otimização, manutenção e crescimento. Fico envolvido até o sistema gerar as metas de receita que estabelecemos.' },
        { question: 'Quanto tempo leva um projeto?', answer: 'Geralmente 8-12 semanas do discovery ao lançamento. Semana 1-2: Discovery profundo. Semana 3-8: Design e construção. Semana 9+: Lançamento e otimização. O cronograma depende do escopo.' },
        { question: 'Você pode integrar com meus sistemas existentes?', answer: 'Com certeza. Integro com CRMs existentes, processadores de pagamento, sistemas de email e bancos de dados. Não precisa reconstruir tudo do zero. Integremos cleanly com o que você já tem.' },
        { question: 'E se eu não souber o que preciso?', answer: 'Perfeito. É para isso que serve a chamada de discovery. Faço perguntas profundas sobre seu negócio, métricas e objetivos. Juntos descobrimos a solução certa. Você não precisa ter tudo planejado antes de falarmos.' },
        { question: 'Você Handles otimização contínua?', answer: 'Sim. Após o lançamento, monitoro performance, realizo testes A/B e otimizo continuamente. Definimos KPIs e acompanhamos tudo. O trabalho não para no lançamento — melhora a partir de então.' },
        { question: 'Qual sua disponibilidade atual?', answer: 'Limito minha carga de trabalho a 2-3 projetos por vez para garantir qualidade e foco profundo. Sou seletivo mas geralmente posso começar novos projetos em 2-4 semanas. Agende uma chamada para verificar a capacidade atual.' }
      ]
    },
    contact: { 
      heading: 'Vamos Trabalhar Juntos', 
      sub: "Agende uma chamada de estratégia para discutir seu projeto e ver como posso ajudá-lo a alcançar seus objetivos de negócio.", 
      email: 'Email', 
      bookCall: 'Agendar uma Chamada', 
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
      brandTag: 'Construindo sites e sistemas de IA que geram receita.', 
      navigation: 'Navegação', 
      connect: 'Conectar', 
      privacy: 'Privacidade', 
      terms: 'Termos', 
      copyright: (year: number) => `© ${year} João Mateus. Todos os direitos reservados.`,
      services: 'Serviços',
      company: 'Empresa',
      websiteDev: 'Desenvolvimento de Sites',
      aiAutomation: 'Automação de IA',
      salesFunnels: 'Funis de Vendas',
      conversionOpt: 'Otimização de Conversão',
      aboutLink: 'Sobre',
      workLink: 'Trabalhos',
      contactLink: 'Contato',
      blog: 'Blog'
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
      badge: 'Constructor Digital e Ingeniero de Crecimiento',
      title: 'Construyo sitios web y sistemas de IA que hacen dinero para negocios',
      subtitle: 'Soluciones personalizadas de sitios web, automatización de IA y enfocadas en conversión. No construyo decoraciones digitales — construyo motores de ingresos.',
      bookCall: 'Reservar una Llamada de Estrategia',
      viewWork: 'Ver Mi Trabajo',
      stats: {
        projects: 'Proyectos Entregados',
        revenue: 'Aumento de Ingresos Promedio',
        satisfaction: 'Satisfacción del Cliente',
      },
      visualText: 'Sistemas de Crecimiento de Ingresos',
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
        greeting: "¡Hola! Mucho gusto. Estoy aquí para ayudar con cualquier pregunta sobre servicios, proyectos o cómo podemos trabajar juntos. ¿Qué te gustaría saber?",
        thanks: "¡De nada! ¿Hay algo más que te gustaría saber? ¡Con gusto ayudo!",
        price: "Los costos de los proyectos varían de $15K a $150K+ dependiendo del alcance y complejidad. Cobro basado en el alcance del proyecto, no por hora, porque ambos nos enfocamos en resultados. ¡Programemos una llamada para discutir tus necesidades específicas!",
        project: "Trabajo en desarrollo de sitios web personalizados, sistemas de automatización de IA, funnels de ventas y optimización de conversión. Desde sitios web de alto rendimiento hasta recepcionistas de IA y automatización de negocios - construyo sistemas que generan ingresos.",
        time: "Típicamente 8-12 semanas desde el descubrimiento hasta el lanzamiento. Semana 1-2: Descubrimiento profundo. Semana 3-8: Diseño y construcción. Semana 9+: Lanzamiento y optimización. El cronograma depende del alcance.",
        ai: "Construyo sistemas de automatización de IA incluyendo recepcionistas de IA, calificación de leads, automatización de soporte al cliente y automatización de procesos de negocio. Estos sistemas pueden ahorrar 20+ horas por semana y operar 24/7.",
        website: "Construyo sitios web de alto rendimiento y enfocados en conversión. Cada sitio está optimizado para velocidad, SEO y diseñado para generar ingresos - no solo verse bien. ¿Quieres ver algunos ejemplos?",
        contact: "Puedes programar una llamada de estrategia directamente desde este sitio, o enviar un mensaje a través del formulario de contacto. Por lo general respondo dentro de 24 horas en días hábiles.",
        default: "¡Esa es una gran pregunta! Me encantaría discutir esto contigo en una llamada. Puedes programar una llamada estratégica gratuita para hablar sobre tus necesidades específicas y ver cómo puedo ayudar a tu negocio a crecer."
      }
    },
    about: {
      heading: 'Sobre Mí',
      paragraphs: [
        "Soy João Mateus y construyo productos digitales que generan dinero para empresas. No construyo sitios que se vean bien. No construyo apps \"innovadoras.\" Productos que generan ingresos medibles y eliminan ineficiencia.",
        "Empecé a construir sitios web a los 14 años. Lanzé mi primera agencia a los 22. Desde entonces he trabajado con todos, desde startups bootstrapped hasta empresas de 8 cifras, y he visto el mismo patrón repetirse: la mayoría de los productos digitales fallan porque se construyen para estética o funciones, no para resultados de negocios.",
        "Eso cambió cómo trabajo. Todo lo que construyo ahora está arquitectado alrededor de una métrica: ¿mueve el negocio hacia adelante? No \"es bonito.\" ¿Genera leads, reduce costos, aumenta conversiones o elimina fricción? Si no responde \"sí\" a al menos una de esas, lo rediseñamos.",
        "Me centro en tres cosas: rendimiento, conversión y automatización. Soy obsesivo con los tiempos de carga porque cada milisegundo impacta los ingresos. Pruebo cada botón, titular y llamada a la acción porque los datos cuentan la historia real. Y construyo sistemas de IA y automatización porque escalan lo que los humanos no pueden.",
        "No soy arrogante sobre mi trabajo — los resultados hablan más alto que cualquier presentación. Mis clientes han visto aumentos de ingresos de 7-12x, negocios ahorraron 20+ horas por semana, y las conversiones mejoran en promedio 240%. Estos no son números teóricos. Estos son negocios que ahora tienen espacio para crecer."
      ],
      stats: { years: 'Años de Experiencia', projects: 'Proyectos Entregados', revenue: 'Ingresos Generados' },
      focus: 'Mi Enfoque',
      focusPerformance: 'Rendimiento',
      focusPerformanceDesc: 'Cada milisegundo importa. La velocidad impacta directamente los ingresos.',
      focusConversion: 'Conversión',
      focusConversionDesc: 'Optimización basada en datos. Cada elemento probado para maximizar ROI.',
      focusAutomation: 'Automatización',
      focusAutomationDesc: 'Sistemas de IA y automatización que escalan más allá de la capacidad humana.',
    },
    services: { 
      heading: 'Lo que hago', 
      sub: 'Cinco servicios principales que generan resultados reales de negocio. Cada uno construido con años de experiencia.', 
      items: [
        { title: 'Desarrollo de Sitios Web Personalizados', desc: 'Sitios web de alto rendimiento construidos para conversiones, no decoraciones. Optimizados para SEO, responsivos y diseñados para generar ingresos.' },
        { title: 'Automatización de IA y Recepcionistas de IA', desc: 'Automatiza interacciones con clientes, calificación de leads y procesos de negocio. Reduce costos operativos mejorando la experiencia del cliente.' },
        { title: 'Funnels de Ventas y Páginas de Aterrizaje', desc: 'Páginas de aterrizaje y funnels de ventas enfocados en conversión. Cada elemento probado y optimizado para máximo ROI.' },
        { title: 'Automatización de Procesos de Negocio', desc: 'Elimina tareas manuales con automatización inteligente. Ahorra 20+ horas por semana y elimina errores humanos.' },
        { title: 'Optimización de Rendimiento y Conversión', desc: 'Mejora la velocidad de página, reduce la tasa de rebote y aumenta las conversiones. Optimización basada en datos que mueve el negocio hacia adelante.' }
      ]
    },
    projects: { 
      heading: 'Trabajos Seleccionados', 
      sub: 'Proyectos recientes donde estrategia, ejecución y resultados se alinearon. Negocios reales, impacto real en ingresos.', 
      problemHeading: 'El Problema', 
      solutionHeading: 'La Solución', 
      resultHeading: 'El Resultado', 
      items: [
        { title: 'Rediseño de Plataforma E-Commerce', problem: 'Cliente perdiendo clientes debido a mala experiencia de checkout.', solution: 'Plataforma reconstruida con enfoque en optimización de conversión, tiempos de carga más rápidos y checkout simplificado.', results: '+340% aumento en conversiones, 45% reducción en abandono de carrito', client: 'Vendedor E-Commerce' },
        { title: 'Recepcionista de IA para SaaS', problem: 'Empresa SaaS gastando $15K/mes en soporte al cliente.', solution: 'Sistema de recepcionista con IA implementado para manejar el 85% de las consultas automáticamente.', results: '85% tasa de automatización, ahorrado $150K anualmente, soporte 24/7', client: 'Empresa SaaS B2B' },
        { title: 'Funnel de Ventas de Alta Conversión', problem: 'Bajas tasas de conversión en landing pages existentes.', solution: 'Funnel de ventas optimizado con pruebas A/B de titulares, copy y CTAs.', results: '$1.2M pipeline de ventas generado, 12% tasa de conversión', client: 'Agencia de Marketing Digital' },
        { title: 'Sitio de Agencia con Sistema de Leads', problem: 'Agencia no tenía sistema de generación de leads en su sitio.', solution: 'Sitio enfocado en conversión con captura de leads integrada y sistema CRM.', results: '250+ leads calificados por mes, pipeline de $5M+', client: 'Agencia de Marketing' }
      ]
    },
    howIWork: { 
      heading: 'Cómo trabajo', 
      sub: "Un proceso probado y diseñado para entregar resultados. Misma metodología que ha generado millones en ingresos para clientes.", 
      steps: [
        { title: 'Entiende tu Negocio', desc: 'Llamada de descubrimiento profundo para entender tus objetivos, desafíos y métricas de negocio. Analizamos tu competencia e identificamos oportunidades.', timeline: 'Semana 1-2' },
        { title: 'Diseña y Construye la Solución', desc: 'Diseñamos y construimos tu solución con actualizaciones diarias de progreso. Proceso transparente con ciclos regulares de retroalimentación e iteraciones.', timeline: 'Semana 3-8' },
        { title: 'Lanza, Optimiza y Escala', desc: 'Lanza con confianza. Monitoreamos el rendimiento, optimizamos basados en datos reales y escalamos lo que funciona. Sin especulaciones, solo datos.', timeline: 'Semana 9+' }
      ],
      keyPoints: {
        transparent: 'Comunicación Transparente',
        transparentDesc: 'Actualizaciones diarias, llamadas semanales y visibilidad completa en el proceso de desarrollo. Siempre sabes qué está pasando.',
        dataDriven: 'Optimización Basada en Datos',
        dataDrivenDesc: 'Cada decisión está respaldada por datos. Probamos, medimos y optimizamos continuamente para asegurar el máximo ROI.'
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
        { question: '¿Con quién trabajas?', answer: 'Trabajo con propietarios de negocios y fundadores comprometidos con el crecimiento. Me enfoco en fundadores y CEOs de startups bootstrapped hasta empresas de 8 dígitos. Si tu objetivo es crecimiento real de ingresos, somos una buena opción.' },
        { question: '¿Cuánto cuestan los proyectos?', answer: 'Los proyectos van desde $15K hasta $150K+ dependiendo del alcance y complejidad. Cobro basado en el alcance del proyecto, no por hora, porque ambos nos enfocamos en resultados. Hablemos sobre tus necesidades específicas.' },
        { question: '¿Ofreces soporte continuo?', answer: 'Sí. La mayoría de mis clientes trabajan conmigo en retainers después del lanzamiento para optimización, mantenimiento y escalamiento. Me mantengo involucrado hasta que el sistema genere las metas de ingresos que establecimos.' },
        { question: '¿Cuánto tiempo toma un proyecto?', answer: 'Típicamente 8-12 semanas desde el descubrimiento hasta el lanzamiento. Semana 1-2: Descubrimiento profundo. Semana 3-8: Diseño y construcción. Semana 9+: Lanzamiento y optimización. El cronograma depende del alcance.' },
        { question: '¿Puedes integrar con mis sistemas existentes?', answer: 'Absolutamente. Integro con CRMs existentes, procesadores de pago, sistemas de email y bases de datos. No necesitas reconstruir todo desde cero. Integro cleanly con lo que ya tienes.' },
        { question: '¿Qué pasa si no sé lo que necesito?', answer: 'Perfecto. Para eso es la llamada de descubrimiento. Hago preguntas profundas sobre tu negocio, métricas y objetivos. Juntos descubrimos la solución correcta. No necesitas tener todo figured out antes de hablar.' },
        { question: '¿Manejas optimización continua?', answer: 'Sí. Después del lanzamiento, monitoreó el rendimiento, ejecuto pruebas A/B y optimizo continuamente. Establecemos KPIs y seguimos todo. El trabajo no se detiene en el lanzamiento — mejora a partir de ahí.' },
        { question: '¿Cuál es tu disponibilidad actual?', answer: 'Limito mi carga de trabajo a 2-3 proyectos a la vez para asegurar calidad y enfoque profundo. Soy selectivo pero generalmente puedo comenzar nuevos proyectos en 2-4 semanas. Programa una llamada para verificar la capacidad actual.' }
      ]
    },
    contact: { 
      heading: 'Trabajemos Juntos', 
      sub: "Programa una llamada de estrategia para discutir tu proyecto y ver cómo puedo ayudarte a alcanzar tus objetivos de negocio.", 
      email: 'Correo', 
      bookCall: 'Programar una Llamada', 
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
      brandTag: 'Construyendo sitios web y sistemas de IA que generan ingresos.', 
      navigation: 'Navegación', 
      connect: 'Conectar', 
      privacy: 'Privacidad', 
      terms: 'Términos', 
      copyright: (year: number) => `© ${year} João Mateus. Todos los derechos reservados.`,
      services: 'Servicios',
      company: 'Empresa',
      websiteDev: 'Desarrollo Web',
      aiAutomation: 'Automatización de IA',
      salesFunnels: 'Funnels de Ventas',
      conversionOpt: 'Optimización de Conversión',
      aboutLink: 'Sobre',
      workLink: 'Trabajos',
      contactLink: 'Contacto',
      blog: 'Blog'
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
      badge: 'Digital Builder & Growth Engineer',
      title: 'Ich baue Websites und KI-Systeme, die Unternehmen Geld einbringen',
      subtitle: 'Maßgeschneiderte Websites und KI-Automatisierung. Ich baue keine digitalen Dekorationen – ich baue Umsatzmaschinen.',
      bookCall: 'Strategieanruf Buchen',
      viewWork: 'Meine Arbeit Sehen',
      stats: {
        projects: 'Projekte Abgeschlossen',
        revenue: 'Durchschnittliche Umsatzsteigerung',
        satisfaction: 'Kundenzufriedenheit',
      },
      visualText: 'Umsatzwachstums-Systeme',
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
        greeting: "Hallo! Freut mich, Sie kennenzulernen. Ich bin hier, um bei Fragen zu Dienstleistungen, Projekten oder unserer Zusammenarbeit zu helfen. Was möchten Sie wissen?",
        thanks: "Gerne! Gibt es noch etwas, das Sie wissen möchten? Ich helfe gerne!",
        price: "Projektkosten variieren je nach Umfang und Komplexität von $15K bis $150K+. Ich berechne basierend auf dem Projektumfang, nicht stündlich, weil wir beide auf Ergebnisse fokussiert sind. Lassen Sie uns einen Anruf vereinbaren, um Ihre spezifischen Bedürfnisse zu besprechen!",
        project: "Ich arbeite an maßgeschneiderten Websites, KI-Automatisierungssystemen, Vertriebstrichtern und Konversionsoptimierung. Von High-Performance-Websites bis zu KI-Empfangsdamen und Geschäftsautomatisierung - ich baue Systeme, die Umsatz generieren.",
        time: "Typischerweise 8-12 Wochen von Discovery bis Launch. Woche 1-2: Tiefes Discovery. Woche 3-8: Design und Build. Woche 9+: Launch und Optimierung. Der Zeitplan hängt vom Umfang ab.",
        ai: "Ich baue KI-Automatisierungssysteme einschließlich KI-Empfangsdamen, Lead-Qualifizierung, Kundensupport-Automatisierung und Geschäftsprozess-Automatisierung. Diese Systeme können 20+ Stunden pro Woche sparen und 24/7 arbeiten.",
        website: "Ich baue leistungsstarke, konversionsorientierte Websites. Jede Seite ist für Geschwindigkeit, SEO optimiert und darauf ausgelegt, Umsatz zu generieren - nicht nur gut auszusehen. Möchten Sie einige Beispiele sehen?",
        contact: "Sie können einen Strategieanruf direkt von dieser Website aus vereinbaren oder eine Nachricht über das Kontaktformular senden. Ich antworte normalerweise innerhalb von 24 Stunden an Werktagen.",
        default: "Das ist eine großartige Frage! Ich würde das gerne mit Ihnen in einem Anruf besprechen. Sie können einen kostenlosen Strategieanruf vereinbaren, um Ihre spezifischen Bedürfnisse zu besprechen und zu sehen, wie ich Ihrem Unternehmen helfen kann zu wachsen."
      }
    },
    about: {
      heading: 'Über Mich',
      paragraphs: [
        "Ich bin João Mateus und ich baue digitale Produkte, die Unternehmen Geld einbringen. Keine Websites, die gut aussehen. Keine Apps, die \"innovativ\" sind. Produkte, die messbaren Umsatz generieren und Ineffizienz eliminieren.",
        "Ich habe mit 14 angefangen, Websites zu bauen. Mit 22 habe ich meine erste Agentur gegründet. Seitdem habe ich mit allen gearbeitet, von Bootstrapped Startups bis zu 8-stelligen Unternehmen, und ich habe dasselbe Muster gesehen: Die meisten digitalen Produkte scheitern, weil sie für Ästhetik oder Funktionen gebaut werden, nicht für Geschäftsergebnisse.",
        "Das hat meine Arbeitsweise verändert. Alles, was ich jetzt baue, ist um eine Metrik herum aufgebaut: Bringt es das Unternehmen voran? Nicht \"sieht es gut aus.\" Generiert es Leads, reduziert es Kosten, erhöht es Konversionen oder eliminiert es Reibung? Wenn es nicht mindestens \"ja\" zu einem davon sagt, gestalten wir es neu.",
        "Ich konzentriere mich auf drei Dinge: Leistung, Konversion und Automatisierung. Ich bin besessen von Ladezeiten, weil jede Millisekunde den Umsatz beeinflusst. Ich teste jeden Button, jede Überschrift und jeden Call-to-Action, weil Daten die wahre Geschichte erzählen. Und ich baue KI- und Automatisierungssysteme, weil sie skalieren, was Menschen nicht können.",
        "Ich bin nicht arrogant bezüglich meiner Arbeit – die Ergebnisse sprechen lautere Worte als jedes Pitch. Meine Kunden haben 7-12x Umsatzsteigerungen gesehen, Unternehmen haben 20+ Stunden pro Woche gespart, und Konversionen haben sich durchschnittlich um 240% verbessert. Das sind keine theoretischen Zahlen. Das sind Unternehmen, die jetzt Raum zum Wachsen haben."
      ],
      stats: { years: 'Jahre Erfahrung', projects: 'Projekte Abgeschlossen', revenue: 'Generierte Einnahmen' },
      focus: 'Mein Fokus',
      focusPerformance: 'Leistung',
      focusPerformanceDesc: 'Jede Millisekunde zählt. Geschwindigkeit beeinflusst direkt den Umsatz.',
      focusConversion: 'Konversion',
      focusConversionDesc: 'Datenbasierte Optimierung. Jedes Element getestet, um ROI zu maximieren.',
      focusAutomation: 'Automatisierung',
      focusAutomationDesc: 'KI- und Automatisierungssysteme, die über menschliche Fähigkeiten hinaus skalieren.',
    },
    services: { 
      heading: 'Was ich Tue', 
      sub: 'Fünf Kerndienstleistungen, die reale Geschäftsergebnisse liefern. Jede basierend auf jahrelanger Erfahrung.', 
      items: [
        { title: 'Maßgeschneiderte Website-Entwicklung', desc: 'Hochleistungs-Websites, die für Konversionen gebaut sind, nicht für Dekoration. SEO-optimiert, mobil-responsive und auf Umsatzgenerierung ausgelegt.' },
        { title: 'KI-Automatisierung & KI-Empfang', desc: 'Automatisieren Sie Kundeninteraktionen, Lead-Qualifizierung und Geschäftsprozesse. Reduzieren Sie Betriebskosten und verbessern Sie das Kundenerlebnis.' },
        { title: 'Verkaufstrichter & Landing Pages', desc: 'Konversionsorientierte Landing Pages und Verkaufstrichter. Jedes Element getestet und für maximalen ROI optimiert.' },
        { title: 'Geschäftsprozess-Automatisierung', desc: 'Eliminieren Sie manuelle Aufgaben mit intelligenter Automatisierung. Sparen Sie 20+ Stunden pro Woche und eliminieren Sie menschliche Fehler.' },
        { title: 'Leistungs- & Konversionsoptimierung', desc: 'Verbessern Sie die Seitengeschwindigkeit, reduzieren Sie Absprungraten und erhöhen Sie Konversionen. Datengetriebene Optimierung, die das Unternehmen voranbringt.' }
      ]
    },
    projects: { 
      heading: 'Ausgewählte Arbeiten', 
      sub: 'Neueste Projekte, bei denen Strategie, Ausführung und Ergebnisse übereinstimmen. Reale Unternehmen, realer Umsatzeffekt.', 
      problemHeading: 'Das Problem', 
      solutionHeading: 'Die Lösung', 
      resultHeading: 'Das Ergebnis', 
      items: [
        { title: 'E-Commerce Plattform Redesign', problem: 'Kunde verliert Kunden wegen schlechter Checkout-Erfahrung.', solution: 'Plattform komplett neu aufgebaut mit Fokus auf Konversionsoptimierung, schnelleren Ladezeiten und optimiertem Checkout.', results: '+340% Steigerung der Conversions, 45% Reduzierung des Warenkorbabbruchs', client: 'E-Commerce Händler' },
        { title: 'KI Empfangsdame für SaaS', problem: 'SaaS Unternehmen gibt $15K/Monat für Kundensupport aus.', solution: 'KI Empfangssystem implementiert, um 85% der Anfragen automatisch zu bearbeiten.', results: '85% Automatisierungsrate, $150K jährlich gespart, 24/7 Kundensupport', client: 'B2B SaaS Unternehmen' },
        { title: 'Hochkonvertierender Vertriebstrichter', problem: 'Niedrige Conversionraten auf bestehenden Landingpages.', solution: 'Optimierter Vertriebstrichter mit A/B-Tests von Headlines, Copy und CTAs.', results: '$1.2M Vertriebspipeline generiert, 12% Converisonrate', client: 'Digital Marketing Agentur' },
        { title: 'Agentur Website mit Lead System', problem: 'Agentur hatte kein Lead-Generierungssystem auf ihrer Website.', solution: 'Konversionsorientierte Website mit integriertem Lead-Capture und CRM-System.', results: '250+ qualifizierte Leads pro Monat, $5M+ Pipeline', client: 'Marketing Agentur' }
      ]
    },
    howIWork: { 
      heading: 'So Arbeite ich', 
      sub: "Ein bewährter Prozess zur Ergebnislieferung. Gleiche Methodik, die Millionen an Kundeneinnamen generiert hat.", 
      steps: [
        { title: 'Verstehe dein Unternehmen', desc: 'Tiefes Discovery-Gespräch, um Ihre Ziele, Herausforderungen und Geschäftsmetriken zu verstehen. Wir analysieren Ihre Konkurrenz und identifizieren Möglichkeiten.', timeline: 'Woche 1-2' },
        { title: 'Entwirf und Baue die Lösung', desc: 'Wir entwerfen und bauen Ihre Lösung mit täglichen Fortschritts-Updates. Transparenter Prozess mit regelmäßigen Feedback-Schleifen und Iterationen.', timeline: 'Woche 3-8' },
        { title: 'Launch, Optimiere & Skaliere', desc: 'Launch mit Vertrauen. Wir überwachen die Leistung, optimieren basierend auf echten Daten und skalieren, was funktioniert. Kein Raten, nur Daten.', timeline: 'Woche 9+' }
      ],
      keyPoints: {
        transparent: 'Transparente Kommunikation',
        transparentDesc: 'Tägliche Updates, wöchentliche Anrufe und vollständige Sichtbarkeit in den Entwicklungsprozess. Sie wissen immer, was passiert.',
        dataDriven: 'Datengetriebene Optimierung',
        dataDrivenDesc: 'Jede Entscheidung wird durch Daten unterstützt. Wir testen, messen und optimieren kontinuierlich für maximale ROI.'
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
        { question: 'Mit wem arbeiten Sie?', answer: 'Ich arbeite mit seriösen Geschäftsinhabern und Gründern, die dem Wachstum verpflichtet sind. Ich konzentriere mich auf Gründer und CEOs von Bootstrapped Startups bis zu 8-stelligen Unternehmen. Wenn Ihr Ziel echtes Umsatzwachstum ist, sind wir eine gute Passform.' },
        { question: 'Was kosten Projekte?', answer: 'Projekte reichen von $15K bis $150K+ je nach Umfang und Komplexität. Ich berechne basierend auf dem Projektumfang, nicht stündlich, weil wir beide auf Ergebnisse fokussiert sind. Lassen Sie uns über Ihre spezifischen Bedürfnisse sprechen.' },
        { question: 'Bieten Sie laufende Unterstützung?', answer: 'Ja. Die meisten meiner Kunden arbeiten nach dem Launch mit mir an Retainern für Optimierung, Wartung und Skalierung. Ich bleibe involviert, bis das System die von uns gesetzten Umsatzziele generiert.' },
        { question: 'Wie lange dauert ein Projekt?', answer: 'Typischerweise 8-12 Wochen von Discovery bis Launch. Woche 1-2: Tiefes Discovery. Woche 3-8: Design und Build. Woche 9+: Launch und Optimierung. Zeitplan hängt vom Umfang ab.' },
        { question: 'Können Sie mit meinen bestehenden Systemen integrieren?', answer: 'Auf jeden Fall. Ich integriere mit bestehenden CRMs, Zahlungsabwicklern, E-Mail-Systemen und Datenbanken. Sie müssen nicht alles von Grund auf neu aufbauen. Wir integrieren sauber mit dem, was Sie haben.' },
        { question: 'Was wenn ich nicht sicher bin, was ich brauche?', answer: 'Perfekt. Dafür ist das Discovery-Gespräch. Ich stelle tiefgreifende Fragen über Ihr Unternehmen, Metriken und Ziele. Zusammen finden wir die richtige Lösung. Sie müssen nicht alles ausgearbeitet haben, bevor wir sprechen.' },
        { question: 'Übernehmen Sie laufende Optimierung?', answer: 'Ja. Nach dem Launch überwache ich die Leistung, führe A/B-Tests durch und optimiere kontinuierlich. Wir setzen KPIs und verfolgen alles. Die Arbeit hört nicht beim Launch auf — ab da wird es besser.' },
        { question: 'Wie ist Ihre aktuelle Verfügbarkeit?', answer: 'Ich begrenze meine Arbeitsbelastung auf 2-3 Projekte gleichzeitig, um Qualität und tiefen Fokus zu gewährleisten. Ich bin selektiv, kann aber normalerweise innerhalb von 2-4 Wochen mit neuen Projekten beginnen. Planen Sie einen Anruf, um die aktuelle Kapazität zu überprüfen.' }
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
      brandTag: 'Ich baue Websites und KI-Systeme, die Einnahmen generieren.', 
      navigation: 'Navigation', 
      connect: 'Verbinden', 
      privacy: 'Datenschutz', 
      terms: 'Bedingungen', 
      copyright: (year: number) => `© ${year} João Mateus. Alle Rechte vorbehalten.`,
      services: 'Dienstleistungen',
      company: 'Unternehmen',
      websiteDev: 'Website-Entwicklung',
      aiAutomation: 'KI-Automatisierung',
      salesFunnels: 'Verkaufstrichter',
      conversionOpt: 'Konversionsoptimierung',
      aboutLink: 'Über',
      workLink: 'Arbeiten',
      contactLink: 'Kontakt',
      blog: 'Blog'
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
      badge: 'Constructeur Digital et Ingénieur de Croissance',
      title: "Je construis des sites Web et des systèmes d'IA qui rapportent de'argent aux entreprises",
      subtitle: "Sites Web personnalisés, automatisation IA et solutions axées sur la conversion. Je ne crée pas de décorations numériques — je crée des moteurs de revenus.",
      bookCall: 'Réserver un Appel Stratégique',
      viewWork: 'Voir Mon Travail',
      stats: {
        projects: 'Projets Livrés',
        revenue: 'Augmentation Moyenne des Revenus',
        satisfaction: 'Satisfaction Client',
      },
      visualText: 'Systèmes de Croissance des Revenus',
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
        thanks: "De rien! Y a-t-il autre chose que vous aimeriez savoir? Je suis heureux d'aider!",
        price: "Les coûts des projets varient de 15K$ à 150K$+ selon la portée et la complexité. Je facture basé sur la portée du projet, pas à l'heure, car nous sommes tous les deux axés sur les résultats. Planifions un appel pour discuter de vos besoins spécifiques!",
        project: "Je travaille sur le développement de sites Web personnalisés, les systèmes d'automatisation IA, les tunnels de ventes et l'optimisation de conversion. Des sites Web haute performance aux réceptionnistes IA et l'automatisation des affaires - je construis des systèmes qui génèrent des revenus.",
        time: "Habituellement 8-12 semaines de la découverte au lancement. Semaine 1-2: Découverte approfondie. Semaine 3-8: Design et construction. Semaine 9+: Lancement et optimisation. Le calendrier dépend de la portée.",
        ai: "Je construis des systèmes d'automatisation IA incluant des réceptionnistes IA, la qualification des leads, l'automatisation du support client et l'automatisation des processus métier. Ces systèmes peuvent économiser 20+ heures par semaine et fonctionner 24/7.",
        website: "Je construis des sites Web haute performance et axés sur la conversion. Chaque site est optimisé pour la vitesse, le SEO et conçu pour générer des revenus - pas seulement être beau. Voulez-vous voir des exemples?",
        contact: "Vous pouvez planifier un appel stratégique directement depuis ce site, ou envoyer un message via le formulaire de contact. Je réponds généralement dans les 24 heures en jours ouvrables.",
        default: "C'est une excellente question! J'adorerais en discuter avec vous lors d'un appel. Vous pouvez planifier un appel stratégique gratuit pour parler de vos besoins spécifiques et voir comment je peux aider votre entreprise à croître."
      }
    },
    about: {
      heading: 'À Propos de Moi',
      paragraphs: [
        "Je suis João Mateus et je construis des produits numériques qui rapportent de l'argent aux entreprises. Pas des sites qui ont bonne mine. Pas des applications \"innovantes.\" Des produits qui génèrent des revenus mesurables et éliminent l'inefficacité.",
        "J'ai commencé à construire des sites Web à 14 ans. J'ai lancé ma première agence à 22 ans. Depuis, j'ai travaillé avec tout le monde, des startups bootstrapées aux entreprises de 8 chiffres, et j'ai vu le même schéma se répéter: la plupart des produits numériques échouent parce qu'ils sont construits pour l'esthétique ou les fonctionnalités, pas pour les résultats commerciaux.",
        "Cela a changé ma façon de travailler. Tout ce que je construis maintenant est architecturé autour d'une métrique: cela fait-il avancer l'entreprise? Pas \"c'est beau.\" Génère-t-il des prospects, réduit-il les coûts, augmente-t-il les conversions ou élimine-t-il les frictions? Si ça ne répond pas \"oui\" à au moins l'un d'entre eux, nous le reconcevons.",
        "Je me concentre sur trois choses: performance, conversion et automatisation. Je suis obsédé par les temps de chargement car chaque milliseconde impacte les revenus. Je teste chaque bouton, titre et appel à l'action car les données disent la vraie histoire. Et je construis des systèmes d'IA et d'automatisation car ils scalent ce que les humains ne peuvent pas.",
        "Je ne suis pas arrogant concernant mon travail — les résultats parlent plus fort que n'importe quel pitch. Mes clients ont vu des augmentations de revenus de 7-12x, des entreprises ont économisé 20+ heures par semaine, et les conversions se sont améliorées en moyenne de 240%. Ce ne sont pas des nombres théoriques. Ce sont des entreprises qui ont maintenant de la place pour grandir."
      ],
      stats: { years: "Ans d'Expérience", projects: 'Projets Livrés', revenue: 'Revenus Générés' },
      focus: 'Ma Focalisation',
      focusPerformance: 'Performance',
      focusPerformanceDesc: 'Chaque milliseconde compte. La vitesse impacte directement les revenus.',
      focusConversion: 'Conversion',
      focusConversionDesc: 'Optimisation basée sur les données. Chaque élément testé pour maximiser le ROI.',
      focusAutomation: 'Automatisation',
      focusAutomationDesc: "Systèmes d'IA et d'automatisation qui scalent au-delà des capacités humaines.",
    },
    services: { 
      heading: 'Ce que je Fais', 
      sub: 'Cinq services principaux qui génèrent de réels résultats commerciaux. Chacun construit sur des années d\'expérience.', 
      items: [
        { title: 'Développement de Sites Web Personnalisés', desc: 'Sites Web haute performance construits pour les conversions, pas les décorations. Optimisés SEO, responsive et conçus pour générer des revenus.' },
        { title: 'Automatisation IA et Réceptionnistes IA', desc: 'Automatisez les interactions clients, la qualification des leads et les processus métier. Réduisez les coûts opérationnels tout en améliorant l\'expérience client.' },
        { title: 'Tunnels de Ventes et Pages de Destination', desc: 'Pages de destination et tunnels de ventes axés sur la conversion. Chaque élément testé et optimisé pour un maximum de ROI.' },
        { title: 'Automatisation des Processus Métier', desc: 'Éliminez les tâches manuelles avec une automatisation intelligente. Économisez 20+ heures par semaine et éliminez les erreurs humaines.' },
        { title: 'Optimisation de la Performance et Conversion', desc: 'Améliorez la vitesse de page, réduisez le taux de rebond et augmentez les conversions. Optimisation basée sur les données qui fait avancer l\'entreprise.' }
      ]
    },
    projects: { 
      heading: 'Travaux Sélectionnés', 
      sub: 'Projets récents où stratégie, exécution et résultats se sont alignés. Vraies entreprises, vrai impact sur les revenus.', 
      problemHeading: 'Le Problème', 
      solutionHeading: 'La Solution', 
      resultHeading: 'Le Résultat', 
      items: [
        { title: 'Refonte Plateforme E-Commerce', problem: 'Client perd des clients en raison dune mauvaise expérience de paiement.', solution: 'Plateforme refaite avec un accent sur loptimisation de conversion, des temps de chargement plus rapides et un paiement simplifié.', results: '+340% daugmentation des conversions, 45% de réduction de labandon de panier', client: 'Vendeur E-Commerce' },
        { title: 'Réceptionniste IA pour SaaS', problem: 'Entreprise SaaS dépenses $15K/mois en support client.', solution: 'Système de réceptionniste IA mis en place pour gérer 85% des demandes automatiquement.', results: '85% taux dautomatisation, $150K économisés annuellement, support 24/7', client: 'Entreprise SaaS B2B' },
        { title: 'Tunnel de Vente Haute Conversion', problem: 'Faibles taux de conversion sur les landing pages existantes.', solution: 'Tunnel de vente optimisé avec tests A/B de headlines, copy et CTAs.', results: '$1.2M pipeline de ventes généré, 12% taux de conversion', client: 'Agence Marketing Digital' },
        { title: 'Site Agence avec Système de Leads', problem: 'Agence navait pas de système de génération de leads sur leur site.', solution: 'Site axé sur la conversion avec capture de leads intégrée et système CRM.', results: '250+ leads qualifiés par mois, pipeline de $5M+', client: 'Agence Marketing' }
      ]
    },
    howIWork: { 
      heading: 'Comment je Travaille', 
      sub: "Un processus éprouvé conçu pour fournir des résultats. Même méthodologie qui a généré des millions de revenus clients.", 
      steps: [
        { title: 'Comprenez Votre Entreprise', desc: 'Appel de découverte approfondi pour comprendre vos objectifs, défis et métriques commerciales. Nous analysons votre concurrence et identifions les opportunités.', timeline: 'Semaine 1-2' },
        { title: 'Concevez et Construisez la Solution', desc: 'Nous concevons et construisons votre solution avec des mises à jour quotidiennes de progrès. Processus transparent avec des boucles de rétroaction et des itérations régulières.', timeline: 'Semaine 3-8' },
        { title: 'Lancez, Optimisez et Scalez', desc: 'Lancez avec confiance. Nous surveillons la performance, optimisons basés sur des données réelles et scalons ce qui fonctionne. Pas de devinettes, que des données.', timeline: 'Semaine 9+' }
      ],
      keyPoints: {
        transparent: 'Communication Transparente',
        transparentDesc: 'Mises à jour quotidiennes, appels hebdomadaires et visibilité complète dans le processus de développement. Vous savez toujours ce qui se passe.',
        dataDriven: 'Optimisation Basée sur les Données',
        dataDrivenDesc: 'Chaque décision est backing par des données. Nous testons, mesurons et optimisons en continu pour assurer un maximum de ROI.'
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
        { question: 'Avec qui travaillez-vous?', answer: 'Je travaille avec des propriétaires d\'entreprises et des fondateurs sérieux engagés dans la croissance. Je me concentre sur les fondateurs et PDG de startups bootstrapées jusqu\'aux entreprises à 8 chiffres. Si votre objectif est une croissance réelle des revenus, nous sommes une bonne搭配.' },
        { question: 'Combien coûtent les projets?', answer: 'Les projets vont de $15K à $150K+ selon la portée et la complexité. Je facture basé sur la portée du projet, pas à l\'heure, parce que nous sommes tous les deux axés sur les résultats. Parlons de vos besoins spécifiques.' },
        { question: 'Offrez-vous un support continu?', answer: 'Oui. La plupart de mes clients travaillent avec moi sur des forfaits après le lancement pour optimisation, maintenance et mise à l\'échelle. Je reste impliqué jusqu\'à ce que le système génère les objectifs de revenus que nous avons fixés.' },
        { question: 'Combien de temps prend un projet?', answer: 'Habituellement 8-12 semaines de la découverte au lancement. Semaine 1-2: Découverte approfondie. Semaine 3-8: Design et construction. Semaine 9+: Lancement et optimisation. Le calendrier dépend de la portée.' },
        { question: 'Pouvez-vous intégrer avec mes systèmes existants?', answer: 'Absolument. J\'intègre avec les CRMs existants, les processeurs de paiement, les systèmes d\'email et les bases de données. Pas besoin de tout reconstruire à partir de zéro. Nous intégrons proprement avec ce que vous avez.' },
        { question: 'Et si je ne sais pas ce dont j\'ai besoin?', answer: 'Parfait. C\'est pour ça que sert l\'appel de découverte. Je pose des questions profondes sur votre entreprise, vos métriques et vos objectifs. Ensemble, nous trouvons la bonne solution. Vous n\'avez pas à tout avoir figured out avant de parler.' },
        { question: 'Gérez-vous l\'optimisation continue?', answer: 'Oui. Après le lancement, je surveille la performance, mène des tests A/B et optimise en continu. Nous fixons des KPIs et suivons tout. Le travail ne s\'arrête pas au lancement — ça saméliore à partir de là.' },
        { question: 'Quelle est votre disponibilité actuelle?', answer: 'Je limite ma charge de travail à 2-3 projets à la fois pour assurer qualité et focus profond. Je suis sélectif mais je peux généralement commencer de nouveaux projets dans 2-4 semaines. Planifiez un appel pour vérifier la capacité actuelle.' }
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
      brandTag: "Construire des sites Web et des systèmes d'IA qui génèrent des revenus.", 
      navigation: 'Navigation', 
      connect: 'Connecter', 
      privacy: 'Vie Privée', 
      terms: 'Conditions', 
      copyright: (year: number) => `© ${year} João Mateus. Tous droits réservés.`,
      services: 'Services',
      company: 'Entreprise',
      websiteDev: 'Développement Web',
      aiAutomation: 'Automatisation IA',
      salesFunnels: 'Tunnels de Ventes',
      conversionOpt: 'Optimisation de Conversion',
      aboutLink: 'À propos',
      workLink: 'Travaux',
      contactLink: 'Contact',
      blog: 'Blog'
    },
  },
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

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
