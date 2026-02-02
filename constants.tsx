
import { Skill, Project, Education } from './types';

export const SKILLS: Skill[] = [
  { name: 'JavaScript', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'Django', percentage: 75 },
  { name: 'SQL', percentage: 80 },
  { name: 'HTML/CSS', percentage: 90 },
  { name: 'Java', percentage: 70 },
  { name: 'C/C++', percentage: 75 },
  { name: 'AWS (IT Vedant Certified)', percentage: 80 },
  { name: 'AI Tools', percentage: 95 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Code Assets',
    description: 'A resource platform for developers to find code snippets and assets efficiently.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://code-assets--vish3939.replit.app/',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern, animation-heavy portfolio showcasing full-stack skills and 2026 design trends.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Expense Tracker',
    description: 'A robust financial management tool to track spending patterns and manage budgets.',
    tech: ['Python', 'SQL', 'Django'],
    link: 'https://github.com/Vish39',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.E. Information Technology (8th Sem)',
    institution: 'DY Patil University, Pune',
    score: 'CGPI: 7.5',
    period: '2021 - 2025'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Saraswati Junior College',
    score: '84.83%',
    period: '2019 - 2021'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shri Sant Gajanan Maharaj English School',
    score: '79%',
    period: '2018 - 2019'
  }
];

export const TECH_BADGES = [
  'React', 'Node.js', 'Python', 'AWS', 'Django', 'PostgreSQL', 'Docker', 'AI'
];
