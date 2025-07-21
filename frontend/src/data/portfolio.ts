// Datos del portfolio basados en el CV de Natalina Neves
// Portfolio data based on Natalina's CV

export const heroData = {
  name: 'Natalina Neves',
  title: {
    es: 'AI Technical Leader',
    en: 'AI Technical Leader'
  },
  subtitle: {
    es: 'TechStars Tel Aviv \'23 Alumna | Ex-Fundadora & CTO',
    en: 'TechStars Tel Aviv \'23 Alumna | Former Founder & CTO'
  },
  description: {
    es: 'Con más de 11 años de experiencia en software engineering e inteligencia artificial. Especialista en LLMOps, STT, TTS y desarrollo de soluciones AI escalables.',
    en: 'With over 11 years of experience in software engineering and artificial intelligence. Specialist in LLMOps, STT, TTS and scalable AI solutions development.'
  },
  image: '/images/natalina-neves.jpg',
  ctaText: {
    es: 'Ver Proyectos',
    en: 'View Projects'
  },
  ctaLink: '#projects'
}

export const aboutData = {
  title: {
    es: 'Sobre Mí',
    en: 'About Me'
  },
  description: {
    es: 'Soy una líder técnica apasionada por crear soluciones de IA que transforman negocios y generan valor real. Mi experiencia abarca desde el desarrollo de software hasta la implementación de sistemas de machine learning a escala.',
    en: 'I am a technical leader passionate about creating AI solutions that transform businesses and generate real value. My experience spans from software development to implementing scalable machine learning systems.'
  },
  highlights: {
    es: [
      '11+ años de experiencia en software engineering',
      'Especialista en LLMOps, STT y TTS',
      'Líder técnica en empresas de IA',
      'Co-fundadora y ex-CTO de startup',
      'Alumna de TechStars Tel Aviv 2023'
    ],
    en: [
      '11+ years of software engineering experience',
      'Specialist in LLMOps, STT and TTS',
      'Technical leader in AI companies',
      'Co-founder and former CTO of startup',
      'TechStars Tel Aviv 2023 Alumna'
    ]
  },
  skills: [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing',
    'Computer Vision', 'Cloud Services (AWS/Azure/GCP)', 'Python',
    'JavaScript/React', 'Node.js', 'PostgreSQL', 'Docker',
    'Kubernetes', 'CI/CD', 'Agile/Scrum'
  ]
}

