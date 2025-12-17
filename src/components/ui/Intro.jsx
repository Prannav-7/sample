import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1, 15], 
              opacity: [0, 1, 1, 0],
              letterSpacing: ["0.1em", "0.2em", "2em"]
            }}
            transition={{ 
              duration: 3.5, 
              times: [0, 0.2, 1],
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-white to-purple-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              ZYVOX
            </h1>
            {/* Netflix-style light beam effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, times: [0, 0.5, 1] }}
              className="absolute inset-0 bg-cyan-500 blur-[100px] -z-10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
