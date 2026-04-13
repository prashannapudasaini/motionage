import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Users, Briefcase, Award, CheckCircle } from 'lucide-react';
import Team from '../components/Team'; 

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  // Statistics data starting from zero (will animate to target)
  const stats = [
    { 
      icon: <CheckCircle size={24} />, 
      target: 600, 
      suffix: "+", 
      label: "Projects Completed",
      color: "blue"
    },
    { 
      icon: <Briefcase size={24} />, 
      target: 50, 
      suffix: "+", 
      label: "Corporate Partners",
      color: "purple"
    },
    { 
      icon: <Users size={24} />, 
      target: 15, 
      suffix: "+", 
      label: "Team Members",
      color: "emerald"
    },
    { 
      icon: <Award size={24} />, 
      target: 12, 
      suffix: "+", 
      label: "Global Awards",
      color: "amber"
    }
  ];

  // Counter animation component
  const Counter = ({ from, to, suffix, duration = 2000 }) => {
    const [count, setCount] = React.useState(from);
    
    React.useEffect(() => {
      let startTime;
      let animationFrame;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (to - from) + from);
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration]);
    
    return (
      <span className="text-3xl md:text-4xl font-black tracking-tight">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="w-full bg-white dark:bg-slate-950">
      {/* Main Journey Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full animate-blob pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Content */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={springAnim}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-12 bg-blue-600"></span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">The Vision</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                  Started in 2021. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">600+ Visions</span> Realized.
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                  Hello! I am <span className="text-slate-900 dark:text-white font-semibold">Mukesh Yadav</span>. I lead MotionAge with a commitment to merging technical precision with artistic soul.
                </p>
                
                <div className="flex gap-5 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-blue-600 p-3 rounded-2xl text-white h-fit shadow-lg shadow-blue-500/20 shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">High-Impact Visual Stories</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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
              className="rounded-3xl p-6 md:p-8 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg"
            >
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Trophy className="text-blue-600 dark:text-blue-400" size={24}/> Evolution
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                {[
                  { year: "2026", text: "Global operations; 600+ projects completed." },
                  { year: "2025", text: "Scaled the high-fidelity motion team." },
                  { year: "2024", text: "Established 50+ corporate partnerships." },
                  { year: "2021", text: "MotionAge founded in the digital shift." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-start group">
                    <div className="absolute left-0 w-6 h-6 rounded-full border-[3px] border-white dark:border-slate-900 bg-blue-600 shadow-md z-20 transition-transform group-hover:scale-110"></div>
                    <div className="ml-12 p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/80 shadow-sm transition-colors group-hover:border-blue-500/30 w-full">
                      <div className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1 leading-none">{item.year}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-base font-medium">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FULL WIDTH STATISTICS SECTION */}
      <section className="relative py-8 border-y border-slate-100 dark:border-slate-800 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/20 dark:via-slate-950 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...springAnim }}
          >
            <div className="flex flex-wrap justify-between items-center gap-6">
              {stats.map((stat, idx) => {
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
                  purple: "from-purple-500 to-purple-600 shadow-purple-500/20",
                  emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
                  amber: "from-amber-500 to-amber-600 shadow-amber-500/20"
                };
                
                return (
                  <div key={idx} className="flex-1 text-center group min-w-[160px]">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color]} text-white shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-slate-900 dark:text-white font-bold">
                      <Counter from={0} to={stat.target} suffix={stat.suffix} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION - Reduced spacing significantly */}
      <section className="py-12 bg-slate-50 dark:bg-slate-950/50">
        <Team />
      </section>

    </div>
  );
}