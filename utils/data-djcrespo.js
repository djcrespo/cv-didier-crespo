export const djcrespoInfo = {
  name: "Didier Crespo Castilla",
  bio: "<p>¡Hola! Soy <strong>Didier Crespo</strong>, un apasionado de la tecnología y entusiasta del aprendizaje continuo. Siempre estoy buscando nuevas oportunidades para adquirir conocimientos y mejorar mis habilidades, y disfruto que cada detalle funcione a la perfección. Además, me gusta compartir lo que aprendo con quienes lo necesiten.</p>",
  age: 27,
  residence: "USA",
  freelance: true,
  address: "New York, USA",
  typeingAnimation: [
    "Front-End developer",
    "Back-End developer",
    "Full-Stack developer",
  ],
  socialLinks: [
    {
      id: 1,
      icons: "fa fa-linkedin-square",
      link: "https://www.linkedin.com/in/didier-crespo/",
    },
    {
      id: 2,
      icons: "fa fa-github-square",
      link: "https://github.com/djcrespo",
    }
  ],
  experiences: [
    {
      id: 1,
      jobTitle: "Desarrollador FullStack",
      company: "Efisense",
      dec: [
        "Desarrollo de soluciones FrontEnd/BackEnd enfocado a restaurantes.",
        "Integración de otras APIs dentro de la empresa desarrolladas en PHP en frameworks como Codeigniter",
        "Soporte técnico a clientes en distintos proyectos de la empresa."
      ],
      date: "Abril 2025 - Actualmente",
    },
    {
      id: 2,
      jobTitle: "Desarrollador FullStack",
      company: "ParamQ",
      dec: [
        "Desarrollo de soluciones personalizadas para clientes utilizando tecnologías de frontend y backend como Vue.js, Ionic Framework, Node.js, Django, FastAPI y PostgreSQL.",
        "Integración de otras APIs de terceros en proyectos como pasarelas de pago (OpenPay).",
        "Implementación de despliegues automáticos con Github Actions en proyectos internos de la empresa."
      ],
      date: "Octubre 2021 - Abril 2025",
    },
    {
      id: 3,
      jobTitle: "Desarrollador FullStack",
      company: "Autónomo",
      dec: [
        "Desarrollo de soluciones personalizadas para clientes utilizando tecnologías de frontend y backend como Vue.js, Ionic Framework, Node.js, Django, FastAPI y PostgreSQL.",
        "Despliegue y alojamiento de las páginas en hostinger, con despliegue automático con GitHub"
      ],
      date: "Agosto 2019 - Actual",
    },
    {
      id: 4,
      jobTitle: "Presidente estudiantil",
      company: "AAAI Student Chapter México",
      dec: [
        "Lider del equipo de desarrollo de proyectos internos",
        "Ponente en varios talleres y conferencias.",
        "Lider de la división de Software."
      ],
      date: "2014 - 2023",
    },
  ],
  lenguages: {
    title: "Lenguajes",
    icons: "fa fa-code",
    items: [
      { id: 1, text: "HTML" },
      { id: 2, text: "CSS" },
      { id: 3, text: "JavaScript" },
      { id: 4, text: "Python" }
    ],
  },
  frameworks: {
    title: "Frameworks",
    icons: "fa fa-list",
    items: [
      { id: 1, text: "Django" },
      { id: 2, text: "FastAPI" },
      { id: 3, text: "Vue" },
      { id: 4, text: "Ionic" }
    ],
  },
  cloud: {
    title: "Nube",
    icons: "fa fa-cloud",
    items: [
      { id: 1, text: "AWS" },
      { id: 2, text: "Hostinger" }
    ],
  },
  devops: {
    title: "DevOps",
    icons: "fa fa-code-fork",
    items: [
      { id: 1, text: "Docker" },
      { id: 2, text: "GitHub Actions" }
    ],
  },
  educations: [
    {
      id: 1,
      date: "2018 - 2024",
      name: "Instituto Tecnológico de Mérida",
      address: "Campus poniente - Yucatán",
      dec: "Ing. en Sistemas Computacionales",
    },
    {
      id: 2,
      date: "2014 - 2018",
      name: "Universidad Autónoma de Yucatán",
      address: "Preparatoria 2 - Yucatán",
      dec: "Bachillerato - Técnico en social media manager",
    }
  ],
  services: [
    {
      id: 1,
      icon: "fa fa-microphone",
      title: "Lead Vocal",
      desc: "The lead vocalist in popular music is typically the member of a group.",
    },
    {
      id: 2,
      icon: "fa fa-music",
      title: "Record Guitars",
      desc: "Music copying, writing, creating, transcription, arranging and composition services.",
    },
    {
      id: 3,
      icon: "fa fa-soundcloud",
      title: "Soundcloud Mix",
      desc: "Made a great new DJ mix and you want to get it online and out to the world",
    },
    {
      id: 4,
      icon: "fa fa-gamepad",
      title: "Music for Games, Apps",
      desc: "Developing tracks and unique music for android, ios and video games.",
    },
  ],
  pricing: {
    basic: {
      icon: "fa fa-volume-down",
      price: 22,
      details: [
        { id: 1, title: "Lead Vocal", disable: false, new: false },
        { id: 2, title: "Record Guitars", disable: false, new: false },
        { id: 3, title: "Soundcloud Mix", disable: false, new: false },
        { id: 4, title: "Music for Games", disable: true, new: true },
        { id: 5, title: "Music for Apps", disable: true, new: true },
      ],
    },
    pro: {
      icon: "fa fa-volume-up",
      price: 48,
      details: [
        { id: 1, title: "Lead Vocal", disable: false, new: false },
        { id: 2, title: "Record Guitars", disable: false, new: false },
        { id: 3, title: "Soundcloud Mix", disable: false, new: false },
        { id: 4, title: "Music for Games", disable: false, new: true },
        { id: 5, title: "Music for Apps", disable: false, new: true },
      ],
    },
  },
  clients: [
    { id: 1, img: "/images/clients/client_1.png" },
    { id: 2, img: "/images/clients/client_2.png" },
    { id: 3, img: "/images/clients/client_3.png" },
    { id: 4, img: "/images/clients/client_4.png" },
  ],
  porgressBar: {
    title: "Design",
    icon: "fa fa-paint-brush",
    skills: [
      { id: 1, name: "Motivation / Determination", value: 90 },
      { id: 2, name: "Violin Expertise", value: 65 },
      { id: 3, name: "Creativity", value: 75 },
      { id: 4, name: "Guitar Expertise", value: 85 },
    ],
  },
  porgressCircle: {
    title: "Read Music",
    icon: "fa fa-music",
    skills: [
      { id: 1, name: "Chords", value: 90 },
      { id: 2, name: "Intervals", value: 75 },
      { id: 3, name: "Melody", value: 85 },
      { id: 4, name: "Pitch", value: 95 },
    ],
  },
};

