import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png'; 
import hero4 from '../assets/hero_4.png';

const slides = [
  { id: 1, image: hero1, service: "Graphics Designing", title: "Crafting Visual Impact" },
  { id: 2, image: hero2, service: "Web Development", title: "From Raw to Remarkable" },
  { id: 3, image: hero3, service: "Digital Marketing", title: "Bold & Eye-Catching" },
  { id: 4, image: hero4, service: "Video Editing", title: "Cut. Craft. Captivate." },
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

  // Subtle Mouse Parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.02;
    const moveY = (clientY - window.innerHeight / 2) * 0.02;
    setMousePosition({ x: moveX, y: moveY });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Staggered Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mt-16 md:mt-[72px] bg-slate-950 group perspective-1000"
    >
      {/* Animated Tech Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      {/* Background Image with Parallax */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content with Staggered Reveal */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-20 md:pt-32 lg:pt-24 px-6 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`text-${currentSlide}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center text-center max-w-5xl -translate-y-[2px]"
          >
            <motion.span variants={itemVariants} className="text-xl md:text-2xl font-black text-blue-500 tracking-[0.3em] uppercase drop-shadow-lg mb-4">
              {slides[currentSlide].service}
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e2e8f0] tracking-tight leading-[1.05] drop-shadow-2xl">
              {slides[currentSlide].title}
            </motion.h2>
            
            <motion.div variants={itemVariants} className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] w-32 opacity-80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Nav Controls */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 md:px-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-xl hover:scale-110 shadow-2xl">
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-blue-600 transition-all border border-white/10 backdrop-blur-xl hover:scale-110 shadow-2xl">
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Status Bars (Replaces dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 pointer-events-none">
        {slides.map((_, index) => (
          <div key={index} className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
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