const en = {
  nav: {
    profile: "Me in 2 min",
    projects: "My projects",
    education: "My background",
    moreAboutMe: "More about me",
    connect: "Let's connect",
  },
  hero: {
    intro:
      "Hello, my name is Alejandro and I come from Spain. My background is in Artificial Intelligence and Business Innovation, and I'm deeply passionate about edtech. After a great experience in Trondheim a few years ago, I'm back in Oslo, looking to build an ambitious career at the intersection of technology and business. I'm open to both startup and corporate opportunities where I can make a real impact.",
    wantToConnect: "Want to connect?",
    linkedin: "LinkedIn",
    email: "Email",
  },
  aboutMe: {
    heading: "Me in 2 min",
    p1: "I'm Alejandro, born in Madrid, Spain, right in the middle of 2000. Ever since I was a child, I've been passionate about numbers and technology. That passion eventually led me to become a Data Analytics and AI expert. Along the way, I realised what excites me most isn't deep AI research or optimization. It's unlocking the power of AI for real-world scenarios.",
    p2: "This pushed me toward a role as an IT and Data Consultant, where I spent two years working across a variety of software and data-analytics projects. Over time, I felt a purely technical role wasn't the right fit for me. I was drawn to the bigger picture instead, shaping ideas and improving how teams work. Today, I'm an engineer with a strong technical foundation who also brings real capabilities in project planning, communication and teamwork.",
    p3: "Outside of work, I can't imagine a life without travelling, staying active in sports (I'm big into padel) or taking a relaxed walk in nature to unwind on the weekends.",
  },
  projects: {
    heading: "My projects",
    techLabel: "Tech projects",
    bizLabel: "Entrepreneurial projects",
    viewOnGithub: "View on GitHub",
    privateRepo: "Private repo",
    tech: {
      chatbot: {
        tagline: "LLM embedded in everyday messaging",
        description: "A fast demo built to test how an AI assistant behaves inside an app I already use daily, WhatsApp, instead of a separate tool. It handles the full conversation flow, from message routing to context, directly inside the chat.",
      },
      autius: {
        tagline: "Driving school slot monitor",
        description: "While getting my driving license, lesson slots opened at random, unpredictable times and were gone within minutes. I built a Python scraper that monitors the booking page around the clock and sends me an instant Discord alert the moment a new slot opens.",
      },
      tipster: {
        tagline: "AI-powered bet replication",
        description: "I follow sports tipsters on Telegram to benchmark their strategies, but they post forecasts at all hours, so I kept missing bets. I built an AI pipeline that reads their Telegram messages, extracts the bet parameters and places the bets automatically across two bookmakers.",
      },
    },
    biz: {
      eksamenboost: {
        tagline: "Exam prep built for Norwegian universities",
        description: "After years mentoring UiO students, I kept seeing the same gap: generic study resources didn't match the specific courses students were failing. I built a platform with course-specific quizzes, coding exercises and exam simulators that actually reflect what's tested.",
        status: "Live · deployed at eksamenboost.no",
      },
      clearterms: {
        tagline: "AI adoption platform for SMEs",
        description: "The biggest blocker to AI adoption in SMEs isn't technology. It's the communication gap between technical teams and decision-makers. ClearTerms makes AI opportunities legible to executives in business terms, not technical ones. Built during the first year of my Master's in Entrepreneurship and Innovation Management at UiO.",
        status: "MSc project · prototype built",
      },
    },
  },
  education: {
    heading: "My background",
    arc: { bsc: "BSc + Erasmus", mscAi: "MSc AI", mscInnovation: "MSc Innovation" },
    cards: {
      oslo: {
        chapter: "Current",
        degree: "MSc Entrepreneurship & Innovation Management",
        school: "University of Oslo (UiO)",
      },
      msc: {
        chapter: "2022–23",
        degree: "MSc Applied Artificial Intelligence",
        school: "Carlos III de Madrid University",
      },
      bsc: {
        chapter: "2018–22",
        degree: "BSc Computer Engineering",
        school: "Carlos III de Madrid University",
      },
    },
  },
  moreAboutMe: {
    heading: "More about me",
    timelineLabel: "My timeline",
    funFactsLabel: "Fun facts",
  },
  meInPictures: {
    now: "Now",
    chapters: {
      oslo: {
        location: "Oslo, Norway",
        title: "Growing and chasing my purpose in Oslo",
        caption: "I came back for the personal growth and opportunities Norway once gave me, back when Trondheim was my first year abroad.",
        extraLabel: "Back in Norway · Oslo",
      },
      madridConsulting: {
        location: "Madrid, Spain",
        title: "Two years as a data consultant",
        caption: "After finishing my Applied AI master's, I spent two years working as a data consultant, helping companies make better use of their own data.",
        extraLabel: "",
      },
      trondheim: {
        location: "Trondheim, Norway",
        title: "The year Norway changed everything",
        caption: "My first time living abroad and truly on my own, away from my family, in a year that reshaped how I see the world.",
        extraLabel: "First Norway connection · NTNU Trondheim",
      },
      bsc: {
        location: "Madrid, Spain",
        title: "Learning to think like an engineer",
        caption: "Years spent building my technical foundation, learning to think in a second language and in code.",
        extraLabel: "",
      },
      childhood: {
        location: "Spain",
        title: "Grew up curious",
        caption: "Raised in Madrid, always curious, always taking things apart just to see how they worked.",
        extraLabel: "",
      },
    },
  },
  funFacts: {
    instructions: "These are 3 fun facts about me. I have my favourite one, how about you? Play and rank them :)",
    rankMost: "Most surprising",
    rankLeast: "Least surprising",
    shuffle: "Shuffle",
    dragMe: "Drag me",
    facts: [
      "Even though I was born and raised in Madrid, I am the biggest Barça fan.",
      "My right foot fingers do not follow the standard sizing pattern.",
      "I had my wallet stolen on my Interrail trip the moment I arrived in Brussels.",
    ],
  },
  letsConnect: {
    heading: "Let's connect",
    subheading: "Point your camera at a code, or tap one to make it bigger.",
    linkedinLabel: "LinkedIn",
    linkedinSub: "Scan to connect",
    cvLabel: "CV",
    cvSub: "Scan to download",
    openLinkInstead: "Open link instead",
    close: "Close",
  },
};

