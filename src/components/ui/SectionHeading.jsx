// File: src/components/ui/SectionHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle, align = 'center' }) => {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${alignClasses[align]}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{subtitle}</span>
      </motion.div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
        {children}
      </h2>
      
      <div className={`h-px w-24 bg-gradient-to-r from-white/40 to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;