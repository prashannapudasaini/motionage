import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import images from assets folder
import mukeshImage from './assets/mukesh-yadav.jpg';
import prakashImage from './assets/prakash-pant.jpg';
import rajnishImage from './assets/rajnish-sharma.jpg';
import bishantImage from './assets/bishant-ojha.jpg';
import prasamshaImage from './assets/prasamsha-dhungana.jpg';
import prashannaImage from './assets/prashanna-pudasaini.jpg';

export default function Team() {
  // Team Data - ALL 6 MEMBERS with local images
  const team = [
    { name: "Mukesh Yadav", title: "Founder, CEO & Creative Director", image: mukeshImage },
    { name: "Prakash Pant", title: "Social Media Manager", image: prakashImage },
    { name: "Rajnish Sharma", title: "Video Editor & Graphic Designer", image: rajnishImage },
    { name: "Bishant Ojha", title: "Graphic Designer", image: bishantImage },
    { name: "Prasamsha Dhungana", title: "Web Developer", image: prasamshaImage },
    { name: "Prashanna Pudasaini", title: "Web Developer", image: prashannaImage }
  ];

  // Parallax Showcase Data (Intro + Services)
  const showcaseStages = [
    {
      id: "about",
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQFNjubH--R0Ng/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721198696543?e=2147483647&v=beta&t=WrJJ3CBVzCHh7ZWOdpLUIPvcikivvd7ICio0OKOEv3g", 
      title: "Engineering Digital Legacies",
      subtitle: "Established 2021",
      desc: "MotionAge transforms complex ideas into high-impact visual stories. We are a premier creative design agency specializing in enterprise-grade Web Development, cinematic Video Editing, and data-driven Social Media Management. By merging technical precision with an artistic soul, we drive strategic growth globally.",
      side: "right",
      link: "/about",
      btnText: "Our Story"
    },
    {
      id: "web-dev",
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwFljDq2ODJXWsVEyaqRG0WSnGZ2KzqztsA&s", 
      title: "Web Development",
      subtitle: "Digital Engines",
      desc: "We engineer lightning-fast, scalable web applications tailored to your business needs. From sleek corporate landing pages to complex e-commerce ecosystems, our code is built for high performance, top-tier security, and maximum conversion.",
      side: "left",
      link: "/services",
      btnText: "Explore Web Dev"
    },
    {
      id: "video-editing",
      bg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80",
      image: "https://www.premiumbeat.com/blog/wp-content/uploads/2019/05/cinematic-cover.jpg", 
      title: "Cinematic Video",
      subtitle: "Visual Storytelling",
      desc: "Transform your raw footage into captivating cinematic experiences. Our elite editing team crafts high-retention social reels, corporate documentaries, and immersive promotional campaigns that keep your audience hooked.",
      side: "right",
      link: "/services",
      btnText: "View Showreel"
    },
    {
      id: "social-media",
      bg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&q=80",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80", 
      title: "Social Media Ads",
      subtitle: "Data-Driven Growth",
      desc: "Stop guessing and start scaling. We design hyper-targeted ad campaigns across Meta, TikTok, and LinkedIn that lower your customer acquisition costs, build brand loyalty, and multiply your return on ad spend.",
      side: "left",
      link: "/services",
      btnText: "Scale Now"
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] font-sans transition-colors duration-500">
      
      {/* DYNAMIC PARALLAX SHOWCASES (ABOUT + SERVICES) */}
      <section className="relative w-full flex flex-col">
        {showcaseStages.map((stage) => (
          <ServiceStage key={stage.id} stage={stage} />
        ))}
      </section>

      {/* TEAM SECTION */}
      <div className="w-full py-16 md:py-24 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-3">The Collective</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter leading-[1.05]">Our Professionals</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">The specialists driving your projects forward.</p>
          </div>
          
          {/* Horizontal Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-full max-w-[140px] mx-auto aspect-square overflow-hidden bg-slate-100 dark:bg-[#0c1222] rounded-[1.25rem] shadow-sm border border-slate-200 dark:border-slate-800/80 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mt-4 mb-1 text-center tracking-tight">
                  {member.name}
                </h4>
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed max-w-[120px]">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// REUSABLE SCROLL-ANIMATED SHOWCASE COMPONENT
function ServiceStage({ stage }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const containerY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [60, 0, 0, -60]);

  const isTextOnRight = stage.side === 'right';

  return (
    <div ref={ref} className="min-h-[85svh] md:h-[90svh] relative flex items-center overflow-hidden border-b border-slate-200 dark:border-white/5">
      
      <motion.div 
        style={{ opacity, backgroundImage: `url(${stage.bg})` }} 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 scale-105"
      />
      
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-[#050814]/80 z-0"></div>
      
      <div className={`relative z-10 w-full flex ${isTextOnRight ? 'justify-end' : 'justify-start'} px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto`}>
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5">
          
          <motion.div 
            style={{ opacity, y: containerY }}
            className={`backdrop-blur-xl bg-white/95 dark:bg-[#0c1222]/90 border border-white/20 dark:border-slate-800/80 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl p-6 md:p-8 lg:p-10 ${
              isTextOnRight ? 'mr-0 ml-auto' : 'ml-0 mr-auto'
            }`}
          >
            <div className={`flex flex-col md:flex-row items-center ${isTextOnRight ? '' : 'md:flex-row-reverse'} gap-6 md:gap-8`}>
              
              <div className="flex justify-center items-center w-full md:w-2/5">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="max-h-[25vh] md:max-h-[35vh] w-auto object-cover rounded-xl shadow-lg transition-transform duration-700 scale-100 hover:scale-[1.05]" 
                />
              </div>
              
              <div className="w-full md:w-3/5 space-y-4 text-center md:text-left mt-4 md:mt-0">
                <span className="text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-extrabold tracking-[0.2em] uppercase block mb-1">
                  {stage.subtitle}
                </span>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
                  {stage.title}
                </h2>
                
                <div className="w-10 md:w-12 h-[2px] bg-blue-600 mx-auto md:mx-0 rounded-full my-4"></div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light leading-relaxed">
                  {stage.desc}
                </p>
                
                <div className="pt-4">
                  <Link 
                    to={stage.link} 
                    className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md rounded-full inline-block"
                  >
                    {stage.btnText}
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}