const es: typeof en = {
  nav: {
    profile: "Sobre mí en 2 min",
    projects: "Mis proyectos",
    education: "Mi formación",
    moreAboutMe: "Más sobre mí",
    connect: "Conectemos",
  },
  hero: {
    intro:
      "Hola, me llamo Alejandro y vengo de España. Mi formación es en Inteligencia Artificial e Innovación Empresarial, y soy un gran apasionado del edtech. Tras una gran experiencia en Trondheim hace unos años, he vuelto a Oslo con ganas de construir una carrera ambiciosa en la intersección entre tecnología y negocio. Estoy abierto tanto a oportunidades en startups como en empresas consolidadas donde pueda sentirme útil y generar un gran impacto.",
    wantToConnect: "¿Quieres conectar?",
    linkedin: "LinkedIn",
    email: "Correo",
  },
  aboutMe: {
    heading: "Sobre mí en 2 min",
    p1: "Soy Alejandro, nacido en Madrid, España, justo a mediados de 2000. Desde niño he sido un apasionado de los números y la tecnología. Esa pasión me llevó finalmente a convertirme en experto en Análisis de Datos e Inteligencia Artificial. Por el camino descubrí que lo que más me apasiona no es la investigación profunda en IA ni la optimización. Es desbloquear el potencial de la IA en escenarios reales.",
    p2: "Esto me llevó a trabajar como consultor de IT y Datos, donde durante dos años participé en una variedad de proyectos de software y analítica de datos. Con el tiempo sentí que un rol puramente técnico no encajaba conmigo. Me atraía más la visión de conjunto de los proyectos y mejorar cómo trabajan los equipos. Hoy soy un ingeniero con una sólida base técnica que también aporta verdaderas capacidades de planificación de proyectos, comunicación y trabajo en equipo.",
    p3: "Fuera del trabajo, no concibo la vida sin viajar, practicar deporte (soy un gran aficionado al pádel) o dar un paseo tranquilo por la naturaleza para desconectar los fines de semana.",
  },
  projects: {
    heading: "Mis proyectos",
    techLabel: "Proyectos tech",
    bizLabel: "Proyectos emprendedores",
    viewOnGithub: "Ver en GitHub",
    privateRepo: "Repositorio privado",
    tech: {
      chatbot: {
        tagline: "Un LLM integrado en la mensajería diaria",
        description: "Una demo rápida construida para probar cómo se comporta un asistente de IA dentro de una app que ya uso a diario, WhatsApp, en lugar de una herramienta aparte. Gestiona todo el flujo de conversación, desde el enrutamiento de mensajes hasta el contexto, directamente en el chat.",
      },
      autius: {
        tagline: "Monitor de plazas de autoescuela",
        description: "Mientras sacaba el carné de conducir, las plazas de las clases se abrían en horarios aleatorios e impredecibles y desaparecían en minutos. Construí un scraper en Python que vigila la página de reservas las 24 horas y me manda una alerta instantánea a Discord en cuanto se libera una plaza nueva.",
      },
      tipster: {
        tagline: "Réplica de apuestas con IA",
        description: "Sigo a tipsters deportivos en Telegram para comparar sus estrategias, pero publican sus pronósticos a cualquier hora, así que se me escapaban apuestas. Construí un pipeline de IA que lee sus mensajes de Telegram, extrae los parámetros de la apuesta y las coloca automáticamente en dos casas de apuestas.",
      },
    },
    biz: {
      eksamenboost: {
        tagline: "Preparación de exámenes para universidades noruegas",
        description: "Tras años haciendo mentoring a estudiantes de la UiO, veía siempre el mismo problema: los recursos de estudio genéricos no encajaban con las asignaturas concretas en las que suspendían. Construí una plataforma con cuestionarios específicos por curso, ejercicios de programación y simuladores de examen que reflejan lo que realmente se evalúa.",
        status: "En producción · desplegado en eksamenboost.no",
      },
      clearterms: {
        tagline: "Plataforma de adopción de IA para pymes",
        description: "El mayor obstáculo para la adopción de IA en las pymes no es la tecnología. Es la brecha de comunicación entre los equipos técnicos y quienes toman las decisiones. ClearTerms hace que las oportunidades de IA sean comprensibles para los directivos en términos de negocio, no técnicos. Construido durante el primer año de mi Máster en Emprendimiento e Innovación en la UiO.",
        status: "Proyecto de máster · prototipo construido",
      },
    },
  },
  education: {
    heading: "Mi formación",
    arc: { bsc: "Grado + Erasmus", mscAi: "Máster IA", mscInnovation: "Máster Innovación" },
    cards: {
      oslo: {
        chapter: "Actual",
        degree: "Máster en Emprendimiento e Innovación",
        school: "Universidad de Oslo (UiO)",
      },
      msc: {
        chapter: "2022–23",
        degree: "Máster en Inteligencia Artificial Aplicada",
        school: "Universidad Carlos III de Madrid",
      },
      bsc: {
        chapter: "2018–22",
        degree: "Grado en Ingeniería Informática",
        school: "Universidad Carlos III de Madrid",
      },
    },
  },
  moreAboutMe: {
    heading: "Más sobre mí",
    timelineLabel: "Mi trayectoria",
    funFactsLabel: "Datos curiosos",
  },
  meInPictures: {
    now: "Ahora",
    chapters: {
      oslo: {
        location: "Oslo, Noruega",
        title: "Creciendo y persiguiendo mi propósito en Oslo",
        caption: "Volví por el crecimiento personal y las oportunidades que Noruega ya me dio una vez, cuando Trondheim fue mi primer año en el extranjero.",
        extraLabel: "De vuelta en Noruega · Oslo",
      },
      madridConsulting: {
        location: "Madrid, España",
        title: "Dos años como consultor de datos",
        caption: "Tras terminar mi máster en IA Aplicada, pasé dos años trabajando como consultor de datos, ayudando a empresas a sacar mejor partido a sus propios datos.",
        extraLabel: "",
      },
      trondheim: {
        location: "Trondheim, Noruega",
        title: "El año en que Noruega lo cambió todo",
        caption: "Mi primera vez viviendo en el extranjero y verdaderamente solo, lejos de mi familia, en un año que cambió mi forma de ver el mundo.",
        extraLabel: "Primera conexión con Noruega · NTNU Trondheim",
      },
      bsc: {
        location: "Madrid, España",
        title: "Aprendiendo a pensar como ingeniero",
        caption: "Años construyendo mi base técnica, aprendiendo a pensar en un segundo idioma y en código.",
        extraLabel: "",
      },
      childhood: {
        location: "España",
        title: "Crecí siendo curioso",
        caption: "Criado en Madrid, siempre curioso, siempre desmontando cosas solo para ver cómo funcionaban.",
        extraLabel: "",
      },
    },
  },
  funFacts: {
    instructions: "Estos son 3 datos curiosos sobre mí. Yo ya tengo mi favorito, ¿y tú? Juega y ordénalos :)",
    rankMost: "Lo más sorprendente",
    rankLeast: "Lo menos sorprendente",
    shuffle: "Mezclar",
    dragMe: "Arrástrame",
    facts: [
      "Aunque nací y crecí en Madrid, soy el mayor culé que existe.",
      "Los dedos de mi pie derecho no siguen el patrón de tallas habitual.",
      "Me robaron la cartera en mi viaje de Interrail justo al llegar a Bruselas.",
    ],
  },
  letsConnect: {
    heading: "Conectemos",
    subheading: "Apunta tu cámara a un código, o toca uno para verlo más grande.",
    linkedinLabel: "LinkedIn",
    linkedinSub: "Escanea para conectar",
    cvLabel: "CV",
    cvSub: "Escanea para descargar",
    openLinkInstead: "Abrir el enlace en su lugar",
    close: "Cerrar",
  },
};

export const translations = { en, es };
export type Translations = typeof en;
