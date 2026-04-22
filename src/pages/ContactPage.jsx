import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CalendarCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Automatically construct the email and open the user's mail client
  const onSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const subject = encodeURIComponent(`New Project Consultation: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Budget Range: ${budget}\n\n` +
      `Project Scope & Goals:\n${message}`
    );

    // Redirect to email client
    window.location.href = `mailto:motionage1@gmail.com?subject=${subject}&body=${body}`;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 transition-colors duration-500 font-sans">
      <SEO title="Book Consultation" description="Schedule a free digital strategy consultation with MotionAge." />
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <CalendarCheck size={14} /> Free Strategy Session
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
            Let's Architect <br/> Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Big Move.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Fill out the form to request a comprehensive consultation and project audit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">
          
          {/* Contact Details Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: <MapPin size={20}/>, title: "Headquarters", desc: "Koteshwor - 32, Kathmandu, Nepal" },
              { icon: <Phone size={20}/>, title: "Direct Line", desc: "+977 9812340170" },
              { icon: <Mail size={20}/>, title: "Business Inquiries", desc: "motionage1@gmail.com" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="hidden" animate="show" variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-5 transition-shadow hover:shadow-md"
              >
                <div className="p-3.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">{item.icon}</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">{item.title}</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Form */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <div className="bg-white dark:bg-[#0c1222] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-lg relative overflow-hidden h-full">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Request Consultation</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                    <input type="email" name="email" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Project Budget Range</label>
                  <select name="budget" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 outline-none transition appearance-none text-sm">
                    <option value="">Select Range...</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $15k">$5k - $15k</option>
                    <option value="$15k+">$15k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Project Scope & Goals</label>
                  <textarea name="message" required rows="4" className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none text-sm"></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition shadow-lg hover:-translate-y-0.5 mt-2">
                  Launch Mail Client <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}