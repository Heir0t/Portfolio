import { Technology, Experience, Achievement, Project, ContactInfo } from "@/types/portfolio";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export const technologies: Technology[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "💛" },
  { name: "HTML/CSS", icon: "🎨" },
  { name: "Git", icon: "🔧" },
  { name: "SQL", icon: "🗄️" },
];

export const experiences: Experience[] = [
  {
    company: "Tech Company",
    role: "Desenvolvedor Full Stack",
    period: "2022 - Presente",
    description: "Desenvolvimento de aplicações web utilizando React, Node.js e TypeScript. Responsável por implementar novas features e otimizar performance.",
  },
  {
    company: "Startup Innovation",
    role: "Desenvolvedor Frontend",
    period: "2020 - 2022",
    description: "Criação de interfaces modernas e responsivas. Trabalho em equipe ágil com foco em experiência do usuário.",
  },
];

export const achievements: Achievement[] = [
  {
    event: "Feira de Ciências Estadual",
    title: "1º Lugar - Melhor Projeto de TI",
    year: "2023",
    description: "TCC premiado com primeiro lugar na categoria de Tecnologia da Informação.",
  },
  {
    event: "Mostra Nacional de Tecnologia",
    title: "Destaque Nacional",
    year: "2023",
    description: "Projeto reconhecido como um dos destaques na mostra nacional de inovação tecnológica.",
  },
  {
    event: "Feira Regional de Inovação",
    title: "Participação",
    year: "2023",
    description: "Apresentação do trabalho de conclusão de curso para a comunidade acadêmica.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Dashboard Analytics",
    description: "Plataforma de análise de dados com visualizações interativas e relatórios em tempo real.",
    image: project1Image,
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/seu-usuario/projeto1",
  },
  {
    id: "2",
    name: "App Mobile",
    description: "Aplicativo mobile multiplataforma com design moderno e funcionalidades intuitivas.",
    image: project2Image,
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/seu-usuario/projeto2",
  },
  {
    id: "3",
    name: "Sistema de Gestão",
    description: "Sistema completo para gestão empresarial com módulos integrados e dashboard analítico.",
    image: project3Image,
    technologies: ["TypeScript", "Node.js", "SQL"],
    githubUrl: "https://github.com/seu-usuario/projeto3",
  },
];

export const contactInfo: ContactInfo = {
  email: "seu.email@example.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  phone: "(00) 00000-0000",
};

export const profileInfo = {
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  bio: "Desenvolvedor apaixonado por tecnologia e inovação. Especializado em criar soluções web modernas e escaláveis. Experiência com React, TypeScript e Node.js. Sempre em busca de novos desafios e oportunidades de aprendizado.",
};
