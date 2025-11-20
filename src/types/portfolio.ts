export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Achievement {
  event: string;
  title: string;
  year: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
}
