export const SITE_CONFIG = {
  name: 'Panth Kakadia',
  title: 'Panth Kakadia | Software Engineer',
  description: 'Computer Programming student specializing in AI integration, full-stack development, and performance optimization',
  url: 'https://panthkakadia.vercel.app',
  ogImage: 'https://panthkakadia.vercel.app/og-image.png',
  keywords: [
    'Panth Kakadia',
    'Software Engineer',
    'Full Stack Developer',
    'AI Integration',
    'Next.js',
    'React',
    'TypeScript',
    'Toronto Developer'
  ],
  links: {
    github: 'https://github.com/panthkakadia',
    linkedin: 'https://linkedin.com/in/panthkakadia',
    email: 'mailto:panthkakadia502@gmail.com',
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
    { name: 'JavaScript', level: 90, icon: 'SiJavascript' },
    { name: 'TypeScript', level: 85, icon: 'SiTypescript' },
    { name: 'Python', level: 80, icon: 'SiPython' },
    { name: 'Java', level: 85, icon: 'SiJava' },
    { name: 'HTML5', level: 95, icon: 'SiHtml5' },
    { name: 'CSS3', level: 90, icon: 'SiCss3' },
    { name: 'SQL', level: 75, icon: 'SiMysql' }
  ],
  frameworks: [
    { name: 'React', level: 90, icon: 'SiReact' },
    { name: 'Next.js', level: 85, icon: 'SiNextdotjs' },
    { name: 'Node.js', level: 80, icon: 'SiNodedotjs' },
    { name: 'Express.js', level: 75, icon: 'SiExpress' },
    { name: 'Spring Boot', level: 70, icon: 'SiSpringboot' },
    { name: 'Tailwind CSS', level: 90, icon: 'SiTailwindcss' }
  ],
  tools: [
    { name: 'Git/GitHub', level: 85, icon: 'SiGit' },
    { name: 'MongoDB', level: 75, icon: 'SiMongodb' },
    { name: 'Docker', level: 60, icon: 'SiDocker' },
    { name: 'REST APIs', level: 85, icon: 'SiPostman' },
    { name: 'WordPress', level: 80, icon: 'SiWordpress' },
    { name: 'Figma', level: 70, icon: 'SiFigma' }
  ],
  specializations: [
    'AI Integration',
    'Performance Optimization',
    'Data Analysis',
    'System Design',
    'Customer Support Optimization',
    'Process Automation'
  ]
}

export const PROJECTS_DATA = [
  {
    id: 'mcq-analyzer',
    title: 'AI-Powered MCQ Analyzer',
    description: 'Built a Java Spring Boot application that analyzes multiple-choice questions using pure algorithmic reasoning. A learning experience about the gap between rule-based systems and true AI understanding.',
    technologies: ['Java', 'Spring Boot', 'Pattern Analysis', 'REST API'],
    githubUrl: 'https://github.com/panthkakadia/mcq-analyzer',
    liveUrl: null,
    featured: true,
    category: 'ai' as const,
    status: 'completed' as const
  },
  {
    id: 'ecommerce-ai',
    title: 'AI-Enhanced E-commerce Platform',
    description: 'Full-stack e-commerce application with AI-powered product recommendations and chatbot support. Achieved 90+ Lighthouse score with real-time performance monitoring.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Machine Learning APIs'],
    githubUrl: 'https://github.com/panthkakadia/ecommerce-ai',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'fullstack' as const,
    status: 'completed' as const
  },
  {
    id: 'analytics-dashboard',
    title: 'Customer Analytics Dashboard',
    description: 'Developed ETL pipeline processing 100K+ records with PowerBI dashboards achieving 85% forecasting accuracy.',
    technologies: ['Python', 'PowerBI', 'SQL', 'REST APIs'],
    githubUrl: 'https://github.com/panthkakadia/analytics-dashboard',
    liveUrl: null,
    featured: false,
    category: 'web' as const,
    status: 'completed' as const
  }
]

export const EXPERIENCE_DATA = [
  {
    id: 'canada-computers',
    title: 'Junior Service Technician',
    company: 'Canada Computers',
    period: 'Oct 2024 - Present',
    description: [
      'Orchestrated technical support workflows for 50+ daily interactions with 95% first-contact resolution',
      'Analyzed customer feedback patterns improving satisfaction scores by 20%',
      'Optimized service delivery processes reducing resolution time by 30%',
      'Generated $15K+ monthly revenue through strategic consultation'
    ],
    technologies: ['Hardware Diagnostics', 'Process Optimization', 'Customer Support'],
    location: 'Toronto, ON',
    type: 'part-time' as const
  },
  {
    id: 'ilaxis-food',
    title: 'Bookkeeper & Web Support Assistant',
    company: 'Ilaxi\'s Food',
    period: 'Jan 2024 - Oct 2024',
    description: [
      'Streamlined financial operations reducing processing time by 25%',
      'Architected customer support framework handling 100+ weekly inquiries',
      'Enhanced digital experience increasing conversion rate by 15%',
      'Collaborated on Next.js/Tailwind implementations improving page speeds by 40%'
    ],
    technologies: ['WordPress', 'Next.js', 'Financial Management', 'UX/UI Design'],
    location: 'Toronto, ON',
    type: 'part-time' as const
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