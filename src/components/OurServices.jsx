import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Megaphone, BookOpen, Monitor, Smartphone, Code, ArrowRight } from 'lucide-react';

export default function OurServices() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const devServices = [
    { id: "web-dev", icon: <Monitor size={32} />, title: "Web Development", desc: "Fast, responsive, and SEO-optimized websites built with React and Next.js." },
    { id: "app-dev", icon: <Smartphone size={32} />, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
    { id: "software", icon: <Code size={32} />, title: "Custom Software", desc: "Scalable enterprise solutions, SaaS platforms, and backend architecture." }
  ];

  const marketingServices = [
    { id: "branding", icon: <Layout size={32} />, title: "Branding & Identity", desc: "Logo design, style guides, and complete corporate identity packages." },
    { id: "marketing", icon: <Megaphone size={32} />, title: "Marketing & Ads", desc: "High-conversion creatives for social media, Meta Ads, and campaigns." },
    { id: "print", icon: <BookOpen size={32} />, title: "Print Publication", desc: "Pixel-perfect layouts for magazines, brochures, menus, and packaging." }
  ];

  const renderServiceCard = (service, index) => (
    <Link to={`/services/${service.id}`} key={index}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, type: "spring" }}
        onMouseMove={handleMouseMove}
        // Reduced padding inside the card slightly to tighten the look
        className="rounded-3xl p-6 md:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer group hover:-translate-y-2 hover:border-blue-500/50 shadow-sm hover:shadow-xl flex flex-col sm:flex-row gap-5 items-start transition-all duration-300"
      >
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          {service.icon}
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h4>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </Link>
  );

  return (
    // REDUCED: py-24 changed to py-10 lg:py-16 to fix huge top/bottom gaps
    <section id="services" className="py-10 lg:py-16 relative bg-white dark:bg-slate-950 scroll-mt-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* REDUCED: mb-20 changed to mb-12 to bring grid closer to the title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4 border border-slate-200 dark:border-slate-800">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Digital Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            We build robust digital platforms and engineer the marketing campaigns that drive traffic to them.
          </p>
        </div>

        {/* Development Section */}
        {/* REDUCED: mb-20 changed to mb-12 */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Development</h3>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {devServices.map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>

        {/* Marketing Section */}
        {/* REDUCED: mb-20 changed to mb-10 */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Marketing & Design</h3>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {marketingServices.map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-slate-200 dark:border-slate-800"
        >
          <Link 
            to="/all-services"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}