// File: src/sections/footer/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronUp, Heart, Github, Linkedin, Twitter } from "lucide-react";

const Footer = ({ scrollTo }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/likithsurya23", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/likith--d", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/likithsurya", label: "Twitter" },
  ];

  return (
    <footer className="relative py-14 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Section */}
          <div className="flex items-center gap-8">

            {/* LD Logo */}
                        <motion.div 
                          className="flex items-center gap-3 cursor-pointer group"
                          onClick={() => handleScrollTo('home')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="relative">
                            <div className="w-11 h-11 flex items-center justify-center rounded-xl 
                                            bg-gradient-to-br from-white/20 via-white/10 to-white/5
                                            backdrop-blur-sm border border-white/20
                                            shadow-lg transition-all duration-300
                                            group-hover:border-white/40 group-hover:bg-white/20
                                            group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                              <span className="text-white font-bold text-lg tracking-wider drop-shadow-md">
                                LD
                              </span>
                            </div>
            
                            {/* Glow effect */}
                            <motion.div
                              className="absolute -inset-2 rounded-xl bg-white/10 blur-xl"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 0.5 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>

            {/* Copyright */}
            <p className="text-white/30 text-sm flex items-center gap-1">
              © {currentYear} Built with
              <Heart size={12} className="text-red-400 fill-red-400 mx-1" />
              by Likith Surya
            </p>
          </div>

          {/* Social + Scroll */}
          <div className="flex items-center gap-3">

            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="p-2.5 rounded-lg bg-white/5 text-white/40 
                           hover:text-white hover:bg-white/10 
                           transition-all duration-300"
              >
                <social.icon size={18} />
              </motion.a>
            ))}

            {/* Scroll To Top */}
            <motion.button
              onClick={() => scrollTo("home")}
              whileHover={{ y: -4 }}
              className="p-2.5 rounded-lg bg-white text-black 
                         hover:bg-white/90 transition-all ml-2"
            >
              <ChevronUp size={18} />
            </motion.button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
