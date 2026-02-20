"use client";

import React, { useState, useEffect, useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import {
    motion,
    useTransform,
    useScroll,
    AnimatePresence,
} from "framer-motion";
import {
    Sparkles,
    Code2,
    Github,
    Linkedin,
    Mail,
    ChevronRight,
} from "lucide-react";

const Hero = ({ scrollTo }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    const roles = [{ title: "Full Stack Developer" }];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/likithsurya23",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/likith--d/",
            label: "LinkedIn",
        },
        {
            icon: Mail,
            href: "mailto:likithsurya231@gmail.com",
            label: "Email",
        },
    ];

    const name = "Likith D";

    // Network animation with interconnected moving points
    useNetworkAnimation(canvasRef, {
        numPoints: 25,
        velocity: 0.3,
        radiusBase: 2,
        radiusVar: 3,
        opacityMult: 0.8,
        strokeDark: "rgba(255, 255, 255, 0.15)",
        strokeLight: "rgba(0, 0, 0, 0.12)",
    });

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 px-4 sm:px-6"
        >
            {/* Canvas for interconnected points animation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-auto z-0"
                style={{ opacity: 0.8 }}
            />

            {/* Subtle gradient overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 dark:from-black/30 dark:via-transparent dark:to-black/30 pointer-events-none z-[5]" />

            {/* Main Content */}
            <motion.div
                style={{ y: y1, opacity, scale }}
                className="relative z-10 w-full max-w-5xl mx-auto text-center"
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
                        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75" />
                            <span className="relative inline-flex rounded-full h-full w-full bg-black dark:bg-white"></span>
                        </span>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white" />
                        <span className="text-xs sm:text-sm text-black dark:text-white">
                            Open to Opportunities
                        </span>
                    </div>
                </motion.div>

                {/* Name with Letter Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-4 sm:mb-6"
                >
                    <span className="block text-black/70 dark:text-white/70 text-2xl sm:text-4xl md:text-5xl font-light mb-2">
                        Hi, I&apos;m
                    </span>

                    <h1 className="font-bold tracking-tight">
                        <span className="text-black dark:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl block">
                            {name.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    whileHover={{ y: -3 }}
                                    className="inline-block hover-lift cursor-default"
                                    style={{ marginRight: char === " " ? "0.5rem" : "0" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                </motion.div>

                {/* Rotating Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 sm:mb-8 flex justify-center"
                >
                    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRoleIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm sm:text-base md:text-lg text-black dark:text-white"
                            >
                                {roles[currentRoleIndex].title}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                >
                    Designing and developing intelligent systems by combining AI/ML with
                    modern web technologies to deliver practical, high-impact solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4"
                >
                    <button
                        onClick={() => scrollTo("projects")}
                        className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-all border-2 border-black dark:border-white shadow-md"
                    >
                        <span className="flex items-center justify-center gap-2">
                            View My Work
                            <ChevronRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </span>
                    </button>

                    <button
                        onClick={() => scrollTo("contact")}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg hover:opacity-80 transition-all border-2 border-black dark:border-white shadow-md"
                    >
                        Get in Touch
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center gap-3 sm:gap-4"
                >
                    {socialLinks.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 sm:p-3 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md hover-lift"
                            aria-label={social.label}
                        >
                            <social.icon
                                size={16}
                                className="sm:w-[18px] sm:h-[18px] text-black dark:text-white"
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Gradient Fades - Kept for clean edges */}
            <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-[5]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-[5]" />
        </section>
    );
};

export default Hero;
