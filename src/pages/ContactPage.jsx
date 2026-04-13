import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  // Web3Forms Submit Handler
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace this string with the Access Key sent to motionage1@gmail.com from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully to MotionAge!");
        event.target.reset(); // Clear the form
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full">
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900 min-h-[80vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springAnim} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">
              Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Brand</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400">
              Drop us a message below and we will get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, ...springAnim }} className="lg:col-span-2 space-y-6">
              {[
                { icon: <MapPin size={24}/>, title: "Location", desc: "Koteshwor - 32, Kathmandu, Nepal" },
                { icon: <Phone size={24}/>, title: "Phone", desc: "+977 9812340170" },
                { icon: <Mail size={24}/>, title: "Email", desc: "motionage1@gmail.com" },
                { icon: <Instagram size={24}/>, title: "Social", desc: "@motion_age" }
              ].map((item, i) => (
                <div key={i} onMouseMove={handleMouseMove} className="liquid-glass-card p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, ...springAnim }} className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-950 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 relative z-10">Send a Message</h3>
                
                <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" name="name" required placeholder="Full Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                    <input type="email" name="email" required placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                  </div>
                  <input type="text" name="service" required placeholder="Design Service (e.g., Logo, Posters)" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                  <textarea name="message" required placeholder="Tell us about your project..." rows="5" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"></textarea>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition w-full shadow-xl shadow-blue-600/20 hover:-translate-y-1">
                    Send Request <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}