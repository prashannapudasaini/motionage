import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingTech() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate 15 random floating tech elements on mount
    const generatedElements = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
      text: Math.random() > 0.5 ? "0" : "1",
      isOrb: Math.random() > 0.7 // 30% chance to be a glowing orb instead of text
    }));
    setElements(generatedElements);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute font-mono text-2xl md:text-4xl font-bold select-none"
          style={{ left: el.left, top: el.top }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.4, 0],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          {el.isOrb ? (
            <div className="w-3 h-3 rounded-full bg-blue-500/30 blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          ) : (
            <span className="text-blue-500/10 dark:text-blue-400/5">{el.text}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}