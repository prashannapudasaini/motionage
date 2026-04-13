import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClickParticles() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Create a unique click event with coordinates
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Remove the particles from the DOM after 1 second
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="absolute flex items-center justify-center"
            style={{ left: click.x, top: click.y }}
          >
            {/* Generate 8 particles per click */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: Math.random() * 1.5 + 0.5,
                  x: (Math.random() - 0.5) * 120, // Blast radius X
                  y: (Math.random() - 0.5) * 120, // Blast radius Y
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}