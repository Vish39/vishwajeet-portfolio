
import { motion, useScroll, useSpring } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-[100] origin-left" style={{ scaleX }} />
      
      <Background />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass p-10 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl -z-10" />
            <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  "Quick learner passionate about full-stack development and AI. 
                  Mastered 8+ technologies through <span className="text-purple-400 font-bold">IT Vedant certification</span>. 
                  Building production-ready apps and eager to contribute to innovative projects."
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                      <MapPin size={20} />
                    </div>
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                      <Phone size={20} />
                    </div>
                    <span>+91 899951761</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square glass rounded-full flex items-center justify-center p-8 border-2 border-purple-500/20 neon-glow animate-pulse">
                    <div className="text-center">
                      <div className="text-6xl font-black text-purple-400 mb-2">7.5</div>
                      <div className="text-sm font-bold text-white/40 uppercase tracking-widest">CGPI Average</div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Skills />
        <Projects />
        <Education />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="glass p-12 md:p-20 rounded-[50px] border border-white/5 relative bg-gradient-to-br from-purple-900/5 to-transparent">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Let's Connect</h2>
              <p className="text-white/60 max-w-xl mx-auto">Ready to build something amazing? Feel free to reach out for collaborations or just a friendly hello!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="p-8 glass rounded-3xl hover:border-purple-500/30 transition-all">
                  <Mail className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">Email Me</h4>
                  <p className="text-white/60">vishvajeetmapari709@gmail.com</p>
                </div>
                <div className="p-8 glass rounded-3xl hover:border-cyan-500/30 transition-all">
                  <Phone className="text-cyan-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">Call Me</h4>
                  <p className="text-white/60">+91 899951761</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 ml-4">Message</label>
                  <textarea rows={4} placeholder="Your message here..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/20">
                  <Send size={20} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/40">
        <p>© 2026 Vishwajeet Avinash Mapari. Made with passion & modern tech.</p>
      </footer>
    </div>
  );
};

export default App;
