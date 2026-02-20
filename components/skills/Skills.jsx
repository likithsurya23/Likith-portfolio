"use client";

import React, { useState, useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import { motion, useInView } from "framer-motion";
import {
    Code2,
    Layout,
    Server,
    BrainCircuit,
    Cloud,
    GitBranch,
    Figma,
    TestTube,
    Layers,
    Sparkles,
    Workflow,
    Award,
    TrendingUp,
    Clock,
    Rocket,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";

const Skills = () => {
    const ref = useRef(null);
    const canvasRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = [
        {
            icon: Code2,
            title: "Languages",
            skills: ["Python", "JavaScript", "C++", "SQL"],
            level: 90,
        },
        {
            icon: Layout,
            title: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS"],
            level: 95,
        },
        {
            icon: Server,
            title: "Backend",
            skills: ["Django", "Flask", "REST APIs"],
            level: 85,
        },
        {
            icon: BrainCircuit,
            title: "AI/ML",
            skills: ["PyTorch", "TensorFlow", "CNN", "NLP"],
            level: 88,
        },
    ];

    const additionalSkills = [
        { icon: Cloud, label: "Microservices" },
        { icon: GitBranch, label: "Agile/Scrum" },
        { icon: Figma, label: "UI/UX Design" },
        { icon: TestTube, label: "Testing" },
        { icon: Layers, label: "System Design" },
        { icon: BrainCircuit, label: "MLOps" },
    ];

    const stats = [
        { icon: Award, value: "4+", label: "Core Skills" },
        { icon: TrendingUp, value: "15+", label: "Technologies" },
        { icon: Clock, value: "3+", label: "Years Exp" },
        { icon: Rocket, value: "10+", label: "Projects" },
    ];

    // Network animation with interconnected moving points
    useNetworkAnimation(canvasRef, {
        numPoints: 20,
        velocity: 0.2,
        radiusBase: 1.5,
        radiusVar: 2.5,
        opacityMult: 0.6,
        strokeDark: "rgba(255, 255, 255, 0.1)",
        strokeLight: "rgba(0, 0, 0, 0.08)",
    });

    return (
        <section
            id="skills"
            className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
        >
            {/* Canvas for interconnected points animation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-auto z-0"
                style={{ opacity: 0.6 }}
            />

            {/* Subtle gradient overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 dark:from-black/30 dark:via-transparent dark:to-black/30 pointer-events-none z-[5]" />

            {/* Simple Border Decoration */}
            <div className="absolute inset-0 pointer-events-none z-[5]">
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
                    className="mb-10 md:mb-16"
                >
                    <SectionHeading subtitle="Technologies I Master">
                        <span className="flex items-center justify-center gap-2 md:gap-3">
                            Skills &amp; Expertise
                            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
                        </span>
                    </SectionHeading>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mb-12">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -4 }}
                            className="p-4 md:p-6 text-center border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all"
                        >
                            <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-black/40 dark:text-white/40 mx-auto mb-2 md:mb-3" />
                            <div className="text-lg md:text-2xl font-bold text-black dark:text-white">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-black/50 dark:text-white/50">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            whileHover={{ y: -4 }}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <SkillCard
                                {...category}
                                isHovered={hoveredSkill === index}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="text-center">
                    <h3 className="text-sm md:text-lg font-medium text-black/40 dark:text-white/40 mb-6 md:mb-8 flex items-center justify-center gap-2">
                        <Workflow className="w-4 h-4" />
                        Also experienced with
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {additionalSkills.map((skill) => (
                            <motion.div
                                key={skill.label}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all"
                            >
                                <skill.icon
                                    size={14}
                                    className="text-black/40 dark:text-white/40"
                                />
                                <span className="text-xs md:text-sm text-black/60 dark:text-white/60">
                                    {skill.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gradient Fades */}
            <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-[5]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-[5]" />
        </section>
    );
};

export default Skills;
