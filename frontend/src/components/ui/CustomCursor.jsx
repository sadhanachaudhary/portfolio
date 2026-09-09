import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState({ isHovering: false, text: '' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      let target = e.target;
      let text = '';
      let isHovering = false;

      // Traverse up to find clickable element
      while (target && target !== document.body) {
        if (target.tagName?.toLowerCase() === 'a' || window.getComputedStyle(target).cursor === 'pointer' || target.tagName?.toLowerCase() === 'button') {
          isHovering = true;
          // Look for data-cursor text or default to "Click"
          text = target.getAttribute('data-cursor') || (target.tagName?.toLowerCase() === 'a' ? 'View' : 'Click');
          break;
        }
        target = target.parentElement;
      }
      
      setHoverState({ isHovering, text });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-600 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-[8px] font-bold text-white overflow-hidden"
        animate={{
          x: mousePosition.x - (hoverState.isHovering ? 24 : 8),
          y: mousePosition.y - (hoverState.isHovering ? 24 : 8),
          width: hoverState.isHovering ? 48 : 16,
          height: hoverState.isHovering ? 48 : 16,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <AnimatePresence>
          {hoverState.isHovering && (
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {hoverState.text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Outer Ring Trail */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: hoverState.isHovering ? 1.5 : 1,
          opacity: hoverState.isHovering ? 0 : 0.5
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1 }}
      />
    </>
  );
}
