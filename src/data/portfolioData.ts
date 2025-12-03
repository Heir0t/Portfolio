import { Technology, AboutMe, Achievement, Project, ContactInfo, Education } from "@/types/portfolio";
import MetavisionLogo from "@/assets/metavision-logo.png";
import IrisLogo from "@/assets/iris-logo.png";
import RedeSocialLogo from "@/assets/rede-social-logo.png";
import reactIcon from "@/assets/react-icon.png";
import typescriptIcon from "@/assets/typescript-icon.png";
import nodejsIcon from "@/assets/nodejs-icon.png";
import pythonIcon from "@/assets/python-icon.png";
import javascriptIcon from "@/assets/javascript-icon.png";
import htmlcssIcon from "@/assets/htmlcss-icon.png";
import gitIcon from "@/assets/git-icon.png";
import sqlIcon from "@/assets/sql-icon.png";
import certificateImage from "@/assets/certificado-curso-ipv6.png";
import colib from "@/assets/colib.jpg";
import xfebic from "@/assets/x-febic.jpg";
import feintec16 from "@/assets/16-feintec.png";
import oktobersummit from "@/assets/oktober-summit.png";
import taquarasummit from "@/assets/taquara-summit.png";
import meetupdevs from "@/assets/meetup-devs.webp";
import ixfebic from "@/assets/ix-febic.png";
import dashboardLogo from "@/assets/project4.png";
import cidadaoReportaLogo from "@/assets/cidadao-reporta.png";

export const technologies: Technology[] = [
  { name: "HTML/CSS", image: htmlcssIcon },
  { name: "React", image: reactIcon },
  { name: "JavaScript", image: javascriptIcon },
  { name: "TypeScript", image: typescriptIcon },
  { name: "Node.js", image: nodejsIcon },
  { name: "Python", image: pythonIcon },
  { name: "Git", image: gitIcon },
  { name: "SQL", image: sqlIcon },
];

export const education: Education[] = [
  {
    degree: "Curso Técnico em Informática Integrado ao Ensino Médio",
    institution: "Escola Técnica Estadual Monteiro Lobato",
    period: "2023 - 2025",
    location: "Taquara, Rio Grande do Sul",
    status: "Em conclusão - Buscando estágio (400h)",
    description: "",
    highlights: [
      "Desenvolvimento Web Full Stack",
      "Banco de Dados",
      "Programação Orientada a Objetos",
      "Metodologias Ágeis",
      "Redes de Computadores",
      "Design Gráfico",
      "UX/UI"
    ]
  },
  {
    degree: "Curso Básico de IPV6",
    institution: "NIC.br",
    period: "2025",
    location: null,
    status: "Concluído",
    description: "",
    highlights: [
      "Protocolo IPV6",
      "Protocolos auxiliares ao IP",
    ],
    certificate: certificateImage
  }
];

