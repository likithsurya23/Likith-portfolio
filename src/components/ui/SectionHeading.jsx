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
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
        <span className="text-xs font-medium text-black/60 dark:text-white/60 uppercase tracking-widest">{subtitle}</span>
      </motion.div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">
        {children}
      </h2>
      
      <div className={`h-px w-24 bg-gradient-to-r from-black/40 to-transparent dark:from-white/40 dark:to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;