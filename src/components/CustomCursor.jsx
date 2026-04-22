import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      prev.current = { x: e.clientX - prev.current.x, y: e.clientY - prev.current.y };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
   <motion.div
  className="fixed top-0 left-0 pointer-events-none z-50"
  style={{
    x,
    y,
    translateX: '-50%',
    translateY: '-50%',
  }}
>
  <div className="w-10 h-10 rounded-full border border-blue-400 opacity-60 blur-[1px]" />
</motion.div>
  );
}