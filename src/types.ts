export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'architecture' | 'ai';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0 - 100
  years: number;
  featured?: boolean;
  tag?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'work' | 'education' | 'award';
  role: string;
  organization: string;
  department?: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'cloud' | 'ai' | 'opensource' | 'mobile';
  categoryLabel: string;
  featured: boolean;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  accentColor: string;
}

export interface CoreStat {
  label: string;
  value: string;
  hint: string;
}

export interface LanguageProficiency {
  language: string;
  level: string;
  percent: number;
}

export interface CoreValue {
  title: string;
  desc: string;
  iconName: string;
}

export interface UserProfile {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  tagline: string;
  statusText: string;
  statusType: 'available' | 'open' | 'consulting';
  location: string;
  yearsOfExp: number;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  blog?: string;
  about: string[];
  stats: CoreStat[];
  languages: LanguageProficiency[];
  values: CoreValue[];
  experiences: ExperienceItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  date: string;
}
