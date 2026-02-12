export const SITE_CONFIG = {
  name: 'Panth Kakadia',
  title: 'Panth Kakadia | Java Backend Developer',
  description: 'Computer Programming student specializing in Java backend development, Spring Boot microservices, and automated testing with JUnit and Selenium',
  url: 'https://panthkakadia.vercel.app',
  ogImage: 'https://panthkakadia.vercel.app/og-image.png',
  keywords: [
    'Panth Kakadia',
    'Java Developer',
    'Backend Developer',
    'Spring Boot',
    'Java Backend',
    'RESTful APIs',
    'Microservices',
    'Toronto Developer'
  ],
  links: {
    github: 'https://github.com/panthkakadia',
    linkedin: 'https://linkedin.com/in/panthkakadia',
    email: 'mailto:panthkakadia101@gmail.com',
    phone: 'tel:+16475547618'
  }
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const SKILLS = {
  backend: [
    { name: 'Java', level: 90, icon: 'SiJava' },
    { name: 'Spring Boot', level: 85, icon: 'SiSpringboot' },
    { name: 'Spring MVC', level: 80, icon: 'SiSpring' },
    { name: 'RESTful APIs', level: 85, icon: 'SiPostman' },
    { name: 'Microservices', level: 75, icon: 'SiSpringboot' },
    { name: 'Design Patterns', level: 80, icon: 'SiJava' }
  ],
  testing: [
    { name: 'JUnit 5', level: 85, icon: 'SiJunit' },
    { name: 'Selenium WebDriver', level: 70, icon: 'SiSelenium' },
    { name: 'Mockito', level: 75, icon: 'SiJava' },
    { name: 'Integration Testing', level: 80, icon: 'SiJunit' },
    { name: 'Test-Driven Development', level: 75, icon: 'SiJava' }
  ],
  databases: [
    { name: 'PostgreSQL', level: 85, icon: 'SiPostgresql' },
    { name: 'MongoDB', level: 80, icon: 'SiMongodb' },
    { name: 'MySQL', level: 80, icon: 'SiMysql' },
    { name: 'Query Optimization', level: 75, icon: 'SiPostgresql' },
    { name: 'Schema Design', level: 80, icon: 'SiPostgresql' }
  ],
  frontend: [
    { name: 'React', level: 80, icon: 'SiReact' },
    { name: 'React Native', level: 75, icon: 'SiReact' },
    { name: 'JavaScript', level: 85, icon: 'SiJavascript' },
    { name: 'HTML5/CSS3', level: 80, icon: 'SiHtml5' }
  ],
  tools: [
    { name: 'Git/GitHub', level: 90, icon: 'SiGit' },
    { name: 'Maven', level: 85, icon: 'SiApachemaven' },
    { name: 'Linux CLI', level: 80, icon: 'SiLinux' },
    { name: 'IntelliJ IDEA', level: 85, icon: 'SiIntellijidea' },
    { name: 'Postman', level: 85, icon: 'SiPostman' }
  ],
  specializations: [
    'Java Backend Development',
    'Spring Boot Microservices',
    'RESTful API Design',
    'Automated Testing (JUnit, Selenium)',
    'Database Design & Optimization',
    'Object-Oriented Programming',
    'Test-Driven Development',
    'Code Reviews & Documentation'
  ]
}

export const PROJECTS_DATA = [
  {
    id: 'calipher-mcq',
    title: 'Calipher — MCQ Answer Optimization Engine',
    description: 'Architected Spring Boot microservice with modular analyzer components processing concurrent requests. Implemented weighted scoring algorithms and statistical analysis modules following SOLID principles. Developed comprehensive JUnit test suite with 85% code coverage, including edge case validation.',
    technologies: ['Java', 'Spring Boot', 'Maven', 'JUnit 5', 'REST API', 'Design Patterns'],
    githubUrl: 'https://github.com/panthkakadia/mcq-optimizer'
  },
  {
    id: 'movies-app',
    title: 'Movies Discovery Platform',
    description: 'Engineered backend REST APIs with Node.js/Express handling user authentication and catalog search functionality. Designed relational schema in PostgreSQL for structured data and leveraged MongoDB for flexible document storage. Optimized database queries, reducing average response time to sub-200ms.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/panthkakadia/movies-app'
  },
  {
    id: 'property-intel',
    title: 'Low Ballers — Real Estate Analytics Mobile App',
    description: 'Built mobile application analyzing Toronto property listings against comparable market values. Integrated Firebase Authentication for secure user sessions and persistent data storage. Consumed third-party REST APIs to retrieve and parse real estate listing data.',
    technologies: ['React Native', 'Firebase Authentication', 'REST APIs', 'JavaScript'],
    githubUrl: 'https://github.com/panthkakadia/PropertyIntel'
  }
]

export const EXPERIENCE_DATA = [
  {
    id: 'canada-computers',
    title: 'Junior Service Technician',
    company: 'Canada Computers & Electronics',
    period: 'Oct 2024 - Sep 2025',
    description: [
      'Resolved technical issues across Windows and Linux systems with 90% first-contact resolution rate',
      'Authored troubleshooting documentation, decreasing team escalations by 20%',
      'Configured network settings and deployed system images for customer workstations'
    ],
    technologies: ['Windows', 'Linux', 'Hardware Diagnostics', 'Network Configuration', 'Technical Support'],
    location: 'Vaughan, ON',
    type: 'part-time' as const
  },
  {
    id: 'ilaxis-food',
    title: 'Bookkeeper & Web Support Assistant',
    company: 'Ilaxi Foods',
    period: 'Jan 2024 - Oct 2024',
    description: [
      'Automated weekly transaction reconciliation using Python scripts, reducing processing time by 25%',
      'Built data validation framework ensuring accuracy across JSON and XML financial feeds'
    ],
    technologies: ['Python', 'Data Validation', 'JSON/XML', 'Process Automation'],
    location: 'Toronto, ON',
    type: 'part-time' as const
  }
]

export const LEADERSHIP_DATA = [
  {
    title: 'Event Coordinator — Volunteer',
    organization: 'BAPS Swaminarayan Sanstha',
    period: '2022 - Present',
    description: 'Coordinate community events, manage volunteer teams, and allocate resources for large-scale gatherings.'
  }
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}