import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const ResumeCTA = () => {
  return (
    <section id="resume" className="py-20 relative bg-purple-600 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">Ready to dive deeper?</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            View my resume for a detailed overview of my experience, projects, education, and technical skills.
          </p>
          <a 
            href="/resume.pdf" 
            download="Sadhana_Chaudhary_Resume.pdf"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:-translate-y-1 transition-transform shadow-xl hover:shadow-2xl"
          >
            <FileDown size={24} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
