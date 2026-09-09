import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TextPressure({ text, fontSize = 60, fontFamily = "inherit" }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="flex flex-wrap font-black leading-none uppercase" 
      style={{ fontSize: `${fontSize}px`, fontFamily }}
    >
      {text.split('').map((char, index) => (
        <Letter 
          key={index} 
          char={char} 
          mousePos={mousePos} 
        />
      ))}
    </div>
  );
}

function Letter({ char, mousePos }) {
  const ref = useRef(null);
  const [distance, setDistance] = useState(1000);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to the center of the letter
    const dist = Math.sqrt(
      Math.pow(mousePos.x - centerX, 2) + Math.pow(mousePos.y - centerY, 2)
    );
    setDistance(dist);
  }, [mousePos]);

  // Max distance to affect
  const maxDistance = 200;
  // Calculate weight based on distance (closer = thicker/wider)
  const isNear = distance < maxDistance;
  const weight = isNear ? 900 : 400;
  const scale = isNear ? 1 + (maxDistance - distance) / 500 : 1;
  const yOffset = isNear ? -(maxDistance - distance) / 10 : 0;

  return (
    <motion.span
      ref={ref}
      animate={{ 
        fontWeight: weight,
        scaleY: scale,
        y: yOffset,
        color: isNear ? '#9333ea' : 'inherit' // Turns purple when hovered
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="inline-block origin-bottom transition-colors duration-200"
      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
    >
      {char}
    </motion.span>
  );
}
