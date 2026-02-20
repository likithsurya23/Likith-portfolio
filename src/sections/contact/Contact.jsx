// File: src/sections/contact/Contact.jsx
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  Download,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "",
      href: "mailto:likithsurya231@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "",
      href: "https://github.com/likithsurya23",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "",
      href: "https://linkedin.com/in/likith--d",
    },
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
      id="contact"
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
          <SectionHeading subtitle="Let's Connect">
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              Get In Touch
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black/40 dark:text-white/40" />
            </span>
          </SectionHeading>
        </motion.div>

        {/* Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mt-12 sm:mt-14 md:mt-16"
        >
          {/* LEFT SIDE */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5 sm:space-y-6">
            <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed">
              Have a project idea or collaboration in mind? I'm always open to
              discussing new opportunities and innovative ideas.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactLinks.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className="p-4 sm:p-5 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-black/50 dark:text-white/50 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs sm:text-sm text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors block truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm text-black dark:text-white truncate">
                          {item.value}
                        </p>
                      )}
                    </div>
                    {item.href && (
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-black/30 dark:text-white/30 flex-shrink-0" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume */}
            <motion.a
              whileHover={{ y: -2 }}
              href="/resume.pdf"
              download
              className="flex items-center justify-between p-4 sm:p-5 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Download size={16} className="sm:w-[18px] sm:h-[18px] text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <span className="text-xs sm:text-sm text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Download Resume
                </span>
              </div>
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-5 sm:mb-6">
                Send a Message
              </h3>

              {/* Inputs */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
                {["name", "email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg sm:rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-all text-sm sm:text-base"
                    />
                    <label
                      className={`absolute left-3 sm:left-4 transition-all pointer-events-none ${
                        formData[field] || focused === field
                          ? "-top-2 sm:-top-2.5 text-[10px] sm:text-xs bg-white dark:bg-black px-1 text-black/60 dark:text-white/60"
                          : "top-3 sm:top-4 text-xs sm:text-sm text-black/40 dark:text-white/40"
                      }`}
                    >
                      {field === "name" ? "Your Name" : "Your Email"}
                    </label>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="relative mb-5 sm:mb-6">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg sm:rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-all resize-none text-sm sm:text-base"
                />
                <label
                  className={`absolute left-3 sm:left-4 transition-all pointer-events-none ${
                    formData.message || focused === "message"
                      ? "-top-2 sm:-top-2.5 text-[10px] sm:text-xs bg-white dark:bg-black px-1 text-black/60 dark:text-white/60"
                      : "top-3 sm:top-4 text-xs sm:text-sm text-black/40 dark:text-white/40"
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all border-2 ${
                  isSubmitted
                    ? "border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/60 dark:text-white/60"
                    : "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-[10px] sm:text-xs text-black/30 dark:text-white/30 mt-3 sm:mt-4">
                I usually respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;