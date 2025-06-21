import { Building, CreditCard, LucideIcon, MessageSquare } from 'lucide-react';

export interface iProject {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  technologies: string[];
  role: string;
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
}
[];

export const projects: iProject[] = [
  {
    title: 'Reimatcher',
    subtitle: 'Commercial Real Estate Platform',
    description:
      'Full-stack web application for real estate matchmaking with custom algorithms to compute leasing costs and compare properties. Built scalable architecture serving thousands of users.',
    icon: Building,
    image:
      'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'NestJS', 'MongoDB', 'Neo4j', 'AWS', 'React'],
    role: 'Co-founder, Architect, Full Stack Engineer',
    highlights: [
      'Custom property matching algorithm',
      'Scalable microservices architecture',
      'Real-time property updates',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Yammer',
    subtitle: 'Enterprise Communication Platform',
    description:
      'Internal communication tool for enterprises with web and mobile applications. Features microservices architecture, CI/CD pipelines, and optimized SQL/NoSQL databases.',
    icon: MessageSquare,
    image:
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'NestJS', 'React', 'PostgreSQL', 'Redis', 'Nginx'],
    role: 'Senior Full Stack Developer',
    highlights: [
      'Real-time messaging system',
      'Microservices deployment',
      'Advanced security features',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Squareup',
    subtitle: 'Payment Processing Platform',
    description:
      'Smart POS system supporting card readers and mobile applications with third-party integrations for accounting and e-commerce platforms.',
    icon: CreditCard,
    image:
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'React', 'Neo4j', 'Stripe API', 'Docker', 'Kubernetes'],
    role: 'API Architect, Backend Lead',
    highlights: [
      'Secure payment processing',
      'Multi-platform integration',
      'Real-time transaction monitoring',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
];
