import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CalendarCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with Web3Forms Key

    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    if (data.success) {
      alert("Consultation Request Sent! We will review your project shortly.");
      event.target.reset();
    } else {
      alert("Error sending request. Please try again.");
    }
  };

  return (
    <div className="w-full bg-[#050814] min-h-screen pt-24 pb-32">
      <SEO title="Book Consultation" description="Schedule a free digital strategy consultation with MotionAge." />
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <CalendarCheck size={14} /> Free Strategy Session
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Architect <br/> Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Big Move.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light">
            Fill out the form to request a comprehensive consultation and project audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Details Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: <MapPin size={20}/>, title: "Headquarters", desc: "Koteshwor - 32, Kathmandu, Nepal" },
              { icon: <Phone size={20}/>, title: "Direct Line", desc: "+977 9812340170" },
              { icon: <Mail size={20}/>, title: "Business Inquiries", desc: "motionage1@gmail.com" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-start gap-6 backdrop-blur-md">
                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Request Consultation</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-[#0a0f1c] border border-white/10 text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                    <input type="email" name="email" required className="w-full bg-[#0a0f1c] border border-white/10 text-white px-5 py-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Budget Range</label>
                  <select name="budget" required className="w-full bg-[#0a0f1c] border border-white/10 text-white px-5 py-4 rounded-xl focus:border-blue-500 outline-none transition appearance-none">
                    <option value="">Select Range...</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $15k">$5k - $15k</option>
                    <option value="$15k+">$15k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Scope & Goals</label>
                  <textarea name="message" required rows="4" className="w-full bg-[#0a0f1c] border border-white/10 text-white px-5 py-4 rounded-xl focus:border-blue-500 outline-none transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 mt-4">
                  Book Free Consultation <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}