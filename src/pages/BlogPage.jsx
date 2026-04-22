import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowUpRight, BookOpen, Mail, Code, Palette, Megaphone, Terminal, Cpu, Camera, TrendingUp, Download } from 'lucide-react';
import SEO from '../components/SEO';

// Import existing assets to use as blog thumbnails
import hero_1 from '../assets/hero_1.png';
import hero_2 from '../assets/hero_2.png';
import logo3 from '../assets/logo3.png';
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import itImage from '../assets/hero_it.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function BlogPage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Featured Article (Hero Post)
  const featuredPost = {
    id: "future-of-web-architecture",
    title: "The Future of Enterprise Web Architecture in 2025",
    excerpt: "Why headless CMS, edge computing, and Next.js are no longer just buzzwords, but absolute necessities for scaling global digital ecosystems without dropping a single frame.",
    category: "Engineering",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    image: hero_2,
  };

  // Categories Data
  const categories = [
    { name: "Engineering", count: 24, icon: <Code size={18} />, color: "blue" },
    { name: "Design & UX", count: 18, icon: <Palette size={18} />, color: "purple" },
    { name: "Growth Marketing", count: 15, icon: <Megaphone size={18} />, color: "emerald" },
    { name: "Architecture", count: 12, icon: <Cpu size={18} />, color: "amber" },
    { name: "Video Production", count: 9, icon: <Camera size={18} />, color: "rose" },
    { name: "Tech Culture", count: 7, icon: <Terminal size={18} />, color: "indigo" },
  ];

  // Recent Articles Array
  const recentPosts = [
    {
      id: "psychology-of-branding",
      title: "Designing for Conversion: The Psychology Behind Brand Identity",
      excerpt: "A logo is not just a mark. Explore how geometric drafting and color psychology directly influence user trust and customer acquisition costs.",
      category: "Design & UX",
      date: "Sep 28, 2024",
      readTime: "5 min read",
      image: logo3
    },
    {
      id: "social-media-roi",
      title: "Maximizing ROI with Data-Driven Meta Ads",
      excerpt: "Stop guessing and start scaling. How to utilize multivariate A/B testing and algorithmic creative design to multiply your return on ad spend.",
      category: "Growth Marketing",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      image: graphic1
    },
    {
      id: "cinematic-storytelling",
      title: "Cinematic Storytelling in B2B SaaS",
      excerpt: "Why high-fidelity motion graphics and corporate documentaries are replacing traditional pitch decks in the modern enterprise sales funnel.",
      category: "Video Production",
      date: "Aug 30, 2024",
      readTime: "7 min read",
      image: graphic2
    },
    {
      id: "zero-trust-security",
      title: "Implementing Zero-Trust Architecture",
      excerpt: "A deep dive into military-grade web security protocols required for handling millions of concurrent users securely.",
      category: "Engineering",
      date: "Aug 12, 2024",
      readTime: "10 min read",
      image: itImage
    },
    {
      id: "visual-identity-craft",
      title: "Building the MotionAge Framework",
      excerpt: "How we bridge the gap between heavy enterprise software engineering and award-winning visual identity.",
      category: "Company",
      date: "Jul 22, 2024",
      readTime: "4 min read",
      image: hero_1
    }
  ];

  // Trending List (Minimalist List View)
  const trendingPosts = [
    { id: "edge-functions-explained", title: "Edge Functions: Delivering dynamic content at zero latency.", readTime: "4 min read" },
    { id: "color-theory-2025", title: "The 2025 Shift in SaaS Color Theory and Typography.", readTime: "6 min read" },
    { id: "kubernetes-scaling", title: "Scaling Kubernetes clusters for massive concurrent traffic.", readTime: "12 min read" },
    { id: "ad-fatigue", title: "Combating Ad Fatigue with AI-generated dynamic creatives.", readTime: "5 min read" }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] selection:bg-blue-500/30 font-sans transition-colors duration-500">
      <SEO title="Insights & Blog | MotionAge" description="Explore our latest thoughts on software architecture, digital design, and growth marketing." />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12)_0%,_transparent_60%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-5 shadow-sm">
              <BookOpen size={14} /> MotionAge Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
              Engineering & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Creative Thinking.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Deep dives into software architecture, brand identity systems, and data-driven marketing from the MotionAge collective.
            </p>
          </motion.div>
        </div>
      </section>

      {isReady && (
        <div className="relative z-10">
          
          {/* 2. FEATURED ARTICLE (Bento Hero) */}
          <section className="pt-16 pb-12 md:pt-20 md:pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">Featured Insight</h3>
              
              <Link to={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  
                  {/* Image Side */}
                  <div className="h-[300px] lg:h-full w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                    <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5"><Calendar size={14}/> {featuredPost.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14}/> {featuredPost.readTime}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          </section>

          {/* 3. BROWSE BY DISCIPLINE (Category Grid) */}
          <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-[#070b17]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="mb-8">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Browse by Discipline</h3>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((cat, idx) => {
                  const colorThemes = {
                    blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
                    purple: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
                    emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white",
                    amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
                    rose: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white",
                    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white",
                  };
                  
                  return (
                    <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                      <Link to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="group flex flex-col items-center justify-center p-6 rounded-[1.25rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${colorThemes[cat.color]}`}>
                          {cat.icon}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 tracking-tight text-center">{cat.name}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{cat.count} Posts</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 4. RECENT ARTICLES GRID & TRENDING LIST (Split Layout) */}
          <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Recent Grid */}
              <div className="lg:col-span-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Latest Publications</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {recentPosts.map((post, idx) => (
                    <motion.div 
                      key={idx} 
                      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                    >
                      <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-[200px] w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                          <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                          <span className="text-[9px] md:text-[10px] font-extrabold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">
                            {post.category}
                          </span>
                          <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-light line-clamp-3 mb-6 flex-grow">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium pt-4 border-t border-slate-100 dark:border-slate-800">
                            <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Trending List */}
              <div className="lg:col-span-4">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Trending</h3>
                </motion.div>

                <div className="flex flex-col">
                  {trendingPosts.map((post, idx) => (
                    <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.1 }}>
                      <Link to={`/blog/${post.id}`} className="group block py-5 border-b border-slate-100 dark:border-slate-800/80 last:border-0 hover:pl-2 transition-all duration-300">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mb-2 block">{String(idx + 1).padStart(2, '0')}</span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* 5. INDUSTRY REPORT CTA (Inserted into sidebar for visual break) */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-12 rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-900/40 dark:to-[#0c1222] p-8 border border-slate-800 dark:border-blue-500/20 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-5">
                    <Download size={18} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight mb-3">2025 Tech & Design Architecture Report</h3>
                  <p className="text-xs text-slate-300 font-light mb-6">Download our comprehensive 40-page whitepaper on scaling digital ecosystems.</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors">
                    Download Free PDF
                  </button>
                </motion.div>

              </div>
            </div>
          </section>

          {/* 6. NEWSLETTER CTA (Enterprise Scale) */}
          <section className="py-20 md:py-24 bg-white dark:bg-[#070b17] transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.04)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-[1.05]">
                  Stay ahead of the curve.
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light mb-10 max-w-lg mx-auto leading-relaxed">
                  Subscribe to our newsletter for exclusive insights into digital architecture, growth marketing, and enterprise design.
                </p>

                <form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    required
                    className="w-full bg-slate-50 dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-3.5 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                  />
                  <button type="submit" className="w-full sm:w-auto shrink-0 bg-slate-900 dark:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-md flex items-center justify-center gap-2">
                    Subscribe <ArrowRight size={14} />
                  </button>
                </form>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-4 font-medium">No spam. Unsubscribe at any time.</p>
              </motion.div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}