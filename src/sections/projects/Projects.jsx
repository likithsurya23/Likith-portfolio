// File: src/sections/projects/Projects.jsx
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowUpRight, Github, Sparkles, Filter, Grid3x3, 
  LayoutGrid, ChevronRight, Code2, Brain, Globe, Zap,
  Star
} from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import ProjectCard from '../../components/cards/ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      title: 'Agriculture AI Platform',
      description: 'AI-powered agriculture platform using Generative AI for crop insights and ML-driven recommendations. Features real-time data processing and scalable REST APIs.',
      tech: ['Next.js', 'Django', 'OpenAI', 'PostgreSQL'],
      category: 'ai',
      github: 'https://github.com/likithsurya23/agriculture',
      demo: 'https://agriculture---ai.vercel.app',
      featured: true,
    },
    {
      title: 'Image Inpainting Using GAN',
      description: 'Deep learning-based image restoration system using GAN to reconstruct damaged image regions with high accuracy.',
      tech: ['PyTorch', 'GAN', 'React', 'Django Rest Framework'],
      category: 'ml',
      github: 'https://github.com/likithsurya23/Image_Inpainting_Using_GAN',
      demo: 'https://image-inpaint.vercel.app',
      featured: true,
    },
    {
      title: 'Lightweight Hybrid CNN-ConvNeXt-Tiny IDS for IoT Networks',
      description: 'Hybrid CNN-ConvNeXt-Tiny IDS for IoT networks with optimized edge deployment and real-time threat detection.',
      tech: ['PyTorch', 'Django', 'IoT', 'Edge AI'],
      category: 'ml',
      github: 'https://github.com/likithsurya23/Lightweight_Hybrid_CNN_And_ConvNeXt-Tiny_IDS_for_IoT_Networks',
      demo: "https://lightweight-hybrid-cnn-and-conv-ne.vercel.app",
      featured: false,
    },
    {
      title: 'SymptomAnalyzer',
      description: 'ML-based disease prediction system analyzing symptoms to provide personalized health recommendations.',
      tech: ['Flask', 'Scikit-learn', 'Pandas', 'React'],
      category: 'ml',
      github: 'https://github.com/likithsurya/symptomanalyzer',
      demo: 'https://symptomanalyzer.vercel.app',
      featured: false,
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: LayoutGrid, count: projects.length },
    { key: 'ai', label: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai' || p.category === 'ml').length },
    { key: 'web', label: 'Web Dev', icon: Globe, count: projects.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob w-[600px] h-[600px] top-20 left-1/4" />
        <div className="aurora-blob w-[700px] h-[700px] bottom-20 right-1/4 animation-delay-2000" />
        <div className="aurora-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Featured Work">
            <span className="flex items-center gap-3">
              Projects
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-white/40" />
              </motion.div>
            </span>
          </SectionHeading>
        </motion.div>

        {/* Controls Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1 rounded-2xl glass border border-white/10">
            {filters.map((f) => {
              const Icon = f.icon;
              const isActive = filter === f.key;
              return (
                <motion.button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <span className={`relative z-10 flex items-center gap-2 ${
                    isActive ? 'text-black' : 'text-white/60 group-hover:text-white'
                  }`}>
                    <Icon size={16} />
                    {f.label}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/10' : 'bg-white/10'
                    }`}>
                      {f.count}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 p-1 rounded-xl glass border border-white/10">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LayoutGrid size={18} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'compact' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid3x3 size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter + viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`grid ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 gap-8' 
                : 'md:grid-cols-3 gap-6'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
              >
                <ProjectCard 
                  {...project}
                  index={index}
                  compact={viewMode === 'compact'}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-4">
              <Filter className="w-8 h-8 text-white/20" />
            </div>
            <h3 className="text-xl font-medium text-white/60 mb-2">No projects found</h3>
            <p className="text-white/40">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: 'Total Projects', value: '10+', icon: Code2 },
            { label: 'AI/ML Projects', value: '6+', icon: Brain },
            { label: 'GitHub Stars', value: '124+', icon: Star },
            { label: 'Live Demos', value: '8+', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="glass-card p-6 text-center group"
            >
              <stat.icon className="w-6 h-6 text-white/30 mx-auto mb-3 group-hover:text-white/50 transition-colors" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/likithsurya23"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 glass" />
            
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/30 transition-colors" />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <Github size={20} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="text-white/60 group-hover:text-white font-medium transition-colors">
                View More on GitHub
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
        </div>  
    </section>
  );
};

export default Projects;