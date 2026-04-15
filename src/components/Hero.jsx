import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your slider images
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png'; 
import hero4 from '../assets/hero_4.png';

const slides = [
  { id: 1, image: hero1, service: "Graphic Design", title: "Visual Impact By Design" },
  { id: 2, image: hero2, service: "Web Development", title: "Engineering Digital Dominance" },
  { id: 3, image: hero3, service: "Digital Marketing", title: "Strategic Growth & Acquisition" },
  { id: 4, image: hero4, service: "Video Production", title: "Cinematic Brand Storytelling" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.015;
    const moveY = (clientY - window.innerHeight / 2) * 0.015;
    setMousePosition({ x: moveX, y: moveY });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-[#050814] pt-20 perspective-1000 flex items-center justify-center group"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: 1.05,
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/90 via-[#050814]/50 to-[#050814]/90 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* Abstract Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob animation-delay-2000" />

      {/* Slide Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`text-${currentSlide}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center"
          >
            {/* Service / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6 shadow-2xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400">
                {slides[currentSlide].service}
              </span>
            </motion.div>
            
            {/* Main Headline - Changed to #cad1d9 to match your requirement */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#cad1d9] tracking-tight leading-[1.05] drop-shadow-2xl mb-8 max-w-4xl mx-auto">
              {slides[currentSlide].title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
            </motion.h1>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 pointer-events-auto">
              <Link to="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 w-full sm:w-auto justify-center rounded-full bg-blue-600 text-white font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get a Quote</span> 
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/portfolio" className="group inline-flex items-center gap-3 px-8 py-4 w-full sm:w-auto justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                <PlayCircle size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Nav Controls */}
      <div className="absolute inset-0 z-30 hidden md:flex items-center justify-between px-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-xl hover:scale-110 shadow-2xl">
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-xl hover:scale-110 shadow-2xl">
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 md:gap-4 pointer-events-none">
        {slides.map((_, index) => (
          <div key={index} className="w-12 md:w-16 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: currentSlide === index ? "100%" : currentSlide > index ? "100%" : "0%" }}
              transition={{ duration: currentSlide === index ? 5 : 0.3, ease: "linear" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}