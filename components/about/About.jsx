"use client";

import React, { useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Code2,
    Brain,
    Rocket,
    Target,
    Sparkles,
    Zap,
    Award,
    Star,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const About = () => {
    const canvasRef = useRef(null);

    const features = [
        {
            icon: Code2,
            title: "Clean Code",
            description:
                "Writing maintainable, scalable code following best practices",
        },
        {
            icon: Brain,
            title: "AI Integration",
            description:
                "Seamlessly integrating ML models into production systems",
        },
        {
            icon: Rocket,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency",
        },
        {
            icon: Target,
            title: "Problem Solver",
            description: "Turning complex challenges into elegant solutions",
        },
    ];

    const stats = [
        { value: "10+", label: "Projects Built", icon: Code2 },
        { value: "6+", label: "AI Models", icon: Brain },
        { value: "5+", label: "Hackathons", icon: Award },
        { value: "2025", label: "M.Tech", icon: Star },
    ];

    const techStack = ["React", "Python", "Django", "AI/ML"];

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

    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section
            id="about"
            className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                >
                    <SectionHeading subtitle="Who I Am" align="center">
                        <span className="flex items-center justify-center gap-2 md:gap-3">
                            About Me
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
                        </span>
                    </SectionHeading>
                </motion.div>

                {/* Mobile: Avatar - Larger size (visible only on mobile) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="block lg:hidden mb-8 sm:mb-10"
                >
                    <div className="flex flex-col items-center">
                        {/* Circular Image - Increased size for mobile */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 sm:mb-5 rounded-full overflow-hidden ring-4 ring-black/10 dark:ring-white/10 relative"
                        >
                            <Image
                                src="/images/goku.jpeg"
                                alt="Likith D"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Name and Title - Larger text */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-center">
                            Likith D
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 text-center">
                            Full Stack &amp; AI Developer
                        </p>
                    </div>
                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* LEFT SIDE - Bio and Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5 sm:space-y-6 md:space-y-8"
                    >
                        {/* Bio Cards */}
                        <motion.div
                            variants={itemVariants}
                            className="p-5 sm:p-6 md:p-8 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all rounded-xl backdrop-blur-sm bg-white/90 dark:bg-black/90"
                        >
                            <p className="text-sm sm:text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
                                I&apos;m passionate about building intelligent systems that
                                create real-world impact. My journey evolved into developing{" "}
                                <span className="text-black dark:text-white font-medium">
                                    AI-powered solutions
                                </span>{" "}
                                and scalable applications.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
                        >
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ y: -4 }}
                                        className="p-3 sm:p-4 text-center border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all rounded-lg"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black/40 dark:text-white/40 mx-auto mb-1 sm:mb-2" />
                                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black dark:text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-[8px] sm:text-[10px] md:text-xs text-black/50 dark:text-white/50 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Current Focus */}
                        <motion.div
                            variants={itemVariants}
                            className="p-5 sm:p-6 border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all rounded-xl"
                        >
                            <h4 className="text-xs sm:text-sm font-semibold text-black/50 dark:text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Zap size={14} className="text-black/40 dark:text-white/40" />
                                Current Focus
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {["Generative AI", "System Design", "Full Stack"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-[10px] sm:text-xs rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/60 dark:text-white/60"
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Desktop Avatar (hidden on mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative hidden lg:flex lg:flex-col lg:items-center lg:justify-start"
                    >
                        {/* Larger circular image for desktop */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-56 h-56 xl:w-64 xl:h-64 mb-5 rounded-full overflow-hidden ring-4 ring-black/10 dark:ring-white/10 relative"
                        >
                            <Image
                                src="/images/goku.jpeg"
                                alt="Likith D"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Name and Title */}
                        <h3 className="text-3xl xl:text-4xl font-bold text-black dark:text-white text-center">
                            Likith D
                        </h3>
                        <p className="text-lg xl:text-xl text-black/60 dark:text-white/60 text-center mb-4">
                            Full Stack &amp; AI Developer
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-md">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 text-sm rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-black/60 dark:text-white/60"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-10 sm:mt-12 md:mt-14 lg:mt-16"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                className="p-4 sm:p-5 md:p-6 text-center border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all rounded-xl"
                            >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-black/40 dark:text-white/40" />
                                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-black dark:text-white mb-1">
                                    {feature.title}
                                </h4>
                                <p className="text-[8px] sm:text-[10px] md:text-xs text-black/50 dark:text-white/50">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Gradient Fades */}
            <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-[5]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-[5]" />
        </section>
    );
};

export default About;
