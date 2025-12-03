export interface Technology {
  name: string;
  icon?: string;
  image?: string; 
}

export interface AboutMe {
  paragraphs: string[];
  highlights?: string[];
}

export interface Achievement {
  event: string;
  title: string;
  year: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  websiteUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  status?: string;
  description?: string;
  highlights?: string[];
  certificate?: string;
}