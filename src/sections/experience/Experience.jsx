// File: src/sections/experience/Experience.jsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, GraduationCap, Award, Calendar, MapPin,
  Sparkles, Zap, Cpu, Cloud, Code2, Server, Brain,
  Rocket, Trophy, Star, Heart, Layers, Globe, ChevronRight
} from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import TimelineItem from '../../components/timeline/TimelineItem';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Cloud Application Developer Intern',
      company: 'IBM (Watson IoT Platform)',
      date: '2024',
      location: 'India',
      description:
        'Developed cloud-based IoT applications using IBM Watson IoT Platform. Implemented real-time device connectivity, data ingestion, and analytics dashboards. Designed secure REST APIs and deployed scalable cloud solutions.',
      skills: ['IBM Cloud', 'IoT', 'Django REST', 'Cloud Deployment', 'APIs'],
      type: 'work',
      icon: Cloud
    },
    {
      title: 'Full Stack Developer (Python)',
      company: 'Academic & Internship Projects',
      date: '2025',
      location: 'Bengaluru',
      description:
        'Built full-stack web applications using Python (Django/Flask), React, and MySQL. Developed AI-powered systems including intrusion detection, image inpainting (GAN), and disease prediction platforms.',
      skills: ['Python', 'Django', 'Flask', 'React', 'MySQL'],
      type: 'work',
      icon: Code2
    },
    {
      title: 'Hackathon Participant',
      company: 'Multiple National Level Hackathons',
      date: '2022 - 2025',
      location: 'India',
      description:
        'Actively participated in multiple hackathons, building AI-driven and full-stack solutions under time constraints. Collaborated in teams to design scalable, innovative, and real-world problem-solving systems.',
      skills: ['Problem Solving', 'Teamwork', 'AI/ML', 'Rapid Prototyping'],
      type: 'achievement',
      icon: Trophy
    }
  ];

  const education = {
    degree: 'M.Tech in Computer Engineering',
    school: 'Sri Jayachamarajendra College of Engineering (SJCE)',
    date: '2025 - Present',
    location: 'Mysuru, India',
    description:
      'Specializing in Artificial Intelligence, Machine Learning, and Cloud Technologies. Focused on research-driven AI systems and scalable full-stack architecture.',
    icon: GraduationCap
  };

  const certifications = [
    { name: 'Cloud Application Development – IBM', icon: Cloud },
    { name: 'Python Programming – InternPe', icon: Code2 },
    { name: 'Web Development – Prodigy InfoTech', icon: Globe },
    { name: 'Full Stack Development – Q Spider', icon: Layers },
  ];

  const stats = [
    { icon: Briefcase, value: '2+', label: 'Years Exp' },
    { icon: Trophy, value: '4+', label: 'Hackathons' },
    { icon: Award, value: '5+', label: 'Certifications' },
    { icon: Heart, value: '10+', label: 'Projects' },
  ];

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
    <section id="experience" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
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
        {[...Array(30)].map((_, i) => (
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
          <SectionHeading subtitle="My Journey">
            <span className="flex items-center justify-center gap-3">
              Experience & Education
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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Experience
                <Briefcase className="w-5 h-5 text-white/40" />
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.title}
                  {...exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Education
                <GraduationCap className="w-5 h-5 text-white/40" />
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Education Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <education.icon className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors">
                        {education.degree}
                      </h4>
                      <p className="text-white/50 text-sm mb-2">{education.school}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-white/30">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {education.date}</span>
                        <span className="flex items-center gap-1"><MapPin size={10} /> {education.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {education.description}
                  </p>

                  {/* Current Focus Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['AI/ML', 'Cloud Tech', 'Research'].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="mt-6 glass-card rounded-2xl p-6"
              >
                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award size={16} className="text-white/40" />
                  Certifications
                </h4>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 group/cert"
                    >
                      <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <cert.icon size={12} className="text-white/30 group-hover/cert:text-white/50" />
                        </div>
                        {index < certifications.length - 1 && (
                          <div className="absolute top-6 left-3 w-0.5 h-4 bg-white/5" />
                        )}
                      </div>
                      <span className="text-sm text-white/40 group-hover/cert:text-white/60 transition-colors">
                        {cert.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* View All Link */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-4 text-xs text-white/20 hover:text-white/40 transition-colors flex items-center gap-1"
                >
                  View all credentials
                  <ChevronRight size={10} />
                </motion.button>
              </motion.div>

              {/* Skills Highlight */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="mt-6 glass-card rounded-2xl p-6"
              >
                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
                  Key Skills Gained
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Computing', 'Full Stack', 'AI/ML', 'IoT', 'API Design', 'Team Leadership'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Experience;