export const experienceData = [
  {
    id: 'heynori',
    company: 'HeyNori',
    position: {
      es: 'CTO & Co-founder',
      en: 'CTO & Co-founder'
    },
    location: 'Remoto',
    startDate: '2024-01',
    endDate: null,
    current: true,
    description: {
      es: [
        'CTO y cofundadora de HeyNori!, plataforma de productividad potenciada por IA que conecta todas las herramientas de trabajo de los equipos modernos.',
        'Nori elimina tareas repetitivas, acelera proyectos y optimiza la productividad mediante automatización inteligente y análisis de patrones.',
        'Responsable de visión tecnológica, arquitectura y desarrollo de producto.'
      ],
      en: [
        'CTO and co-founder of HeyNori!, an AI-powered productivity platform that connects all the work tools of modern teams.',
        'Nori eliminates repetitive tasks, accelerates projects, and optimizes productivity through intelligent automation and pattern analysis.',
        'Responsible for tech vision, architecture, and product development.'
      ]
    },
    technologies: [
      'AI', 'Automation', 'NLP', 'React', 'Node.js', 'Cloud', 'Integrations', 'Productivity'
    ],
    achievements: {
      es: [
        'Integración nativa con más de 100 herramientas (Slack, Jira, Teams, Zoom, GitHub, Salesforce, etc.).',
        'Implementación de automatizaciones personalizadas y analítica en tiempo real.'
      ],
      en: [
        'Native integration with 100+ tools (Slack, Jira, Teams, Zoom, GitHub, Salesforce, etc.).',
        'Implementation of custom automations and real-time analytics.'
      ]
    },
    link: 'https://heynori.ai/'
  },
  {
    id: 'creai',
    company: 'Creai',
    position: {
      es: 'Líder Técnica',
      en: 'Technical Leader'
    },
    location: 'Costa Rica',
    startDate: '2023-10',
    endDate: null,
    current: true,
    description: {
      es: [
        'Lidero un equipo de expertos en IA para diseñar e implementar modelos de machine learning optimizados.',
        'Colaboro estrechamente con stakeholders para cumplir objetivos y expectativas.',
        'Superviso el progreso del proyecto, asegurando comunicación efectiva y cumplimiento de plazos.'
      ],
      en: [
        'Lead a team of AI experts to design and implement optimized machine learning models.',
        'Collaborate closely with stakeholders to meet objectives and expectations.',
        'Supervise project progress, ensuring effective communication and deadline compliance.'
      ]
    },
    technologies: [
      'AI', 'Machine Learning', 'NLP', 'Cloud', 'Project Management'
    ],
    achievements: {
      es: [
        'Implementación exitosa de soluciones de IA para múltiples clientes.',
        'Optimización de procesos de desarrollo y deployment.'
      ],
      en: [
        'Successful implementation of AI solutions for multiple clients.',
        'Optimization of development and deployment processes.'
      ]
    }
  },
  {
    id: 'innvox',
    company: 'Innvox',
    position: {
      es: 'CTO & Co-founder',
      en: 'CTO & Co-founder'
    },
    location: 'Remoto',
    startDate: '2021-01',
    endDate: '2023-09',
    current: false,
    description: {
      es: [
        'CTO y cofundadora de Innvox, plataforma de coaching de ventas impulsada por IA.',
        'Diseño y liderazgo de arquitectura técnica, desarrollo de producto y equipo.',
        'Responsable de visión tecnológica, innovación y escalabilidad.'
      ],
      en: [
        'CTO and co-founder of Innvox, AI-powered sales coaching platform.',
        'Designed and led technical architecture, product development and team.',
        'Responsible for tech vision, innovation and scalability.'
      ]
    },
    technologies: [
      'AI', 'Machine Learning', 'NLP', 'React', 'Node.js', 'Cloud', 'Voice Tech'
    ],
    achievements: {
      es: [
        'Lanzamiento de producto y adquisición de clientes iniciales.',
        'Construcción de equipo técnico y roadmap de innovación.'
      ],
      en: [
        'Product launch and first customer acquisition.',
        'Built tech team and innovation roadmap.'
      ]
    },
    link: null
  },
  {
    id: 'intuitivo',
    company: 'Intuitivo',
    position: {
      es: 'AI Specialist / TL / PM',
      en: 'AI Specialist / TL / PM'
    },
    location: 'Buenos Aires, Argentina',
    startDate: '2020-02',
    endDate: '2021-11',
    current: false,
    description: {
      es: [
        'Lideré un equipo de expertos en IA para desarrollar soluciones de IA de vanguardia',
        'Diseñé e implementé modelos de Machine Learning optimizados',
        'Supervisé el progreso del proyecto, asegurando comunicación efectiva'
      ],
      en: [
        'Led a team of AI experts to develop cutting-edge AI solutions',
        'Designed and implemented optimized Machine Learning models',
        'Supervised project progress, ensuring effective communication'
      ]
    },
    technologies: [
      'Computer Vision', 'Machine Learning (Scikit-Learn, XGBoost)',
      'Deep Learning (TensorFlow, PyTorch)', 'Data Preprocessing (Pandas, NumPy)',
      'Model Evaluation', 'Cloud Services', 'JIRA', 'Confluence', 'Agile Project Management'
    ],
    achievements: {
      es: [
        'Desarrollo de soluciones de Computer Vision para múltiples industrias',
        'Implementación de pipelines de ML en producción',
        'Optimización de modelos para mejor rendimiento'
      ],
      en: [
        'Development of Computer Vision solutions for multiple industries',
        'Implementation of ML pipelines in production',
        'Model optimization for better performance'
      ]
    }
  },
  {
    id: 'entreconsultas',
    company: 'EntreConsultas',
    position: {
      es: 'AI Developer / TL / PM',
      en: 'AI Developer / TL / PM'
    },
    location: 'Gran Buenos Aires, Argentina',
    startDate: '2017-11',
    endDate: '2020-02',
    current: false,
    description: {
      es: [
        'Lideré proyectos de estandarización y automatización en Computer Vision usando ML y DL',
        'Implementé soluciones Front-End y Back-End, colaborando con equipos multidisciplinarios',
        'Gestioné JIRA y lideré la planificación, diseño y ejecución de pruebas'
      ],
      en: [
        'Led Computer Vision standardization and automation projects using ML and DL',
        'Implemented Front-End and Back-End solutions, collaborating with multidisciplinary teams',
        'Managed JIRA and led planning, design and test execution'
      ]
    },
    technologies: [
      'Computer Vision (OpenCV)', 'Deep Learning (TensorFlow, PyTorch)',
      'Front-End (JavaScript/AngularJS/HTML/CSS)', 'Back-End (Python/Flask)',
      'SQL/NoSQL', 'Agile/SCRUM', 'JIRA', 'QA Automation'
    ],
    achievements: {
      es: [
        'Automatización de procesos críticos con Computer Vision',
        'Desarrollo de aplicaciones web completas',
        'Implementación de metodologías ágiles'
      ],
      en: [
        'Automation of critical processes with Computer Vision',
        'Development of complete web applications',
        'Implementation of agile methodologies'
      ]
    }
  },
  {
    id: 'neuvoo',
    company: 'neuvoo',
    position: {
      es: 'Front-End Developer',
      en: 'Front-End Developer'
    },
    location: 'Montreal, Canadá',
    startDate: '2014-01',
    endDate: '2017-11',
    current: false,
    description: {
      es: [
        'Contribuí al desarrollo Front-End, colaborando con equipos de backend y QA',
        'Resolví tickets y participé en reuniones para mejorar la colaboración',
        'Participé en el proceso completo de desarrollo, desde diseño hasta deployment'
      ],
      en: [
        'Contributed to Front-End development, collaborating with backend and QA teams',
        'Resolved tickets and participated in meetings to improve collaboration',
        'Participated in the complete development process, from design to deployment'
      ]
    },
    technologies: [
      'HTML', 'CSS', 'JavaScript', 'Git', 'JIRA', 'Confluence',
      'Responsive Design', 'UX Principles', 'Cross-departmental Collaboration'
    ],
    achievements: {
      es: [
        'Desarrollo de interfaces de usuario responsivas',
        'Mejora de la experiencia de usuario',
        'Colaboración efectiva con equipos multidisciplinarios'
      ],
      en: [
        'Development of responsive user interfaces',
        'Improvement of user experience',
        'Effective collaboration with multidisciplinary teams'
      ]
    }
  }
]

