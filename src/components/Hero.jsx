import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your slider images
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png'; 
import hero4 from '../assets/hero_4.png';
import itImage from '../assets/hero_it.jpeg'; 

const slides = [
  { 
    id: 1, 
    image: hero1, 
    service: "Graphics Designing",
    title: "Crafting Visual Impact",
  },
  { 
    id: 2, 
    image: hero2, 
    service: "Web Development",
    title: "From Raw to Remarkable",
  },
  { 
    id: 3, 
    image: hero3, 
    service: "Digital Marketing",
    title: "Bold & Eye-Catching",
  },
  { 
    id: 4, 
    image: hero4, 
    service: "Video Editing",
    title: "Cut. Craft. Captivate.",
  },
];

// Professional animation configurations
const getTitleAnimation = (index) => {
  const animations = [
    { initial: { y: -60, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } },
    { initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } } },
    { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } },
    { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }
  ];
  return animations[index] || { initial: { opacity: 0 }, animate: { opacity: 1 } };
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="w-full flex flex-col">
      {/* Hero Slider Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mt-16 md:mt-[72px] bg-slate-900 group">
        
        {/* Background Image with Smooth Fade */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover" 
            />
            {/* Clean gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* === ALIGNMENT CHANGED HERE === */}
        {/* Changed to 'justify-start' so it anchors to the top, and used 'pt-12 md:pt-16 lg:pt-10' for a small gap */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-12 md:pt-16 lg:pt-10 px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`text-${currentSlide}`} 
              // Lifted exactly 2px upward
              className="flex flex-col items-center text-center max-w-5xl -translate-y-[2px]"
            >
              <motion.div 
                {...getTitleAnimation(currentSlide)}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-3 md:gap-4"
              >
                {/* 1. Bold, Blue "Other Text" (Service Name) */}
                <span className="text-xl md:text-3xl font-black text-blue-600 tracking-[0.2em] uppercase drop-shadow-lg">
                  {slides[currentSlide].service}
                </span>
                
                {/* 2. The Custom Heading - Smaller size, specific #cad1d9 color */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#cad1d9] tracking-tight leading-[1.1] drop-shadow-xl">
                  {slides[currentSlide].title}
                </h2>
              </motion.div>
              
              {/* Simple decorative line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-transparent via-[#cad1d9] to-transparent mt-8 rounded-full shadow-lg opacity-60"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows (Appears on Hover) */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide} 
            className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-md hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide} 
            className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-md hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3 pointer-events-none">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-10 bg-blue-500' 
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Creative Agency Section */}
      <section id="home" className="relative py-10 lg:py-16 overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center border-b border-slate-200 dark:border-slate-900/50">
        {/* Deep background gradient for the liquid aesthetic */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/40 via-slate-50 to-slate-50 dark:from-blue-900/20 dark:via-slate-950 dark:to-slate-950 transition-colors duration-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                Creative Design Agency
              </div>
              
              {/* Section Heading slightly tightened */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Impact</span> <br className="hidden lg:block"/> By Design.
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                We help clients elevate their visual presence through time-tested design principles and modern digital trends.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
                <Link 
                  to="/contact" 
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-2"
                >
                  Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             
              </div>
            </motion.div>

            {/* Right Side: THE RESTORED LIQUID IMAGE DESIGN */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2, ease: "easeOut" }} 
              className="relative hidden lg:flex justify-center items-center h-[500px]"
            >
              {/* Background glowing blob */}
              <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-purple-400/40 to-blue-400/40 dark:from-purple-600/40 dark:to-blue-600/40 blur-3xl animate-blob" />

              {/* The liquid mask container */}
              <div className="relative w-[400px] h-[400px] animate-liquid shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden border border-white/40 dark:border-white/20 flex items-center justify-center z-10 bg-slate-900">
                <img 
                  src={itImage} 
                  alt="IT Technology Solutions" 
                  className="w-full h-full object-cover relative z-10" 
                />
                {/* Inner glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
              </div>

              {/* Floating accent elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 backdrop-blur-lg rounded-2xl border border-white/40 dark:border-white/10 rotate-12 z-20 shadow-lg" 
              />
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-purple-400/30 dark:bg-purple-500/30 backdrop-blur-md border border-white/40 dark:border-white/10 z-20 shadow-lg" 
              />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}