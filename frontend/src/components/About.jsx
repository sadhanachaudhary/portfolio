import React from 'react';
import { motion } from 'framer-motion';
import TextPressure from './ui/TextPressure';
import ParticleText from './ui/ParticleText';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50 relative border-t border-gray-200 overflow-hidden">
      
      {/* Decorative Particle Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ParticleText text="HELLO" fontSize={150} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <TextPressure text="ABOUT ME" fontSize={60} />
          <div className="w-20 h-1 bg-purple-600 rounded-full mt-6 mb-6"></div>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left md:text-center">
            <p>
              I am a <strong className="text-gray-900 font-bold">Computer Science Engineering student (2021-2025)</strong> at B.N. College of Engineering & Technology, Lucknow, currently working professionally as a Flutter Developer at DIFMO Pvt Ltd.
            </p>
            <p>
              My focus is on bridging the gap between beautiful UI designs and robust, scalable backend systems. I specialize in <strong className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">offline-first architectures</strong>, real-time socket communication, and clean code practices.
            </p>
            <p>
              When I'm not coding, I'm usually reading up on software architecture patterns, optimizing build times, or exploring the latest updates in the Flutter ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