export const projectsData = [
  {
    id: 'heynori',
    title: {
      es: 'HeyNori - Plataforma de IA conversacional',
      en: 'HeyNori - Conversational AI Platform'
    },
    description: {
      es: 'HeyNori! es una plataforma de productividad potenciada por IA que conecta todas tus herramientas de trabajo, automatiza flujos y optimiza la productividad de equipos modernos. CTO y cofundadora.',
      en: 'HeyNori! is an AI-powered productivity platform that connects all your work tools, automates workflows, and optimizes productivity for modern teams. CTO and co-founder.'
    },
    image: '/images/projects/heynori.jpg',
    technologies: ['AI', 'Automation', 'Integrations', 'React', 'Node.js', 'Cloud'],
    githubUrl: null,
    liveUrl: 'https://heynori.ai/',
    featured: true,
    category: 'ai'
  },
  {
    id: 'innvox-platform',
    title: {
      es: 'Innvox - Plataforma de Coaching de Ventas con IA',
      en: 'Innvox - AI Sales Coaching Platform'
    },
    description: {
      es: 'Plataforma completa de coaching de ventas impulsada por IA. CTO y cofundadora.',
      en: 'Complete AI-powered sales coaching platform. CTO and co-founder.'
    },
    image: '/images/projects/innvox.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'NLP', 'AWS', 'PostgreSQL'],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    category: 'ai'
  }
]

