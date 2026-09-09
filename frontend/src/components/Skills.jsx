import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Wifi, Database, Wrench, Cloud } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Mobile Dev",
      icon: <Smartphone className="text-purple-600" size={20} />,
      skills: ["Flutter", "Dart", "React Native", "Expo"]
    },
    {
      title: "State Mgmt",
      icon: <Layers className="text-indigo-600" size={20} />,
      skills: ["Riverpod", "Provider", "StateNotifier"]
    },
    {
      title: "Networking",
      icon: <Wifi className="text-blue-500" size={20} />,
      skills: ["REST APIs", "Dio", "Interceptors", "WebSockets"]
    },
    {
      title: "Backend & Storage",
      icon: <Database className="text-pink-500" size={20} />,
      skills: ["Node.js", "Firebase", "SQLite", "WatermelonDB"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-amber-500" size={20} />,
      skills: ["Git", "Postman", "Figma", "Android Studio"]
    },
    {
      title: "Deployment",
      icon: <Cloud className="text-gray-600" size={20} />,
      skills: ["Play Console", "TestFlight", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-extrabold mb-3 text-gray-900">Technical Arsenal</h2>
          <p className="text-gray-500 text-sm font-medium">Tools and technologies for scalable mobile apps.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.2 }}
              className="glass-card p-5 hover:border-purple-300 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg border border-gray-200">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white text-gray-700 text-xs font-bold rounded-md border border-gray-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
