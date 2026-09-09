import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, Truck, Database, CheckCircle2 } from 'lucide-react';
import TextPressure from './ui/TextPressure';
import Magnet from './ui/Magnet';

const Projects = () => {
  const projects = [
    {
      id: "shrimpbite",
      title: "ShrimpBite E-Commerce",
      category: "Flutter | E-commerce",
      description: "A comprehensive seafood e-commerce mobile application featuring tiered subscriptions, daily delivery, and vacation mode. Built with clean architecture and Riverpod.",
      highlights: ["Subscriptions", "Daily delivery", "Vacation mode", "Riverpod", "Dio Interceptors"],
      icon: <ShoppingBag size={24} className="text-purple-600" />,
      image: "/shrimpbite_real.png",
      playStore: "https://play.google.com/store/apps/details?id=com.shrimpbite.app&pcampaignid=web_share",
      reverse: false
    },
    {
      id: "difwa",
      title: "Difwa Water Delivery",
      category: "Flutter | Delivery Tracking",
      description: "A robust water delivery application for customers. Users manage orders and track deliveries in real-time on a map with precise ETAs.",
      highlights: ["Live Map Tracking", "Location Services", "Push Notifications"],
      icon: <Truck size={24} className="text-blue-600" />,
      image: "/difwa.jpg",
      playStore: "https://play.google.com/store/apps/details?id=com.difmo.difwa&pcampaignid=web_share",
      reverse: true
    },
    {
      id: "difwa_vendor",
      title: "Difwa Vendor Dashboard",
      category: "Flutter | Vendor Tools",
      description: "The dedicated vendor application for managing delivery fleets. Handles delivery workflows, driver assignments, and live inventory sync via WebSockets.",
      highlights: ["WebSockets", "Vendor Dashboard", "Fleet Management", "Real-time Sync"],
      icon: <CheckCircle2 size={24} className="text-indigo-600" />,
      image: "/difwa_vendor.jpg",
      playStore: "https://play.google.com/store/apps/details?id=com.difwa.vendor&pcampaignid=web_share",
      reverse: false
    },
    {
      id: "sidhahisab",
      title: "Sidhahisab Ledger",
      category: "React Native | Offline First",
      description: "A business management and finance application utilizing WatermelonDB to allow users to work seamlessly without internet. Data is synced in the background when connectivity is restored.",
      highlights: ["WatermelonDB", "Offline-first", "SyncManager", "Data Visualization"],
      icon: <Database size={24} className="text-emerald-600" />,
      image: "/sidhahisab_real.png",
      playStore: "https://play.google.com/store/apps/details?id=com.sidhahisab.sales.app&pcampaignid=web_share",
      reverse: true
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <TextPressure text="PROJECTS" fontSize={60} />
          <div className="w-20 h-1 bg-purple-600 rounded-full mt-6 mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg">Real-world, production-ready applications I've built from scratch, currently available on the Play Store.</p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project) => (
            <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${project.reverse ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: project.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <div 
                  data-cursor-variant="project"
                  className="relative mx-auto flex items-center justify-center w-full cursor-none"
                >
                  <img 
                    src={project.image} 
                    className="w-auto h-auto max-h-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-[2.5rem]" 
                    alt={project.title} 
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: project.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-2">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm font-bold text-purple-600 tracking-wider uppercase">{project.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {project.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Technical Highlights</h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:border-purple-300 transition-colors cursor-default">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Magnet padding={20}>
                    <a 
                      href={project.playStore} 
                      target="_blank" 
                      rel="noreferrer" 
                      data-cursor="Download"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mx-auto lg:mx-0"
                    >
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 01-.587-1.42V3.235c0-.528.204-1.034.586-1.421zM14.542 12.75l2.625 2.626-6.177 3.567 3.552-6.193zm0-1.5l-3.552-6.193 6.177 3.567-2.625 2.626zm4.12 1.55l3.208-1.854a.998.998 0 000-1.728l-3.208-1.853-2.95 2.95 2.95 2.95 2.95-2.95z"/>
                      </svg>
                      <div className="text-left flex flex-col">
                        <span className="text-[9px] font-medium leading-none uppercase tracking-wider text-gray-300 mb-0.5">Get it on</span>
                        <span className="text-base font-bold leading-none">Google Play</span>
                      </div>
                    </a>
                  </Magnet>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
