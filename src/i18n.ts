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

// Simple translations object
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
      title: 'I Build Websites & AI Systems That Make Businesses Money',
      subtitle: "Custom websites, AI automation, and conversion-focused solutions. I don't build digital decorations — I build revenue engines.",
      bookCall: 'Book a Strategy Call',
      viewWork: 'View My Work',
      stats: {
        projects: 'Projects Delivered',
        revenue: 'Avg Revenue Increase',
        satisfaction: 'Client Satisfaction',
      },
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm João Mateus, and I build digital products that make businesses money. Not websites that look good. Not apps that are \"innovative.\" Products that generate measurable revenue and eliminate inefficiency.",
        "I started building websites when I was 14. I launched my first agency at 22. I've since worked with everyone from bootstrapped startups to 8-figure companies, and I've seen the same pattern repeat: most digital products fail because they're built for aesthetics or features, not for business outcomes.",
        "That changed how I work. Everything I build now is architected around one metric: does it move the business forward? Not \"is it pretty.\" Does it generate leads, reduce costs, increase conversions, or eliminate friction? If it doesn't answer \"yes\" to at least one of those, we redesign it.",
        "I focus on three things: performance, conversion, and automation. I obsess over page load times because every millisecond impacts revenue. I test every button, headline, and call-to-action because data tells the real story. And I build AI and automation systems because they scale what humans can't.",
        "I'm not arrogant about my work — the results speak louder than any pitch. My clients have seen 7-12x revenue increases, businesses saved 20+ hours per week, and conversions improve by an average of 240%. These aren't theoretical numbers. These are businesses that now have breathing room to grow.",
      ],
      stats: { years: 'Years Building', projects: 'Projects Delivered', revenue: 'Client Revenue Generated' },
    },
    services: { heading: 'What I Do', sub: 'Five core services that generate real business outcomes. Each one built on years of experience.', items: [] },
    projects: { heading: 'Selected Work', sub: 'Recent projects where strategy, execution, and results aligned. Real businesses, real revenue impact.', problemHeading: 'The Problem', solutionHeading: 'What I Built', resultHeading: 'The Result', items: [] },
    howIWork: { heading: 'How I Work', sub: "A proven process designed to deliver results. Same methodology that's generated millions in client revenue.", steps: [] },
    testimonials: { heading: 'What Clients Say', sub: 'Real feedback from businesses that have seen significant growth after working together.', items: [] },
    faq: { heading: 'Common Questions', sub: 'Real answers to the questions I get asked most.', items: [] },
    contact: { heading: 'Ready to Talk?', sub: "Let's discuss your business goals and how I can help you achieve them.", email: 'Email Me', bookCall: 'Book a Call', chat: 'Quick Chat', form: { name: 'Name', email: 'Email', company: 'Company', message: '', submit: 'Send Message', thankYou: "Thanks! I'll get back to you within 24 hours.", placeholder: { name: 'Your name', email: 'you@company.com', company: 'Your company', message: 'What are you looking to build or optimize?' } } },
    footer: { brandTag: 'Building websites & AI systems that generate revenue.', navigation: 'Navigation', connect: 'Connect', privacy: 'Privacy', terms: 'Terms', copyright: (year: number) => `© ${year} João Mateus. All rights reserved.` },
  },
  pt: { nav: { work: 'Trabalhos', services: 'Serviços', about: 'Sobre', contact: 'Contato', bookCall: 'Agendar Chamada' }, hero: { title: 'Eu construo sites e sistemas de IA que fazem dinheiro para empresas', subtitle: 'Sites personalizados, automação de IA e soluções focadas em conversão. Não construo decorações digitais — construo motores de receita.', bookCall: 'Agendar uma Estratégia', viewWork: 'Veja Meu Trabalho', stats: { projects: 'Projetos Entregues', revenue: 'Aumento médio de receita', satisfaction: 'Satisfação do cliente' } }, about: { heading: 'Sobre Mim', paragraphs: ['Lorem ipsum...'], stats: { years: 'Anos de experiência', projects: 'Projetos entregues', revenue: 'Receita gerada' } }, services: { heading: 'O que eu faço', sub: '', items: [] }, projects: { heading: 'Trabalhos selecionados', sub: '', problemHeading: 'O Problema', solutionHeading: 'Solução', resultHeading: 'Resultado', items: [] }, howIWork: { heading: 'Como funciono', sub: '', steps: [] }, testimonials: { heading: 'O que dizem os clientes', sub: '', items: [] }, faq: { heading: 'Perguntas frequentes', sub: '', items: [] }, contact: { heading: 'Pronto para falar?', sub: '', email: 'Email', bookCall: 'Agendar', chat: 'Chat rápido', form: { name: 'Nome', email: 'Email', company: 'Empresa', message: '', submit: 'Enviar', thankYou: 'Obrigado!', placeholder: { name: 'Seu nome', email: 'seu@email.com', company: 'Sua empresa', message: 'O que vous gostaria de construir?' } } }, footer: { brandTag: 'Construindo sites e sistemas de IA que geram receita.', navigation: 'Navegação', connect: 'Conecte', privacy: 'Privacidade', terms: 'Termos', copyright: (year: number) => `© ${year} João Mateus. Todos os direitos reservados.` } },
  es: { nav: { work: 'Trabajo', services: 'Servicios', about: 'Sobre', contact: 'Contacto', bookCall: 'Reservar' }, hero: { title: 'Construyo sitios web y sistemas de IA que hacen dinero para negocios', subtitle: 'Soluciones personalizadas enfocadas en conversión. No construyo decoraciones digitales, construyo motores de ingresos.', bookCall: 'Reservar llamada', viewWork: 'Ver mi trabajo', stats: { projects: 'Proyectos entregados', revenue: 'Aumento de ingresos', satisfaction: 'Satisfacción del cliente' } }, about: { heading: 'Sobre mí', paragraphs: ['Lorem ipsum...'], stats: { years: 'Años de experiencia', projects: 'Proyectos entregados', revenue: 'Ingresos generados' } }, services: { heading: 'Lo que hago', sub: '', items: [] }, projects: { heading: 'Trabajos seleccionados', sub: '', problemHeading: 'El Problema', solutionHeading: 'La Solución', resultHeading: 'El Resultado', items: [] }, howIWork: { heading: 'Cómo trabajo', sub: '', steps: [] }, testimonials: { heading: 'Lo que dicen los clientes', sub: '', items: [] }, faq: { heading: 'Preguntas frecuentes', sub: '', items: [] }, contact: { heading: '¿Listo para hablar?', sub: '', email: 'Correo', bookCall: 'Reservar llamada', chat: 'Chat rápido', form: { name: 'Nombre', email: 'Correo', company: 'Empresa', message: '', submit: 'Enviar', thankYou: '¡Gracias!', placeholder: { name: 'Tu nombre', email: 'tu@correo.com', company: 'Tu empresa', message: '¿Qué te gustaría construir?' } } }, footer: { brandTag: 'Construyendo sitios web y sistemas de IA que generan ingresos.', navigation: 'Navegación', connect: 'Conecta', privacy: 'Privacidad', terms: 'Condiciones', copyright: (year: number) => `© ${year} João Mateus. Todos los derechos reservados.` } },
  de: { nav: { work: 'Projekte', services: 'Dienstleistungen', about: 'Über', contact: 'Kontakt', bookCall: 'Anruf buchen' }, hero: { title: 'Ich baue Websites und KI-Systeme, die Unternehmen Geld einbringen', subtitle: 'Maßgeschneiderte Websites und KI-Automatisierung. Ich baue keine digitalen Dekorationen – ich baue Umsatzmaschinen.', bookCall: 'Strategieanruf buchen', viewWork: 'Meine Arbeit ansehen', stats: { projects: 'Projekte abgeschlossen', revenue: 'Durchschnittliche Umsatzsteigerung', satisfaction: 'Kundenzufriedenheit' } }, about: { heading: 'Über mich', paragraphs: ['Lorem ipsum...'], stats: { years: 'Jahre Erfahrung', projects: 'Projekte abgeschlossen', revenue: 'Generierte Einnahmen' } }, services: { heading: 'Was ich tue', sub: '', items: [] }, projects: { heading: 'Ausgewählte Arbeiten', sub: '', problemHeading: 'Das Problem', solutionHeading: 'Die Lösung', resultHeading: 'Das Ergebnis', items: [] }, howIWork: { heading: 'So arbeite ich', sub: '', steps: [] }, testimonials: { heading: 'Das sagen meine Kunden', sub: '', items: [] }, faq: { heading: 'Häufig gestellte Fragen', sub: '', items: [] }, contact: { heading: 'Bereit zu sprechen?', sub: '', email: 'E-Mail', bookCall: 'Anruf buchen', chat: 'Schneller Chat', form: { name: 'Name', email: 'E-Mail', company: 'Unternehmen', message: '', submit: 'Senden', thankYou: 'Danke!', placeholder: { name: 'Ihr Name', email: 'Ihre@e-mail.de', company: 'Ihr Unternehmen', message: 'Was möchten Sie bauen?' } } }, footer: { brandTag: 'Ich baue Websites und KI-Systeme, die Einnahmen generieren.', navigation: 'Navigation', connect: 'Verbinde', privacy: 'Datenschutz', terms: 'Bedingungen', copyright: (year: number) => `© ${year} João Mateus. Alle Rechte vorbehalten.` } },
  fr: { nav: { work: 'Travail', services: 'Services', about: 'À propos', contact: 'Contact', bookCall: 'Réserver un appel' }, hero: { title: "Je construis des sites Web et des systèmes d'IA qui rapportent de l'argent aux entreprises", subtitle: "Sites personnalisés et automatisation IA. Je ne crée pas de décorations numériques, je crée des moteurs de revenus.", bookCall: 'Réserver un appel stratégique', viewWork: 'Voir mon travail', stats: { projects: 'Projets livrés', revenue: 'Augmentation moyenne des revenus', satisfaction: 'Satisfaction client' } }, about: { heading: 'À propos de moi', paragraphs: ['Lorem ipsum...'], stats: { years: "Ans d'expérience", projects: 'Projets livrés', revenue: 'Revenus générés' } }, services: { heading: 'Ce que je fais', sub: '', items: [] }, projects: { heading: 'Travaux sélectionnés', sub: '', problemHeading: 'Le Problème', solutionHeading: 'La Solution', resultHeading: 'Le Résultat', items: [] }, howIWork: { heading: 'Comment je travaille', sub: '', steps: [] }, testimonials: { heading: 'Ce que disent mes clients', sub: '', items: [] }, faq: { heading: 'Questions fréquemment posées', sub: '', items: [] }, contact: { heading: 'Prêt à parler?', sub: '', email: 'Email', bookCall: 'Réserver un appel', chat: 'Chat rapide', form: { name: 'Nom', email: 'Email', company: 'Entreprise', message: '', submit: 'Envoyer', thankYou: 'Merci!', placeholder: { name: 'Votre nom', email: 'votre@email.fr', company: 'Votre entreprise', message: 'Que voulez-vous construire?' } } }, footer: { brandTag: "Construire des sites Web et des systèmes d'IA qui génèrent des revenus.", navigation: 'Navigation', connect: 'Connecter', privacy: 'Vie privée', terms: 'Conditions', copyright: (year: number) => `© ${year} João Mateus. Tous droits réservés.` } },
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
