// Tipos principales de la aplicación

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'ai' | 'web' | 'mobile' | 'ml' | 'llmops';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'database' | 'cloud';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  github: string;
}

export interface Hero {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Tipos para formularios
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

// Tipos para animaciones
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Tipos para el tema
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Tipos para el estado global
export interface AppState {
  theme: Theme;
  isLoading: boolean;
  error: string | null;
}

// Tipos para configuración
export interface Config {
  siteName: string;
  siteUrl: string;
  apiUrl: string;
  contactEmail: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
  };
} 