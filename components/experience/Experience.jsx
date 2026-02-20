"use client";

import React, { useRef } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import { Briefcase, GraduationCap, Award, Compass } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/timeline/TimelineItem";

const Experience = () => {
    const canvasRef = useRef(null);

    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Company Name",
            date: "2023 - Present",
            location: "Bengaluru, India",
            description:
                "Developing scalable web applications using React and Node.js. Integrated AI models for enhanced user experience and implemented robust backend architectures. Led a team of 3 junior developers in delivering a major e-commerce platform revamp.",
            skills: ["React", "Node.js", "MongoDB", "AWS", "Python"],
            type: "work",
            icon: Briefcase,
        },
        {
            title: "AI/ML Intern",
            company: "Tech Startups Inc",
            date: "2022 - 2023",
            location: "Remote",
            description:
                "Built and trained computer vision models for object detection. Optimized inference pipelines for edge devices leading to a 40% reduction in processing time. Collaborated with the product team to define feature requirements.",
            skills: ["PyTorch", "OpenCV", "Docker", "FastAPI"],
            type: "work",
            icon: BrainCircuitIcon, // Will use Briefcase as fallback or import actual
        },
        {
            title: "M.Tech in Computational Science",
            company: "Indian Institute of Science (IISc)",
            date: "2023 - 2025",
            location: "Bengaluru, India",
            description:
                "Specializing in AI and High-Performance Computing. Research focused on scalable machine learning algorithms for large datasets.",
            skills: ["Machine Learning", "HPC", "Data Structures"],
            type: "education",
            icon: GraduationCap,
        },
        {
            title: "B.Tech in Computer Science",
            company: "University",
            date: "2019 - 2023",
            location: "India",
            description:
                "Graduated with Distinction. Led the collegiate coding club and organized multiple hackathons. Final year project on Intrusion Detection Systems using ML.",
            skills: ["Algorithms", "OS", "DBMS", "Networking"],
            type: "education",
            icon: GraduationCap,
        },
        {
            title: "Best Project Award",
            company: "National Tech Symposium",
            date: "2023",
            location: "New Delhi, India",
            description:
                "Awarded for the 'AgriVision AI' project showcasing innovative use of technology in agriculture.",
            skills: ["Presentation", "Innovation", "Problem Solving"],
            type: "achievement",
            icon: Award,
        },
    ];

    // Map string to icon component inline
    function BrainCircuitIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                <path d="M6.003 5.424 5 5" />
                <path d="M9.008 18.586 10 18" />
                <circle cx="16" cy="15" r="3" />
                <circle cx="18" cy="8" r="3" />
                <path d="M15 17l-2-1.5" />
                <path d="M16 12l1-1" />
                <path d="M19 11l2 2" />
            </svg>
        );
    }

    // Network animation setup
    useNetworkAnimation(canvasRef, {
        numPoints: 15,
        velocity: 0.1, // Slower movement
        radiusBase: 1.5,
        radiusVar: 2,
        opacityMult: 0.3, // Lower opacity
        strokeDark: "rgba(255, 255, 255, 0.05)",
        strokeLight: "rgba(0, 0, 0, 0.04)",
    });

    return (
        <section
            id="experience"
            className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-500">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-auto"
                    style={{ opacity: 0.5 }}
                />
                <div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-white dark:from-black to-transparent z-[5]" />
                <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-white dark:from-black to-transparent z-[5]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <SectionHeading subtitle="My Journey" align="center">
                        <span className="flex items-center justify-center gap-2 md:gap-3">
                            Experience &amp; Education
                            <Compass className="w-5 h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
                        </span>
                    </SectionHeading>
                </div>

                <div className="relative">
                    {/* Main timeline line (Mobile) */}
                    <div className="sm:hidden absolute left-[19px] top-8 bottom-0 w-px bg-black/10 dark:bg-white/10" />

                    {/* Timeline Items */}
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                {...exp}
                                index={index}
                                isLast={index === experiences.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
