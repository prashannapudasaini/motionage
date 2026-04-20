import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Megaphone, BookOpen, Monitor, Smartphone, Code, ArrowRight } from 'lucide-react';

export default function OurServices() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const devServices = [
    { id: "web-dev", icon: <Monitor size={28} />, title: "Web Development", desc: "Fast, responsive, and SEO-optimized websites built with React and Next.js." },
    { id: "app-dev", icon: <Smartphone size={28} />, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
    { id: "software", icon: <Code size={28} />, title: "Custom Software", desc: "Scalable enterprise solutions, SaaS platforms, and backend architecture." }
  ];

  const marketingServices = [
    { id: "branding", icon: <Layout size={28} />, title: "Branding & Identity", desc: "Logo design, style guides, and complete corporate identity packages." },
    { id: "marketing", icon: <Megaphone size={28} />, title: "Marketing & Ads", desc: "High-conversion creatives for social media, Meta Ads, and campaigns." },
    { id: "print", icon: <BookOpen size={28} />, title: "Print Publication", desc: "Pixel-perfect layouts for magazines, brochures, menus, and packaging." }
  ];

  const renderServiceCard = (service, index) => (
    <Link to={`/services/${service.id}`} key={index}>
      <motion.div 
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
        className="rounded-[2rem] p-8 bg-slate-50 dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 cursor-pointer group hover:-translate-y-2 hover:border-blue-500/50 shadow-sm hover:shadow-xl flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 will-change-transform"
      >
        <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-100 dark:bg-slate-800 border border-blue-200 dark:border-slate-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          {service.icon}
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h4>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <section id="services" className="py-16 md:py-24 relative bg-white dark:bg-[#050814] border-b border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      {/* Replaced heavy blur with fast radial-gradient */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_center_left,_rgba(37,99,235,0.08)_0%,_transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-6">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Solutions.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            We build robust digital platforms and engineer the marketing campaigns that drive traffic to them.
          </p>
        </div>

        {/* Development Section */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Engineering</h3>
            <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800/80"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {devServices.map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>

        {/* Marketing Section */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Design & Growth</h3>
            <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800/80"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {marketingServices.map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="text-center pt-8">
          <Link 
            to="/all-services"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}