import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your IT image to use as the visual
import itImage from '../assets/hero_it.jpeg';

export default function About() {
  const features = [
    "High-Fidelity Motion Graphics",
    "Data-Driven Brand Strategies",
    "Enterprise-Grade Web Development"
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 mb-6">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
              Transforming Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                Digital Masterpieces.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light max-w-lg">
              Founded in 2021, MotionAge is a premium creative agency dedicated to merging technical precision with artistic soul. We don't just create visuals; we engineer experiences that drive real business growth.
            </p>
            
            {/* Feature Checklist */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Discover Our Story
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Side: Image & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl transform scale-90 translate-y-10 rounded-full" />
            
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] border border-slate-200 dark:border-slate-800 shadow-2xl z-10 bg-slate-100 dark:bg-slate-900">
              <img 
                src={itImage} 
                alt="MotionAge Studio" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Inner dark gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stat Card */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50">
                  <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 dark:text-white leading-none mb-1">
                    600<span className="text-blue-600 dark:text-blue-400">+</span>
                  </p>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}