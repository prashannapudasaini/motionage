import React from 'react';
import { motion } from 'framer-motion';
import { Image, BoxSelect, Clapperboard, Layers, Download } from 'lucide-react';
import FloatingTech from '../components/FloatingTech';

export default function Portfolio() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const categories = [
    { title: "Logofolio", desc: "A visual demonstration featuring a variety of styles, from minimal to complex crests.", icon: <BoxSelect size={32} /> },
    { title: "Social Media", desc: "High-conversion creatives for Instagram, Facebook, and Meta Ads.", icon: <Image size={32} /> },
    { title: "Brand Identity", desc: "Complete visual packages including typography, colors, and mockups.", icon: <Layers size={32} /> },
    { title: "Poster Artworks", desc: "Music covers, sports posters, and advanced photo manipulation.", icon: <Clapperboard size={32} /> }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Work</span>
            <span className="h-[2px] w-8 bg-blue-600"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Explore The Portfolio</h2>
          <p className="text-lg text-slate-400">View our complete company profile below or explore our primary design categories.</p>
        </div>
        
        {/* PDF Viewer Section */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-3xl"></div>
          <div className="relative w-full h-[600px] md:h-[800px] max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 flex flex-col items-center justify-center">
            
            <iframe 
              src="/motionage.pdf" 
              className="w-full h-full border-none z-10" 
              title="MotionAge Portfolio PDF"
            >
              <p className="text-slate-400 text-center p-8">Your browser does not support PDFs. Please download the PDF to view it.</p>
            </iframe>

          </div>
          
          <div className="mt-8 text-center">
            <a href="/motionage.pdf" download className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:border-blue-600 transition-all hover:-translate-y-1 shadow-lg">
              <Download size={18} /> Download PDF Profile
            </a>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-glass-card bg-slate-900 rounded-2xl p-8 border border-white/5 group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}