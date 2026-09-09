import React from 'react';
import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techStack = [
    "Flutter", "Dart", "React Native", "Riverpod", "Provider", 
    "Firebase", "Node.js", "Express", "SQLite", "WatermelonDB", 
    "WebSockets", "REST APIs", "Dio", "Git", "Figma",
    "Flutter", "Dart", "React Native", "Riverpod", "Provider"
  ];

  return (
    <div className="py-10 bg-white border-y border-gray-100 overflow-hidden flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -2400] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {[...techStack, ...techStack].map((tech, idx) => (
          <span key={idx} className="text-xl md:text-2xl font-bold text-gray-300 uppercase tracking-widest hover:text-purple-600 transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
