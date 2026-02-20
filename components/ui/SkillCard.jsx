"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, skills, level, isHovered }) => {
    return (
        <div
            className={`relative h-full p-6 border-2 transition-all duration-300 rounded-xl bg-white dark:bg-black ${isHovered
                    ? "border-black dark:border-white shadow-lg -translate-y-1"
                    : "border-black/20 dark:border-white/20"
                }`}
        >
            <div className="flex items-center gap-4 mb-6">
                <div
                    className={`p-3 rounded-lg border-2 transition-colors duration-300 ${isHovered
                            ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                            : "bg-transparent text-black/40 dark:text-white/40 border-black/20 dark:border-white/20"
                        }`}
                >
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-black dark:text-white uppercase tracking-tight">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-black dark:bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>
                        <span className="text-[10px] text-black/40 dark:text-white/40 font-medium">
                            {level}%
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <Icon size={80} />
            </div>
        </div>
    );
};

export default SkillCard;
