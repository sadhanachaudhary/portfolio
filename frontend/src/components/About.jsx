import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">About Me</h2>
          <div className="w-16 h-1 bg-purple-600 rounded-full mx-auto mb-8"></div>
          
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
