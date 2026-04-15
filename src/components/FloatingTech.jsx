import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingTech() {
  // You can easily add or change the skills here!
  const technologies = [
    { name: 'React', color: 'text-blue-500 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-900' },
    { name: 'Tailwind CSS', color: 'text-teal-500 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-900' },
    { name: 'JavaScript', color: 'text-yellow-600 dark:text-yellow-400', border: 'border-yellow-200 dark:border-yellow-900' },
    { name: 'Node.js', color: 'text-green-500 dark:text-green-400', border: 'border-green-200 dark:border-green-900' },
    { name: 'Framer Motion', color: 'text-purple-500 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-900' },
    { name: 'Figma', color: 'text-pink-500 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-900' },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4 py-8 relative z-10 pointer-events-none">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          // Initial fade in
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // Continuous floating animation
          animate={{ 
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.4, // Stagger the floating effect so they don't move together
            ease: "easeInOut"
          }}
          className={`px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border ${tech.border} ${tech.color} text-sm md:text-base font-semibold tracking-wide`}
        >
          {tech.name}
        </motion.div>
      ))}
    </div>
  );
}