import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import AiAvatar from '../3d/AiAvatar';

const Hero = () => {
  return (
    // Reduced padding and height constraints
    <section className="relative flex items-center pt-24 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Travel Planning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Explore the World with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              ZYVOX AI
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Experience the future of travel. ZYVOX curates personalized itineraries, books flights, and finds hidden gems tailored just for you.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="pl-8 pr-8">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline">View Demo</Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm">
            <div>
              <p className="text-white font-bold text-xl">50k+</p>
              <p>Active Users</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-white font-bold text-xl">120+</p>
              <p>Countries Supported</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[450px] lg:h-[550px] w-full"
        >
          {/* 3D Earth Avatar */}
          <div className="absolute inset-0">
             <AiAvatar />
          </div>

          {/* Floating HUD Elements overlaying the 3D scene */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3 z-10"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✈️</div>
            <div>
              <p className="text-xs text-gray-400">Flight Found</p>
              <p className="text-sm font-bold text-white">$450 • NYC → LND</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3 z-10"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">🏨</div>
            <div>
              <p className="text-xs text-gray-400">Hotel Booked</p>
              <p className="text-sm font-bold text-white">The Ritz • 5 Nights</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
