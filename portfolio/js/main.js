const translations = {
  en: {
    'nav.cta':        'Get in touch',
    'hero.badge':     'Available for projects',
    'hero.h1a':       'Your idea,',
    'hero.h1b':       'in production.',
    'hero.sub':       'Backend systems, AI-powered platforms and automation tools — from idea to production.',
    'hero.scroll':    'See my work ↓',
    'work.label':     'Selected work',
    'roboteam.desc':  'Your team of AI agents working for you 24/7. 9 specialized agents — from secretary to trader — automating your business via Telegram, WhatsApp and Slack.',
    'dentis.desc':    'Full dental clinic management platform — scheduling, digital clinical records with interactive odontogram, billing and an AI clinical assistant with RAG powered by Amazon Bedrock.',
    'about.label':    'About',
    'about.h1':       '15+ years',
    'about.h2':       'shipping products.',
    'about.p1':       "I've led engineering teams at El Corte Inglés, JumboTours and Barceló, designing microservice architectures, event-driven systems with Kafka and cloud infrastructure on AWS and Azure.",
    'about.p2':       'Now I apply that same depth to building my own products and solving real problems for small businesses and entrepreneurs.',
    'stack.label':    'Stack',
    'contact.label':  "Let's build something",
    'contact.h1':     'Have a project',
    'contact.h2':     'in mind?',
    'contact.sub':    "Let's build something together.",
    'footer.copy':    '© 2026 Jerges Bello',
  },
  es: {
    'nav.cta':        'Hablemos',
    'hero.badge':     'Disponible para proyectos',
    'hero.h1a':       'Tu idea,',
    'hero.h1b':       'en producción.',
    'hero.sub':       'Sistemas backend, plataformas con IA y herramientas de automatización — de la idea a producción.',
    'hero.scroll':    'Ver mi trabajo ↓',
    'work.label':     'Proyectos',
    'roboteam.desc':  'Tu equipo de agentes IA trabajando por ti las 24h. 9 agentes especializados — de secretaria a trader — automatizando tu negocio por Telegram, WhatsApp y Slack.',
    'dentis.desc':    'Plataforma completa de gestión para clínicas dentales — agenda, historia clínica digital con odontograma interactivo, facturación y asistente IA clínico con RAG sobre Amazon Bedrock.',
    'about.label':    'Sobre mí',
    'about.h1':       '+15 años',
    'about.h2':       'creando productos.',
    'about.p1':       'He liderado equipos técnicos en El Corte Inglés, JumboTours y Barceló, diseñando arquitecturas de microservicios, sistemas event-driven con Kafka e infraestructura cloud en AWS y Azure.',
    'about.p2':       'Ahora aplico esa misma profundidad para construir mis propios productos y resolver problemas reales para pequeñas empresas y emprendedores.',
    'stack.label':    'Stack',
    'contact.label':  'Construyamos algo',
    'contact.h1':     '¿Tienes un proyecto',
    'contact.h2':     'en mente?',
    'contact.sub':    'Construyamos algo juntos.',
    'footer.copy':    '© 2026 Jerges Bello',
  },
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Auto-detect: saved preference → browser language → English
  const saved   = localStorage.getItem('lang');
  const browser = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  setLanguage(saved || browser);

  // Scroll fade-in
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('section:not(#hero), .project, .stack-item')
    .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });
});
