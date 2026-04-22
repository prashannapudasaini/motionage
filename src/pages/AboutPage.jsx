import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Layers, Zap, Server } from 'lucide-react';
import Team from '../components/Team'; 

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <div className="w-full bg-white dark:bg-[#050814] selection:bg-blue-500/30 transition-colors duration-500">
      
      {/* Main Journey Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full animate-blob pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Content */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={springAnim}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[1px] w-8 bg-blue-600"></span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">The Vision</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 leading-[1.05] tracking-tighter">
                  Started in 2021. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">600+ Visions</span> Realized.
                </h1>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light max-w-lg">
                  Hello! I am <span className="text-slate-900 dark:text-white font-semibold">Mukesh Yadav</span>. I lead MotionAge with a commitment to merging technical precision with artistic soul.
                </p>
                
                <div className="flex gap-4 p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm max-w-lg">
                  <div className="bg-blue-600 p-2.5 rounded-xl text-white h-fit shadow-md shadow-blue-500/20 shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">High-Impact Visual Stories</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                      We specialize in turning complex ideas into visual realities using time-tested design principles and modern trends.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Evolution Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2, ...springAnim }}
              className="rounded-[1.5rem] p-6 md:p-8 bg-white/80 dark:bg-[#0c1222]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
                <Trophy className="text-blue-600 dark:text-blue-400" size={20}/> Evolution
              </h3>
              
              <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-slate-300 dark:before:via-slate-700/50 before:to-transparent">
                {[
                  { year: "2026", text: "Global operations; 600+ projects completed." },
                  { year: "2025", text: "Scaled the high-fidelity motion team." },
                  { year: "2024", text: "Established 50+ corporate partnerships." },
                  { year: "2021", text: "MotionAge founded in the digital shift." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-start group">
                    <div className="absolute left-0 w-6 h-6 rounded-full border-[3px] border-white dark:border-[#0c1222] bg-blue-600 shadow-sm z-20 transition-transform group-hover:scale-110"></div>
                    <div className="ml-10 md:ml-12 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm transition-colors group-hover:border-blue-500/50 w-full">
                      <div className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-1 leading-none tracking-tight">{item.year}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY SECTION (Replaces Statistics) */}
      <section className="relative py-16 md:py-24 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#070b17] transition-colors duration-500 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.03)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">
              Engineering Philosophy
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
              How we build.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                title: "Systems Over Features",
                desc: "We don't build isolated features. We engineer cohesive ecosystems where every component communicates seamlessly, creating a robust, unbreakable foundation.",
                icon: <Layers size={20} strokeWidth={2} />
              },
              {
                title: "Performance as a Baseline",
                desc: "Speed is a feature. We write optimized, hardware-accelerated code and leverage edge networks to ensure sub-second response times globally.",
                icon: <Zap size={20} strokeWidth={2} />
              },
              {
                title: "Design with Intent",
                desc: "Every pixel, animation, and interaction serves a calculated purpose. We eliminate friction and cognitive load, focusing purely on high-end user experience.",
                icon: <Target size={20} strokeWidth={2} />
              },
              {
                title: "Scalable by Default",
                desc: "Architected for day one and day one thousand. We utilize modular, cloud-native paradigms so your digital infrastructure grows effortlessly with your business.",
                icon: <Server size={20} strokeWidth={2} />
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#050814] transition-colors duration-500">
        <Team />
      </section>

    </div>
  );
}