import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Code2,
  Brain,
  Globe,
  Github,
  Linkedin,
  Mail,
  Terminal,
  GraduationCap,
  BookOpen,
  Coffee,
  Heart,
  Rocket,
  ChevronRight,
  Cloud,
  Zap,
  Star,
  Award,
} from "lucide-react";

const Hero = ({ scrollTo }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      mouseX.set((clientX - innerWidth / 2) / 30);
      mouseY.set((clientY - innerHeight / 2) / 30);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const name = "Likith D";

  const achievements = [
    { icon: Code2, label: "Projects Built", value: "10+" },
    { icon: Brain, label: "AI Systems", value: "6+" },
    { icon: Rocket, label: "Hackathons", value: "Multiple" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/likithsurya23",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/likith--d/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:likithsurya231@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob w-[500px] h-[500px] top-0 -left-20 animate-aurora" />
        <div className="aurora-blob w-[600px] h-[600px] bottom-0 -right-20 animate-aurora animation-delay-2000" />
        <div className="aurora-blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-aurora animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Mouse Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 50%)`,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full floating"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass badge-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <Sparkles className="w-4 h-4 text-white/60" />
            <span className="text-sm text-white/70">
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Name with Gradient */}
        <motion.h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="text-white/60 font-light">Hi, I'm</span>{" "}
          <span className="gradient-text-animated inline-flex">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="inline-block hover-scale cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Rotating Role */}
        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full glass">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg text-white/70"
              >
                {roles[currentRoleIndex].title}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg text-white/40 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Designing and developing intelligent systems by combining AI/ML with modern web technologies 
          to deliver practical, high-impact solutions
        </motion.p>

        {/* Achievements */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover-lift"
            >
              <item.icon size={16} className="text-white/50" />
              <span className="text-white font-medium">{item.value}</span>
              <span className="text-white/30 text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary group"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass hover-lift"
            >
              <social.icon size={18} className="text-white/60 hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;