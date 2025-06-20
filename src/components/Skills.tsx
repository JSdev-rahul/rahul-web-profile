import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Database, Cloud, Bot, Code } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      Icon: Server,
      skills: ['Node.js', 'NestJS', 'ExpressJS', 'Python'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frontend Development',
      Icon: Globe,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Databases',
      Icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Neo4j'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'DevOps & Cloud',
      Icon: Cloud,
      skills: ['AWS', 'Heroku', 'Jenkins', 'GitHub Actions'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI & Automation',
      Icon: Bot,
      skills: ['n8n Workflows', 'TensorFlow', 'ML Systems', 'AI Agents'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'APIs & Integration',
      Icon: Code,
      skills: ['REST APIs', 'GraphQL', 'WebSockets', 'Microservices'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and intelligent automation systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next project and bring your ideas to life with cutting-edge technology and intelligent automation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};