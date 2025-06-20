import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Building, MessageSquare, CreditCard } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Reimatcher',
      subtitle: 'Commercial Real Estate Platform',
      description: 'Full-stack web application for real estate matchmaking with custom algorithms to compute leasing costs and compare properties. Built scalable architecture serving thousands of users.',
      icon: Building,
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'NestJS', 'MongoDB', 'Neo4j', 'AWS', 'React'],
      role: 'Co-founder, Architect, Full Stack Engineer',
      highlights: ['Custom property matching algorithm', 'Scalable microservices architecture', 'Real-time property updates'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Yammer',
      subtitle: 'Enterprise Communication Platform',
      description: 'Internal communication tool for enterprises with web and mobile applications. Features microservices architecture, CI/CD pipelines, and optimized SQL/NoSQL databases.',
      icon: MessageSquare,
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'NestJS', 'React', 'PostgreSQL', 'Redis', 'Nginx'],
      role: 'Senior Full Stack Developer',
      highlights: ['Real-time messaging system', 'Microservices deployment', 'Advanced security features'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Squareup',
      subtitle: 'Payment Processing Platform',
      description: 'Smart POS system supporting card readers and mobile applications with third-party integrations for accounting and e-commerce platforms.',
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'React', 'Neo4j', 'Stripe API', 'Docker', 'Kubernetes'],
      role: 'API Architect, Backend Lead',
      highlights: ['Secure payment processing', 'Multi-platform integration', 'Real-time transaction monitoring'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing enterprise-level applications and innovative solutions that demonstrate my expertise in full-stack development and system architecture
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <project.icon className="text-gray-800" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <strong>Role:</strong> {project.role}
                  </p>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};