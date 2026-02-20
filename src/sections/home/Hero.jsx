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
  ChevronRight,
  Cloud,
} from "lucide-react";

const Hero = ({ scrollTo }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const roles = [
    { title: "Full Stack Developer", icon: Code2 },
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

  // Network animation with interconnected moving points
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let points = [];
    const numPoints = 25;
    const connectionDistance = 150;
    let mouseX = -1000;
    let mouseY = -1000;

    // Handle mouse move for interactive effect
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Initialize points
    const initPoints = () => {
      points = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2 + Math.random() * 3,
          originalRadius: 2 + Math.random() * 3,
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
          point.x = Math.max(0, Math.min(canvas.width, point.x));
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
          point.y = Math.max(0, Math.min(canvas.height, point.y));
        }

        // Mouse interaction
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100 * 0.5;
          point.x -= Math.cos(angle) * force;
          point.y -= Math.sin(angle) * force;
          point.radius = point.originalRadius * 1.5;
        } else {
          point.radius = point.originalRadius;
        }
      });

      // Draw connections
      ctx.strokeStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / connectionDistance) * 0.8;
            
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            
            // Gradient stroke for moving effect
            const gradient = ctx.createLinearGradient(
              points[i].x, points[i].y, points[j].x, points[j].y
            );
            
            if (document.documentElement.classList.contains('dark')) {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
              gradient.addColorStop(1, `rgba(200, 200, 255, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity})`);
              gradient.addColorStop(1, `rgba(100, 100, 100, ${opacity})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        
        // Glow effect
        ctx.shadowColor = document.documentElement.classList.contains('dark') 
          ? 'rgba(255, 255, 255, 0.5)'
          : 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 8;
        
        ctx.fillStyle = document.documentElement.classList.contains('dark')
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(0, 0, 0, 0.6)';
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Inner glow for some points
        if (point.radius > 3) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = document.documentElement.classList.contains('dark')
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(0, 0, 0, 0.9)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 px-4 sm:px-6"
    >
      {/* Canvas for interconnected points animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto z-0"
        style={{ opacity: 0.8 }}
      />

      {/* Subtle gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 dark:from-black/30 dark:via-transparent dark:to-black/30 pointer-events-none z-5" />

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

        {/* Name with Letter Animation */}
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

      {/* Gradient Fades - Kept for clean edges */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-5" />
    </section>
  );
};

export default Hero;