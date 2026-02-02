
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Academic Path</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-12">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
               <GraduationCap size={80} />
            </div>
            <div className="md:w-1/4">
              <span className="text-purple-400 font-bold text-lg">{edu.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-cyan-400 font-medium mb-3">{edu.institution}</p>
              <div className="flex items-center gap-2 text-white/60 bg-white/5 w-max px-4 py-1 rounded-full border border-white/10">
                <Award size={16} className="text-yellow-500" />
                <span className="text-sm font-semibold">{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 p-8 glass rounded-3xl border-l-4 border-l-purple-600 bg-gradient-to-r from-purple-900/10 to-transparent"
      >
        <h4 className="text-xl font-bold mb-2">Master in Full Stack Development with AWS</h4>
        <p className="text-white/60">IT Vedant Institute - Certified Professional</p>
      </motion.div>
    </section>
  );
};

export default Education;
