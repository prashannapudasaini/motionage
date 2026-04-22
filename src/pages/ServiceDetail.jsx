import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Layers, Cpu, Code2, Globe } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  // EXPANDED Enterprise-Grade Content Database
  const serviceData = {
    "web-dev": {
      title: "Web Development",
      tagline: "High-Performance Digital Experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
      description: "We architect blazing-fast, SEO-optimized web applications using modern, edge-deployed frameworks. Your website isn't just a digital brochure; it's a scalable revenue engine. We focus on clean architecture, sub-second load times, and responsive interfaces that convert visitors into dedicated customers without dropping a single frame.",
      features: [
        "React & Next.js Headless Architecture", 
        "Responsive, Mobile-First UI/UX Integration", 
        "Technical SEO & Core Web Vitals Optimization", 
        "E-Commerce Infrastructure (Shopify/Custom)", 
        "CMS Setup (Sanity, Strapi, Contentful)", 
        "Bank-Level Security Protocols & SSL",
        "Web Accessibility (WCAG) Compliance",
        "Zero-Downtime Cloud Deployment"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "AWS"]
    },
    "app-dev": {
      title: "App Development",
      tagline: "Your Business in Their Pocket.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80",
      description: "From initial concept to App Store launch, we engineer seamless iOS and Android applications. We focus on highly intuitive UX paired with robust, scalable backend architecture to ensure your mobile ecosystem handles thousands of concurrent users seamlessly.",
      features: [
        "High-Performance iOS & Android Native Apps", 
        "React Native & Flutter Cross-Platform Builds", 
        "Secure User Authentication (OAuth/JWT/Biometrics)", 
        "In-App Purchases & Enterprise Payment Gateways", 
        "Real-Time Push Notification Infrastructure", 
        "App Store & Google Play Compliance & Deployment",
        "Real-time WebSocket Chat & Messaging",
        "Offline-First Architecture & Data Sync"
      ],
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "PostgreSQL", "GCP"]
    },
    "software": {
      title: "Custom Software",
      tagline: "Enterprise Solutions that Scale.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
      description: "Off-the-shelf software rarely fits enterprise workflows perfectly. We develop custom internal tools, intelligent CRMs, and highly-available SaaS platforms engineered specifically around your unique operational bottlenecks. Our codebases are clean, deeply documented, and built to scale globally.",
      features: [
        "Custom Operational Dashboard UI/UX", 
        "Complex Relational & NoSQL Database Architecture", 
        "RESTful & GraphQL API Microservices", 
        "Scalable Cloud Hosting (AWS/Azure/GCP)", 
        "Automated Workflow & Data Pipeline Scripts", 
        "Zero-Trust Security Architectures",
        "Seamless Third-Party Software Integration",
        "Legacy System Refactoring & Migration"
      ],
      techStack: ["Python", "Node.js", "Go", "Docker", "Kubernetes", "AWS EC2", "MongoDB"]
    },
    "branding": {
      title: "Branding & Identity",
      tagline: "Your Brand's Visual DNA.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
      description: "We don't just design logos; we engineer comprehensive visual identities. From typography selection to color psychology, we ensure your brand commands authority in crowded markets. We create the foundational visual assets that make your business instantly recognizable to high-ticket clients.",
      features: [
        "Custom Minimalist & Strategic Logo Design", 
        "Comprehensive Enterprise Brand Guidelines", 
        "Corporate Stationery & Digital Letterheads", 
        "High-Converting Investor Pitch Decks", 
        "Strategic Typography Selection & Pairing", 
        "Color Palette Curation based on Psychology",
        "Brand Voice & Market Positioning Strategy",
        "High-Fidelity Merchandise Mockups"
      ],
      techStack: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Cinema 4D"]
    },
    "marketing": {
      title: "Marketing & Advertising",
      tagline: "Creatives that Convert.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      description: "Thumb-stopping visuals designed specifically for the modern social feed and algorithmic ad platforms. We craft high-end graphics tailored for Meta Ads, high-conversion landing pages, and email campaigns. We utilize relentless A/B testing to ensure your marketing budget delivers absolute maximum ROI.",
      features: [
        "Cohesive Social Media Grid Architecture", 
        "High-Conversion Digital Ad Creatives (Meta/Google)", 
        "Responsive Email Newsletter Engineering", 
        "Event Flyers & Digital Promotional Posters", 
        "End-to-End Campaign Strategy & Funnel Design", 
        "Multivariate A/B Testing Variations",
        "High-CTR YouTube Thumbnails",
        "LinkedIn B2B Corporate Graphics"
      ],
      techStack: ["Meta Ads Manager", "Google Analytics", "Klaviyo", "Figma", "After Effects"]
    },
    "print": {
      title: "Print & Publication",
      tagline: "Tangible Excellence.",
      image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=2000&q=80",
      description: "In a highly digital world, premium print materials stand out more than ever. We engineer pixel-perfect, CMYK-ready layouts for editorial magazines, corporate brochures, and product packaging that demand to be held, experienced, and remembered.",
      features: [
        "Multi-page Editorial Magazine Layouts", 
        "Premium Product Packaging & Box Design", 
        "eBook & Paperback Book Formatting", 
        "High-End Hospitality & Restaurant Menus", 
        "Compliance-Ready Product Label Design", 
        "Annual Corporate Investor Reports",
        "Large-Format Billboard & Hoarding Design",
        "Luxury Business Card Print Preparation"
      ],
      techStack: ["Adobe InDesign", "Illustrator", "Pantone Matching", "Print Pre-flighting"]
    },
    "specialized": {
      title: "Specialized AI Design",
      tagline: "The Future of Visuals.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",
      description: "Leveraging cutting-edge neural networks alongside human art direction to produce impossible imagery. We handle complex data visualizations, hyper-realistic surreal manipulations, and highly technical aesthetic composites that put your brand at the absolute forefront of innovation.",
      features: [
        "Complex Data Visualization (Infographics)", 
        "Custom High-Resolution Cover Art", 
        "Advanced Hyper-Realistic Photo Retouching", 
        "Generative AI Image Prompting & Blending", 
        "Technical & Architectural Composites", 
        "Custom Digital Vectors & Illustrations",
        "Surreal High-Fantasy Photo Manipulation",
        "Precision Vector Tracing"
      ],
      techStack: ["Midjourney", "Stable Diffusion", "Photoshop Beta", "Figma", "Illustrator"]
    }
  };

  const data = serviceData[serviceId] || serviceData["branding"]; 

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] transition-colors duration-500 font-sans">
      
      {/* EXACT MATCH HERO SECTION (Scaled Down) */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0a0f1c] flex items-center justify-center min-h-[45vh] border-b border-white/5">
        {/* Deep cinematic gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,27,75,0.6)_0%,_rgba(5,8,20,1)_100%)] z-0 pointer-events-none"></div>
        
        {/* Subtle glowing orbs */}
        <div className="absolute top-10 left-[20%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] z-0"></div>
        <div className="absolute top-20 left-[25%] w-2 h-2 rounded-full bg-blue-600/50 z-0"></div>
        <div className="absolute top-[30%] left-[40%] w-1 h-1 rounded-full bg-purple-500/40 z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center w-full">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            {/* Pill Badge */}
            <div className="inline-block py-1.5 px-4 rounded-full bg-[#111827]/80 backdrop-blur-md border border-white/10 text-blue-400 font-extrabold uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-6 shadow-xl">
              Service Deep Dive
            </div>
            
            {/* Scaled Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-xl leading-[1.05]">
              {data.title}
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CINEMATIC HERO IMAGE (Tighter Margin) */}
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-900"
        >
          <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </section>

      {/* CONTENT SECTION (Enterprise Split Layout) */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Description & Tech Stack */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 leading-[1.05]">The Architecture</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Tech Stack Mini-Bento */}
              <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/5 rounded-[1.5rem] p-6 md:p-8 shadow-sm">
                <h3 className="text-[11px] md:text-xs font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Cpu size={14} /> Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-slate-800/80 rounded-md text-xs font-bold text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Capabilities List */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="lg:col-span-5">
               <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 flex items-center gap-3">
                  <Layers className="text-blue-600 dark:text-blue-500" size={24} /> Key Capabilities
               </h3>
               
               <div className="flex flex-col gap-3">
                {data.features.map((feat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-[#0c1222] border border-transparent hover:border-slate-200 dark:hover:border-slate-800/80 transition-colors group"
                  >
                    <CheckCircle2 className="text-blue-600 dark:text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                    <span className="font-medium text-slate-800 dark:text-slate-200 text-sm leading-snug">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA (Enterprise Grade) */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0c1222] text-center px-4 border-t border-slate-200 dark:border-white/5">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
            Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">{data.title.toLowerCase()}</span>?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Let's schedule a technical discovery call to map out the architecture and timeline for your next major deployment.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-xs md:text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg">
            Initiate Project <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}