// File: src/components/timeline/TimelineItem.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ChevronRight, Sparkles } from 'lucide-react';

const TimelineItem = ({ 
  title, 
  company, 
  date, 
  location, 
  description, 
  skills, 
  type,
  icon: Icon,
  color,
  index,
  isLast 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
      )}

      <div className="relative flex gap-6">
        {/* Icon */}
        <motion.div 
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity`} />
          <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all`}>
            {Icon && <Icon size={24} className="text-white/60 group-hover:text-white/80 transition-colors" />}
          </div>
          
          {/* Type Badge */}
          {type === 'achievement' && (
            <div className="absolute -top-2 -right-2">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-50" />
                <Award size={14} className="relative text-yellow-400" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <motion.div 
            className="glass rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all"
            whileHover={{ y: -2 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors">
                  {title}
                </h4>
                <p className="text-white/50 text-sm mb-2">{company}</p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/30">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {location}
                  </span>
                </div>
              </div>

              {/* Expand Button */}
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={16} className="text-white/40" />
                </motion.div>
              </motion.button>
            </div>

            {/* Description */}
            <motion.p 
              className="text-white/40 text-sm leading-relaxed"
              animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Skills */}
            <motion.div 
              className="flex flex-wrap gap-2 mt-4"
              animate={{ opacity: isExpanded ? 1 : 0.7 }}
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:bg-white/10 group-hover:text-white/60 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;