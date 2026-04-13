import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // FULLY EXPANDED Content Database with HIGH-QUALITY INTERNET IMAGES (Unsplash)
  const serviceData = {
    // ---------------- DEVELOPMENT ----------------
    "web-dev": {
      title: "Web Development",
      tagline: "High-Performance Digital Experiences.",
      // Unsplash Image: Laptop with code
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      description: "We build blazing-fast, SEO-optimized websites using modern frameworks like React, Next.js, and Tailwind CSS. Your website isn't just a digital brochure; it's your hardest working salesperson. We focus on clean architecture, lightning-fast load times, and responsive designs that look perfect on any device.",
      features: [
        "React & Next.js Frameworks", 
        "Responsive Mobile-First Design", 
        "Technical SEO Optimization", 
        "E-Commerce Integrations (Shopify/Custom)", 
        "CMS Setup (WordPress/Sanity/Strapi)", 
        "Speed & Performance Audits",
        "Web Accessibility (WCAG) Compliance",
        "Secure Hosting Setup"
      ]
    },
    "app-dev": {
      title: "App Development",
      tagline: "Your Business in Their Pocket.",
      // Unsplash Image: Mobile app development / UI
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "From initial concept to App Store launch, we engineer seamless iOS and Android applications. We focus on highly intuitive UI/UX paired with robust, scalable backend architecture to ensure your app handles thousands of users without breaking a sweat.",
      features: [
        "iOS & Android Native Apps", 
        "React Native Cross-Platform", 
        "User Authentication (OAuth/JWT)", 
        "In-App Purchases & Stripe Payments", 
        "Push Notifications Setup", 
        "App Store & Google Play Deployment",
        "Real-time Chat & Messaging",
        "Offline Mode Functionality"
      ]
    },
    "software": {
      title: "Custom Software",
      tagline: "Enterprise Solutions that Scale.",
      // Unsplash Image: Complex code on screen
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      description: "Off-the-shelf software rarely fits perfectly. We develop custom internal tools, CRMs, and SaaS platforms engineered specifically around your unique operational bottlenecks. Our codebases are clean, documented, and built to scale globally.",
      features: [
        "Custom Dashboard UI/UX", 
        "Relational Database Architecture", 
        "RESTful & GraphQL API Development", 
        "Cloud Hosting (AWS/Azure/GCP)", 
        "Automated Workflow Scripts", 
        "Bank-Level Security Protocols",
        "Third-Party Software Integration",
        "Legacy System Migration"
      ]
    },
    // ---------------- MARKETING & DESIGN ----------------
    "branding": {
      title: "Branding & Identity",
      tagline: "Your Brand's Visual DNA.",
      // Unsplash Image: Design agency / Color swatches
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      description: "We don't just design logos; we engineer comprehensive visual identities. From typography selection to color psychology, we ensure your brand speaks volumes before you ever say a word. We create the foundational assets that make your business instantly recognizable.",
      features: [
        "Custom Minimalist & Complex Logo Design", 
        "Comprehensive Brand Guidelines Book", 
        "Business Stationery & Letterheads", 
        "Investor Pitch Deck Templates", 
        "Typography Selection & Pairing", 
        "Color Palette Curation & Psychology",
        "Brand Voice & Messaging Strategy",
        "Merchandise Mockups"
      ]
    },
    "marketing": {
      title: "Marketing & Advertising",
      tagline: "Creatives that Convert.",
      // Unsplash Image: Analytics / Social media planning
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Thumb-stopping visuals designed specifically for the modern social feed. We craft high-end graphics tailored for Meta Ads, Instagram grids, and email campaigns. We focus on A/B testing visual hooks to ensure your marketing budget delivers maximum ROI.",
      features: [
        "Social Media Grid Graphics", 
        "High-Conversion Digital Ad Creatives", 
        "Email Newsletter Design", 
        "Event Flyers & Promotional Posters", 
        "Campaign Strategy & Funnel Design", 
        "A/B Testing Variations",
        "YouTube Thumbnails",
        "LinkedIn Corporate Graphics"
      ]
    },
    "print": {
      title: "Print & Publication",
      tagline: "Tangible Excellence.",
      // Unsplash Image: High quality magazines
      image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=800&q=80",
      description: "In a highly digital world, premium print materials stand out more than ever. We design pixel-perfect, CMYK-ready layouts for magazines, corporate brochures, and product packaging that demand to be held and experienced.",
      features: [
        "Multi-page Magazine Layouts", 
        "Product Packaging & Box Design", 
        "eBook & Paperback Book Formatting", 
        "High-End Restaurant Menus", 
        "Product Label Design", 
        "Annual Corporate Reports",
        "Billboard & Hoarding Design",
        "Business Card Print Preparation"
      ]
    },
    "specialized": {
      title: "Specialized AI Design",
      tagline: "The Future of Visuals.",
      // Unsplash Image: Abstract AI Tech
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      description: "Leveraging cutting-edge tools like Gemini AI, Grok, and ChatGPT alongside Adobe Creative Cloud to produce impossible imagery. We handle complex data visualizations, surreal photo manipulations, and highly technical aesthetic drawings.",
      features: [
        "Complex Data Visualization (Infographics)", 
        "Custom Podcast Cover Art", 
        "Advanced Photo Retouching", 
        "AI Image Generation & Prompting", 
        "Technical Architectural Drawings", 
        "Custom Digital Illustrations",
        "Surreal Photo Manipulation",
        "Vector Tracing"
      ]
    }
  };

  const data = serviceData[serviceId] || serviceData["branding"]; // Fallback if URL is wrong
  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <div className="w-full">
      {/* Hyper-Liquid Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center min-h-[60vh] border-b border-slate-200 dark:border-slate-800">
        {/* Animated Background Orbs */}
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] rounded-full animate-blob pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/20 blur-[120px] rounded-full animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={springAnim} className="max-w-4xl mx-auto">
            <span className="inline-block py-2 px-6 rounded-full bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-8 shadow-sm border border-slate-100 dark:border-slate-700">
              Service Deep Dive
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Staggered Animations */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Approach & Full Features List */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={springAnim} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Our Approach</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {data.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {data.features.map((feat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                    className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-colors group"
                  >
                    <CheckCircle2 className="text-blue-600 dark:text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-medium text-slate-800 dark:text-slate-200 text-sm md:text-base">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Liquid Image Representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="relative h-[500px] md:h-[600px] flex items-center justify-center"
            >
              {/* Background glowing blob */}
              <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-purple-400/40 to-blue-400/40 dark:from-purple-600/40 dark:to-blue-600/40 blur-3xl animate-blob" />

              {/* The liquid mask container */}
              <div className="relative w-[400px] h-[400px] animate-liquid shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden border border-white/40 dark:border-white/20 flex items-center justify-center z-10 bg-slate-900">
                
                {/* Dynamically loaded clear image based on the service clicked */}
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover relative z-10" 
                />

                {/* Inner glass reflection floating OVER the image to give the liquid look */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 dark:via-white/10 to-white/0 animate-[liquid_8s_ease-in-out_infinite_reverse] z-20 pointer-events-none"></div>
              </div>

              {/* Floating accent elements */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 backdrop-blur-lg rounded-2xl border border-white/40 dark:border-white/10 rotate-12 z-20" />
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-purple-400/30 dark:bg-purple-500/30 backdrop-blur-md border border-white/40 dark:border-white/10 z-20" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900 text-center px-4 border-t border-slate-200 dark:border-slate-800">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springAnim}>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Ready to elevate your {data.title.toLowerCase()}?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            Let's discuss your project requirements and build something extraordinary together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1">
            Start Your Project <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}