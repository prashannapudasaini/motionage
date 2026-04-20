import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, Globe, Users, Trophy, Search, PenTool, Rocket, Layers, ShieldCheck, Cpu, BarChart3, Building2, MonitorPlay, ExternalLink } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

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

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: springX, y: springY }} className="inline-block w-full sm:w-auto z-10 relative">
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
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className={`relative group rounded-[2rem] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] will-change-transform ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" style={{ background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.08), transparent 40%)` }} />
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>{children}</div>
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

  return <span ref={ref} className="font-variant-numeric tracking-tighter">{count}{suffix}</span>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const TextReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100, delay: i * 0.03 } } }} className="inline-block will-change-transform">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

// =====================================================================
// MAIN HOME COMPONENT
// =====================================================================
export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    { icon: Code, title: "Software Development", desc: "Empowering businesses through innovative, secure, and scalable custom software development." },
    { icon: Smartphone, title: "Mobile Ecosystems", desc: "From native to cross-platform: we build world-class apps combining speed and seamless integration." },
    { icon: Palette, title: "Web Design & UX", desc: "We build websites with heart and purpose. Beautiful, simple, and human-centric experiences." },
    { icon: Megaphone, title: "Growth Marketing", desc: "Crafting marketing that feels human, builds trust, and creates meaningful connections that last." },
    { icon: PenTool, title: "Graphic Design", desc: "Visually striking branding, marketing materials, and digital assets that captivate your audience." },
    { icon: MonitorPlay, title: "Video Production", desc: "High-impact video editing and motion graphics that tell your brand's unique story compellingly." }
  ];

 const projects = [
  {
    title: "Visual Identity Craft",
    category: "Brand Visual Identity System",
    impact: "Developed a cohesive visual language that enhances brand recognition and builds instant trust.",
    tech: ["Adobe Suite", "Figma", "Visual Storytelling"],
    image: hero_1
  },
  {
    title: "Digital Experience Engineering",
    category: "Full-Stack Web Architecture",
    impact: "Built a fast, scalable, and interactive web platform focused on performance and seamless user experience.",
    tech: ["Next.js", "Node.js", "Cloud Architecture"],
    image: hero_2
  }
];

  const stats = [
    { icon: Trophy, value: 600, suffix: "+", label: "Projects Delivered" },
    { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
    { icon: Globe, value: 15, suffix: "+", label: "Professionals Engaged" },
    { icon: ShieldCheck, value: 5, suffix: "+", label: "Years of Creativity" }
  ];

  const processSteps = [
    { icon: Search, title: "Architecture & Discovery", desc: "Mapping business logic to scalable technical requirements." },
    { icon: Cpu, title: "Agile Engineering", desc: "Sprint-based development with continuous CI/CD integration." },
    { icon: Rocket, title: "Deployment & Scaling", desc: "Cloud deployment, load balancing, and market launch." }
  ];

  const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Figma", "Premiere", "After Effects", "PostgreSQL", "GraphQL"];

  const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

  return (
    // 🚨 Removed overflow-x-hidden from root to ensure sticky elements work across the site
    <div className="w-full bg-slate-50 dark:bg-[#050814] selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 font-sans transition-colors duration-500">
      <SEO title="Home | MotionAge" description="Premium IT solutions, web development, and digital marketing from MotionAge." />
      <ClickParticles />
      <Hero />

      {/* 1. TRUST MARQUEE (Ultra-Smooth Glide) */}
      <section className="py-8 md:py-10 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-white/5 flex overflow-hidden relative select-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#050814] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#050814] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }} 
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center px-4 md:px-8 will-change-transform"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {clientLogos.map((logo, j) => (
                <img 
                  key={j} 
                  src={logo} 
                  alt={`Client Logo ${j + 1}`} 
                  className="h-10 md:h-12 w-auto object-contain opacity-70 dark:opacity-60 pointer-events-none" 
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* 2. CORPORATE PROFILE */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#0a0f1c] relative z-10 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: "40px" }} transition={{ duration: 0.8 }} className="h-[2px] bg-blue-600 mb-8" />
              <h4 className="text-blue-600 dark:text-blue-500 font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-4">Corporate Profile</h4>
              
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-6">
                Pioneering the <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Digital Frontier.</span>
              </motion.h2>
            </div>
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/2 mt-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Started in 2021. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">600+ Visions</span> Realized.
              </h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-10">
                MotionAge is a premier technology and creative design firm based in Kathmandu, Nepal. We were founded on a singular vision: to bridge the gap between heavy enterprise software engineering and award-winning visual identity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Building2 size={22} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white tracking-tight">Headquarters</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Globe size={22} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white tracking-tight">Global Reach</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Clients in 15+ Countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL IMPACT BY DESIGN (Liquid Section) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#050814] flex items-center border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-extrabold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-8 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                Creative Design Agency
              </div>
              
              <TextReveal text="Visual Impact By Design." className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tighter" />
              
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                We help clients elevate their visual presence through time-tested design principles and modern digital trends.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
                <MagneticButton onClick="/contact" className="group bg-blue-600 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto">
                  Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative flex justify-center items-center h-[400px] md:h-[550px] order-1 lg:order-2">
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-blue-300/40 to-purple-300/40 dark:from-purple-600/40 dark:to-blue-600/40 blur-3xl animate-blob pointer-events-none" />
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-liquid shadow-[0_0_60px_rgba(59,130,246,0.2)] dark:shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden border border-white/40 dark:border-white/20 flex items-center justify-center z-10 bg-slate-900">
                <img src={itImage} alt="IT Technology Solutions" className="w-full h-full object-cover relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
              </div>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-5 right-5 md:top-10 md:right-10 w-20 h-20 bg-blue-100/50 dark:bg-blue-400/20 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 rotate-12 z-20 shadow-lg pointer-events-none" />
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-5 left-5 md:bottom-10 md:left-10 w-16 h-16 rounded-full bg-purple-100/50 dark:bg-purple-500/30 backdrop-blur-xl border border-white/40 dark:border-white/10 z-20 shadow-lg pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. THE MOTIONAGE DIFFERENCE (Why Partner With Us) */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="lg:col-span-6 relative z-10">
            <motion.h4 variants={fadeUp} className="text-blue-600 dark:text-blue-500 font-extrabold uppercase tracking-[0.25em] text-[11px] md:text-xs mb-6 text-center lg:text-left">Why Partner With Us</motion.h4>
            
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-8 text-center lg:text-left">
              Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Digital Dominance.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-12 text-center lg:text-left">
              Our unique approach combines rigorous technical protocols with elite creative design. This dual-threat capability ensures your digital assets don't just work—they convert and scale exponentially.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-6 mb-12">
              {[
                { title: 'Zero-Downtime Infrastructure', icon: Layers },
                { title: 'Data-Driven Conversion Optimization', icon: BarChart3 },
                { title: 'Military-Grade Web Security', icon: ShieldCheck }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-slate-800 dark:text-slate-100 font-semibold tracking-tight text-lg">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  {item.title}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="text-center lg:text-left">
              <MagneticButton onClick="/about" className="group flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-bold tracking-wide text-sm shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Explore Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 relative h-[500px] md:h-[700px] hidden lg:block perspective-1000">
            <motion.div style={{ y: yParallax }} className="absolute top-0 right-0 w-4/5 h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-10 will-change-transform">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Team" className="w-full h-full object-cover scale-110" />
            </motion.div>
            <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-0 left-0 w-3/4 h-[350px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 will-change-transform">
               <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" alt="Code" className="w-full h-full object-cover opacity-90 dark:mix-blend-normal" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES (3D Tilt Cards) */}
      <section className="py-24 md:py-32 relative bg-slate-50 dark:bg-[#080c17] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
            <h4 className="text-blue-600 dark:text-blue-500 font-extrabold uppercase tracking-[0.25em] text-[11px] md:text-xs mb-4">Capabilities</h4>
            <TextReveal text="End-to-End Technical Solutions" className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <TiltGlowCard>
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 flex-grow">{service.desc}</p>
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

      {/* 6. PERFORMANCE METRICS (Monumental Look) */}
       <section className="relative py-12 md:py-16 bg-slate-950 dark:bg-[#02050A] overflow-hidden border-b border-slate-800/60">

  {/* Background glow (smaller) */}
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[500px] h-[500px] bg-blue-500/15 blur-[140px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06 }}
          whileHover={{ y: -4 }}
          className="flex flex-col items-center text-center"
        >

          {/* Icon (smaller) */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg 
            bg-white/5 border border-white/10 
            flex items-center justify-center mb-4">

            <stat.icon className="w-4 h-4 text-blue-400" />
          </div>

          {/* Number (slightly smaller) */}
          <h4 className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tight">
            <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
          </h4>

          {/* Label */}
          <p className="text-blue-300/60 dark:text-slate-400 text-[10px] font-semibold uppercase tracking-[0.25em]">
            {stat.label}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* 7. ENTERPRISE ECOSYSTEM & DEPLOYMENTS (Apple-Style Bento Box Portfolio) */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 text-center md:text-left gap-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h4 className="text-blue-600 dark:text-blue-500 font-extrabold uppercase tracking-[0.25em] text-[11px] md:text-xs mb-4">Featured Deployments</h4>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Ecosystems.</span>
            </h2>
          </motion.div>
          <Link to="/portfolio" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-300 dark:border-white/20 rounded-full px-8 py-4 hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm">
            View All Work <ArrowRight size={16} />
          </Link>
        </div>

        {/* The Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[450px]">
          
          {/* Giant Ecosystem Feature (Spans 2 columns, 2 rows) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="lg:col-span-2 lg:row-span-2 relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" loading="lazy" alt="Global Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent pointer-events-none"></div>
             
             <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-2xl pointer-events-none">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 mb-6">
                 <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.2em]">High Availability</span>
               </div>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tighter mb-5">Built for <br/>Enterprise Scale.</h3>
               <p className="text-lg text-slate-300 font-light leading-relaxed">From global edge-network delivery to zero-trust architecture, our platforms handle millions of concurrent users without dropping a single frame.</p>
             </div>
          </motion.div>

          {/* Project 1 (Top Right) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="lg:col-span-1 lg:row-span-1 relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-xl flex flex-col">
             <div className="h-1/2 w-full overflow-hidden">
               <img src={projects[0].image} alt={projects[0].title} loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 will-change-transform" />
             </div>
             <div className="p-8 flex flex-col justify-center h-1/2 bg-white dark:bg-[#0c1222] relative z-10 border-t border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">{projects[0].category}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2 truncate">{projects[0].title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light mb-5 line-clamp-2">{projects[0].impact}</p>
                <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-blue-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-2 w-max">
                  Read Case Study <ArrowRight size={14}/>
                </Link>
             </div>
          </motion.div>

          {/* Project 2 (Bottom Right) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="lg:col-span-1 lg:row-span-1 relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-xl flex flex-col">
             <div className="h-1/2 w-full overflow-hidden">
               <img src={projects[1].image} alt={projects[1].title} loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 will-change-transform" />
             </div>
             <div className="p-8 flex flex-col justify-center h-1/2 bg-white dark:bg-[#0c1222] relative z-10 border-t border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">{projects[1].category}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2 truncate">{projects[1].title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light mb-5 line-clamp-2">{projects[1].impact}</p>
                <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-blue-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-2 w-max">
                  Read Case Study <ArrowRight size={14}/>
                </Link>
             </div>
          </motion.div>

        </div>
      </section>

      {/* 8. AGILE WORKFLOW */}
     <section className="relative py-20 md:py-24 bg-white dark:bg-[#050814] border-b border-slate-200 dark:border-white/5">

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h4 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-[0.25em] text-xs mb-3">
        Methodology
      </h4>

      <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
        The MotionAge Framework
      </h2>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

      {processSteps.map((step, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center"
        >

          {/* Icon */}
          <div className="w-16 h-16 md:w-18 md:h-18 rounded-xl 
            bg-slate-50 dark:bg-white/5 
            border border-slate-200 dark:border-white/10
            flex items-center justify-center mb-5">

            <step.icon size={22} className="text-blue-500" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            {step.desc}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* 9. TECH STACK MARQUEE */}
      <section className="relative py-24 md:py-32 overflow-hidden 
  border-b border-slate-200 dark:border-white/5 
  bg-slate-50 dark:bg-[#070b17] transition-colors duration-500">

  {/* Background glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    w-[900px] h-[900px] bg-blue-500/10 blur-[140px] rounded-full" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Heading */}
    <motion.div 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }} 
      variants={fadeUp}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      <h4 className="text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-[0.3em] text-xs mb-4">
        Tech Stack
      </h4>

      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
        Modern{" "}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
          bg-[length:200%_200%] animate-[gradientShift_6s_ease_infinite] 
          bg-clip-text text-transparent">
          Infrastructure
        </span>
      </h2>

      <p className="text-slate-600 dark:text-slate-400 text-lg font-light">
        Built on technologies that scale without limits.
      </p>
    </motion.div>

    {/* Marquee Rows */}
    <div className="space-y-6">

      {/* Row 1 */}
      <div className="flex gap-6 w-max animate-[marquee_25s_linear_infinite]">
        {[...techStack, ...techStack].map((tech, idx) => (
          <div key={idx}
            className="px-8 py-4 rounded-full 
            bg-white/80 dark:bg-white/5 backdrop-blur-xl
            border border-slate-200 dark:border-white/10
            text-slate-800 dark:text-white font-semibold tracking-wide
            shadow-[0_10px_30px_rgba(0,0,0,0.1)]
            hover:scale-110 hover:border-blue-500/50
            transition-all duration-300 cursor-default"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Row 2 (reverse direction) */}
      <div className="flex gap-6 w-max animate-[marqueeReverse_30s_linear_infinite]">
        {[...techStack, ...techStack].map((tech, idx) => (
          <div key={idx}
            className="px-8 py-4 rounded-full 
            bg-gradient-to-br from-white to-slate-100 
            dark:from-[#0c1222] dark:to-[#0a0f1c]
            border border-slate-200 dark:border-slate-800
            text-slate-700 dark:text-slate-300 font-semibold
            shadow-md hover:shadow-blue-500/20
            hover:-translate-y-1 transition-all duration-300"
          >
            {tech}
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

     {/* 10. ENTERPRISE CTA (Sleek & Compact) */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-white dark:bg-[#050814] transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        {/* Reduced max-width from 6xl to 4xl */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp}
            // Reduced padding from p-24 to p-10/p-12 and border-radius to 2rem
            className="relative p-8 md:p-12 rounded-[2rem] overflow-hidden bg-slate-50/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl text-center"
          >
            {/* Internal Card Glows */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/10 dark:bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 dark:bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 backdrop-blur-md mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  Accepting New Projects
                </span>
              </motion.div>

              {/* Reduced text size from 7xl/8xl down to 4xl/5xl */}
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#cad1d9] mb-4 leading-[1.1] tracking-tight">
                Ready to dominate your <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">digital landscape?</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light mb-8 max-w-xl mx-auto leading-relaxed">
                Partner with MotionAge to architect, scale, and innovate. Join the industry leaders who trust us with their digital ecosystems.
              </motion.p>
              
              <motion.div variants={fadeUp}>
                <MagneticButton onClick="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all hover:scale-105 shadow-lg">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 to-slate-950 dark:from-blue-500 dark:to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Initiate Project</span> 
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}