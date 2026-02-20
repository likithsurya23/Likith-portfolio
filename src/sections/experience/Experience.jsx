// File: src/sections/experience/Experience.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  Heart,
  Layers,
  Globe,
  ChevronRight,
  Cloud,
  Code2,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import TimelineItem from "../../components/timeline/TimelineItem";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Cloud Application Developer Intern",
      company: "IBM (Watson IoT Platform)",
      date: "2024",
      location: "India",
      description:
        "Developed cloud-based IoT applications with real-time device connectivity and scalable REST APIs.",
      skills: ["IBM Cloud", "IoT", "Django REST", "Cloud Deployment", "APIs"],
      type: "work",
      icon: Cloud,
    },
    {
      title: "Full Stack Developer (Python)",
      company: "Academic & Internship Projects",
      date: "2025",
      location: "Bengaluru",
      description:
        "Built full-stack AI-driven applications using Django, Flask, React, and MySQL.",
      skills: ["Python", "Django", "Flask", "React", "MySQL"],
      type: "work",
      icon: Code2,
    },
    {
      title: "Hackathon Participant",
      company: "National Level Hackathons",
      date: "2022 - 2025",
      location: "India",
      description:
        "Built AI and full-stack solutions under time constraints.",
      skills: ["AI/ML", "Teamwork", "Rapid Prototyping"],
      type: "achievement",
      icon: Trophy,
    },
  ];

  const education = {
    degree: "M.Tech in Computer Engineering",
    school: "SJCE, Mysuru",
    date: "Present",
    location: "Mysuru, India",
    description:
      "Focused on AI systems, scalable architectures, and research-driven development.",
    icon: GraduationCap,
  };

  const certifications = [
    { name: "Cloud Application Development – IBM", icon: Cloud },
    { name: "Python Programming – InternPe", icon: Code2 },
    { name: "Web Development – Prodigy InfoTech", icon: Globe },
    { name: "Full Stack Development – Q Spider", icon: Layers },
  ];

  const stats = [
    { icon: Briefcase, value: "2+", label: "Years Exp" },
    { icon: Trophy, value: "4+", label: "Hackathons" },
    { icon: Award, value: "5+", label: "Certifications" },
    { icon: Heart, value: "10+", label: "Projects" },
  ];

  // Animation variants
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
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Simple Border Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="My Journey">
            <span className="flex items-center justify-center gap-2 sm:gap-3 text-center">
              Experience & Education
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
            </span>
          </SectionHeading>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-10 sm:mt-12 md:mt-14 mb-12 sm:mb-14 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-3 sm:p-4 md:p-5 lg:p-6 text-center border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all rounded-lg sm:rounded-xl"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40 mx-auto mb-1 sm:mb-2" />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black dark:text-white">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-black/50 dark:text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-px bg-black/20 dark:bg-white/20" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white flex items-center gap-2">
                Experience
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black/40 dark:text-white/40" />
              </h3>
              <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
            </motion.div>

            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.title}
                  {...exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Education + Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6 sm:space-y-7 md:space-y-8"
          >
            {/* Education Card */}
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6"
              >
                <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-px bg-black/20 dark:bg-white/20" />
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white flex items-center gap-2">
                  Education
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black/40 dark:text-white/40" />
                </h3>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 md:p-7 lg:p-8 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all rounded-xl"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <education.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black/60 dark:text-white/60 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-black dark:text-white">
                      {education.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-black/50 dark:text-white/50">
                      {education.school}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-black/40 dark:text-white/40 mt-1 sm:mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} className="sm:w-3 sm:h-3" /> {education.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={10} className="sm:w-3 sm:h-3" /> {education.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {education.description}
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="p-5 sm:p-6 md:p-7 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all rounded-xl"
            >
              <h4 className="text-xs sm:text-sm font-semibold text-black/50 dark:text-white/50 uppercase mb-3 sm:mb-4 flex items-center gap-2">
                <Award size={14} className="text-black/40 dark:text-white/40" />
                Certifications
              </h4>

              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black rounded-full flex-shrink-0">
                      <cert.icon size={10} className="sm:w-3 sm:h-3 text-black/40 dark:text-white/40" />
                    </div>
                    <span className="text-xs sm:text-sm text-black/50 dark:text-white/50">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => { /* TODO: Implement credentials view */ }}
                className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition flex items-center gap-1"
              >
                View all credentials
                <ChevronRight size={10} className="sm:w-3 sm:h-3" />
              </motion.button>            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;