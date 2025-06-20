import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'GAMMSTACK',
      location: 'Remote',
      period: '2021 - Present',
      duration: '3+ years',
      description: 'Leading development of enterprise-level applications and AI automation workflows. Architected scalable systems serving 10,000+ users with 99.9% uptime.',
      achievements: [
        'Built 3 major commercial products from concept to production',
        'Implemented n8n automation workflows reducing manual tasks by 80%',
        'Led team of 5 developers using agile methodologies',
        'Optimized database queries improving performance by 60%'
      ],
      technologies: ['Node.js', 'React', 'AWS', 'MongoDB', 'n8n', 'TypeScript']
    },
    {
      title: 'Full Stack Developer',
      company: 'Systematix Infotech',
      location: 'Hybrid',
      period: '2019 - 2021',
      duration: '2 years',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems. Focused on creating robust backend APIs and intuitive user interfaces.',
      achievements: [
        'Delivered 15+ successful projects on time and within budget',
        'Integrated 3rd party APIs for payment processing and analytics',
        'Implemented CI/CD pipelines reducing deployment time by 50%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Vue.js', 'Docker', 'Jenkins']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning and impactful contributions across diverse projects and technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </h4>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        <Award size={18} className="mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};