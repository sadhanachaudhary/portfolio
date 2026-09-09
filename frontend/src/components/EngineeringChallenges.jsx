import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Navigation, WifiOff, LayoutTemplate } from 'lucide-react';

import TextPressure from './ui/TextPressure';

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
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white border-y border-gray-100">
      <div className="max-w-[90rem] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <TextPressure text="SOLUTIONS" fontSize={60} />
          <div className="w-20 h-1 bg-purple-600 rounded-full mt-6 mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg">Solving complex engineering problems to make apps reliable in production.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {challenges.map((challenge, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.2 }}
              className="glass-card p-5 group"
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
