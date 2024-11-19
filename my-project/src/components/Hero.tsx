import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img 
              src="/src/Assets/Pictures/tani.jpg" 
              alt="Taniya" 
              className="w-60 h-60 rounded-full mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hi, I'm <span className="text-blue-600">Taniya</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Software Engineer specializing in Web Development
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Crafting elegant solutions to complex problems through clean, efficient code.
            Passionate about creating exceptional web experiences.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <a href="https://github.com/TharushiTaniya" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/taniya-pathirana-462833294/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a href="mailto:taniyapathirana05@gmail.com"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <a href="#contact"
               className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold
                          hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;