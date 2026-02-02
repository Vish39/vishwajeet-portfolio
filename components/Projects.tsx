
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Projects</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative h-[450px] [perspective:1000px]"
          >
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col glass rounded-3xl overflow-hidden [backface-visibility:hidden]">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover opacity-80" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 h-full w-full glass rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-purple-900/40 to-black/80">
                <h3 className="text-2xl font-bold mb-4">View Details</h3>
                <p className="mb-8 text-white/70">Check out the live deployment or source code for this project.</p>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center gap-2 px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href="https://github.com/Vish39" 
                    target="_blank" 
                    className="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Code size={18} /> Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
