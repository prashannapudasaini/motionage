import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  { id: 1, service: "Graphic Design", title: "Visual Impact By Design" },
  { id: 2, service: "Web Development", title: "Engineering Digital Dominance" },
  { id: 3, service: "Digital Marketing", title: "Strategic Growth & Acquisition" },
  { id: 4, service: "Video Production", title: "Cinematic Brand Storytelling" },
];

export default function Hero4SidedPillar() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // CRITICAL FIX 1: "end end" ensures the progress hits 1.0 EXACTLY when the sticky unpins
    offset: ["start start", "end end"] 
  });

  // CRITICAL FIX 2: Stop at -270 degrees to land on the 4th slide (Video Production).
  // I added slight pauses (the duplicated numbers) so the text is readable between spins.
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.20, 0.30, 0.50, 0.60, 0.80, 1],
    [0, 0,    -90,  -90,  -180, -180, -270]
  );

  // Subtle squash effect synced exactly to the rotation timeline above
  const scale = useTransform(
    scrollYProgress,
    [0, 0.20, 0.25, 0.30, 0.50, 0.55, 0.60, 0.80, 0.90, 1],
    [1, 1,    0.85, 1,    1,    0.85, 1,    1,    0.85, 1]
  );

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const faceClasses =
    "absolute top-0 left-0 w-[400px] h-[550px] flex flex-col justify-between p-10 border border-[#00AEEF]/40 overflow-hidden backdrop-blur-xl shadow-[inset_0_0_50px_rgba(0,104,181,0.3)] bg-gradient-to-br from-[#001D3D]/95 to-[#000811]/95";

  return (
    <section className="relative bg-[#000F1D] font-sans">
      
      {/* SCROLL CONTAINER */}
      <div ref={containerRef} className="relative h-[300vh]">
        
        {/* STICKY HERO */}
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
          style={{ perspective: "2000px" }}
        >

          {/* Background */}
          <div
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #0068B5 1px, transparent 1px), linear-gradient(to bottom, #0068B5 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,_#0068B5_0%,_transparent_70%)] opacity-20 pointer-events-none" />

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: indicatorOpacity }}
            className="absolute top-24 z-50 text-[#00AEEF] text-xs font-semibold tracking-[0.2em] uppercase animate-pulse flex flex-col items-center gap-3"
          >
            Scroll to Unlock
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#00AEEF] to-transparent" />
          </motion.div>

          {/* 3D Pillar */}
          <motion.div
            style={{
              rotateX: -5,
              rotateY,
              scale,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[400px] h-[550px] z-10"
          >
            {/* Top */}
            <div
              className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004A86]/80 border border-[#00AEEF]/40 backdrop-blur-md"
              style={{
                transform: "rotateX(90deg) translateZ(200px) translateY(-200px)",
              }}
            />

            {/* Bottom */}
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#000811]/90 border border-[#00AEEF]/20"
              style={{
                transform: "rotateX(-90deg) translateZ(350px) translateY(200px)",
              }}
            />

            {/* Faces */}
            {slides.map((slide, index) => {
              const angle = index * 90;

              return (
                <div
                  key={slide.id}
                  className={faceClasses}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(200px)`,
                  }}
                >
                  {/* Decorative dots */}
                  <div className="absolute top-8 right-8 grid grid-cols-3 gap-1.5 opacity-50">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-[#00AEEF]" />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <span className="inline-block bg-[#0068B5]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-6">
                      {slide.service}
                    </span>

                    <h1 className="text-4xl font-light text-white tracking-tight leading-[1.1] mb-6 pr-4">
                      {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                      <span className="font-bold">
                        {slide.title.split(" ").slice(2).join(" ")}
                        <span className="text-[#00AEEF]">.</span>
                      </span>
                    </h1>

                    <div className="h-1 w-12 bg-[#00AEEF]" />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 pointer-events-auto">
                    <Link
                      to="/contact"
                      className="group flex items-center justify-between px-6 py-4 bg-[#0068B5] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#00AEEF] transition-all shadow-[0_0_20px_rgba(0,104,181,0.3)]"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>

                    <Link
                      to="/portfolio"
                      className="group flex items-center gap-3 px-6 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-white hover:bg-white/5 transition-colors"
                    >
                      <PlayCircle
                        size={16}
                        className="text-[#00AEEF] group-hover:text-white transition-colors"
                      />
                      <span>View Portfolio</span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Glow */}
            <div
              className="absolute inset-0 bg-[#00AEEF]/20 blur-3xl"
              style={{ transform: "translateZ(0px)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}