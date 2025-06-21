import { motion } from 'framer-motion';
import { Code, Heart } from 'lucide-react';
import React from 'react';
import { navItems } from '../data/navItems';
import { specializations } from '../data/specializations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold mb-4">
              Rahul Choudhary
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack + N8N AI Agent Developer crafting scalable solutions and intelligent
              automation workflows.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map(link => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="block text-gray-400 hover:text-white transition-colors duration-200 capitalize"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Specializations</h3>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              {specializations.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>and</span>
              <Code className="text-blue-500" size={16} />
              <span>by Rahul Choudhary</span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Rahul Choudhary. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
