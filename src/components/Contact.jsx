import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    // Replace this string with the Access Key sent to motionage1@gmail.com from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('idle');
        alert("Error sending message. Please try again.");
      }
    } catch (err) {
      setFormStatus('idle');
      alert("Something went wrong!");
    }
  };

  const contactItems = [
    { icon: MapPin, label: 'Location', value: 'Koteshwor - 32, Kathmandu, Nepal', color: 'emerald' },
    { icon: Phone, label: 'Phone', value: '+977 9812340170', color: 'blue' },
    { icon: Mail, label: 'Email', value: 'motionage1@gmail.com', color: 'purple' },
    { icon: Instagram, label: 'Social', value: '@motion_age', color: 'pink' },
  ];

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 scroll-mt-20 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 tracking-wide">Available for work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Let's Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">Extraordinary Together</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ready to elevate your brand? Get in touch with us and let's bring your vision to life with stunning design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                  </div>
                  <h4 className="text-slate-900 font-semibold mb-1">{item.label}</h4>
                  <p className="text-slate-500 text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Optional: Office hours or additional info */}
            <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/50">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-lg">⏰</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Office Hours</p>
                  <p className="text-xs text-slate-500">Mon - Fri: 10:00 AM - 6:00 PM (NPT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service interested in</label>
                  <select name="service" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-transparent transition-all cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="Logo & Brand Identity">Logo & Brand Identity</option>
                    <option value="Poster & Print Design">Poster & Print Design</option>
                    <option value="Social Media Graphics">Social Media Graphics</option>
                    <option value="Website UI/UX">Website UI/UX</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Project details</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    formStatus === 'idle'
                      ? 'bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5'
                      : formStatus === 'sending'
                      ? 'bg-slate-400 cursor-wait'
                      : 'bg-emerald-500 cursor-default'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Message Sent!</span>
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-xs text-slate-400 text-center mt-6">
                By submitting, you agree to our{' '}
                <a href="#" className="text-slate-600 hover:text-slate-900 underline-offset-2 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}