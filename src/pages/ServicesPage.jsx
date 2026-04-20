import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Megaphone, BookOpen, Monitor, Smartphone, Code, Wand2, ArrowRight } from 'lucide-react';
import FloatingTech from '../components/FloatingTech';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const devServices = [
    { id: "web-dev", icon: <Monitor size={28} />, title: "Web Development", desc: "Fast, responsive, and SEO-optimized websites built with React and Next.js." },
    { id: "app-dev", icon: <Smartphone size={28} />, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
    { id: "software", icon: <Code size={28} />, title: "Custom Software", desc: "Scalable enterprise solutions, SaaS platforms, and backend architecture." }
  ];

  const marketingServices = [
    { id: "branding", icon: <Layout size={28} />, title: "Branding & Identity", desc: "Logo design, style guides, and complete corporate visual identities." },
    { id: "marketing", icon: <Megaphone size={28} />, title: "Marketing & Ads", desc: "High-conversion creatives for social media, Meta Ads, and digital campaigns." },
    { id: "print", icon: <BookOpen size={28} />, title: "Print & Publication", desc: "Pixel-perfect layouts for magazines, brochures, menus, and packaging." },
    { id: "specialized", icon: <Wand2 size={28} />, title: "Specialized AI Design", desc: "Advanced photo manipulations, data visualizations, and generative AI art." }
  ];

  const renderServiceCard = (service, index) => (
    <Link to={`/services/${service.id}`} key={index} className="block h-full">
      <motion.div 
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
        className="h-full rounded-[2rem] p-8 md:p-10 bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:border-blue-500/50 flex flex-col"
      >
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500 mb-8">
          {service.icon}
        </div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8 flex-grow">
          {service.desc}
        </p>
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mt-auto">
          Explore Specs <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );

  return (
    <div className="w-full relative overflow-hidden bg-slate-50 dark:bg-[#050814] font-sans transition-colors duration-500">
      
      <FloatingTech />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15)_0%,_transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-8 shadow-sm">
              Solutions Directory
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.05]">
              Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Capabilities.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              We bridge the gap between robust software engineering and high-conversion creative design. Explore our operational divisions below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Development Division */}
          <div className="mb-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Engineering</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light">
                  Scalable, secure, and lightning-fast digital architecture engineered to power your business operations.
                </p>
              </div>
              <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800/80 mx-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {devServices.map((service, index) => renderServiceCard(service, index))}
            </div>
          </div>

          {/* Marketing & Design Division */}
          <div className="mb-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Design & Growth</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light">
                  High-impact visual storytelling and targeted campaigns designed to capture attention and drive absolute revenue.
                </p>
              </div>
              <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800/80 mx-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {marketingServices.map((service, index) => renderServiceCard(service, index))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0c1222] text-center px-4 border-t border-slate-200 dark:border-white/5 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Not sure where to start?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Let's get on a call. We can assess your current digital presence and recommend the exact technical architecture required to scale your brand.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-sm md:text-base uppercase tracking-wider hover:scale-105 transition-transform shadow-xl">
            Book a Free Audit <ArrowRight size={20} className="transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}