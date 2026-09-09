import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Database, Cloud } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">My Approach to Architecture</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">I don't just build screens. I build maintainable, offline-capable systems using clean architecture principles.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Presentation Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-purple-300 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-200 group-hover:scale-110 transition-transform">
                <LayoutGrid className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Presentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pixel-perfect UI built with Flutter widgets. State is heavily separated from UI using <strong>Riverpod</strong>.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Responsive Layouts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>ConsumerWidgets</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Framer Motion (React)</li>
              </ul>
            </motion.div>

            {/* Domain / Local Data Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border-2 border-purple-500 shadow-lg relative transform md:-translate-y-4"
            >
              <div className="absolute -top-3 -right-3 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Core
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
                <Database className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Domain & Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The brain of the app. Offline-first apps read purely from local DBs (SQLite/WatermelonDB) to ensure zero loading screens.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Repositories</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Models & Entities</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Local Caching</li>
              </ul>
            </motion.div>

            {/* Network Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-purple-300 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-200 group-hover:scale-110 transition-transform">
                <Cloud className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Layer</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Handles all external communication. Built with Dio, using interceptors for automatic token refreshing and error catching.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Dio Interceptors</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>WebSockets / Socket.io</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>REST APIs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
