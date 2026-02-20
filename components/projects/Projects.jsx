"use client";

import React, { useState, useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import { motion } from "framer-motion";
import { Filter, Sparkles, LayoutGrid, List } from "lucide-react";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

// Note: Replace these with actual image paths in your public folder once running
const projects = [
    {
        title: "Likith Portfolio",
        description: "My personal portfolio website built with React, Vite, and Tailwind CSS. Showcases my projects, skills, and experience with interactive animations.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/likithsurya23/likithsurya23.github.io",
        demo: "https://likithsurya23.github.io/",
        featured: true,
        category: "frontend",
        image: null,
    },
    {
        title: "IDS Framework",
        description: "An Intrusion Detection System framework using machine learning to detect and classify network attacks with high accuracy. Built with Flask and Scikit-learn.",
        tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
        github: "https://github.com/likithsurya23/ids-framework",
        demo: null,
        featured: true,
        category: "ai",
        image: "/images/ids.png",
    },
    {
        title: "AgriVision AI",
        description: "A comprehensive agricultural intelligence platform using computer vision to detect crop diseases and recommend treatments.",
        tech: ["Python", "TensorFlow", "React", "Django"],
        github: "https://github.com/likithsurya23/agrivision-ai",
        demo: null,
        featured: true,
        category: "fullstack",
        image: "/images/agri.png",
    },
    {
        title: "Image Inpainting",
        description: "An AI-powered tool for intelligent image restoration and object removal using deep learning techniques.",
        tech: ["PyTorch", "OpenCV", "Python", "React"],
        github: "https://github.com/likithsurya23/image-inpainting",
        demo: null,
        featured: false,
        category: "ai",
        image: "/images/inpaint.png",
    },
];

const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI / ML" },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'compact'
    const canvasRef = useRef(null);

    const filteredProjects = projects.filter(
        (project) => filter === "all" || project.category === filter
    );

    // Network animation with subtle dark theme integration
    useNetworkAnimation(canvasRef, {
        numPoints: 15, // Fewer points for less distraction behind cards
        velocity: 0.15,
        radiusBase: 1.5,
        radiusVar: 2,
        opacityMult: 0.4,
        strokeDark: "rgba(255, 255, 255, 0.08)",
        strokeLight: "rgba(0, 0, 0, 0.05)",
    });

    return (
        <section
            id="projects"
            className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-500">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-auto"
                    style={{ opacity: 0.6 }}
                />
                {/* Gradients */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-black to-transparent z-[5]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-black to-transparent z-[5]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
                    <SectionHeading subtitle="My Recent Work" align="left">
                        <span className="flex items-center gap-2 md:gap-3">
                            Featured Projects
                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
                        </span>
                    </SectionHeading>

                    {/* Controls Container */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 md:mt-0">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                            <Filter className="w-4 h-4 ml-2 mr-1 text-black/40 dark:text-white/40 hidden sm:block" />
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${filter === cat.id
                                            ? "text-black dark:text-white shadow-sm"
                                            : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {filter === cat.id && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-white dark:bg-black rounded-lg border border-black/10 dark:border-white/10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="hidden sm:flex items-center gap-1 p-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid"
                                        ? "bg-white dark:bg-black text-black dark:text-white shadow-sm border border-black/10 dark:border-white/10"
                                        : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                                    }`}
                                aria-label="Grid view"
                            >
                                <LayoutGrid size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode("compact")}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "compact"
                                        ? "bg-white dark:bg-black text-black dark:text-white shadow-sm border border-black/10 dark:border-white/10"
                                        : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                                    }`}
                                aria-label="List view"
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Grid/List */}
                <motion.div
                    layout
                    className={`grid gap-6 md:gap-8 ${viewMode === "grid"
                            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                            : "grid-cols-1 max-w-4xl mx-auto"
                        }`}
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                            compact={viewMode === "compact"}
                        />
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4 border-2 border-dashed border-black/20 dark:border-white/20">
                            <Filter className="w-8 h-8 text-black/40 dark:text-white/40" />
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                            No projects found
                        </h3>
                        <p className="text-black/60 dark:text-white/60">
                            Try adjusting your filters to see more projects.
                        </p>
                        <button
                            onClick={() => setFilter("all")}
                            className="mt-6 px-6 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition-transform"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
