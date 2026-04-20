import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Cpu, Sparkles, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Imports
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";

// =====================================================================
// 3D SCENE COMPONENT (The "Forge" Core)
// =====================================================================
function Scene3D() {
  const coreRef = useRef(null);
  const wireRef = useRef(null);

  // Animate the rotation on every frame
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.2;
      coreRef.current.rotation.x = time * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -time * 0.15;
      wireRef.current.rotation.x = -time * 0.05;
    }
  });

  return (
    <>
      {/* Cinematic Lighting Matrix */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      
      {/* Electric Cobalt & Plasma Cyan Underglow */}
      <pointLight position={[-5, -5, -5]} intensity={50} color="#005AE2" distance={20} />
      <pointLight position={[5, -5, 5]} intensity={50} color="#00F0FF" distance={20} />

      {/* Terminal Dust/Data Particles */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />

      {/* The Core: Positioned dead center to interact with the floating text */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <group position={[0, 0, -2]}>
          
          {/* Solid Industrial Inner Core */}
          <mesh ref={coreRef} scale={1.8}>
            <icosahedronGeometry args={[1, 1]} />
            <MeshDistortMaterial 
              color="#0B0E14" 
              emissive="#05080f"
              envMapIntensity={1} 
              clearcoat={1} 
              clearcoatRoughness={0.1} 
              metalness={0.9} 
              roughness={0.2} 
              distort={0.4} 
              speed={2.5} 
            />
          </mesh>

          {/* High-Tech Blueprint Outer Shell */}
          <mesh ref={wireRef} scale={2.3}>
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial 
              color="#00F0FF" 
              wireframe 
              transparent 
              opacity={0.25} 
              emissive="#005AE2" 
              emissiveIntensity={2} 
            />
          </mesh>
          
        </group>
      </Float>
    </>
  );
}

// =====================================================================
// MAIN HERO COMPONENT
// =====================================================================
const slides = [
  { id: 1, tag: "The Architecture", title: "Built for Scale.", description: "Discover AI-optimized architectures engineered to protect your data, scale your systems, and dominate your market." },
  { id: 2, tag: "Enterprise Security", title: "Secure your Fleet.", description: "Military-grade security protocols and zero-downtime performance for the modern enterprise." },
  { id: 3, tag: "Performance UI/UX", title: "The Age of Conversion.", description: "Run larger models, process richer data, and get dependable workstation performance with our interfaces." },
  { id: 4, tag: "Digital Dominance", title: "The Next Era Starts Now.", description: "Faster rendering, smarter automation, and total efficiency in every single line of code." },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 🔥 Updated to exactly 3 seconds (3000ms)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Cinematic Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(12px)", scale: 0.95 },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: -40, opacity: 0, filter: "blur(12px)", scale: 1.05, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-[#02050A] pt-16 flex items-center justify-center group select-none">
      
      {/* 1. 3D BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <Scene3D />
        </Canvas>
        {/* Soft dark vignette to ensure text readability over the 3D core */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,5,10,0.4)_0%,_rgba(2,5,10,0.95)_100%)]" />
      </div>

      {/* 2. GIANT WATERMARK TEXT (Background Faint Text) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`watermark-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.02, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 3, ease: "linear" }}
            className="text-[20vw] font-black text-white whitespace-nowrap tracking-tighter"
          >
            {slides[currentSlide].title.split(' ')[0].toUpperCase()}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* 3. VERTICAL LEFT NAVIGATION (Animated 3-Second Fill) */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center justify-center w-6 h-16 cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Background Track */}
            <div className="absolute w-1 h-full bg-white/10 rounded-full overflow-hidden">
              {/* Animated Progress Fill (Exactly 3 seconds) */}
              {currentSlide === index && (
                <motion.div 
                  className="w-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}
              {/* Completed State */}
              {currentSlide > index && <div className="w-full h-full bg-white/40" />}
            </div>
          </button>
        ))}
      </div>

      {/* 4. CENTRAL FLOATING TEXT (Removed the Card, Fully Immersive) */}
      <div className="relative z-20 w-full max-w-[900px] px-4 md:px-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`content-${currentSlide}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center text-center"
          >
            
            {/* Eyebrow Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#005AE2]/10 border border-[#005AE2]/30 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(0,90,226,0.3)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-[0.2em]">
                {slides[currentSlide].tag}
              </span>
            </motion.div>
            
           <motion.h2
            variants={itemVariants}
            initial={{ color: "#ffffff" }}
            animate={{ color: "#60a5fa" }} // Tailwind blue-400
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            {slides[currentSlide].title}
          </motion.h2>

            {/* Description */}
          <motion.p 
            variants={itemVariants} 
             className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 
             leading-relaxed font-light drop-shadow-lg">
             {slides[currentSlide].description}
             </motion.p>

            {/* Glowing Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-[#02050A] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Initiate Project <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-md">
                <PlayCircle size={18} className="text-[#00F0FF] group-hover:scale-110 transition-transform" /> Watch Reel
              </Link>
            </motion.div>
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Nav Controls (Hover Reveal) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-between px-4 md:px-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full bg-[#02050A]/50 text-white hover:bg-[#005AE2] transition-all backdrop-blur-md border border-white/10 hover:scale-110">
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full bg-[#02050A]/50 text-white hover:bg-[#005AE2] transition-all backdrop-blur-md border border-white/10 hover:scale-110">
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Horizontal Progress (3 Seconds) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex md:hidden gap-3 pointer-events-auto">
        {slides.map((_, index) => (
          <div key={index} className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentSlide(index)}>
            {currentSlide === index && (
              <motion.div 
                className="h-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
                initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3, ease: "linear" }}
              />
            )}
            {currentSlide > index && <div className="w-full h-full bg-white/40" />}
          </div>
        ))}
      </div>
      
    </section>
  );
}