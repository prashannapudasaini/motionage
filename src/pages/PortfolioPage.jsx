import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, LayoutTemplate, Share2, Printer, Sparkles } from 'lucide-react';
import FloatingTech from '../components/FloatingTech';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="pt-20 pb-16 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springAnim}
          className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Work</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          A curated collection of over 600+ high-impact digital projects. Scroll through our profile or download it directly.
        </motion.p>
      </section>

      {/* PDF Viewer Section */}
      <section className="pb-24 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={springAnim}
          className="relative group"
        >
          {/* Animated Glow Behind PDF */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
          
          <div className="relative w-full h-[700px] md:h-[900px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
            <iframe 
              src="/motionage.pdf" 
              className="w-full h-full border-none" 
              title="MotionAge Portfolio PDF"
            >
              <p className="text-slate-500 text-center p-8">PDF viewer not supported. Please download below.</p>
            </iframe>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <a href="/motionage.pdf" download className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 hover:-translate-y-1">
            <Download size={20} /> Download PDF Profile
          </a>
        </div>
      </section>

      {/* Detailed Categories grid */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {[
              { title: "Logofolio", icon: <LayoutTemplate size={32}/>, text: "From minimalist wordmarks to complex illustrative crests, our branding ensures your company is instantly recognizable." },
              { title: "Social Media Campaigns", icon: <Share2 size={32}/>, text: "High-conversion, thumb-stopping creatives designed specifically for Instagram grids and Meta Ad funnels." },
              { title: "Print Excellence", icon: <Printer size={32}/>, text: "Tactile marketing assets including premium brochures, modern restaurant menus, and product packaging." },
              { title: "Specialized Artworks", icon: <Sparkles size={32}/>, text: "Advanced photo manipulation, vibrant music covers, and dynamic sports posters." }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springAnim, delay: i * 0.1 }}
                className="liquid-glass-card bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{cat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{cat.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}