export const skillsData = [
  // AI & ML
  { id: 'ml', name: 'Machine Learning', category: 'ai', level: 'expert', icon: '🤖' },
  { id: 'dl', name: 'Deep Learning', category: 'ai', level: 'expert', icon: '🧠' },
  { id: 'nlp', name: 'Natural Language Processing', category: 'ai', level: 'expert', icon: '📝' },
  { id: 'cv', name: 'Computer Vision', category: 'ai', level: 'expert', icon: '👁️' },
  { id: 'llmops', name: 'LLMOps', category: 'ai', level: 'expert', icon: '🔧' },
  { id: 'stt', name: 'Speech-to-Text', category: 'ai', level: 'advanced', icon: '🎤' },
  { id: 'tts', name: 'Text-to-Speech', category: 'ai', level: 'advanced', icon: '🔊' },
  
  // Backend
  { id: 'python', name: 'Python', category: 'backend', level: 'expert', icon: '🐍' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'advanced', icon: '🟢' },
  { id: 'flask', name: 'Flask', category: 'backend', level: 'advanced', icon: '🍶' },
  { id: 'django', name: 'Django', category: 'backend', level: 'intermediate', icon: '🎸' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', level: 'advanced', icon: '⚡' },
  
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', level: 'advanced', icon: '⚛️' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', level: 'expert', icon: '📜' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 'advanced', icon: '📘' },
  { id: 'html', name: 'HTML/CSS', category: 'frontend', level: 'expert', icon: '🌐' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', level: 'advanced', icon: '🎨' },
  
  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'advanced', icon: '🐘' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', level: 'intermediate', icon: '🍃' },
  { id: 'redis', name: 'Redis', category: 'database', level: 'intermediate', icon: '🔴' },
  
  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'cloud', level: 'advanced', icon: '☁️' },
  { id: 'azure', name: 'Azure', category: 'cloud', level: 'advanced', icon: '🔷' },
  { id: 'gcp', name: 'Google Cloud', category: 'cloud', level: 'intermediate', icon: '🔵' },
  { id: 'docker', name: 'Docker', category: 'devops', level: 'advanced', icon: '🐳' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'devops', level: 'intermediate', icon: '⚓' },
  { id: 'git', name: 'Git', category: 'devops', level: 'expert', icon: '📚' },
  { id: 'cicd', name: 'CI/CD', category: 'devops', level: 'advanced', icon: '🔄' },
  
  // ML Libraries
  { id: 'tensorflow', name: 'TensorFlow', category: 'ai', level: 'expert', icon: '🔥' },
  { id: 'pytorch', name: 'PyTorch', category: 'ai', level: 'expert', icon: '🔦' },
  { id: 'scikit', name: 'Scikit-learn', category: 'ai', level: 'expert', icon: '🔬' },
  { id: 'opencv', name: 'OpenCV', category: 'ai', level: 'advanced', icon: '📷' },
  { id: 'pandas', name: 'Pandas', category: 'ai', level: 'expert', icon: '🐼' },
  { id: 'numpy', name: 'NumPy', category: 'ai', level: 'expert', icon: '🔢' }
]

export const educationData = [
  {
    id: 'humboldt',
    institution: 'Universidad Alejandro de Humboldt',
    degree: {
      es: 'Ingeniería en Informática',
      en: 'Computer Engineering'
    },
    field: {
      es: 'Ingeniería de Software',
      en: 'Software Engineering'
    },
    startDate: '2013',
    endDate: '2017',
    location: 'Venezuela'
  }
]

export const contactData = {
  email: 'nevesdasilvanatalina@gmail.com',
  phone: '+54 11 3301-9241',
  linkedin: 'https://www.linkedin.com/in/natalina-neves-da-silva-da-silva/',
  twitter: 'https://x.com/natneves7',
  github: 'https://github.com/Nneves07',
  location: {
    es: 'Buenos Aires, Argentina',
    en: 'Buenos Aires, Argentina'
  }
} 