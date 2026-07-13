const en = {
  nav: {
    profile: "Me in 2 min",
    tech: "Tech projects",
    biz: "Entrepreneurial projects",
    education: "Academic background",
    pictures: "My timeline",
    connect: "Let's connect",
  },
  hero: {
    intro:
      "I'm ambitious and I've chosen to build my career on the business side of tech. Moving abroad, from Madrid to Trondheim and now Oslo, is part of that: always growing, always looking to build something that matters.",
    hereIs: "Here's Alejandro",
    wantToConnect: "Want to connect?",
    downloadCv: "Download CV",
    linkedin: "LinkedIn",
    email: "Email",
  },
  aboutMe: {
    heading: "Me in 2 min",
    p1: "I grew up in Madrid with a passion for maths and sciences that started in high school and never really faded. That passion led me to study Computer Engineering and then a Master's in Applied AI, building a solid technical foundation along the way.",
    p2: "After graduating, I spent two years working as a Data and IT Consultant, helping financial institutions build data platforms and analytics infrastructure. It was good work, but I kept feeling drawn to the bigger questions: not just how to build something, but why and for whom.",
    p3: "That shift brought me to Oslo. I'm now studying Entrepreneurship and Innovation at UiO and advising startups at iHub and StartupLab, building the business side of my career at the intersection of technology and entrepreneurship. At a more personal level, I'm passionate about travelling, sports, international cuisine and fashion.",
  },
  techProjects: {
    heading: "Tech projects",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    viewOnGithub: "View on GitHub",
    privateRepo: "Private repo",
    projects: {
      chatbot: {
        tagline: "LLM embedded in everyday messaging",
        problem: "I wanted to test how an AI assistant would behave inside an app I already use daily, not a separate tool I had to open.",
        solution: "I embedded an LLM directly into WhatsApp, handling the full conversation flow with message routing and context.",
      },
      autius: {
        tagline: "Driving school slot monitor",
        problem: "I had to open the booking website every 30 minutes to check if a driving slot had opened. It was random, unpredictable, and I kept missing them.",
        solution: "I built a Python scraper that monitors the page 24/7 and sends me a Discord alert the instant a slot opens.",
      },
      tipster: {
        tagline: "AI-powered bet replication",
        problem: "I follow sports tipsters on Telegram to track their strategies, but they post at all hours. I kept missing bets, which skewed my analysis.",
        solution: "I built an AI pipeline that reads their Telegram messages, extracts the bet parameters and places them automatically across two bookmakers.",
      },
    },
  },
  bizProjects: {
    heading: "Entrepreneurial projects",
    projects: {
      eksamenboost: {
        tagline: "Exam prep built for Norwegian universities",
        description: "After years mentoring UiO students, I kept seeing the same gap: generic study resources didn't match the specific courses students were failing. I built a platform with course-specific quizzes, coding exercises and exam simulators that actually reflect what's tested.",
        status: "Live · deployed at eksamenboost.no",
      },
      clearterms: {
        tagline: "AI adoption platform for SMEs",
        description: "The biggest blocker to AI adoption in SMEs isn't technology — it's the communication gap between technical teams and decision-makers. ClearTerms makes AI opportunities legible to executives in business terms, not technical ones. Built during my MSc at UiO.",
        status: "MSc project · prototype built",
      },
    },
  },
  education: {
    heading: "Academic background",
    current: "Current",
    arc: { bsc: "BSc + Erasmus", mscAi: "MSc AI", mscInnovation: "MSc Innovation" },
    cards: {
      oslo: {
        chapter: "Current",
        degree: "MSc Entrepreneurship & Innovation Management",
        school: "University of Oslo (UiO)",
        period: "Aug 2025 – Present",
        location: "Oslo, Norway",
        storyTitle: "The Oslo Chapter",
        story: "I'm learning how to turn good ideas into real businesses, working closely with Oslo's startup community.",
      },
      msc: {
        chapter: "2022–23",
        degree: "MSc Applied Artificial Intelligence",
        school: "Carlos III de Madrid University",
        period: "Sep 2022 – Sep 2023",
        location: "Madrid, Spain",
        storyTitle: "Going Deeper into AI",
        story: "I spent a year learning how machines can see and learn and finished my thesis with the best possible grade.",
      },
      bsc: {
        chapter: "2018–22",
        degree: "BSc Computer Engineering",
        school: "Carlos III de Madrid University",
        period: "Sep 2018 – Sep 2022",
        location: "Carlos III Madrid Uni + NTNU Trondheim, Gløshaugen campus",
        storyTitle: "The Foundation · The Norway Spark",
        story: "I built my foundation in engineering and a year living in Norway is what made me want to come back.",
      },
    },
  },
  meInPictures: {
    heading: "My timeline",
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
    heading: "Fun facts",
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
    tech: "Proyectos tech",
    biz: "Proyectos emprendedores",
    education: "Formación académica",
    pictures: "Mi trayectoria",
    connect: "Conectemos",
  },
  hero: {
    intro:
      "Soy ambicioso y he elegido construir mi carrera en el lado de negocio de la tecnología. Mudarme al extranjero, de Madrid a Trondheim y ahora Oslo, forma parte de eso: crecer siempre, buscando siempre construir algo que importe.",
    hereIs: "Aquí Alejandro",
    wantToConnect: "¿Quieres conectar?",
    downloadCv: "Descargar CV",
    linkedin: "LinkedIn",
    email: "Correo",
  },
  aboutMe: {
    heading: "Sobre mí en 2 min",
    p1: "Crecí en Madrid con una pasión por las matemáticas y las ciencias que empezó en el instituto y nunca desapareció. Esa pasión me llevó a estudiar Ingeniería Informática y después un máster en Inteligencia Artificial Aplicada, construyendo por el camino una base técnica sólida.",
    p2: "Al graduarme, pasé dos años trabajando como consultor de datos e IT, ayudando a entidades financieras a construir plataformas de datos e infraestructuras de analítica. Era un buen trabajo, pero seguía sintiéndome atraído por preguntas más grandes: no solo cómo construir algo, sino por qué y para quién.",
    p3: "Ese cambio me trajo a Oslo. Ahora estudio Emprendimiento e Innovación en la UiO y asesoro startups en iHub y StartupLab, construyendo el lado de negocio de mi carrera en la intersección entre tecnología y emprendimiento. A nivel más personal, me apasiona viajar, el deporte, la cocina internacional y la moda.",
  },
  techProjects: {
    heading: "Proyectos tech",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    viewOnGithub: "Ver en GitHub",
    privateRepo: "Repositorio privado",
    projects: {
      chatbot: {
        tagline: "Un LLM integrado en la mensajería diaria",
        problem: "Quería probar cómo se comportaría un asistente de IA dentro de una app que ya uso a diario, no en una herramienta aparte que tuviera que abrir.",
        solution: "Integré un LLM directamente en WhatsApp, gestionando todo el flujo de conversación con enrutamiento de mensajes y contexto.",
      },
      autius: {
        tagline: "Monitor de plazas de autoescuela",
        problem: "Tenía que abrir la web de reservas cada 30 minutos para ver si se había liberado una plaza. Era aleatorio, impredecible, y siempre se me escapaban.",
        solution: "Construí un scraper en Python que vigila la página 24/7 y me manda una alerta a Discord en el instante en que se libera una plaza.",
      },
      tipster: {
        tagline: "Réplica de apuestas con IA",
        problem: "Sigo a tipsters deportivos en Telegram para seguir sus estrategias, pero publican a cualquier hora. Se me escapaban apuestas, lo que distorsionaba mi análisis.",
        solution: "Construí un pipeline de IA que lee sus mensajes de Telegram, extrae los parámetros de la apuesta y las coloca automáticamente en dos casas de apuestas.",
      },
    },
  },
  bizProjects: {
    heading: "Proyectos emprendedores",
    projects: {
      eksamenboost: {
        tagline: "Preparación de exámenes para universidades noruegas",
        description: "Tras años haciendo mentoring a estudiantes de la UiO, veía siempre el mismo problema: los recursos de estudio genéricos no encajaban con las asignaturas concretas en las que suspendían. Construí una plataforma con cuestionarios específicos por curso, ejercicios de programación y simuladores de examen que reflejan lo que realmente se evalúa.",
        status: "En producción · desplegado en eksamenboost.no",
      },
      clearterms: {
        tagline: "Plataforma de adopción de IA para pymes",
        description: "El mayor obstáculo para la adopción de IA en las pymes no es la tecnología, es la brecha de comunicación entre los equipos técnicos y quienes toman las decisiones. ClearTerms hace que las oportunidades de IA sean comprensibles para los directivos en términos de negocio, no técnicos. Construido durante mi máster en la UiO.",
        status: "Proyecto de máster · prototipo construido",
      },
    },
  },
  education: {
    heading: "Formación académica",
    current: "Actual",
    arc: { bsc: "Grado + Erasmus", mscAi: "Máster IA", mscInnovation: "Máster Innovación" },
    cards: {
      oslo: {
        chapter: "Actual",
        degree: "Máster en Emprendimiento e Innovación",
        school: "Universidad de Oslo (UiO)",
        period: "Ago 2025 – Presente",
        location: "Oslo, Noruega",
        storyTitle: "El capítulo de Oslo",
        story: "Estoy aprendiendo a convertir buenas ideas en negocios reales, trabajando codo con codo con la comunidad startup de Oslo.",
      },
      msc: {
        chapter: "2022–23",
        degree: "Máster en Inteligencia Artificial Aplicada",
        school: "Universidad Carlos III de Madrid",
        period: "Sep 2022 – Sep 2023",
        location: "Madrid, España",
        storyTitle: "Profundizando en la IA",
        story: "Pasé un año aprendiendo cómo las máquinas pueden ver y aprender, y terminé mi tesis con la mejor nota posible.",
      },
      bsc: {
        chapter: "2018–22",
        degree: "Grado en Ingeniería Informática",
        school: "Universidad Carlos III de Madrid",
        period: "Sep 2018 – Sep 2022",
        location: "Uni Carlos III Madrid + NTNU Trondheim, campus Gløshaugen",
        storyTitle: "La base · La chispa de Noruega",
        story: "Construí mi base en ingeniería, y un año viviendo en Noruega fue lo que hizo que quisiera volver.",
      },
    },
  },
  meInPictures: {
    heading: "Mi trayectoria",
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
    heading: "Datos curiosos",
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
