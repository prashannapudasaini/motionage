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

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Handle scroll state for navbar shrinking
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const devServices = [
    { id: "web-dev", name: "Web Development", icon: <Monitor size={18} />, desc: "High-performance websites." },
    { id: "app-dev", name: "App Development", icon: <Smartphone size={18} />, desc: "iOS & Android applications." },
    { id: "software", name: "Custom Software", icon: <Code size={18} />, desc: "Enterprise IT solutions." }
  ];

  const marketingServices = [
    { id: "branding", name: "Branding & Identity", icon: <Layout size={18} />, desc: "Logos & style guides." },
    { id: "marketing", name: "Marketing & Ads", icon: <Megaphone size={18} />, desc: "Social media & creatives." },
    { id: "print", name: "Print Publication", icon: <BookOpen size={18} />, desc: "Magazines & packaging." },
    { id: "specialized", name: "Specialized AI Design", icon: <Wand2 size={18} />, desc: "Data viz & AI workflows." }
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      
      {/* Top Bar - Hidden on scroll */}
      <div className={`bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-1.5 hidden lg:block transition-all border-b border-slate-200 dark:border-slate-800/80 ${scrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'opacity-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-medium tracking-wide">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1.5">Koteshwor - 32, Kathmandu</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-blue-600 dark:text-blue-400"/> motionage1@gmail.com</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-blue-600 dark:text-blue-400"/> +977 9812340170</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/85 dark:bg-[#050814]/85 backdrop-blur-xl transition-all duration-300 border-b border-slate-200 dark:border-white/5 ${scrolled ? 'shadow-sm py-2.5' : 'py-3.5'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <img src={logo} alt="MotionAge Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 dark:text-white hidden sm:block">
              Motion<span className="text-blue-600 dark:text-blue-500">Age.</span>
            </span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Company</Link>
            
            {/* Mega Menu Container */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <div className="flex items-center gap-1 py-2 cursor-pointer">
                <Link to="/services" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <ChevronDown size={14} className={`text-slate-500 dark:text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute top-full -left-[350px] w-[900px] bg-white dark:bg-[#0c1222] shadow-2xl border border-slate-200 dark:border-slate-800/80 rounded-[1.5rem] animate-fade-in-down flex overflow-hidden">
                  
                  {/* Dev Column */}
                  <div className="w-1/3 p-8 border-r border-slate-100 dark:border-slate-800/50">
                    <h3 className="text-[10px] font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4 px-3">Engineering</h3>
                    <div className="space-y-1">
                      {devServices.map((service, idx) => (
                        <Link key={idx} to={`/services/${service.id}`} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#050814] transition-colors group/item">
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">{service.icon}</div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{service.name}</h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Marketing Column */}
                  <div className="w-1/3 p-8">
                    <h3 className="text-[10px] font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4 px-3">Design & Growth</h3>
                    <div className="space-y-1">
                      {marketingServices.map((service, idx) => (
                        <Link key={idx} to={`/services/${service.id}`} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#050814] transition-colors group/item">
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">{service.icon}</div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{service.name}</h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Highlight CTA Column */}
                  <div className="w-1/3 p-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-700 to-indigo-900 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <h3 className="text-2xl font-black mb-3 tracking-tighter relative z-10 leading-[1.1]">End-to-End Solutions</h3>
                    <p className="text-xs text-blue-100/80 mb-8 font-light relative z-10 leading-relaxed">We build robust digital platforms and engineer the marketing campaigns that drive traffic to them.</p>
                    <Link to="/services" className="inline-block bg-white text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest w-max hover:bg-slate-100 hover:scale-105 transition-all shadow-lg relative z-10">
                      View All Services
                    </Link>
                  </div>

                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-[#0c1222] border border-transparent dark:border-slate-800 hover:bg-slate-200 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link to="/contact" className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-md">
              Hire Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
             <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-[#0c1222] text-slate-600 dark:text-slate-400">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 text-slate-900 dark:text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#050814] border-t border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto max-h-[85vh] animate-fade-in-down">
            <div className="px-6 py-6 space-y-3">
              <Link to="/" className="block font-semibold text-lg text-slate-900 dark:text-white py-2">Home</Link>
              <Link to="/about" className="block font-semibold text-lg text-slate-900 dark:text-white py-2">Company</Link>
              
              <div>
                <div className="flex items-center justify-between w-full py-2 border-b border-slate-100 dark:border-slate-800/80">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-slate-900 dark:text-white flex-grow">
                    Our Services
                  </Link>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="p-2 text-slate-900 dark:text-white">
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-4 mt-4 space-y-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Engineering</h4>
                    {devServices.map((service, idx) => (
                      <Link key={idx} to={`/services/${service.id}`} className="block">
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">{service.name}</span>
                      </Link>
                    ))}
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-6 mb-2">Design & Growth</h4>
                    {marketingServices.map((service, idx) => (
                      <Link key={`m-${idx}`} to={`/services/${service.id}`} className="block">
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/portfolio" className="block font-semibold text-lg text-slate-900 dark:text-white py-2">Portfolio</Link>
              <Link to="/blog" className="block font-semibold text-lg text-slate-900 dark:text-white py-2">Blog</Link>
              <Link to="/contact" className="block font-semibold text-lg text-slate-900 dark:text-white py-2">Contact</Link>
              
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link to="/contact" className="block w-full text-center bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest shadow-md">
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