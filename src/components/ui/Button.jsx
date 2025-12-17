import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    outline: "border border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
