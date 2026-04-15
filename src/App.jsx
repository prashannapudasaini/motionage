import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClickParticles from './components/ClickParticles'; 
import CustomCursor from './components/CustomCursor'; 

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage'; 
import ServiceDetail from './pages/ServiceDetail';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VacancyPage from './pages/VacancyPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Handle Dark/Light Mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      {/* GLOBAL MICRO-INTERACTIONS */}
      <CustomCursor /> 
      <ClickParticles /> 
      
      <div className="relative min-h-screen font-sans antialiased selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-200 bg-slate-50 dark:bg-[#0a0f1c]">
        
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        
        {/* Main Content Area */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} /> 
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vacancy" element={<VacancyPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}