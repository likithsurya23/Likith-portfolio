// File: src/components/navigation/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';

const Navigation = ({ activeSection, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // No saved preference and user prefers light
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white dark:bg-black py-2 md:py-3 shadow-md border-b border-black dark:border-white'
            : 'bg-transparent py-3 md:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Responsive sizing */}
            <motion.div
              className="flex items-center gap-2 md:gap-3 cursor-pointer group"
              onClick={() => handleScrollTo('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-xl 
                                bg-white dark:bg-black
                                border-2 border-black dark:border-white
                                shadow-lg transition-all duration-300
                                group-hover:bg-black group-hover:text-white
                                dark:group-hover:bg-white dark:group-hover:text-black">
                  <span className="text-black dark:text-white font-bold text-base md:text-lg tracking-wider group-hover:text-white dark:group-hover:text-black transition-colors">
                    LD
                  </span>
                </div>

                {/* Glow effect - Pure Black/White */}
                <motion.div
                  className="absolute -inset-2 rounded-xl bg-black/10 dark:bg-white/10 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-3 lg:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.id
                      ? 'text-white dark:text-black'
                      : 'text-black dark:text-white hover:text-black dark:hover:text-white'
                    }`}
                >
                  {/* Background with optimized animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg transition-colors duration-200 ${activeSection === link.id
                        ? 'bg-black dark:bg-white'
                        : 'bg-transparent group-hover:bg-black/10 dark:group-hover:bg-white/10'
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

              {/* Theme Toggle Button - Desktop */}
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={toggleTheme}
                className="relative ml-2 p-2.5 rounded-lg border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} className="text-black dark:text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} className="text-black dark:text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Let's Talk button - Desktop */}
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={() => handleScrollTo('contact')}
                className="relative ml-4 px-6 py-2.5 group overflow-hidden rounded-lg bg-black dark:bg-white border-2 border-black dark:border-white"
              >
                {/* Background */}
                <motion.div
                  className="absolute inset-0 bg-black dark:bg-white"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(0,0,0,0)',
                      '0 0 20px rgba(0,0,0,0.2)',
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
                <span className="relative z-10 flex items-center gap-2 text-white dark:text-black font-semibold text-sm">
                  Let's Talk
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-4 h-4 text-white dark:text-black" />
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Controls - Right side */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 border-2 border-black dark:border-white bg-white dark:bg-black rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ?
                  <Sun size={18} className="text-black dark:text-white" /> :
                  <Moon size={18} className="text-black dark:text-white" />
                }
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border-2 border-black dark:border-white bg-white dark:bg-black rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
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
                      <X size={20} className="text-black dark:text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={20} className="text-black dark:text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop - Pure Black/White */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white dark:bg-black"
            />

            {/* Menu content */}
            <div className="relative flex flex-col items-center justify-center h-full px-4">
              {/* Background decoration - Pure Black/White */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
              </div>

              {/* Navigation links */}
              <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-sm">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => handleScrollTo(link.id)}
                    className="relative w-full group"
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-all duration-200 ${activeSection === link.id
                          ? 'bg-black dark:bg-white'
                          : 'bg-transparent group-hover:bg-black/10 dark:group-hover:bg-white/10'
                        }`}
                      whileTap={{ scale: 0.98 }}
                    />

                    <div className="relative flex items-center justify-between px-6 py-4">
                      <span className={`text-lg font-medium transition-colors duration-200 ${activeSection === link.id
                          ? 'text-white dark:text-black'
                          : 'text-black dark:text-white group-hover:text-black dark:group-hover:text-white'
                        }`}>
                        {link.label}
                      </span>

                      {activeSection === link.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <ChevronRight className="w-5 h-5 text-white dark:text-black" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}

                {/* Mobile contact button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                  onClick={() => handleScrollTo('contact')}
                  className="relative mt-4 w-full px-6 py-4 group overflow-hidden rounded-xl bg-black dark:bg-white border-2 border-black dark:border-white"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-white dark:text-black font-semibold text-base">Let's Talk</span>
                    <ChevronRight className="w-5 h-5 text-white dark:text-black group-hover:translate-x-1 transition-transform duration-200" />
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