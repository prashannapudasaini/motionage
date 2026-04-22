import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Eye, ArrowUpRight, Globe, Palette, Layers, PlayCircle, Video } from 'lucide-react';
import SEO from '../components/SEO';

// Import your local assets
import logo1 from '../assets/logo1.png'; // Process
import logo2 from '../assets/logo2.png'; // Mockup
import logo3 from '../assets/logo3.png'; // Final Logo
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import graphic3 from '../assets/graphic3.png';
import graphic4 from '../assets/graphic4.png';

// GPU-Safe Fade Up Animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function PortfolioPage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Defer rendering of heavy images to prevent scroll freeze
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Web Architecture Reference Links
  const webProjects = [
    { title: "Enterprise FinTech Dashboard", url: "https://example.com/fintech", tech: ["Next.js", "Tailwind", "AWS"] },
    { title: "Global E-Commerce Platform", url: "https://example.com/ecommerce", tech: ["React", "Shopify Plus", "Node.js"] },
    { title: "Healthcare SaaS Portal", url: "https://example.com/health", tech: ["Vue.js", "PostgreSQL", "Docker"] }
  ];

  const graphicImages = [graphic1, graphic2, graphic3, graphic4];

  // Video Production Project Links/Thumbnails
  const videoProjects = [
    { title: "Corporate Anthem 2024", category: "Cinematic Brand Film", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80" },
    { title: "Product Launch: Neo", category: "3D Motion Graphics", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
    { title: "TechNova Case Study", category: "Documentary Short", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] selection:bg-blue-500/30 font-sans transition-colors duration-500">
      <SEO title="Portfolio | MotionAge" description="Explore our global deployments, brand identities, digital creatives, and cinematic video productions." />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></span>
              Global Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Excellence.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              A curated collection of scalable web architectures, meticulous brand identities, high-conversion digital creatives, and cinematic films.
            </p>
          </motion.div>
        </div>
      </section>

      {isReady && (
        <div className="relative z-10">
          
          {/* 2. WEB DEVELOPMENT & ARCHITECTURE */}
          <section className="pt-16 pb-20 md:pt-20 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="lg:w-1/3 lg:sticky lg:top-28">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-4">
                  Digital <br /> Architecture.
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                  We engineer blazing-fast, secure, and infinitely scalable web platforms. Below are live references of our enterprise-grade deployments.
                </p>
              </motion.div>

              <div className="lg:w-2/3 flex flex-col gap-5">
                {webProjects.map((project, idx) => (
                  <motion.a 
                    key={idx} 
                    href={project.url}
                    target="_blank"
                    rel="norenoopener noreferrer"
                    initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                    className="group block p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/5 rounded-md text-[9px] md:text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* 3. BRAND IDENTITY & LOGOS */}
          <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="max-w-2xl mb-12 md:mb-16">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <Palette size={20} strokeWidth={2} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-4">
                  Brand Identity Systems.
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  A logo is not just a mark; it is the visual anchor of your corporate identity. We approach branding through a rigorous process of market research, geometric drafting, and real-world mockup testing to ensure your brand commands absolute authority.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. The Process */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="md:col-span-2 flex flex-col group rounded-[1.5rem] overflow-hidden bg-slate-50 dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 md:h-80 w-full overflow-hidden relative bg-white dark:bg-slate-900">
                    <img src={logo1} alt="Logo Design Process" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800/50">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-2">Phase 01</span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Geometric Drafting & Process</h3>
                  </div>
                </motion.div>

                {/* 2. The Mockup */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: 0.1 }} className="md:col-span-1 flex flex-col group rounded-[1.5rem] overflow-hidden bg-slate-50 dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 md:h-80 w-full overflow-hidden relative bg-white dark:bg-slate-900">
                    <img src={logo2} alt="Logo Mockup Application" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800/50">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-2">Phase 02</span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Real-World Mockups</h3>
                  </div>
                </motion.div>

                {/* 3. The Final */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="md:col-span-3 flex flex-col group rounded-[1.5rem] overflow-hidden bg-slate-50 dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="h-72 md:h-[400px] w-full overflow-hidden relative bg-white dark:bg-slate-900">
                    <img src={logo3} alt="Final Logo Varieties" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800/50">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-2">Phase 03</span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Complete Identity System</h3>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* 4. DIGITAL & MARKETING CREATIVES */}
          <section className="py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <Layers size={20} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-4">
                Digital & Marketing Creatives.
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Thumb-stopping visuals engineered for the algorithmic feed. We blend high-end graphic design with data-driven layouts to maximize click-through rates and digital engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[250px] md:auto-rows-[350px]">
              {graphicImages.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                  className="relative group rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-800/80 transition-shadow duration-300"
                >
                  <img src={img} alt={`Graphic Creative ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover object-center opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5. VIDEO PRODUCTION & MOTION GRAPHICS (NEW SECTION) */}
          <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="max-w-2xl mb-12 md:mb-16">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <Video size={20} strokeWidth={2} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-4">
                  Motion & Video Production.
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  High-impact visual storytelling. From cinematic brand films to kinetic typography and 3D motion design, we produce videos that capture attention and drive narrative.
                </p>
              </motion.div>

              {/* Cinematic Bento Box Video Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-[250px] md:auto-rows-[300px]">
                {videoProjects.map((vid, idx) => (
                  <motion.div 
                    key={idx} 
                    initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                    className={`relative group rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-800/80 transition-shadow duration-300 cursor-pointer ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1'}`}
                  >
                    <img src={vid.image} alt={vid.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 will-change-transform transform-gpu" />
                    
                    {/* Cinematic Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/20 to-transparent pointer-events-none"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                        <PlayCircle size={28} strokeWidth={1.5} className="ml-1" />
                      </div>
                    </div>

                    {/* Text Container */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pr-6 pointer-events-none">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
                        {vid.category}
                      </span>
                      <h3 className={`font-black text-white tracking-tighter ${idx === 0 ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                        {vid.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. PDF PROFILE CTA */}
          <section className="py-20 md:py-24 bg-white dark:bg-[#0c1222] border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(37,99,235,0.05)_0%,_transparent_60%)] pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
                  Dive deeper into our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Ecosystem.</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
                  Want to see the full scope of our capabilities? View our complete corporate profile online or download the PDF for your records.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* View PDF Button */}
                  <a 
                    href="/motionage.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
                  >
                    <Eye size={16} className="text-blue-400 dark:text-blue-600" />
                    <span>View Profile</span>
                    <ArrowUpRight size={14} className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Download PDF Button */}
                  <a 
                    href="/motionage.pdf" 
                    download
                    className="group flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-full bg-transparent border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <Download size={16} className="text-slate-500 dark:text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}