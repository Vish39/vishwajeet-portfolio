
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { TECH_BADGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full"
      >
        <span className="text-purple-400 font-medium tracking-widest uppercase mb-4 block">Welcome to my space</span>
        <h1 className="text-5xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 pb-2">
          Vishwajeet Mapari
        </h1>
        
        <div className="text-2xl md:text-4xl font-semibold mb-8 text-white/80 h-12">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'AWS Certified Cloud Practitioner',
              2000,
              'AI Enthusiast',
              2000,
              'IT Engineering Student',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-2xl mx-auto text-white/60 text-lg mb-12 leading-relaxed px-4">
          Final-year IT Engineering student at DY Patil University Pune. 
          Passionate about building production-ready apps with modern tech stacks and AI.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a 
            href="https://github.com/Vish39" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="p-4 glass rounded-full hover:border-purple-500 transition-all group"
          >
            <Github className="w-6 h-6 group-hover:text-purple-400" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/vishwajeet-mapari39" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="p-4 glass rounded-full hover:border-blue-500 transition-all group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-400" />
          </motion.a>
          <motion.a 
            href="mailto:vishvajeetmapari709@gmail.com" 
            whileHover={{ y: -5 }}
            className="p-4 glass rounded-full hover:border-cyan-500 transition-all group"
          >
            <Mail className="w-6 h-6 group-hover:text-cyan-400" />
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Tech Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {TECH_BADGES.map((badge, idx) => (
          <motion.div
            key={badge}
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "-20%", "0%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: idx * 0.5
            }}
            className="absolute p-3 glass rounded-xl text-xs font-bold text-white/40 border-white/5"
            style={{
              left: `${15 + (idx * 12) % 70}%`,
              top: `${20 + (idx * 15) % 60}%`
            }}
          >
            {badge}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
