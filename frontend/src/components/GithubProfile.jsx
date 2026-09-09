import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const GithubProfile = () => {
  const customTheme = {
    light: ['#f3f4f6', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'], // Gray to Purple
    dark: ['#1e293b', '#064e3b', '#047857', '#10b981', '#34d399'],
  };

  return (
    <section className="py-20 relative bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Consistent Coding</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
            I believe in daily progress. My GitHub heat map reflects my commitment to learning, building, and contributing code consistently.
          </p>
          
          <div className="glass-card p-6 md:p-8 flex justify-center overflow-x-auto">
            <GitHubCalendar 
              username="sadhanachaudhary" 
              colorScheme="light"
              theme={customTheme}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          </div>
          
          <a 
            href="https://github.com/sadhanachaudhary" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-8 text-purple-600 hover:text-purple-700 font-bold transition-colors"
          >
            View full GitHub profile &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubProfile;
