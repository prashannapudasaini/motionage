import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, Sun, Moon, Layout, Megaphone, BookOpen, Wand2, Code, Smartphone, Monitor } from 'lucide-react';

import logo from '../assets/logo.png';

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const devServices = [
    { id: "web-dev", name: "Web Development", icon: <Monitor size={20} />, desc: "High-performance websites." },
    { id: "app-dev", name: "App Development", icon: <Smartphone size={20} />, desc: "iOS & Android applications." },
    { id: "software", name: "Custom Software", icon: <Code size={20} />, desc: "Enterprise IT solutions." }
  ];

  const marketingServices = [
    { id: "branding", name: "Branding & Identity", icon: <Layout size={20} />, desc: "Logos & style guides." },
    { id: "marketing", name: "Marketing & Ads", icon: <Megaphone size={20} />, desc: "Social media & creatives." },
    { id: "print", name: "Print Publication", icon: <BookOpen size={20} />, desc: "Magazines & packaging." },
    { id: "specialized", name: "Specialized AI Design", icon: <Wand2 size={20} />, desc: "Data viz & AI workflows." }
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      
      <div className={`bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400 text-xs py-2 hidden lg:block transition-all border-b border-slate-300 dark:border-slate-800 ${scrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 font-medium">Koteshwor - 32, Kathmandu</span>
            <span className="flex items-center gap-2 font-medium"><Mail size={12} className="text-blue-600 dark:text-blue-500"/> motionage1@gmail.com</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2 font-medium"><Phone size={12} className="text-blue-600 dark:text-blue-500"/> +977 9812340170</span>
          </div>
        </div>
      </div>

      <nav className={`bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-all duration-300 border-b border-slate-200 dark:border-slate-800 ${scrolled ? 'shadow-xl py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src={logo} alt="MotionAge Logo" className="h-10 w-auto" />
            <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white hidden sm:block">
              Motion<span className="text-blue-600 dark:text-blue-500">Age.</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Home</Link>
            <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Company</Link>
            
            {/* Mega Menu with Clickable Root Link */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <div className="flex items-center gap-1 py-2 cursor-pointer">
                <Link to="/services" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">
                  Services
                </Link>
                <ChevronDown size={16} className={`text-slate-700 dark:text-slate-300 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {dropdownOpen && (
                <div className="absolute top-full -left-[400px] w-[1000px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 rounded-2xl animate-fade-in-down flex overflow-hidden">
                  
                  <div className="w-1/3 p-6 border-r border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-3">Development</h3>
                    <div className="space-y-2">
                      {devServices.map((service, idx) => (
                        <Link key={idx} to={`/services/${service.id}`} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">{service.icon}</div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{service.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-1/3 p-6">
                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-3">Marketing & Design</h3>
                    <div className="space-y-2">
                      {marketingServices.map((service, idx) => (
                        <Link key={idx} to={`/services/${service.id}`} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">{service.icon}</div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{service.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-1/3 p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <h3 className="text-2xl font-black mb-3 relative z-10">End-to-End Solutions</h3>
                    <p className="text-sm text-blue-100 mb-6 relative z-10">We build robust digital platforms and engineer the marketing campaigns that drive traffic to them.</p>
                    <Link to="/services" className="inline-block mt-2 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold w-max hover:bg-slate-100 transition-colors relative z-10">
                      View All Services
                    </Link>
                  </div>

                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Portfolio</Link>
            <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              Hire Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-400">
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 dark:text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto max-h-[85vh] animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block font-medium text-slate-900 dark:text-white py-2">Home</Link>
              <Link to="/about" className="block font-medium text-slate-900 dark:text-white py-2">Company</Link>
              
              <div>
                <div className="flex items-center justify-between w-full py-2 border-b border-slate-100 dark:border-slate-800">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-900 dark:text-white flex-grow">
                    Our Services
                  </Link>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="p-2 text-slate-900 dark:text-white">
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-4 mt-3 space-y-4">
                    {devServices.map((service, idx) => (
                      <Link key={idx} to={`/services/${service.id}`} className="block">
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">{service.name}</span>
                      </Link>
                    ))}
                    {marketingServices.map((service, idx) => (
                      <Link key={`m-${idx}`} to={`/services/${service.id}`} className="block">
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/portfolio" className="block font-medium text-slate-900 dark:text-white py-2">Portfolio</Link>
              <Link to="/contact" className="block font-medium text-slate-900 dark:text-white py-2">Contact</Link>
              
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <Link to="/contact" className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Hire Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}