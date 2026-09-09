import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Navigation, WifiOff, LayoutTemplate } from 'lucide-react';

const EngineeringChallenges = () => {
  const challenges = [
    {
      title: "Token Refresh",
      icon: <KeyRound className="text-purple-600" size={24} />,
      content: "Dio interceptors catch 401s, queue requests, silently refresh the token, and retry without interrupting the user."
    },
    {
      title: "Real-time Tracking",
      icon: <Navigation className="text-indigo-600" size={24} />,
      content: "Combining foreground location services and Socket.IO for live delivery tracking on the map."
    },
    {
      title: "Offline-first Sync",
      icon: <WifiOff className="text-pink-500" size={24} />,
      content: "UI reads purely from WatermelonDB/SQLite. Mutations are queued locally and synced in the background when online."
    },
    {
      title: "Clean Architecture",
      icon: <LayoutTemplate className="text-blue-600" size={24} />,
      content: "Strict separation of UI, State (Riverpod), Repositories, and Network layer for a highly testable codebase."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white border-y border-gray-100">
      <div className="max-w-[90rem] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-extrabold mb-3 text-gray-900">Engineering Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">Solving complex problems to make apps reliable in production.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {challenges.map((challenge, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.2 }}
              className="glass-card p-5 group transition-all hover:border-purple-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="w-max p-3 bg-gray-50 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {challenge.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringChallenges;
