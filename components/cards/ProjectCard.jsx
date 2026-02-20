"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Github,
    ExternalLink,
    Star,
    Sparkles,
    ChevronRight,
} from "lucide-react";

const ProjectCard = ({
    title,
    description,
    tech,
    github,
    demo,
    featured,
    index,
    compact = false,
    image,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {/* Card Container - Pure Black/White */}
            <div
                className={`relative h-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border-2 transition-all duration-300 overflow-hidden ${isHovered
                        ? "border-black dark:border-white shadow-lg"
                        : "border-black/20 dark:border-white/20"
                    }`}
            >
                {/* Featured Badge */}
                {featured && (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3 left-3 z-20"
                    >
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black dark:bg-white border-2 border-black dark:border-white">
                            <Sparkles size={12} className="text-white dark:text-black" />
                            <span className="text-xs font-medium text-white dark:text-black">
                                Featured
                            </span>
                        </div>
                    </motion.div>
                )}

                {/* Card Header Area - Project Image */}
                <div className="relative h-48 overflow-hidden bg-white dark:bg-black">
                    {/* Project Image */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {image && !imageError ? (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            // Fallback gradient pattern when no image or error
                            <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/20 dark:from-white/5 dark:to-white/20">
                                <div className="w-full h-full grid grid-cols-3 gap-0.5 p-2 opacity-30">
                                    {[...Array(9)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="border border-black/10 dark:border-white/10"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Dark Overlay on Hover */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 dark:bg-white/60 backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Hover Overlay with Actions */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-3 p-4"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex gap-3 w-full max-w-[200px]">
                            {github && (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border-2 border-white bg-transparent text-white text-sm font-medium hover:bg-white hover:text-black transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github size={16} />
                                    <span>Code</span>
                                </motion.a>
                            )}
                            {demo && (
                                <motion.a
                                    href={demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-transparent hover:text-white transition-all border-2 border-white"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ExternalLink size={16} />
                                    <span>Demo</span>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="relative p-5">
                    {/* Title and Arrow */}
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-black dark:text-white">
                            {title}
                        </h3>

                        <motion.div
                            animate={{
                                x: isHovered ? 2 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronRight
                                size={18}
                                className="text-black/50 dark:text-white/50"
                            />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                        {tech.map((t, i) => (
                            <motion.span
                                key={t}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-2 py-1 text-xs rounded-md border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-black dark:text-white"
                            >
                                {t}
                            </motion.span>
                        ))}
                    </div>

                    {/* Footer */}
                    <motion.div
                        className="flex items-center justify-between mt-4 pt-3 border-t border-black/10 dark:border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 text-black/40 dark:text-white/40 text-xs">
                            <Star
                                size={12}
                                className="text-black/40 dark:text-white/40"
                            />
                            <span>{tech.length} technologies</span>
                        </div>

                        {/* View Project Link */}
                        <motion.span
                            animate={{ x: isHovered ? 2 : 0 }}
                            className="text-xs text-black/50 dark:text-white/50 flex items-center gap-1 font-medium"
                        >
                            View Project
                            <ChevronRight size={10} />
                        </motion.span>
                    </motion.div>
                </div>

                {/* Bottom Border Animation */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
