// File: src/sections/about/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Target, Sparkles, Zap, Award, Star } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
      gradient: 'from-white to-gray-400'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamlessly integrating ML models into production systems',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      gradient: 'from-white to-gray-400'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
      gradient: 'from-gray-400 to-gray-600'
    }
  ];

  const stats = [
    { value: '10+', label: 'Projects Built', icon: Code2 },
    { value: '6+', label: 'AI Models', icon: Brain },
    { value: '5+', label: 'Hackathons', icon: Award },
    { value: '2025', label: 'M.Tech', icon: Star },
  ];

  const techStack = ['React', 'Python', 'Django', 'AI/ML', 'Cloud', 'Node.js'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob w-[500px] h-[500px] top-0 -left-20" />
        <div className="aurora-blob w-[600px] h-[600px] bottom-0 -right-20 animation-delay-2000" />
        <div className="aurora-blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full floating"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading subtitle="Who I Am" align="center">
            <span className="flex items-center justify-center gap-3">
              About Me
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-white/40" />
              </motion.div>
            </span>
          </SectionHeading>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio */}
            <motion.div variants={itemVariants} className="glass-card p-8 mb-8">
              <p className="text-white/40 text-lg leading-relaxed">
                I'm an <span className="text-white font-medium">M.Tech Computer Engineering student</span> passionate 
                about building intelligent systems that make a difference. My journey started with curiosity about how 
                things work, evolving into creating <span className="text-white/80">AI-powered solutions</span>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 mb-8">
              <p className="text-white/40 text-lg leading-relaxed">
                I specialize in <span className="text-white/80">full-stack development</span> and deploying 
                <span className="text-white/80"> machine learning models</span> into production. Every project is an 
                opportunity to push boundaries and create impact.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="glass-card p-4 text-center group"
                  >
                    <Icon className="w-5 h-5 text-white/30 mx-auto mb-2 group-hover:text-white/50 transition-colors" />
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Current Focus */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap size={14} className="text-white/30" />
                Current Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'Cloud Architecture', 'System Design', 'Full Stack'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white/70 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -4 }}
            >
              <div className="gradient-border rounded-3xl">
                <div className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden">
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  
                  {/* Profile Icon */}
                  <motion.div 
                    className="relative w-36 h-36 mx-auto mb-6"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl" />
                    <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20">
                      <span className="text-5xl font-bold text-white/80">LD</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Likith Surya
                  </h3>
                  <p className="text-white/40 mb-4">
                    M.Tech Computer Engineering
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Gradient Line */}
                  <div className="w-20 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 mx-auto rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              variants={itemVariants}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-4 -left-4 z-20"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-sm shadow-xl flex items-center gap-2">
                  <Zap size={14} className="text-white/60" />
                  Open to Work
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 z-20"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-sm shadow-xl flex items-center gap-2">
                  <Brain size={14} className="text-white/60" />
                  AI Enthusiast
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`} />
                <div className="relative glass-card p-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                  <Icon className="w-8 h-8 mb-3 text-white/30 group-hover:text-white/50 transition-colors" strokeWidth={1.5} />
                  <h4 className="text-white font-semibold mb-1 text-sm">{feature.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;