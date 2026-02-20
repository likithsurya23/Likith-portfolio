// File: src/sections/home/Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  Code2,
  Brain,
  Github,
  Linkedin,
  Mail,
  Rocket,
  ChevronRight,
  Cloud,
  ArrowDown,
} from "lucide-react";

const Hero = ({ scrollTo }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const roles = [
    { title: "Full Stack Developer", icon: Code2 },
    { title: "Cloud Application Developer", icon: Cloud },
    { title: "AI / ML Engineer", icon: Brain },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/likithsurya23", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/likith--d/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:likithsurya231@gmail.com", label: "Email" },
  ];

  const name = "Likith D";

  // Black and white tech symbols for floating animation
  const techSymbols = [
    { name: "React", symbol: "</>", size: 28 },
    { name: "Python", symbol: "{ }", size: 32 },
    { name: "JavaScript", symbol: "JS", size: 30 },
    { name: "TypeScript", symbol: "TS", size: 30 },
    { name: "Node.js", symbol: "◉", size: 36 },
    { name: "Django", symbol: "⧩", size: 34 },
    { name: "PyTorch", symbol: "🔥", size: 32 },
    { name: "TensorFlow", symbol: "⚡", size: 32 },
    { name: "Docker", symbol: "🐳", size: 32 },
    { name: "AWS", symbol: "☁️", size: 34 },
    { name: "Git", symbol: "⎇", size: 30 },
    { name: "MongoDB", symbol: "🍃", size: 32 },
    { name: "PostgreSQL", symbol: "🐘", size: 32 },
    { name: "Next.js", symbol: "▲", size: 28 },
    { name: "Tailwind", symbol: "~", size: 36 },
    { name: "HTML", symbol: "#", size: 32 },
    { name: "CSS", symbol: "{}", size: 30 },
    { name: "API", symbol: "↔", size: 34 },
  ];

  // Generate floating tech symbols
  const [floatingSymbols, setFloatingSymbols] = useState([]);

  useEffect(() => {
    // Initialize floating symbols
    const numSymbols = window.innerWidth < 768 ? 15 : 30;
    const newSymbols = [];

    for (let i = 0; i < numSymbols; i++) {
      const randomTech = techSymbols[Math.floor(Math.random() * techSymbols.length)];
      newSymbols.push({
        ...randomTech,
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: randomTech.size + (Math.random() * 20 - 10),
        speed: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        rotateSpeed: (Math.random() - 0.5) * 50,
        floatX: 30 + Math.random() * 40,
        floatY: 30 + Math.random() * 40,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: 0.25 + Math.random() * 0.2, // Increased opacity for better visibility
      });
    }

    setFloatingSymbols(newSymbols);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 px-4 sm:px-6"
    >
      {/* Floating Tech Symbols Background - Pure Black/White with better visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingSymbols.map((symbol) => (
          <motion.div
            key={symbol.id}
            className="absolute font-mono font-bold"
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              fontSize: `${symbol.size}px`,
              zIndex: 0,
              color: document.documentElement.classList.contains('dark')
                ? 'rgba(255, 255, 255, 0.35)' // Brighter in dark mode
                : 'rgba(0, 0, 0, 0.3)', // Darker in light mode
              textShadow: document.documentElement.classList.contains('dark')
                ? '0 0 20px rgba(255, 255, 255, 0.4)'
                : '0 0 20px rgba(0, 0, 0, 0.3)',
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [
                0,
                symbol.floatX * symbol.direction,
                -symbol.floatX * 0.5,
                0,
              ],
              y: [
                0,
                -symbol.floatY,
                symbol.floatY * 0.7,
                0,
              ],
              rotate: [0, symbol.rotateSpeed, -symbol.rotateSpeed * 0.5, 0],
              scale: [1, 1.4, 0.9, 1],
              opacity: [
                symbol.opacity,
                symbol.opacity * 1.8,
                symbol.opacity * 0.9,
                symbol.opacity,
              ],
            }}
            transition={{
              duration: symbol.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: symbol.delay,
            }}
            whileHover={{
              scale: 2.2,
              opacity: 1,
              transition: { duration: 0.3 },
              zIndex: 20,
            }}
          >
            <span className="relative block transform-gpu font-bold">
              {symbol.symbol}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Connection Lines between symbols - Neural Network Style */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="line-gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Connection Lines - Light Mode */}
        <g className="dark:hidden">
          {floatingSymbols.map((symbol, i) =>
            floatingSymbols.slice(i + 1).map((otherSymbol, j) => {
              const dx = symbol.x - otherSymbol.x;
              const dy = symbol.y - otherSymbol.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 30) {
                const opacity = Math.max(0, 0.2 * (1 - distance / 30));
                return (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={`${symbol.x}%`}
                    y1={`${symbol.y}%`}
                    x2={`${otherSymbol.x}%`}
                    y2={`${otherSymbol.y}%`}
                    stroke="url(#line-gradient-light)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: opacity,
                      strokeDashoffset: [0, 8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      strokeDashoffset: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                );
              }
              return null;
            })
          )}
        </g>

        {/* Connection Lines - Dark Mode */}
        <g className="hidden dark:block">
          {floatingSymbols.map((symbol, i) =>
            floatingSymbols.slice(i + 1).map((otherSymbol, j) => {
              const dx = symbol.x - otherSymbol.x;
              const dy = symbol.y - otherSymbol.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 30) {
                const opacity = Math.max(0, 0.2 * (1 - distance / 30));
                return (
                  <motion.line
                    key={`line-dark-${i}-${j}`}
                    x1={`${symbol.x}%`}
                    y1={`${symbol.y}%`}
                    x2={`${otherSymbol.x}%`}
                    y2={`${otherSymbol.y}%`}
                    stroke="url(#line-gradient-dark)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: opacity,
                      strokeDashoffset: [0, 8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      strokeDashoffset: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                );
              }
              return null;
            })
          )}
        </g>

        {/* Animated particles flowing along connections */}
        {[...Array(12)].map((_, i) => {
          if (floatingSymbols.length < 2) return null;

          const startIdx = Math.floor(Math.random() * floatingSymbols.length);
          let endIdx = Math.floor(Math.random() * floatingSymbols.length);
          while (endIdx === startIdx) {
            endIdx = Math.floor(Math.random() * floatingSymbols.length);
          }

          const startSymbol = floatingSymbols[startIdx];
          const endSymbol = floatingSymbols[endIdx];

          return (
            <motion.circle
              key={`flow-${i}`}
              r="1.8"
              fill={document.documentElement.classList.contains('dark') ? '#fff' : '#000'}
              className="opacity-40"
              animate={{
                cx: [
                  `${startSymbol.x}%`,
                  `${endSymbol.x}%`,
                  `${startSymbol.x}%`,
                ],
                cy: [
                  `${startSymbol.y}%`,
                  `${endSymbol.y}%`,
                  `${startSymbol.y}%`,
                ],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 7 + i * 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2,
              }}
            />
          );
        })}
      </svg>

      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-40 pointer-events-none z-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-40 pointer-events-none z-5" />

      {/* Main Content */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-full w-full bg-black dark:bg-white"></span>
            </span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white" />
            <span className="text-xs sm:text-sm text-black dark:text-white">
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Name with Letter Animation - FIXED SPACING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <span className="block text-black/70 dark:text-white/70 text-2xl sm:text-4xl md:text-5xl font-light mb-2">
            Hi, I'm
          </span>

          <h1 className="font-bold tracking-tight">
            <span className="text-black dark:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl block">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="inline-block hover-lift cursor-default"
                  style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-black dark:text-white"
              >
                {roles[currentRoleIndex].title}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Designing and developing intelligent systems by combining AI/ML with
          modern web technologies to deliver practical, high-impact solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-all border-2 border-black dark:border-white shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg hover:opacity-80 transition-all border-2 border-black dark:border-white shadow-md"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md hover-lift"
              aria-label={social.label}
            >
              <social.icon
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-black dark:text-white"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-5" />
    </section>
  );
};

export default Hero;