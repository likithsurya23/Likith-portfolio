// File: src/sections/footer/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronUp, Heart, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

const Footer = ({ scrollTo }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/likithsurya23", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/likith--d", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/likithsurya", label: "Twitter" },
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
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative py-8 sm:py-10 md:py-12 bg-white dark:bg-black border-t-2 border-black/10 dark:border-white/10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* LEFT SECTION */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left"
          >
            {/* LD Logo */}
            <motion.div
              onClick={() => scrollTo("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl 
                                border-2 border-black/20 dark:border-white/20 
                                bg-white dark:bg-black
                                transition-all duration-300
                                group-hover:border-black dark:group-hover:border-white
                                group-hover:shadow-lg">
                  <span className="text-black dark:text-white font-semibold text-sm sm:text-base tracking-wider">
                    LD
                  </span>
                </div>

                {/* Subtle Glow */}
                <motion.div
                  className="absolute -inset-2 rounded-xl bg-black/10 dark:bg-white/10 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.p 
              variants={itemVariants}
              className="text-black/40 dark:text-white/40 text-xs sm:text-sm flex items-center gap-1"
            >
              © {currentYear} Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={12} className="text-black dark:text-white mx-1" />
              </motion.span>
              by Likith Surya
            </motion.p>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 sm:gap-3"
          >
            {/* Social Links */}
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-2.5 rounded-lg border-2 border-black/20 dark:border-white/20 
                           bg-white dark:bg-black
                           text-black/40 dark:text-white/40 
                           hover:text-black dark:hover:text-white
                           hover:border-black dark:hover:border-white
                           transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.a>
            ))}

            {/* Scroll To Top */}
            <motion.button
              onClick={() => scrollTo("home")}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-2.5 rounded-lg border-2 border-black dark:border-white 
                         bg-black dark:bg-white
                         text-white dark:text-black
                         hover:bg-white hover:text-black 
                         dark:hover:bg-black dark:hover:text-white
                         hover:border-black dark:hover:border-white
                         transition-all ml-1 sm:ml-2"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;