interface iExperiences {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
[];

export const experiences: iExperiences[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'GAMMSTACK',
    location: 'Remote',
    period: '2021 - Present',
    duration: '3+ years',
    description:
      'Leading development of enterprise-level applications and AI automation workflows. Architected scalable systems serving 10,000+ users with 99.9% uptime.',
    achievements: [
      'Built 3 major commercial products from concept to production',
      'Implemented n8n automation workflows reducing manual tasks by 80%',
      'Led team of 5 developers using agile methodologies',
      'Optimized database queries improving performance by 60%',
    ],
    technologies: ['Node.js', 'React', 'AWS', 'MongoDB', 'n8n', 'TypeScript'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Systematix Infotech',
    location: 'Hybrid',
    period: '2019 - 2021',
    duration: '2 years',
    description:
      'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems. Focused on creating robust backend APIs and intuitive user interfaces.',
    achievements: [
      'Delivered 15+ successful projects on time and within budget',
      'Integrated 3rd party APIs for payment processing and analytics',
      'Implemented CI/CD pipelines reducing deployment time by 50%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Vue.js', 'Docker', 'Jenkins'],
  },
];
