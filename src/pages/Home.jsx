import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, Globe, Users, Trophy, Search, PenTool, Rocket, Layers, ShieldCheck, Cpu, BarChart3, Building2, MonitorPlay, ExternalLink, Star } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ClickParticles from '../components/ClickParticles'; 
import itImage from '../assets/hero_it.jpeg'; 

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
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: springX, y: springY }} className="inline-block w-full sm:w-auto">
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
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className={`relative group rounded-[2rem] overflow-hidden bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] will-change-transform ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.12), transparent 40%)` }} />
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>{children}</div>
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
          <motion.span variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100, delay: i * 0.04 } } }} className="inline-block will-change-transform">
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
      title: "7eleveneduconsultancy",
      category: "Web Application/Logo Design",
      impact: "Secure, professional portal with modern architecture.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfHg3TJ-tKIX_ehDTXZ08P9pCwtp-grBh-Q&s"
    },
    {
      title: "Goleybusinessconsultant",
      category: "Web Application/Logo Design",
      impact: "Immersive UI/UX ensuring 100% client satisfaction.",
      tech: ["Next.js", "Framer Motion", "AWS"],
      image: "https://th.bing.com/th/id/OIP._bRJvsFZId9qh-A7T9xWwQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
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

  // Array of client logos
  const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 font-sans overflow-x-hidden transition-colors duration-500">
      <SEO title="Home" description="Premium IT solutions, web development, and digital marketing from MotionAge." />
      <ClickParticles />
      <Hero />

    
      {/* 2. CORPORATE PROFILE */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0a0f1c] relative z-10 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: "40px" }} transition={{ duration: 0.8 }} className="h-[2px] bg-blue-600 mb-6" />
              <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Corporate Profile</h4>
              
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-6 tracking-tight">
                Pioneering the <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Digital Frontier.</span>
              </motion.h2>
            </div>
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Started in 2021. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">600+ Visions</span> Realized.
              </h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6 md:mb-8">
                MotionAge is a premier technology and creative design firm based in Kathmandu, Nepal. We were founded on a singular vision: to bridge the gap between heavy enterprise software engineering and award-winning visual identity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Building2 size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Headquarters</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><Globe size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Global Reach</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Clients in 15+ Countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL IMPACT BY DESIGN (Liquid Section) */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50 dark:bg-[#050814] flex items-center border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20 transition-colors duration-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                Creative Design Agency
              </div>
              
              <TextReveal text="Visual Impact By Design." className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 mb-6 leading-[1.1] tracking-tight" />
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                We help clients elevate their visual presence through time-tested design principles and modern digital trends.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
                <MagneticButton onClick="/contact" className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto">
                  Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative flex justify-center items-center h-[350px] md:h-[500px] order-1 lg:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-300/40 to-purple-300/40 dark:from-purple-600/40 dark:to-blue-600/40 blur-3xl animate-blob" />
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-liquid shadow-[0_0_60px_rgba(59,130,246,0.2)] dark:shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden border border-white/40 dark:border-white/20 flex items-center justify-center z-10 bg-slate-900">
                <img src={itImage} alt="IT Technology Solutions" className="w-full h-full object-cover relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
              </div>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-5 right-5 md:top-10 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-blue-100/50 dark:bg-blue-400/20 backdrop-blur-lg rounded-2xl border border-white/40 dark:border-white/10 rotate-12 z-20 shadow-lg" />
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-5 left-5 md:bottom-10 md:left-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100/50 dark:bg-purple-500/30 backdrop-blur-md border border-white/40 dark:border-white/10 z-20 shadow-lg" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. THE MOTIONAGE DIFFERENCE (Why Partner With Us) */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="lg:col-span-6 relative z-10">
            <motion.h4 variants={fadeUp} className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 text-center lg:text-left">Why Partner With Us</motion.h4>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-6 tracking-tight text-center lg:text-left">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Digital Dominance.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 md:mb-10 font-light text-center lg:text-left">
              Our unique approach combines rigorous technical protocols with elite creative design. This dual-threat capability ensures your digital assets don't just work—they convert and scale exponentially.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-4 md:space-y-5 mb-10 md:mb-12">
              {[
                { title: 'Zero-Downtime Infrastructure', icon: Layers },
                { title: 'Data-Driven Conversion Optimization', icon: BarChart3 },
                { title: 'Military-Grade Web Security', icon: ShieldCheck }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 dark:text-slate-200 font-medium md:font-semibold text-base md:text-lg">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  {item.title}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="text-center lg:text-left">
              <MagneticButton onClick="/about" className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-bold text-sm hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
                Explore Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Parallax Image Grid (Hidden on Mobile) */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px] hidden lg:block perspective-1000">
            <motion.div style={{ y: yParallax }} className="absolute top-0 right-0 w-3/4 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-10">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover scale-110" />
            </motion.div>
            <motion.div style={{ y: yParallaxReverse }} className="absolute bottom-0 left-0 w-2/3 h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10">
               <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" alt="Code" className="w-full h-full object-cover opacity-90 dark:mix-blend-normal" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES (3D Tilt Cards) */}
      <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Capabilities</h4>
            <TextReveal text="End-to-End Technical Solutions" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-tight" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <TiltGlowCard>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 md:mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 md:mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6 md:mb-8 flex-grow">{service.desc}</p>
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

      {/* 6. PERFORMANCE METRICS (Kept Dark for Visual Impact) */}
      <section className="py-16 md:py-24 bg-slate-900 dark:bg-[#050814] relative overflow-hidden border-b border-slate-800 dark:border-white/5 transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="text-center group flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-all duration-300">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-blue-100/60 dark:text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO SHOWCASE */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left gap-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Featured Work</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Impact.</span>
            </h2>
          </motion.div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-300 dark:border-white/10 rounded-full px-6 py-3 hover:bg-slate-100 dark:hover:bg-white/5">
            View All Work <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}>
              <div className="w-full lg:w-1/2 relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 aspect-[4/3] shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#050814] to-transparent opacity-60"></div>
              </div>
              <div className="w-full lg:w-1/2 text-center md:text-left">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-4 md:mb-6">{project.title}</h3>
                <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 text-left shadow-sm">
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium flex items-start gap-3">
                    <Trophy className="text-yellow-500 shrink-0 mt-1" size={20} /> {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 md:mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400">{t}</span>
                  ))}
                </div>
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Read Case Study <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. AGILE WORKFLOW */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0a0f1c] border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Methodology</h4>
            <TextReveal text="The MotionAge Framework" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-tight" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 origin-left" />
            </div>
            {processSteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-[#0a0f1c] shadow-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 md:mb-8 relative">
                  <step.icon size={24} strokeWidth={2} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECH STACK MARQUEE */}
      <section className="py-16 md:py-24 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050814] overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 lg:gap-16">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/3">
              <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Tech Stack</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-4 md:mb-5">
                Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Infrastructure</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light">We deploy robust stacks to ensure your products are fast, highly secure, and infinitely scalable.</p>
            </motion.div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                {techStack.map((tech, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05, y: -4 }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="px-5 py-2.5 md:px-6 md:py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full shadow-sm text-slate-700 dark:text-slate-200 text-xs md:text-sm font-semibold tracking-wide hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 cursor-crosshair transition-colors">
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ENTERPRISE CTA */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-slate-50 dark:bg-[#050814] transition-colors duration-500">
        {/* Dynamic Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-blue-600/10 dark:bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp}
            className="relative p-10 md:p-20 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl text-center"
          >
            {/* Internal Card Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 backdrop-blur-md mb-8 shadow-sm dark:shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  Accepting New Projects
                </span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-[#cad1d9] mb-6 md:mb-8 leading-[1.05] tracking-tight">
                Ready to dominate your <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">digital landscape?</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Partner with MotionAge to architect, scale, and innovate. Join the industry leaders who trust us with their digital ecosystems.
              </motion.p>
              
              <motion.div variants={fadeUp}>
                <MagneticButton onClick="/contact" className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-base md:text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 to-slate-950 dark:from-blue-500 dark:to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Initiate Project</span> 
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

{/* 1. TRUST MARQUEE WITH IMAGES */}
      <section className="py-8 md:py-10 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-white/5 flex overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#050814] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#050814] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 40 }} className="flex whitespace-nowrap gap-16 md:gap-24 items-center px-4 md:px-8">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {clientLogos.map((logo, j) => (
                <img 
                  key={j} 
                  src={logo} 
                  alt={`Client Logo ${j + 1}`} 
                  className="h-12 md:h-16 w-auto object-contain opacity-95 hover:opacity-100 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-grab" 
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </section>


    </div>
  );
}