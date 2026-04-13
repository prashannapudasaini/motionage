import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VacancyPage() {
  const [activeTab, setActiveTab] = useState('vacancy'); // 'vacancy' or 'announcement'
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts saved by the admin dashboard
    const savedPosts = JSON.parse(localStorage.getItem('motionage_posts')) || [];
    setPosts(savedPosts);
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = posts.filter(post => post.type === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Careers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Updates</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
          Join the MotionAge team or stay updated with our latest company announcements.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm inline-flex">
            <button 
              onClick={() => setActiveTab('vacancy')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'vacancy' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <Briefcase size={16} /> Vacancies
            </button>
            <button 
              onClick={() => setActiveTab('announcement')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'announcement' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <Bell size={16} /> Announcements
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800"
              >
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  {activeTab === 'vacancy' ? <Briefcase size={24} /> : <Bell size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  No {activeTab === 'vacancy' ? 'open positions' : 'new announcements'} right now.
                </h3>
                <p className="text-slate-500 dark:text-slate-400">Check back later or follow our social media.</p>
              </motion.div>
            ) : (
              filteredPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-sm font-medium text-slate-400 shrink-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">{post.date}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap mb-6">
                    {post.description}
                  </p>
                  
                  {/* Action Button based on type */}
                  {activeTab === 'vacancy' && (
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      Apply Now <ArrowRight size={16} />
                    </Link>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}