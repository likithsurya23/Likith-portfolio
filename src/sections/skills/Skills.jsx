// File: src/sections/skills/Skills.jsx
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Layout, Server, BrainCircuit, Terminal, 
  Database, Cloud, GitBranch, Figma, TestTube, Layers,
  Sparkles, Zap, Workflow, Award, TrendingUp, Clock,
  Cpu, Rocket, Palette, Star
} from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import SkillCard from '../../components/ui/SkillCard';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'C++', 'SQL'],
      level: 90,
      delay: 0,
      category: 'core',
      color: 'from-white to-gray-400',
      experience: '4+ years'
    },
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      level: 95,
      delay: 0.1,
      category: 'frontend',
      color: 'from-gray-400 to-gray-600',
      experience: '3+ years'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Django', 'Flask', 'REST APIs'],
      level: 85,
      delay: 0.2,
      category: 'backend',
      color: 'from-white to-gray-400',
      experience: '3+ years'
    },
    {
      icon: BrainCircuit,
      title: 'AI/ML',
      skills: ['PyTorch', 'TensorFlow', 'CNN', 'GAN', 'NLP'],
      level: 88,
      delay: 0.3,
      category: 'ai',
      color: 'from-gray-400 to-gray-600',
      experience: '2+ years'
    },
  ];

  const additionalSkills = [
    { icon: Cloud, label: 'Microservices' },
    { icon: GitBranch, label: 'Agile/Scrum' },
    { icon: Figma, label: 'UI/UX Design' },
    { icon: TestTube, label: 'Testing' },
    { icon: Layers, label: 'System Design' },
    { icon: BrainCircuit, label: 'MLOps' },
  ];

  const stats = [
    { icon: Award, value: '4+', label: 'Core Skills' },
    { icon: TrendingUp, value: '15+', label: 'Technologies' },
    { icon: Clock, value: '3+', label: 'Years Exp' },
    { icon: Rocket, value: '10+', label: 'Projects' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(s => s.category === activeFilter);

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
    <section id="skills" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob w-[500px] h-[500px] top-1/4 left-0" />
        <div className="aurora-blob w-[600px] h-[600px] bottom-1/4 right-0 animation-delay-2000" />
        <div className="aurora-blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Technologies I Master">
            <span className="flex items-center justify-center gap-3">
              Skills & Expertise
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-white/40" />
              </motion.div>
            </span>
          </SectionHeading>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card p-6 text-center group"
            >
              <stat.icon className="w-6 h-6 text-white/30 mx-auto mb-3 group-hover:text-white/50 transition-colors" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {filteredSkills.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <SkillCard 
                {...category} 
                isHovered={hoveredSkill === index} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium text-white/40 mb-8 tracking-wide flex items-center justify-center gap-2">
            <Workflow className="w-4 h-4" />
            Also experienced with
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-md" />
                <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 group-hover:border-white/20 transition-all cursor-default">
                  <skill.icon size={14} className="text-white/40 group-hover:text-white/60 transition-colors" />
                  <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{skill.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;