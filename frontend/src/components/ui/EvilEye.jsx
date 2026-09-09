import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function EvilEye({ size = 100 }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="flex gap-4 items-center justify-center pointer-events-none">
      <Eye mouseX={mouseX} mouseY={mouseY} size={size} />
      <Eye mouseX={mouseX} mouseY={mouseY} size={size} />
    </div>
  );
}

function Eye({ mouseX, mouseY, size }) {
  const springConfig = { damping: 25, stiffness: 150 };
  
  // Create a springy version of mouse coordinates
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform coordinates to pupil movement based on screen size
  // Assuming a standard screen center to approximate the eye's view
  // We'll map the entire screen width to a small pixel offset for the pupil
  const pupilX = useTransform(springX, [0, window.innerWidth || 1000], [-size / 4, size / 4]);
  const pupilY = useTransform(springY, [0, window.innerHeight || 800], [-size / 4, size / 4]);

  return (
    <div 
      className="bg-white rounded-full flex items-center justify-center border-4 border-gray-900 shadow-inner relative overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Iris */}
      <motion.div 
        className="bg-blue-500 rounded-full flex items-center justify-center relative shadow-lg"
        style={{ 
          width: size / 2, 
          height: size / 2,
          x: pupilX,
          y: pupilY
        }}
      >
        {/* Pupil */}
        <div 
          className="bg-black rounded-full"
          style={{ width: size / 4, height: size / 4 }}
        />
        {/* Reflection */}
        <div 
          className="bg-white rounded-full absolute top-[15%] left-[15%]"
          style={{ width: size / 10, height: size / 10 }}
        />
      </motion.div>
      
      {/* Evil Eye Eyelid styling (Optional, adds character) */}
      <div className="absolute inset-0 rounded-full border-t-[8px] border-gray-900 opacity-20 transform -translate-y-2 pointer-events-none"></div>
    </div>
  );
}
