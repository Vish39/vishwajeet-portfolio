
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Mastered Tech Stack</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {SKILLS.map((skill, index) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-white/80">{skill.name}</span>
              <span className="text-purple-400 font-bold">{skill.percentage}%</span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
