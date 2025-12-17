import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 15, 0)", "rgba(10, 10, 15, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: navBackground, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ZYVOX
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Destinations', 'How it Works', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              {item}
            </a>
          ))}
          <Button variant="outline" className="px-4 py-2 text-sm">Sign In</Button>
          <Button className="px-4 py-2 text-sm">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0f] border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {['Features', 'Destinations', 'How it Works', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-cyan-400 py-2">
              {item}
            </a>
          ))}
          <Button className="w-full justify-center">Get Started</Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
