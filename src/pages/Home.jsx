import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, CheckCircle2, Globe, Users, Trophy, Search, PenTool, Rocket, Layers, Zap, Heart, MonitorPlay, ShieldCheck, Cpu, BarChart3, Building2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

import Hero from '../components/Hero';
import ClickParticles from '../components/ClickParticles'; 
import itImage from '../assets/hero_it.jpeg'; 

// =====================================================================
// ADVANCED CORE COMPONENTS
// =====================================================================

const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); 
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: springX, y: springY }} className="inline-block">
      <Link to={onClick} className={className}>{children}</Link>
    </motion.div>
  );
};

const TiltGlowCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className={`relative group rounded-[2rem] overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] will-change-transform ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.12), transparent 40%)` }} />
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

const TextReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100, delay: i * 0.04 } } }} className="inline-block will-change-transform">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const easeOutExpo = 1 - Math.pow(1 - progress, 5); 
        setCount(Math.floor(easeOutExpo * (to - from) + from));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref} className="font-variant-numeric: tabular-nums">{count}{suffix}</span>;
};

// =====================================================================
// MAIN HOME COMPONENT
// =====================================================================
export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: Code, title: "Enterprise Software", desc: "Building secure, scalable, and complex system architectures tailored for enterprise operational efficiency." },
    { icon: Smartphone, title: "Mobile Ecosystems", desc: "Cross-platform engineering delivering fluid, native-feeling experiences that retain users." },
    { icon: Palette, title: "UI/UX Engineering", desc: "Data-driven interface design focused on reducing cognitive load and maximizing conversion." },
    { icon: Megaphone, title: "Growth Marketing", desc: "Algorithmic campaign scaling across Meta, Google, and programmatic networks to drive ROI." },
    { icon: PenTool, title: "Brand Identity", desc: "Crafting iconic visual languages, typography, and design systems that command market authority." },
    { icon: MonitorPlay, title: "Cinematic Video", desc: "High-retention motion graphics and production that turn passive viewers into brand advocates." }
  ];

  const stats = [
    { icon: Trophy, value: 600, suffix: "+", label: "Global Deployments" },
    { icon: Users, value: 500, suffix: "+", label: "Enterprise Partners" },
    { icon: Globe, value: 15, suffix: "+", label: "Countries Served" },
    { icon: ShieldCheck, value: 99, suffix: "%", label: "Retention Rate" }
  ];

  const processSteps = [
    { icon: Search, title: "Architecture & Discovery", desc: "Mapping business logic to scalable technical requirements." },
    { icon: Cpu, title: "Agile Engineering", desc: "Sprint-based development with continuous CI/CD integration." },
    { icon: Rocket, title: "Deployment & Scaling", desc: "Cloud deployment, load balancing, and market launch." }
  ];

  const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Figma", "Premiere", "After Effects", "PostgreSQL", "GraphQL"];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#0a0f1c] selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-200 font-sans overflow-x-hidden">
      <ClickParticles />
      <Hero />
      
      {/* 1. INFINITE TRUST MARQUEE */}
      <section className="py-8 border-b border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-950/50 flex overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0a0f1c] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0a0f1c] to-transparent z-10"></div>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Trusted by Global Innovators</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Enterprise Security Standard</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Agile Development</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      
      {/* 3. VISUAL IMPACT BY DESIGN (Liquid Section) */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0a0f1c] flex items-center border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20 transition-colors duration-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                Creative Design Agency
              </div>
              
              <TextReveal text="Visual Impact By Design." className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight" />
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                We help clients elevate their visual presence through time-tested design principles and modern digital trends.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
                <MagneticButton onClick="/contact" className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center gap-2">
                  Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }} 
              className="relative hidden lg:flex justify-center items-center h-[500px]"
            >
              <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-purple-400/40 to-blue-400/40 dark:from-purple-600/40 dark:to-blue-600/40 blur-3xl animate-blob" />

              <div className="relative w-[400px] h-[400px] animate-liquid shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden border border-white/40 dark:border-white/20 flex items-center justify-center z-10 bg-slate-900">
                <img 
                  src={itImage} 
                  alt="IT Technology Solutions" 
                  className="w-full h-full object-cover relative z-10" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
              </div>

              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 backdrop-blur-lg rounded-2xl border border-white/40 dark:border-white/10 rotate-12 z-20 shadow-lg" />
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-purple-400/30 dark:bg-purple-500/30 backdrop-blur-md border border-white/40 dark:border-white/10 z-20 shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* 2. CORPORATE PROFILE (Pioneering the Digital Frontier) */}
      <section className="py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0f1c] relative z-10 border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: "40px" }} transition={{ duration: 0.8 }} className="h-[2px] bg-blue-600 mb-6" />
              <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Corporate Profile</h4>
              <TextReveal text="Pioneering the Digital Frontier." className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }} 
              className="w-full lg:w-1/2"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
                MotionAge is a premier technology and creative design firm based in Kathmandu, Nepal. We were founded on a singular vision: to bridge the gap between heavy enterprise software engineering and award-winning visual identity.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-10">
                In today's ecosystem, a product must function flawlessly and look exceptional. Whether architecting cloud-based SaaS platforms, engineering cross-platform mobile ecosystems, or directing cinematic brand campaigns, we act as the dedicated technology partner for brands looking to dominate their market.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><Building2 size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Headquarters</h5>
                    <p className="text-sm text-slate-500">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><Globe size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Global Reach</h5>
                    <p className="text-sm text-slate-500">Clients in 15+ Countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. THE MOTIONAGE DIFFERENCE (Why Partner With Us) */}
      <section className="py-24 lg:py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative z-10">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Why Partner With Us</h4>
            <TextReveal text="Engineering Digital Dominance." className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight" />
            
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light">
              Our unique approach combines rigorous technical protocols with elite creative design. This dual-threat capability ensures your digital assets don't just work—they convert and scale exponentially.
            </motion.p>

            <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, staggerChildren: 0.1 }} className="space-y-5 mb-12">
              {[
                { title: 'Zero-Downtime Infrastructure', icon: Layers },
                { title: 'Data-Driven Conversion Optimization', icon: BarChart3 },
                { title: 'Military-Grade Web Security', icon: ShieldCheck }
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 text-slate-800 dark:text-slate-200 font-semibold text-lg">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  {item.title}
                </motion.li>
              ))}
            </motion.ul>

            <MagneticButton onClick="/about" className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm hover:shadow-2xl transition-all duration-300">
              Explore Our Architecture <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>

          <div className="lg:col-span-6 relative h-[600px] hidden md:block perspective-1000">
            <motion.div style={{ y: yParallax }} className="absolute top-0 right-0 w-3/4 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 z-10">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover scale-110" />
            </motion.div>
            <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-0 left-0 w-2/3 h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 z-20 backdrop-blur-xl bg-white/10">
               <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" alt="Code" className="w-full h-full object-cover opacity-90 mix-blend-luminosity dark:mix-blend-normal" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES (3D Tilt Cards) */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/20 -skew-y-2 transform origin-top-left z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Capabilities</h4>
            <TextReveal text="End-to-End Technical Solutions" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <TiltGlowCard>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8 flex-grow">{service.desc}</p>
                  <Link to="/services" className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors w-max overflow-hidden">
                    <span className="relative">Explore Specs
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </TiltGlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE METRICS */}
      <section className="py-24 bg-[#050814] relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="text-center group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AGILE WORKFLOW */}
      <section className="py-24 lg:py-32 bg-white dark:bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Methodology</h4>
            <TextReveal text="The MotionAge Framework" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0">
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 origin-left" 
              />
            </div>
            
            {processSteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-[#0a0f1c] shadow-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 relative">
                  <step.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECH STACK MARQUEE */}
      <section className="py-24 border-y border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/3">
              <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Tech Stack</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.1] mb-5">
                Modern Infrastructure
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-light text-lg">
                We deploy robust stacks to ensure your products are fast, highly secure, and infinitely scalable.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {techStack.map((tech, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-6 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm text-slate-800 dark:text-slate-200 text-sm font-semibold tracking-wide cursor-crosshair transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ENTERPRISE CTA */}
      <section className="relative py-32 px-4 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700/30 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <TextReveal text="Ready to dominate your digital landscape?" className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
            Partner with MotionAge to architect, scale, and innovate.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <MagneticButton onClick="/contact" className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-slate-950 font-black text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">Initiate Project</span> 
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

    </div>
  );
}