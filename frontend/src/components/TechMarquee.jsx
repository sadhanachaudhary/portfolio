import React from 'react';
import InfiniteMenu from './ui/InfiniteMenu';

const TechMarquee = () => {
  const techStack = [
    "Flutter", "Dart", "React Native", "Riverpod", "Provider", 
    "Firebase", "Node.js", "Express", "SQLite", "WatermelonDB", 
    "WebSockets", "REST APIs", "Dio", "Git", "Figma"
  ];

  return (
    <div className="bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <InfiniteMenu items={techStack} baseVelocity={-2} />
    </div>
  );
};

export default TechMarquee;
