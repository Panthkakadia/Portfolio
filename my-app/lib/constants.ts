export const SITE_CONFIG = {
  name: 'Panth Kakadia',
  title: 'Panth Kakadia | Software Engineer',
  description: 'Computer Programming student specializing in full-stack development, Spring Boot microservices, and cloud deployment on AWS',
  url: 'https://panthkakadia.vercel.app',
  ogImage: 'https://panthkakadia.vercel.app/og-image.png',
  keywords: [
    'Panth Kakadia',
    'Software Engineer',
    'Full Stack Developer',
    'Spring Boot',
    'Java Developer',
    'React',
    'AWS',
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
  languages: [
    { name: 'Java', level: 90, icon: 'SiJava' },
    { name: 'JavaScript', level: 85, icon: 'SiJavascript' },
    { name: 'Python', level: 85, icon: 'SiPython' },
    { name: 'SQL', level: 80, icon: 'SiMysql' },
    { name: 'TypeScript', level: 80, icon: 'SiTypescript' },
    { name: 'HTML5', level: 90, icon: 'SiHtml5' },
    { name: 'CSS3', level: 85, icon: 'SiCss3' }
  ],
  frameworks: [
    { name: 'Spring Boot', level: 90, icon: 'SiSpringboot' },
    { name: 'React', level: 85, icon: 'SiReact' },
    { name: 'React Native', level: 80, icon: 'SiReact' },
    { name: 'Node.js', level: 85, icon: 'SiNodedotjs' },
    { name: 'Express.js', level: 80, icon: 'SiExpress' },
    { name: 'Next.js', level: 75, icon: 'SiNextdotjs' }
  ],
  databases: [
    { name: 'MongoDB', level: 85, icon: 'SiMongodb' },
    { name: 'PostgreSQL', level: 80, icon: 'SiPostgresql' },
    { name: 'Firebase', level: 75, icon: 'SiFirebase' }
  ],
  cloud: [
    { name: 'AWS EC2', level: 80, icon: 'SiAmazonaws' },
    { name: 'AWS S3', level: 75, icon: 'SiAmazonaws' },
    { name: 'AWS Lambda', level: 70, icon: 'SiAmazonaws' },
    { name: 'AWS EMR', level: 70, icon: 'SiAmazonaws' },
    { name: 'Apache Spark', level: 75, icon: 'SiApachespark' }
  ],
  tools: [
    { name: 'Git/GitHub', level: 90, icon: 'SiGit' },
    { name: 'Maven', level: 85, icon: 'SiApachemaven' },
    { name: 'Docker', level: 70, icon: 'SiDocker' },
    { name: 'REST APIs', level: 90, icon: 'SiPostman' },
    { name: 'Power BI', level: 80, icon: 'SiPowerbi' },
    { name: 'Linux CLI', level: 85, icon: 'SiLinux' }
  ],
  specializations: [
    'Full-Stack Development',
    'Spring Boot Microservices',
    'Cloud Deployment (AWS)',
    'ETL Pipelines',
    'Data Analysis',
    'System Architecture',
    'Automated Testing',
    'Performance Optimization'
  ]
}

export const PROJECTS_DATA = [
  {
    id: 'calipher-mcq',
    title: 'Calipher — MCQ Answer Optimization Engine',
    description: 'Designed modular Spring Boot microservice with statistical analyzers that processes multiple-choice questions. Deployed REST APIs handling 50+ concurrent requests with 99.9% uptime on AWS EC2. Built configurable decision pipeline with pattern, statistical, and structural analyzers to rank answer options and generate confidence scores.',
    technologies: ['Java', 'Spring Boot', 'AWS EC2', 'Maven', 'REST API', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/panthkakadia/mcq-optimizer',
    liveUrl: null,
    featured: true,
    category: 'fullstack' as const,
    status: 'completed' as const
  },
  {
    id: 'property-intel',
    title: 'Low Ballers (Property Intel) — Real Estate Analytics App',
    description: 'Built React Native mobile app that evaluates Toronto property listings by comparing listing price vs. comparable values and days-on-market to flag overpriced properties and suggest offer ranges. Implemented Home, Search, Analysis, Saved, Auth, and Settings screens with bottom-tab navigation. Integrated Firebase Authentication and API-based listing data with reusable UI components.',
    technologies: ['React Native', 'Firebase Authentication', 'REST APIs', 'Redux', 'JavaScript'],
    githubUrl: 'https://github.com/panthkakadia/PropertyIntel',
    liveUrl: null,
    featured: true,
    category: 'mobile' as const,
    status: 'completed' as const
  },
  {
    id: 'movies-app',
    title: 'Movies App — Full-Stack Movie Discovery Platform',
    description: 'Architected full-stack platform serving 100+ REST endpoints with optimized MongoDB pipelines achieving 120ms avg response time. Developed React front end with Node.js/Express backend, implemented search, browse, and detail pages with reusable components and client-side state management. Added user authentication for personalized movie discovery with real-time search over 10K+ records.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AWS EC2'],
    githubUrl: 'https://github.com/panthkakadia/movies-app',
    liveUrl: null,
    featured: true,
    category: 'fullstack' as const,
    status: 'completed' as const
  },
  {
    id: 'analytics-etl',
    title: 'Customer Experience Analytics Dashboard',
    description: 'Built ETL pipeline processing 2,000+ customer records, reducing dashboard refresh time from 45s to 3s. Created analytics dashboard tracking customer/service performance metrics using Power BI. Developed Python (pandas) pipeline to clean and transform data, then modeled for reporting. Automated recurring report refresh/workflows to reduce manual effort.',
    technologies: ['Python', 'Apache Spark', 'AWS EMR', 'SQL', 'Power BI', 'Pandas'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    category: 'data' as const,
    status: 'completed' as const
  }
]

export const EXPERIENCE_DATA = [
  {
    id: 'canada-computers',
    title: 'Junior Service Technician',
    company: 'Canada Computers & Electronics',
    period: 'Oct 2024 - Sep 2025',
    description: [
      'Resolved 50+ daily technical cases across Windows/Linux with 95% first-contact resolution',
      'Orchestrated 200+ system deployments with custom network configurations under 2-hour SLAs',
      'Authored 15+ troubleshooting standards, reducing escalations by 20%',
      'Provided technical consultation and hardware diagnostics for customers'
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
      'Automated reconciliation of 100+ weekly transactions using Python, reducing processing time by 25%',
      'Built data validation workflows ensuring 100% accuracy across JSON/XML financial feeds',
      'Managed financial records and supported web operations',
      'Streamlined bookkeeping processes through automation'
    ],
    technologies: ['Python', 'Data Validation', 'JSON/XML', 'Financial Systems', 'Process Automation'],
    location: 'Toronto, ON',
    type: 'part-time' as const
  }
]

export const LEADERSHIP_DATA = [
  {
    title: 'Event Coordinator — Volunteer',
    organization: 'BAPS Swaminarayan Sanstha',
    period: '2022 - Present',
    description: 'Coordinated 15+ large-scale events, leading 50+ volunteers and optimizing schedules for community service initiatives.'
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