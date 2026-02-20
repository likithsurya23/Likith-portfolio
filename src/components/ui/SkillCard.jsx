// File: src/components/ui/SkillCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, level, isHovered, color = 'from-white to-white/60' }) => {
  // Split skills into two columns for better layout
  const midPoint = Math.ceil(skills.length / 2);
  const firstColumn = skills.slice(0, midPoint);
  const secondColumn = skills.slice(midPoint);

  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Container with Glass Effect */}
      <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
        isHovered ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-white/10'
      }`}>
        
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 70%)`,
          }}
        />

        {/* Progress Bar with Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
          <motion.div 
            className={`h-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 mt-2">
          <div className="flex items-center gap-4">
            {/* Icon with Animated Background */}
            <motion.div 
              className="relative"
              animate={{ 
                rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                <Icon size={24} className="text-white/60 group-hover:text-white/80 transition-colors" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Title and Level */}
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-white/30">Proficiency</span>
                <motion.div 
                  className="flex items-center gap-1"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                >
                  <span className="text-sm font-medium text-white">{level}%</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Level Indicator */}
          <motion.div 
            className="flex items-center gap-1"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < Math.ceil(level / 20) ? 'bg-white/60' : 'bg-white/10'
                }`}
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, delay: i * 0.1, repeat: isHovered ? Infinity : 0 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* First Column */}
          <div className="space-y-2">
            {firstColumn.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group/skill"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                  <ChevronRight size={12} className="text-white/20 group-hover/skill:text-white/40 transition-colors" />
                  <span className="text-sm text-white/50 group-hover/skill:text-white/70 transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-2">
            {secondColumn.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (midPoint + index) * 0.05 }}
                className="group/skill"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                  <ChevronRight size={12} className="text-white/20 group-hover/skill:text-white/40 transition-colors" />
                  <span className="text-sm text-white/50 group-hover/skill:text-white/70 transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <motion.div 
          className="flex items-center justify-between mt-4 pt-4 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-white/20" />
            <span className="text-xs text-white/30">
              {skills.length} technologies
            </span>
          </div>
          
          {/* Level Badge */}
          <motion.div
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40"
            animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            {level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : 'Intermediate'}
          </motion.div>
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;