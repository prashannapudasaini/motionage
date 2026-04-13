import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, CheckCircle2, Globe, Users, Trophy, Search, PenTool, Rocket, Layers, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Component Imports
import Hero from '../components/Hero';
import ClickParticles from '../components/ClickParticles'; 

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SoftNEP Inspired Services
  const services = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Empowering businesses through innovative, secure, and scalable custom software development.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "From native to cross-platform: we build world-class apps combining speed and seamless integration.",
    },
    {
      icon: Palette,
      title: "Web Design & UX",
      desc: "We build websites with heart and purpose. Beautiful, simple, and human-centric experiences.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: "Crafting marketing that feels human, builds trust, and creates meaningful connections that last.",
    }
  ];

  // SoftNEP Inspired Stats
  const stats = [
    { icon: Trophy, value: "600+", label: "Projects Delivered" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Professionals Engaged" },
    { icon: CheckCircle2, value: "5+", label: "Years of Creativity" }
  ];

  // SoftNEP Inspired Portfolio Teasers
  const works = [
    { title: "SVLC Law Firm", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
    { title: "Next Stop Nepal", img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" },
    { title: "Setopati Digital", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80" },
    { title: "Destination Nepal", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" }
  ];

  // NEW: The Framework (Process)
  const processSteps = [
    { icon: Search, title: "1. Discover & Strategize", desc: "We dive deep into your brand, market, and goals to build a data-driven roadmap." },
    { icon: PenTool, title: "2. Design & Develop", desc: "Our specialists craft pixel-perfect designs and engineer robust, scalable code." },
    { icon: Rocket, title: "3. Launch & Scale", desc: "We deploy your digital assets and utilize targeted marketing to drive exponential growth." }
  ];

  // NEW: Core Values
  const values = [
    { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We build partnerships, not just projects." },
    { icon: Zap, title: "Innovation First", desc: "We stay ahead of the digital curve to bring you modern, future-proof solutions." },
    { icon: Layers, title: "Uncompromising Quality", desc: "From the first line of code to the final video edit, excellence is our baseline." }
  ];

  // NEW: Tech Ecosystem
  const technologies = [
    "React & Next.js", "Node.js & Python", "React Native", "Flutter", 
    "AWS & Cloud Cloud", "Figma & UI/UX", "Adobe Premiere Pro", "After Effects", "SEO & Meta Ads"
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 selection:bg-blue-100 dark:selection:bg-blue-900/30 font-sans">
      <ClickParticles />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Why Work With Us (About) */}
      <section className="py-20 lg:py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Why work with us?</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Making technology <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">simple, effective & meaningful.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
              We are a Nepal-based digital solutions company dedicated to helping brands grow through secure, user-friendly, and affordable solutions. From web design and custom software to mobile apps and digital marketing—we partner with you to tell your story online.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <p className="text-3xl font-black text-slate-900 dark:text-white">100%</p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services We Provide */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Services</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              We Provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Excellence</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The MotionAge Framework (Process) */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our Approach</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              The MotionAge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Framework</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-light">
              We combine creative artistry with robust engineering. Our proven methodology ensures your project is delivered on time, on brand, and primed for scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-100 via-purple-200 to-blue-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center bg-white dark:bg-slate-950 p-6 rounded-2xl"
              >
                <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 shadow-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 relative group hover:border-blue-500 transition-colors duration-300">
                  <step.icon size={36} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats & Impact */}
      <section className="py-20 bg-blue-600 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-200 dark:text-blue-500" />
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h4>
                <p className="text-blue-100 dark:text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. View Our Work (Portfolio) */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                View Our Work
              </h2>
            </div>
            <Link to="/portfolio" className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[300px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer border border-slate-200 dark:border-slate-800"
              >
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Case Study <ArrowRight size={14} className="inline ml-1 mb-0.5"/></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Tech Ecosystem & Tools */}
      <section className="py-20 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our Ecosystem</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                Powered by Modern Technology
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-light">
                We leverage industry-leading software, frameworks, and cloud infrastructure to ensure your digital products are fast, secure, and infinitely scalable.
              </p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-end">
                {technologies.map((tech, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-6 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm text-slate-700 dark:text-slate-300 font-medium hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Core Values */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Core Values</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Purpose</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                  <value.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: Final Bottom CTA */}
      <section className="relative py-24 px-4 overflow-hidden bg-slate-900 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to transform your <br/> digital presence?
            </h2>
            <p className="text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto">
              Join hundreds of brands that trust MotionAge to build, scale, and innovate their digital ecosystems.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Let's Talk Business <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        ::selection { background: #3b82f6; color: white; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}