export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill;
  testimonials: Testimonial[];
  theme: Theme;
}