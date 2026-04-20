import React, { useEffect, useRef, useState, memo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, Globe, Users, Trophy, Search, PenTool, Rocket, Layers, ShieldCheck, Cpu, BarChart3, Building2, MonitorPlay, ExternalLink, Star, Check, Plus, Minus, Quote, Server, Lock, Zap } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ClickParticles from '../components/ClickParticles'; 
import itImage from '../assets/hero_it.jpeg'; 
import hero_1 from "../assets/hero_1.png";
import hero_2 from "../assets/hero_2.png"; 

// Import Client Logos
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';
import logo7 from '../assets/7.png';
import logo8 from '../assets/8.png';
import logo9 from '../assets/9.png';
import logo10 from '../assets/10.png';
import logo11 from '../assets/11.png';

// =====================================================================
// 1. OPTIMIZED CORE COMPONENTS 
// =====================================================================

const MagneticButton = memo(({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      if (!ref.current) return;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      x.set((e.clientX - (left + width / 2)) * 0.2); 
      y.set((e.clientY - (top + height / 2)) * 0.2);
    });
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: springX, y: springY }} className="inline-block w-full sm:w-auto relative z-10 will-change-transform transform-gpu">
      <Link to={onClick} className={className}>{children}</Link>
    </motion.div>
  );
});

const TiltGlowCard = memo(({ children, className }) => {
  const ref = useRef(null);
  const rafId = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
      ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  };

  const handleMouseLeave = () => { 
    if (rafId.current) cancelAnimationFrame(rafId.current);
    x.set(0); y.set(0); 
  };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className={`relative group rounded-[2rem] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] will-change-transform transform-gpu ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 40%)` }} />
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
});

const AnimatedCounter = memo(({ from = 0, to, suffix = "", duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // Delay trigger until 50% visible
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor((1 - Math.pow(1 - progress, 5)) * (to - from) + from));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref} className="font-variant-numeric tracking-tighter">{count}{suffix}</span>;
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 }, // No blur filter to save GPU
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const ScrubWord = ({ word, index, totalWords, scrollYProgress }) => {
  const start = index / totalWords;
  const end = start + (1 / totalWords);
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const isAccent = word.includes("600+") || word.includes("Visions");

  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] will-change-[opacity] ${isAccent ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500" : "text-slate-900 dark:text-white"}`}>
      {word}
    </motion.span>
  );
};

const ScrollScrubText = ({ text, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <ScrubWord key={i} word={word} index={i} totalWords={words.length} scrollYProgress={scrollYProgress} />
      ))}
    </p>
  );
};