export const projects = [
  // {
  //   id: 12,
  //   img: "/images/djcrespo/projects/tarjetaflash.png",
  //   title: "Gestión de metas",
  //   can_access: false,
  //   description: "Sistema para la gestión de metas dentro de un restaurante, con incentivos para motivar a los empleados.",
  //   url: null,
  //   screenshots: [],
  //   technologies: [
  //     {
  //       label: "Back-end",
  //       technologies: ["PHP/Codeigniter", "MySQL"]
  //     },
  //     {
  //       label: "Front-end",
  //       technologies: ["Electron.JS/Vue.JS", "TailWind CSS"]
  //     },
  //   ]
  // },
  // {
  //   id: 11,
  //   img: "/images/djcrespo/projects/tarjetaflash.png",
  //   title: "Lista de espera",
  //   can_access: false,
  //   description: "Actualización al sistema de gestión de comensales en un resataurante que están en espera, a partir de un proyecto existente. Implementado en Boston's, SushiRoll y otros restaurantes",
  //   url: null,
  //   screenshots: [],
  //   technologies: [
  //     {
  //       label: "Back-end",
  //       technologies: ["PHP/Codeigniter", "MySQL"]
  //     },
  //     {
  //       label: "Front-end",
  //       technologies: ["Electron.JS/Vue.JS", "Boostrap"]
  //     },
  //   ]
  // },
  {
    id: 10,
    img: "/images/djcrespo/projects/tarjetaflash.png",
    title: "Tarjeta Flash",
    can_access: true,
    description: "Sistema para la gestión de tarjetas de presentación inteligentes. Hechas a partir de tarjetas NFC, redirigen a una página personalizada, por el cliente, donde sus prospectos podrán ver sus producto/servicios con sus catálogos y galería.",
    url: "https://tarjetaflash.com",
    screenshots: [],
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/Django", "PostgreSQL", "Docker", "AWS/S3", "AWS/RDS", "AWS/ECR"]
      },
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Vuestic", "Tailwind CSS"]
      },
    ]
  },
  {
    id: 9,
    img: "/images/djcrespo/projects/maia.png",
    title: "MAIA",
    can_access: false,
    description: "Plataforma para agilizar procesos escolares dentro de una institución, implementado en el ITMérida durante un tiempo, hecho por estudiantes y para los estudiantes; abarcando tramites de liberación de servicio social, hasta cuestionarios psicológicos y análisis de resultados con IA.",
    url: "",
    screenshots: [],
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/Django", "PostgreSQL", "Docker", "AWS/S3", "AWS/RDS", "OpenAI"]
      },
      {
        label: "Front-end",
        technologies: ["Vue.JS", "Buefy", "Bulma CSS"]
      },
    ]
  },
  {
    id: 8,
    img: "/images/djcrespo/projects/garvi.png",
    title: "Garvi",
    can_access: false,
    description: "Sistema a medida para la gestión de varios desarrollos y venta de lotes/departamentos de la empresa.",
    url: "",
    screenshots: [],
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/Django", "PostgreSQL", "Docker", "AWS/S3", "AWS/RDS"]
      },
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Buefy", "Bulma CSS"]
      },
    ]
  },
  {
    id: 7,
    img: "/images/djcrespo/projects/goagent.png",
    title: "Go-Agent",
    can_access: true,
    description: "Sistema enfocado para agentes para la gestión de sus clientes y sus pólizas.",
    url: "",
    screenshots: [],
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/Django", "PostgreSQL", "RabbitMQ", "Docker", "AWS/S3", "AWS/RDS", "AWS/ECR"]
      },
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Buefy", "Bulma CSS"]
      },
    ]
  },
  {
    id: 6,
    img: "/images/djcrespo/projects/skidha.png",
    title: "Skidha",
    can_access: true,
    description: "Sistema para el control de entradas y salidas de alumnos con padres de familia y administrativos de la escuela.",
    url: "https://www.skidha.com",
    screenshots: [],
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/Django", "Python/FastAPI", "JavaScript/WebSockets", "DevOps/Docker", "AWS/S3", "AWS/RDS", "AWS/ECR"]
      },
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Ionic/Angular", "Buefy", "Bulma CSS"]
      },
    ]
  },
  {
    id: 1,
    img: "/images/djcrespo/projects/jarkol.png",
    title: "Jarkol",
    can_access: true,
    description: "Landing page para la empresa Jarkol",
    url: "https://jarkol.com",
    technologies: [
      {
        label: "Back-end",
        technologies: ["Python/FastAPI"]
      },
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Tailwind CSS"]
      },
    ]
  },
  {
    id: 2,
    img: "/images/djcrespo/projects/grupo_imper.png",
    title: "Grupo Imper",
    can_access: true,
    description: "Landing page para la empresa Grupo Imper",
    url: "https://grupo-imper.onrender.com",
    technologies: [
      {
        label: "Front-end",
        technologies: ["Nuxt.JS/Vue.JS", "Buefy", "Bulma CSS"]
      }
    ]
  },
  {
    id: 3,
    img: "/images/djcrespo/projects/recudec.png",
    title: "Recudec",
    can_access: true,
    description: "Landing page para la empresa Recudec",
    url: "https://recudec.onrender.com",
    technologies: [
      {
        label: "Front-end",
        technologies: ["HTML", "Bootstrap", "JS"]
      }
    ]
  },
  {
    id: 4,
    img: "/images/djcrespo/projects/anmcapital.png",
    title: "ANM Capital",
    can_access: true,
    description: "Landing page para la empresa AMN Capital",
    url: "https://anmcapital.onrender.com",
    technologies: [
      {
        label: "Front-end",
        technologies: ["HTML", "Bootstrap", "JS"]
      }
    ]
  },
  {
    id: 5,
    img: "/images/djcrespo/projects/najaal.png",
    title: "Naajal",
    can_access: true,
    description: "Landing page para la empresa Naajal",
    url: "https://najaal.onrender.com",
    technologies: [
      {
        label: "Front-end",
        technologies: ["HTML", "CSS", "JS"]
      }
    ]
  }
];