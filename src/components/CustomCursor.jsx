import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Base Mouse Position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Staggered Spring Configurations to create the "Snake/Liquid" Trail
  const spring1 = { damping: 25, stiffness: 400, mass: 0.2 };
  const spring2 = { damping: 30, stiffness: 250, mass: 0.5 };
  const spring3 = { damping: 35, stiffness: 150, mass: 0.8 };
  const spring4 = { damping: 40, stiffness: 100, mass: 1.2 };

  // Generate Spring Values
  const x1 = useSpring(mouseX, spring1);
  const y1 = useSpring(mouseY, spring1);
  const x2 = useSpring(mouseX, spring2);
  const y2 = useSpring(mouseY, spring2);
  const x3 = useSpring(mouseX, spring3);
  const y3 = useSpring(mouseY, spring3);
  const x4 = useSpring(mouseX, spring4);
  const y4 = useSpring(mouseY, spring4);

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-difference hidden md:block">
      
      {/* Tail Dot 3 */}
      <motion.div 
        className="absolute w-2 h-2 bg-blue-400 rounded-full"
        style={{ x: x4, y: y4, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1, opacity: 0.4 }}
      />
      {/* Tail Dot 2 */}
      <motion.div 
        className="absolute w-3 h-3 bg-blue-500 rounded-full"
        style={{ x: x3, y: y3, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1, opacity: 0.6 }}
      />
      {/* Tail Dot 1 */}
      <motion.div 
        className="absolute w-4 h-4 bg-blue-500 rounded-full"
        style={{ x: x2, y: y2, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1, opacity: 0.8 }}
      />
      {/* Head / Hover State Ring */}
      <motion.div 
        className="absolute border-2 border-blue-500 rounded-full flex items-center justify-center bg-transparent"
        style={{ x: x1, y: y1, translateX: '-50%', translateY: '-50%', width: 32, height: 32 }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
          borderWidth: isHovering ? '1px' : '2px'
        }}
      >
        <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ opacity: isHovering ? 0 : 1 }} />
      </motion.div>
    </div>
  );
}