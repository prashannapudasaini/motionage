import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Megaphone, BookOpen, Monitor, Smartphone, Code, Wand2, ArrowRight } from 'lucide-react';
import FloatingTech from '../components/FloatingTech';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  const devServices = [
    { id: "web-dev", icon: <Monitor size={32} />, title: "Web Development", desc: "Fast, responsive, and SEO-optimized websites built with React and Next.js." },
    { id: "app-dev", icon: <Smartphone size={32} />, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
    { id: "software", icon: <Code size={32} />, title: "Custom Software", desc: "Scalable enterprise solutions, SaaS platforms, and backend architecture." }
  ];

  const marketingServices = [
    { id: "branding", icon: <Layout size={32} />, title: "Branding & Identity", desc: "Logo design, style guides, and complete corporate visual identities." },
    { id: "marketing", icon: <Megaphone size={32} />, title: "Marketing & Ads", desc: "High-conversion creatives for social media, Meta Ads, and digital campaigns." },
    { id: "print", icon: <BookOpen size={32} />, title: "Print & Publication", desc: "Pixel-perfect layouts for magazines, brochures, menus, and packaging." },
    { id: "specialized", icon: <Wand2 size={32} />, title: "Specialized AI Design", desc: "Advanced photo manipulations, data visualizations, and generative AI art." }
  ];

  const renderServiceCard = (service, index) => (
    <Link to={`/services/${service.id}`} key={index} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, ...springAnim }}
        className="liquid-glass-card h-full rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:border-blue-500/50"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-6 shadow-inner">
          {service.icon}
        </div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-6">
          {service.desc}
        </p>
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform">
          View Details <ArrowRight size={16} className="ml-2" />
        </div>
      </motion.div>
    </Link>
  );

  return (
    <div className="w-full relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* Background Tech Animation */}
      <FloatingTech />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full animate-blob pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={springAnim} className="max-w-4xl mx-auto">
            <span className="inline-block py-2 px-6 rounded-full bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-8 shadow-sm border border-slate-100 dark:border-slate-700">
              Solutions Directory
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              We bridge the gap between robust software engineering and high-conversion creative design. Explore our two primary divisions below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Development Division */}
          <div className="mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Development</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Scalable, secure, and lightning-fast digital architecture engineered to power your business operations.
                </p>
              </div>
              <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800 mx-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devServices.map((service, index) => renderServiceCard(service, index))}
            </div>
          </div>

          {/* Marketing & Design Division */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Marketing & Design</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  High-impact visual storytelling and targeted campaigns designed to capture attention and drive revenue.
                </p>
              </div>
              <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800 mx-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketingServices.map((service, index) => renderServiceCard(service, index))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 text-center px-4 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springAnim}>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Not sure what you need?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            Let's get on a call. We can assess your current digital presence and recommend the exact services required to scale your brand.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1">
            Book a Free Consultation <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}