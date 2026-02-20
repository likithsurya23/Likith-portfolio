// File: src/components/navigation/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navigation = ({ activeSection, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  // Simplified button animation for better performance
  const buttonVariants = {
    hover: { 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 }
    },
    tap: { scale: 0.98 }
  };

  // Smooth scroll with better animation
  const handleScrollTo = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-strong py-3 shadow-[0_8px_32px_rgba(255,255,255,0.1)] border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Adjusted to match navbar theme */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleScrollTo('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl 
                                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                                backdrop-blur-sm border border-white/20
                                shadow-lg transition-all duration-300
                                group-hover:border-white/40 group-hover:bg-white/20
                                group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  <span className="text-white font-bold text-lg tracking-wider drop-shadow-md">
                    LD
                  </span>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 rounded-xl bg-white/10 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.id 
                      ? 'text-black' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {/* Background with optimized animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg transition-colors duration-200 ${
                      activeSection === link.id
                        ? 'bg-white'
                        : 'bg-white/0 group-hover:bg-white/10'
                    }`}
                    layoutId={activeSection === link.id ? "activeNavBackground" : undefined}
                    transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.5 }}
                  />
                  
                  {/* Button text */}
                  <span className="relative z-10">
                    {link.label}
                  </span>
                </motion.button>
              ))}

              {/* Let's Talk button */}
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={() => handleScrollTo('contact')}
                className="relative ml-4 px-6 py-2.5 group overflow-hidden rounded-lg bg-white"
              >
                {/* Background */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(0,0,0,0)',
                      '0 0 20px rgba(255,255,255,0.5)',
                      '0 0 0px rgba(0,0,0,0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2 text-black font-semibold text-sm">
                  Let's Talk
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-4 h-4 text-black" />
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            {/* Menu content */}
            <div className="relative flex flex-col items-center justify-center h-full">
              {/* Simple background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
              </div>
              
              {/* Navigation links */}
              <div className="relative z-10 flex flex-col items-center gap-2 w-full px-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => handleScrollTo(link.id)}
                    className="relative w-full group"
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-all duration-200 ${
                        activeSection === link.id
                          ? 'bg-white'
                          : 'bg-white/0 group-hover:bg-white/10'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    />
                    
                    <div className="relative flex items-center justify-between px-6 py-4">
                      <span className={`text-xl font-medium transition-colors duration-200 ${
                        activeSection === link.id 
                          ? 'text-black' 
                          : 'text-white/80 group-hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      
                      {activeSection === link.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <ChevronRight className="w-5 h-5 text-black" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
                
                {/* Mobile contact button */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                  onClick={() => handleScrollTo('contact')}
                  className="relative mt-6 w-full px-6 py-4 group overflow-hidden rounded-xl bg-white"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-black font-semibold text-lg">Let's Talk</span>
                    <ChevronRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;