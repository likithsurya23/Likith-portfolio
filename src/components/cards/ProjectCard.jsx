// File: src/components/cards/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code2, Sparkles, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, tech, github, demo, featured, index, compact = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a consistent gradient based on title (black/white theme)
  const getGradient = () => {
    const gradients = [
      'from-white/20 via-white/10 to-transparent',
      'from-gray-400/20 via-gray-500/10 to-transparent',
      'from-white/15 via-white/5 to-transparent',
      'from-gray-300/20 via-gray-400/10 to-transparent',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.15 : 0 }}
      />

      {/* Card Container */}
      <div className={`relative h-full glass-card border transition-all duration-500 overflow-hidden ${
        isHovered ? 'border-white/20 glow-white' : 'border-white/10'
      }`}>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 grid-pattern opacity-5" />

        {/* Featured Badge */}
        {featured && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 left-3 z-20"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-50" />
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles size={12} className="text-white/80" />
                <span className="text-xs font-medium text-white/90">Featured</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Card Header Area */}
        <div className="relative h-40 overflow-hidden">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()}`}>
            <div className="absolute inset-0 backdrop-blur-xl" />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 grid-pattern opacity-10" />

          {/* Project Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-xl">
                <Code2 size={32} className="text-white/30" />
              </div>
              
              {/* Orbiting ring */}
              <motion.div
                className="absolute -inset-2 border border-white/10 rounded-xl"
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Hover Overlay with Actions */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent flex items-end justify-between p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2 w-full">
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass text-white text-xs font-medium hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={14} /> 
                  <span>Code</span>
                </motion.a>
              )}
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white text-black text-xs font-medium hover:bg-white/90 transition-all shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={14} /> 
                  <span>Demo</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="relative p-5">
          {/* Title and Arrow */}
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
              {title}
            </h3>
            
            <motion.div
              animate={{ 
                x: isHovered ? 2 : 0, 
                y: isHovered ? -2 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={18} className="text-white/30 group-hover:text-white/50" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70 transition-all"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Stats Row (Optional) */}
          <motion.div 
            className="flex items-center justify-between mt-4 pt-3 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-white/20 text-xs">
              <Star size={12} className="text-white/20" />
              <span>{tech.length} technologies</span>
            </div>
            
            {/* View Project Link */}
            <motion.span
              animate={{ x: isHovered ? 2 : 0 }}
              className="text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1"
            >
              View Project
              <ChevronRight size={10} />
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom Line Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;