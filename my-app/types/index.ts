export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'ai' | 'fullstack'
  status: 'completed' | 'in-progress' | 'planned'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  location?: string
  type: 'full-time' | 'part-time' | 'internship' | 'freelance'
}

export interface Skill {
  name: string
  level: number
  category: 'language' | 'framework' | 'tool' | 'database'
  icon?: string
}

export interface ContactForm {
  name: string
  email: string
  subject?: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  username: string
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}