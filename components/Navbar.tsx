
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6 px-10"
    >
      <div className="glass px-8 py-3 rounded-full flex gap-8 items-center border border-white/10 neon-glow">
        <a href="#hero" className="text-sm font-medium hover:text-purple-400 transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors">About</a>
        <a href="#skills" className="text-sm font-medium hover:text-purple-400 transition-colors">Skills</a>
        <a href="#projects" className="text-sm font-medium hover:text-purple-400 transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-purple-400 transition-colors px-4 py-2 bg-purple-600 rounded-full text-white">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
