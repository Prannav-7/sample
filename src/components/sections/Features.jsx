import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Map, Calendar, Shield, Zap, CreditCard } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const features = [
  {
    icon: Bot,
    title: "AI Travel Assistant",
    description: "24/7 intelligent support to handle all your travel needs and queries instantly."
  },
  {
    icon: Map,
    title: "Smart Itineraries",
    description: "Dynamic route planning that adapts to your preferences and real-time conditions."
  },
  {
    icon: Calendar,
    title: "Auto-Booking",
    description: "Seamless reservation system for flights, hotels, and experiences worldwide."
  },
  {
    icon: Shield,
    title: "Secure Travel",
    description: "Real-time safety alerts and secure payment processing for peace of mind."
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Get notified about gate changes, delays, and weather updates immediately."
  },
  {
    icon: CreditCard,
    title: "Cost Optimization",
    description: "Our AI constantly monitors prices to get you the best deals available."
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    // Reduced padding from py-24 to py-12
    <section id="features" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Powered by Next-Gen AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our advanced algorithms process millions of data points to ensure your journey is perfect from start to finish.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger" delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
