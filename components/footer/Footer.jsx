"use client";

import React, { useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = ({ scrollTo }) => {
    const canvasRef = useRef(null);
    const currentYear = new Date().getFullYear();

    // Network animation specifically tuned for footer context
    useNetworkAnimation(canvasRef, {
        numPoints: 12, // Fewer points for footer
        velocity: 0.1, // Slower movement
        radiusBase: 1, // Smaller points
        radiusVar: 1.5,
        opacityMult: 0.3, // Lower opacity
        strokeDark: "rgba(255, 255, 255, 0.05)",
        strokeLight: "rgba(0, 0, 0, 0.04)",
    });

    const socialLinks = [
        { icon: Github, href: "https://github.com/likithsurya23", label: "GitHub" },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/likith--d/",
            label: "LinkedIn",
        },
        { icon: Mail, href: "mailto:likithsurya231@gmail.com", label: "Email" },
    ];

    const quickLinks = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
    ];

    return (
        <footer className="relative bg-white dark:bg-black transition-colors duration-500 pt-16 pb-8 border-t border-black/5 dark:border-white/5 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0"
                    style={{ opacity: 0.4 }}
                />
                {/* Subtle gradients */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white dark:from-black to-transparent z-[5]" />
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-white dark:from-black to-transparent z-[5]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 cursor-pointer group w-fit"
                            onClick={() => scrollTo("home")}
                        >
                            <div
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg tracking-wider
                                transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                            >
                                LD
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                                Likith D
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-black/60 dark:text-white/60 max-w-sm leading-relaxed"
                        >
                            Designing and developing intelligent systems by combining AI/ML
                            with modern web technologies to deliver practical, high-impact
                            solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/60 dark:text-white/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-bold text-black dark:text-white mb-6 uppercase tracking-wider text-sm"
                        >
                            Quick Links
                        </motion.h4>
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-3"
                        >
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors relative group flex items-center"
                                    >
                                        <span className="w-0 h-px bg-black dark:bg-white mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-bold text-black dark:text-white mb-6 uppercase tracking-wider text-sm"
                        >
                            Contact
                        </motion.h4>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4 text-black/60 dark:text-white/60"
                        >
                            <p className="flex items-center gap-3">
                                <Mail size={16} />
                                <a
                                    href="mailto:likithsurya231@gmail.com"
                                    className="hover:text-black dark:hover:text-white transition-colors"
                                >
                                    likithsurya231@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2 ml-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="ml-1">Open for opportunities</span>
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-black/50 dark:text-white/50 text-sm flex items-center gap-1">
                        © {currentYear} Likith D. All rights reserved.
                    </p>

                    <p className="text-black/40 dark:text-white/40 text-sm flex items-center gap-1">
                        Code crafted with{" "}
                        <Heart size={14} className="text-black dark:text-white mx-1" />
                    </p>

                    <button
                        onClick={() => scrollTo("home")}
                        className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-black/10 dark:border-white/10"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={16} />
                    </button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
