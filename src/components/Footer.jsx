import React from 'react';
import { Link } from 'react-router-dom'; // Important for internal routing
import { MapPin, Phone, ChevronRight, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800/50 pb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black text-white">M<span className="text-blue-500">A.</span></span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm">
              MotionAge transforms complex ideas into high-impact visual stories. Specializing in branding, social media, and digital design.
            </p>
            
            {/* Social Media Icons Section */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/motion_age/" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571351039643" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/motionage/" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@motionage1" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">Company & Services</h4>
            <ul className="space-y-3 text-sm">
              {['Branding & Identity', 'Social Media Ads', 'Print Publication', 'Poster Artworks', 'Photo Manipulation'].map((link, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"/> {link}
                  </a>
                </li>
              ))}
              {/* NEW VACANCY LINK ADDED HERE */}
              <li className="pt-2">
                <Link to="/vacancy" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-all"/> Careers & Announcements
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <div><p className="text-white font-bold mb-1">Office</p><span className="text-slate-500">Koteshwor - 32, Kathmandu</span></div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <div><p className="text-white font-bold mb-1">Direct</p><span className="text-slate-500">+977 9812340170</span></div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">Download</h4>
            <p className="text-slate-500 text-sm mb-4">Get a comprehensive look at our past projects and capabilities.</p>
            <a href="/motionage.pdf" download className="block text-center w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl font-bold hover:bg-blue-600 hover:border-blue-600 transition">
              Download Profile
            </a>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} MotionAge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}