export const achievements: Achievement[] = [
   {
    event: "Participação",
    title: "Colib - Comunicação é Liberdade",
    year: "2025",
    description: "Grupo de estudos para desenvolvimento da comunicação e oratória, onde mão só aprendi sobre apresentações, mas também sobre como se tornar um bom profissional e a postura ideal na entrevista de emprego.",
    image: colib
  },
  {
    event: "3º Lugar - Categoria Inovação Tecnológica",
    title: "16ª Feintec - Feira de Inovação Tecnológica",
    year: "2025",
    description: "Feira de Inovação Ténologica onde consegui o 3º lugar com o projeto Metavision na categoria Inovação Tecnológica, desenvolvendo habilidades técnicas e de apresentação.",
    image: feintec16
  },
  {
    event: "Participação",
    title: "X Febic - Feira Brasileira de Iniciação Científica",
    year: "2025",
    description: "Feira brasileira de iniciação científica onde apresentei o projeto Metavision, aprimorando minhas habilidades de pesquisa e apresentação, que foram muito importantes para meu desenvolvimento pessoal.",
    image: xfebic
  },
  {
    event: "Participação",
    title: "Oktober Summit",
    year: "2025",
    description: "Evenqto de tecnologia focado em desenvolvimento de software, promovendo networking e aprendizado geral.",
    image: oktobersummit
  },
  {
    event: "Participação",
    title: "Taquara Summit",
    year: "2025",
    description: "Evento de tecnologia e inovação realizado em Taquara, promovendo networking e aprendizado geral.",
    image: taquarasummit
  },
  {
    event: "Participação",
    title: "Hackatime",
    year: "2025",
    description: "Hackathon focado em soluções tecnológicas para problemas, promovendo trabalho em equipe e inovação, onde desenvolvi habilidades de colaboração.",
  },
   {
    event: "Participação",
    title: "Meetup dos Devs do Paranhana",
    year: "2025",
    description: "Encontro de desenvolvedores da região do Paranhana para troca de experiências e networking onde houveram palestras sobre diversas tecnologias.",
    image: meetupdevs
  },
  {
    event: "Participação",
    title: "15ª Feintec - Feira de Inovação Tecnológica",
    year: "2024",
    description: "Feira de inovação tecnológica onde apresentei o projeto Metavision, aprimorando minhas habilidades de oratória e apresentação, que foi muito importante para meu desenvolvimento pessoal.",
  },
  {
    event: "3º Lugar - Categoria Ciências Sociais",
    title: "IX Febic - Feira Brasileira de Iniciação Científica",
    year: "2024",
    description: "Feira onde consegui o 3º lugar com o projeto Metavision na categoria Ciências Sociais, desenvolvendo habilidades de oratória e apresentação.",
    image: ixfebic
  }
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Metavision",
    description: "Sistema de acessibilidade para pessoas com deficiência visual utilizando beacons, alertando os usuários sobre obstáculos e pontos de interesse em seu entorno.",
    image: MetavisionLogo,
    technologies: ["Beacons", "React Native", "TypeScript", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/Heir0t/Metavision",
    websiteUrl: "https://metavisionlp.vercel.app/"
  },
  {
    id: "1",
    name: "Cidadadão Reporta",
    description: "Aplicativo móvel para relatos de problemas urbanos, permitindo que cidadãos enviem fotos e descrições diretamente para a prefeitura local.",
    image: cidadaoReportaLogo ,
    technologies: ["React", "React Native", "TypeScript", "PostgreSQL", "Supabase", "Node.js",],
    githubUrl: "https://github.com/Felbit80/Cidadao-Reporta",
  },
  {
    id: "3",
    name: "Iris",
    description: "Web app em react para controle de um sistema de irrigação automatizado com sensores de umidade e dados da previsão do tempo.",
    image: IrisLogo,
    technologies: ["React", "TypeScript", "PostgresSQL", "Supabase"],
    githubUrl: "https://github.com/Heir0t/Iris",
    websiteUrl: "https://iris-irrigate.vercel.app/"
  },
  {
    id: "4",
    name: "Javali Gaúcho",
    description: "Rede social focada em conectar caçadores e entusiastas da caça ao javali no Rio Grande do Sul.",
    image: RedeSocialLogo,
    technologies: ["React", "Typescript", "Node.js", "postgreSQL", "Supabase"],
    githubUrl: "https://github.com/Heir0t/Projeto_RedeSocial",
  },
  {
    id: "5",
    name: "Dashboard de Análise de Dados de Músicas do Spotify",
    description: "Dashboard interativo para análise de dados de músicas do Spotify utilizando Python e bibliotecas como streamlit, pandas e plotly.",
    image: dashboardLogo,
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Heir0t/Streamlit-Trabalho",
    websiteUrl: "https://spotify-tracks-dataset.streamlit.app/Analise_Musical"
  },
];

export const contactInfo: ContactInfo = {
  email: "heitordasilvapro783@gmail.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/Heir0t",
  phone: "(51) 99894-2175",
};

export const profileInfo = {
  name: "Heitor da Silva",
  title: "Desenvolvedor Full Stack",
  bio: "Meu nome é Heitor Augusto do Amaral da Silva, estudante de Informática na Escola Técnica Estadual Monteiro Lobato e desenvolvedor full-stack. Durante o curso técnico trabalhei com diversas linguagens e ferramentas, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Participo ativamente de feiras científicas e eventos de tecnologia, onde conquistei premiações e tive a oportunidade de expandir meu conhecimento técnico, melhorar minha comunicação e conhecer pessoas novas. Entre meus projetos, estão um sistema de acessibilidade para pessoas com deficiência visual e uma aplicação focada em relatos sobre problemas urbanos para a prefeitura. Meu objetivo é continuar evoluindo como profissional e contribuir com a equipe.",
};