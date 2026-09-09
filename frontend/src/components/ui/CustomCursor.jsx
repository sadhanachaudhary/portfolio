import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Eye, MousePointer2 } from 'lucide-react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState({ isHovering: false, text: '', variant: 'default' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      let target = e.target;
      let text = '';
      let isHovering = false;
      let variant = 'default';

      // Traverse up to find clickable/interactive element
      while (target && target !== document.body) {
        if (target.tagName?.toLowerCase() === 'input' || target.tagName?.toLowerCase() === 'textarea') {
          isHovering = true;
          variant = 'hidden';
          break;
        } else if (target.hasAttribute('data-cursor-variant')) {
          isHovering = true;
          variant = target.getAttribute('data-cursor-variant');
          text = target.getAttribute('data-cursor') || '';
          break;
        } else if (target.tagName?.toLowerCase() === 'a' || window.getComputedStyle(target).cursor === 'pointer' || target.tagName?.toLowerCase() === 'button') {
          isHovering = true;
          variant = 'link';
          text = target.getAttribute('data-cursor') || (target.tagName?.toLowerCase() === 'a' ? 'View' : 'Click');
          break;
        }
        target = target.parentElement;
      }
      
      setHoverState({ isHovering, text, variant });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Determine cursor styles based on variant
  let cursorSize = 16;
  let cursorBg = 'bg-purple-600';
  let cursorBorderRadius = 'rounded-full';

  if (hoverState.isHovering) {
    if (hoverState.variant === 'project') {
      cursorSize = 64;
      cursorBg = 'bg-indigo-600';
    } else if (hoverState.variant === 'grab') {
      cursorSize = 48;
      cursorBg = 'bg-amber-500';
    } else if (hoverState.variant === 'link') {
      cursorSize = 48;
      cursorBg = 'bg-purple-600';
    }
  }

  return (
    <>
      {/* Inner Dynamic Dot */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold text-white overflow-hidden ${cursorBg} ${cursorBorderRadius} shadow-lg`}
        animate={{
          x: mousePosition.x - (cursorSize / 2),
          y: mousePosition.y - (cursorSize / 2),
          width: cursorSize,
          height: cursorSize,
          opacity: hoverState.variant === 'hidden' ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <AnimatePresence>
          {hoverState.isHovering && hoverState.variant !== 'hidden' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="flex items-center justify-center text-white"
            >
              {hoverState.variant === 'grab' && <Hand size={20} className="text-white" />}
              {hoverState.variant === 'project' && <Eye size={20} className="text-white" />}
              {(hoverState.variant === 'link' || hoverState.variant === 'default') && hoverState.text && (
                <span className="px-2 text-center uppercase tracking-wider">{hoverState.text}</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Outer Ring Trail (Only visible when not hovering or grabbing) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gray-400 mix-blend-difference rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: hoverState.isHovering ? 1.5 : 1,
          opacity: hoverState.isHovering ? 0 : 0.4
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1 }}
      />
    </>
  );
}
