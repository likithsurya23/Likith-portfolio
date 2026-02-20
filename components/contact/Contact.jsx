"use client";

import React, { useRef, useState } from "react";
import useNetworkAnimation from "@/hooks/useNetworkAnimation";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    Send,
    Mail,
    MapPin,
    Phone,
    Github,
    Linkedin,
    Twitter,
    CheckCircle2,
    AlertCircle,
    MessageSquare,
    FileText,
    Heart,
} from "lucide-react";

const Contact = () => {
    const formRef = useRef();
    const canvasRef = useRef(null);
    const [formState, setFormState] = useState({
        status: "idle", // 'idle' | 'loading' | 'success' | 'error'
        message: "",
    });

    // Network animation with subtle dark theme integration
    useNetworkAnimation(canvasRef, {
        numPoints: 20,
        velocity: 0.15,
        radiusBase: 1.5,
        radiusVar: 2,
        opacityMult: 0.5,
        strokeDark: "rgba(255, 255, 255, 0.08)",
        strokeLight: "rgba(0, 0, 0, 0.06)",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState({ status: "loading", message: "" });

        try {
            // Replace these with your actual EmailJS credentials
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );

            setFormState({
                status: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            formRef.current.reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormState({ status: "idle", message: "" });
            }, 5000);
        } catch (error) {
            console.log(error);
            setFormState({
                status: "error",
                message: "Something went wrong. Please try again later.",
            });
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "likithsurya231@gmail.com",
            href: "mailto:likithsurya231@gmail.com",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Bengaluru, India",
        },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/likithsurya23", label: "GitHub" },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/likith--d/",
            label: "LinkedIn",
        },
    ];

    return (
        <section
            id="contact"
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
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <MessageSquare className="w-4 h-4 text-black/60 dark:text-white/60" />
                        <span className="text-xs font-medium text-black/60 dark:text-white/60 uppercase tracking-widest">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight"
                    >
                        Let&apos;s Build Something
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-black/80 to-black/40 dark:from-white/80 dark:to-white/40">
                            Together
                        </span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full"
                    >
                        <div className="mb-10 lg:mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                                Let&apos;s talk about your next project.
                            </h3>
                            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">
                                Whether you have a question, a project in mind, or just want to
                                say hi, I&apos;m always open to discussing new opportunities.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6 lg:space-y-8 mb-10 lg:mb-12">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 lg:gap-6 group"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border-2 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 group-hover:border-black dark:group-hover:border-white transition-all duration-300">
                                        <info.icon className="w-5 h-5 lg:w-6 lg:h-6 text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-black/40 dark:text-white/40 uppercase tracking-wider mb-1">
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg font-medium text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-medium text-black dark:text-white">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links & Resume */}
                        <div className="mt-auto pt-8 border-t border-black/10 dark:border-white/10">
                            <div className="flex flex-wrap items-center gap-4 font-medium">
                                <div className="flex items-center gap-3">
                                    {socialLinks.map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 rounded-xl border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50 hover:border-black dark:hover:border-white hover:bg-white dark:hover:bg-black transition-all group"
                                            aria-label={social.label}
                                        >
                                            <social.icon
                                                size={20}
                                                className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors"
                                            />
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="w-px h-8 bg-black/10 dark:bg-white/10 mx-2 hidden sm:block" />

                                {/* Resume Button */}
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white transition-all group"
                                >
                                    <FileText size={18} />
                                    <span>Download Resume</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-full"
                    >
                        <div className="p-6 md:p-8 lg:p-10 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl h-full shadow-2xl">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="flex flex-col h-[100%] gap-6"
                            >
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-black/60 dark:text-white/60 ml-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-black dark:focus:border-white focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-black/60 dark:text-white/60 ml-1">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-black dark:focus:border-white focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/60 dark:text-white/60 ml-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Project Inquiry"
                                        className="w-full px-5 py-4 rounded-xl border-2 border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-black dark:focus:border-white focus:outline-none transition-all"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2 flex-grow flex flex-col">
                                    <label className="text-sm font-medium text-black/60 dark:text-white/60 ml-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Tell me about your project..."
                                        className="w-full flex-grow min-h-[160px] px-5 py-4 rounded-xl border-2 border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-black dark:focus:border-white focus:outline-none transition-all resize-y"
                                    />
                                </div>

                                {/* Form Status & Submit */}
                                <div className="pt-2 mt-auto">
                                    <AnimatePresence mode="wait">
                                        {formState.message && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, height: 0 }}
                                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                                exit={{ opacity: 0, y: -10, height: 0 }}
                                                className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${formState.status === "success"
                                                        ? "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20"
                                                        : "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20"
                                                    }`}
                                            >
                                                {formState.status === "success" ? (
                                                    <CheckCircle2 size={20} />
                                                ) : (
                                                    <AlertCircle size={20} />
                                                )}
                                                <span className="text-sm font-medium">
                                                    {formState.message}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        type="submit"
                                        disabled={formState.status === "loading"}
                                        className="group relative w-full flex justify-center items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    >
                                        {formState.status === "loading" ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                className="w-6 h-6 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full"
                                            />
                                        ) : (
                                            <>
                                                <span className="relative z-10">Send Message</span>
                                                <Send
                                                    size={20}
                                                    className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                                />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
