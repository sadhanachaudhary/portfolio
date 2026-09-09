import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Abhinav Singh",
      role: "Engineering Manager",
      text: "Sadhana is an exceptional Flutter developer. She successfully architected our offline-first application and implemented a reliable token refresh system that drastically improved our user retention."
    },
    {
      name: "Priya Sharma",
      role: "Product Owner",
      text: "Her ability to translate complex Figma designs into pixel-perfect, highly responsive mobile UIs is unmatched. She's a true asset to any mobile engineering team."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">What People Say</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 relative hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-emerald-500/20" size={48} />
              <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed text-sm md:text-base">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-emerald-400 text-xs uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
