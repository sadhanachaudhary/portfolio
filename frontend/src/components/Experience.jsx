import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-extrabold mb-3 text-gray-900">Experience</h2>
          <div className="w-16 h-1 bg-purple-600 rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 pl-6 ml-3 space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-purple-600 border-[4px] border-gray-50"></div>
            
            <motion.div 
              className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Briefcase size={18} className="text-purple-600" />
                    Flutter Developer
                  </h3>
                  <h4 className="text-base text-gray-500 font-medium mt-1">DIFMO Pvt Ltd, Lucknow</h4>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold text-gray-700 w-max">
                  March 2026 – Present
                </div>
              </div>
              
              <ul className="space-y-2.5 text-gray-600 text-sm mt-5 list-disc list-outside ml-4 marker:text-purple-500">
                <li>Developing and maintaining production-grade Flutter applications.</li>
                <li>Integrating REST APIs and handling dynamic application data seamlessly.</li>
                <li>Implementing Firebase Cloud Messaging (FCM) for push notifications.</li>
                <li>Working with WebSockets for live updates and real-time communication.</li>
                <li>Integrating payment workflows and authentication systems.</li>
                <li>Debugging production issues and optimizing app performance.</li>
                <li>Managing release builds, testing, and feature updates for Android and iOS.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