// =====================================================================
// MAIN HOME COMPONENT
// =====================================================================
export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [activeFaq, setActiveFaq] = useState(null);
  
  // 🚨 PERFORMANCE FIX: Defer heavy rendering
  const [isReady, setIsReady] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    // Give the main thread 400ms to paint the Hero before loading the rest of the DOM
    const timer = setTimeout(() => setIsReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

  const services = [
    { icon: Code, title: "Software Development", desc: "Empowering businesses through innovative, secure, and scalable custom software architectures." },
    { icon: Smartphone, title: "Mobile Ecosystems", desc: "From native to cross-platform: we build world-class apps combining speed and seamless integration." },
    { icon: Palette, title: "Web Design & UX", desc: "We build websites with heart and purpose. Beautiful, simple, and human-centric experiences." },
    { icon: Megaphone, title: "Growth Marketing", desc: "Crafting marketing that feels human, builds trust, and creates meaningful connections that last." },
    { icon: PenTool, title: "Graphic Design", desc: "Visually striking branding, marketing materials, and digital assets that captivate your audience." },
    { icon: MonitorPlay, title: "Video Production", desc: "High-impact video editing and motion graphics that tell your brand's unique story compellingly." }
  ];

  const stats = [
    { icon: Trophy, value: 1000, suffix: "+", label: "Enterprise Deployments" },
    { icon: Users, value: 500, suffix: "+", label: "Global Partners" },
    { icon: Globe, value: 15, suffix: "+", label: "Countries Served" },
    { icon: ShieldCheck, value: 5, suffix: "+", label: "Years of Excellence" }
  ];

  const processSteps = [
    { num: "01", icon: Search, title: "Architecture & Discovery", desc: "Mapping business logic to scalable technical requirements." },
    { num: "02", icon: Cpu, title: "Agile Engineering", desc: "Sprint-based development with continuous CI/CD integration." },
    { num: "03", icon: Rocket, title: "Deployment & Scaling", desc: "Cloud deployment, load balancing, and market launch." }
  ];

  const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Figma", "Premiere", "After Effects", "PostgreSQL", "GraphQL"];

  const faqs = [
    { q: "What is your typical project timeline?", a: "Timelines vary depending on scope. A full corporate website takes 4-6 weeks, while complex web applications or mobile apps typically take 8-12 weeks from discovery to deployment." },
    { q: "Do you provide post-launch support?", a: "Absolutely. We offer comprehensive maintenance packages including zero-downtime hosting, security patching, and iterative feature scaling." },
    { q: "What tech stacks do you specialize in?", a: "Our core stack relies on modern, highly performant technologies: React/Next.js for the frontend, Node.js/Python for microservices, and AWS for cloud infrastructure." },
  ];

  const projects = [
    {
      title: "Visual Identity Craft",
      category: "Brand Visual Identity System",
      impact: "Developed a cohesive visual language that enhances brand recognition.",
      tech: ["Adobe Suite", "Figma", "Visual Storytelling"],
      image: hero_1
    },
    {
      title: "Digital Experience Engineering",
      category: "Full-Stack Web Architecture",
      impact: "Built a fast, scalable, and interactive web platform.",
      tech: ["Next.js", "Node.js", "Cloud Architecture"],
      image: hero_2
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 font-sans transition-colors duration-500">
      <SEO title="Home | MotionAge IT Solutions" description="Premium IT solutions, web development, and digital marketing from MotionAge." />
      
      {/* Load Hero immediately */}
      <Hero />

      {/* 1. TRUST MARQUEE (Loads instantly) */}
      <section className="py-8 md:py-10 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-[#080c17] flex overflow-hidden relative select-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-[#080c17] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-[#080c17] to-transparent z-10 pointer-events-none"></div>
        
        <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-20 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Trusted By</span>
        </div>

        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex whitespace-nowrap gap-16 md:gap-24 items-center px-4 pl-40 md:pl-64 will-change-transform transform-gpu">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {clientLogos.map((logo, j) => (
                <img key={j} src={logo} alt="Client" loading="lazy" decoding="async" className="h-10 md:h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 pointer-events-none" />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* 🚨 PERFORMANCE FIX: Wrap everything else in a deferral condition */}
      {isReady && (
        <>
          {/* 2. CORPORATE PROFILE */}
          <section className="py-24 md:py-32 bg-white dark:bg-[#0a0f1c] relative z-10 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/4">
                <motion.div initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: "40px" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="h-[2px] bg-blue-600 mb-6 mx-auto md:mx-0" />
                <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Corporate Profile</h4>
              </div>
              <div className="md:w-3/4">
                <ScrollScrubText 
                  text="Started in 2021. 600+ Visions Realized. MotionAge is a premier technology firm bridging the gap between heavy enterprise software and award-winning visual identity." 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 mt-12 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Building2 size={20} /></div>
                    <div className="text-left">
                      <h5 className="font-bold text-slate-900 dark:text-slate-100">Headquarters</h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Globe size={20} /></div>
                    <div className="text-left">
                      <h5 className="font-bold text-slate-900 dark:text-slate-100">Global Reach</h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Clients in 15+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. VISUAL IMPACT BY DESIGN */}
          <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#050814] flex items-center border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
            {/* GPU Safe Gradient Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.08)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(30,58,138,0.15)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center lg:text-left order-2 lg:order-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 shadow-sm">
                    Creative Design Agency
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 mb-6 leading-[1.1] tracking-tight">
                    Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Impact</span> <br/> By Design.
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                    We help clients elevate their visual presence through time-tested design principles and modern digital trends.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
                    <MagneticButton onClick="/contact" className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 w-full sm:w-auto transition-transform hover:bg-blue-700">
                      Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </div>
                </motion.div>

                {/* GPU Safe Liquid Animation */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex justify-center items-center h-[350px] md:h-[500px] order-1 lg:order-2 will-change-transform transform-gpu">
                  <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.2)_0%,_transparent_70%)] animate-blob pointer-events-none" />
                  <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-liquid overflow-hidden border border-slate-200 dark:border-white/10 flex items-center justify-center z-10 bg-slate-900">
                    <img src={itImage} alt="IT Technology Solutions" loading="lazy" decoding="async" className="w-full h-full object-cover relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* 4. THE MOTIONAGE DIFFERENCE */}
          <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="lg:col-span-6 relative z-10">
                <motion.h4 variants={fadeUp} className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 text-center lg:text-left">The Difference</motion.h4>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-[1.05] mb-6 tracking-tighter text-center lg:text-left">
                  Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Digital Dominance.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light text-center lg:text-left">
                  Our unique approach combines rigorous technical protocols with elite creative design. This dual-threat capability ensures your digital assets don't just work—they convert and scale exponentially.
                </motion.p>

                <motion.ul variants={fadeUp} className="space-y-5 mb-12">
                  {[
                    { title: 'Zero-Downtime Infrastructure', icon: Layers },
                    { title: 'Data-Driven Conversion Optimization', icon: BarChart3 },
                    { title: 'Military-Grade Web Security', icon: ShieldCheck }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-slate-800 dark:text-slate-200 font-semibold text-lg">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <item.icon size={20} strokeWidth={2.5} />
                      </div>
                      {item.title}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              <div className="lg:col-span-6 relative h-[500px] md:h-[600px] hidden lg:block perspective-1000">
                <motion.div style={{ y: yParallax }} className="absolute top-0 right-0 w-3/4 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-10 will-change-transform transform-gpu">
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" loading="lazy" decoding="async" alt="Team" className="w-full h-full object-cover scale-110" />
                </motion.div>
                <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-0 left-0 w-2/3 h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-20 bg-white dark:bg-slate-900 will-change-transform transform-gpu">
                   <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" loading="lazy" decoding="async" alt="Code" className="w-full h-full object-cover opacity-90" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* 5. CORE SERVICES */}
          <section className="py-24 md:py-32 relative bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
                <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Capabilities</h4>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tighter">
                  End-to-End <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Technical Solutions.</span>
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1, duration: 0.5 }}>
                    <TiltGlowCard>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <service.icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8 flex-grow">{service.desc}</p>
                    </TiltGlowCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. PERFORMANCE METRICS */}
          <section className="py-24 md:py-32 bg-slate-900 dark:bg-[#050814] relative overflow-hidden border-b border-slate-800 dark:border-white/5 transition-colors duration-500">
            {/* GPU Safe Radial background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-800/50">
                {stats.map((stat, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }} className="text-center px-4">
                    <h4 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl">
                      <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                    </h4>
                    <p className="text-blue-200 dark:text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. ENTERPRISE ECOSYSTEM SHOWCASE */}
          <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 text-center md:text-left gap-6">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Featured Deployments</h4>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tighter">
                  Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Ecosystems.</span>
                </h2>
              </motion.div>
              <Link to="/portfolio" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors border border-slate-300 dark:border-white/20 rounded-full px-8 py-4">
                View All Work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[450px]">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="lg:col-span-2 lg:row-span-2 relative group rounded-[2rem] overflow-hidden shadow-xl bg-slate-900">
                 <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" loading="lazy" decoding="async" alt="Global Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu opacity-70" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent pointer-events-none"></div>
                 
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-2xl pointer-events-none">
                   <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tighter mb-5">Built for Enterprise Scale.</h3>
                   <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">From global edge-network delivery to zero-trust architecture, our platforms handle millions of concurrent users without dropping a single frame.</p>
                 </div>
              </motion.div>

              {projects.map((project, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="lg:col-span-1 lg:row-span-1 relative group rounded-[2rem] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-md flex flex-col">
                  <div className="h-1/2 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex flex-col justify-center h-1/2 bg-white dark:bg-[#0c1222]">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-2">{project.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 truncate">{project.title}</h3>
                      <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-400 hover:text-blue-600 mt-2 flex items-center gap-2 w-max">
                        Read Case Study <ArrowRight size={14}/>
                      </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 8. TESTIMONIALS */}
          <section className="py-24 md:py-32 bg-slate-50 dark:bg-[#0a0f1c] border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Client Confidence</h4>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tighter">Don't just take our word for it.</h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { quote: "MotionAge didn't just build our platform; they completely re-engineered how our users interact with our brand.", author: "Sarah Jenkins", role: "CTO, TechNova" },
                  { quote: "Their technical rigor and eye for high-end conversion design set them apart from any other agency we've worked with.", author: "David Chen", role: "Founder, Apex Solutions" }
                ].map((test, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 p-10 rounded-[2rem] shadow-sm">
                    <div className="flex gap-1 text-blue-500 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light italic mb-8 leading-relaxed">"{test.quote}"</p>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold">{test.author}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{test.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. AGILE WORKFLOW */}
          <section className="py-24 md:py-32 bg-white dark:bg-[#050814] border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
                <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Methodology</h4>
                <TextReveal text="The MotionAge Framework." className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-[1.05] tracking-tighter" />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 dark:bg-slate-800/80 z-0">
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }} className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 origin-left" />
                </div>
                {processSteps.map((step, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.15 }} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 dark:bg-[#0c1222] border-[4px] border-white dark:border-[#050814] flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 relative z-10">
                      <step.icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. TECH STACK */}
          <section className="py-20 md:py-28 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a0f1c] overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 lg:gap-16">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="w-full lg:w-1/3">
                  <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Tech Stack</h4>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-4">
                    Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Infrastructure.</span>
                  </h2>
                </motion.div>
                <div className="w-full lg:w-2/3">
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                    {techStack.map((tech, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 rounded-full shadow-sm text-slate-800 dark:text-slate-200 text-xs md:text-sm font-bold tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 11. ENTERPRISE CTA */}
          <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-white dark:bg-[#050814] transition-colors duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="relative p-8 md:p-12 rounded-[2rem] overflow-hidden bg-slate-50/90 dark:bg-[#0c1222]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg text-center">
                
                <div className="relative z-10">
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">Accepting New Projects</span>
                  </motion.div>

                  <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-4 leading-[1.1] tracking-tight">
                    Ready to dominate your <br className="hidden md:block"/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">digital landscape?</span>
                  </motion.h2>
                  
                  <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light mb-8 max-w-xl mx-auto leading-relaxed">
                    Partner with MotionAge to architect, scale, and innovate. Join the industry leaders who trust us with their digital ecosystems.
                  </motion.p>
                  
                  <motion.div variants={fadeUp}>
                    <MagneticButton onClick="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-blue-700 shadow-md">
                      <span className="relative z-10">Initiate Project</span> 
                      <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                    </MagneticButton>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

    </div>
  );
}