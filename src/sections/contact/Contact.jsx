// File: src/sections/contact/Contact.jsx
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, 
  CheckCircle, Sparkles, MessageCircle, Coffee, Heart,
  Download, Clock, Globe, Zap
} from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'likithsurya231@gmail.com',
      href: 'mailto:likithsurya231@gmail.com',
      response: 'Reply within 24h'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/likithsurya23',
      href: 'https://github.com/likithsurya23',
      response: 'Open source'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/likith--d',
      href: 'https://linkedin.com/in/likith--d',
      response: 'Professional network'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'India',
      href: null,
      response: 'Remote friendly'
    },
  ];

  const quickResponses = [
    { icon: Coffee, text: 'Coffee chat?', time: '15 min' },
    { icon: MessageCircle, text: 'Project discussion', time: '30 min' },
    { icon: Heart, text: 'Collaboration', time: 'Flexible' },
  ];

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
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob w-[600px] h-[600px] top-20 left-1/4" />
        <div className="aurora-blob w-[700px] h-[700px] bottom-20 right-1/4 animation-delay-2000" />
        <div className="aurora-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full floating"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Let's Connect">
            <span className="flex items-center justify-center gap-3">
              Get In Touch
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-white/40" />
              </motion.div>
            </span>
          </SectionHeading>
        </motion.div>

        {/* Quick Response Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {quickResponses.map((item, index) => (
            <motion.button
              key={item.text}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative px-6 py-3 rounded-full glass border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-2">
                <item.icon size={16} className="text-white/40 group-hover:text-white/60" />
                <span className="text-sm text-white/60 group-hover:text-white/80">{item.text}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/40">{item.time}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {/* Intro Text */}
            <motion.div variants={itemVariants} className="relative">
              <p className="text-white/40 text-lg leading-relaxed">
                Have a project in mind or want to collaborate? I'm always open to discussing 
                new opportunities and{' '}
                <span className="text-white/80 font-medium">interesting ideas</span>.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <info.icon size={20} className="text-white/60" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-white/30 uppercase tracking-wider">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-white/80 transition-colors">{info.value}</p>
                        <p className="text-xs text-white/30 mt-1">{info.response}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/10">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <info.icon size={20} className="text-white/60" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-wider">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                        <p className="text-xs text-white/30 mt-1">{info.response}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <motion.span 
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                      animate={{
                        scale: [1, 2],
                        opacity: [0.75, 0],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white font-medium flex items-center gap-2">
                    Available for work
                    <Clock size={14} className="text-white/40" />
                  </span>
                </div>
                
                <p className="text-sm text-white/40 mb-4">
                  Currently open to full-time opportunities and freelance projects.
                </p>

                <div className="flex items-center gap-2 text-xs text-white/30">
                  <Heart size={12} />
                  <span>Reply guarantee within 24h</span>
                </div>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.a
              variants={itemVariants}
              href="/resume.pdf"
              download
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 rounded-xl glass-card border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Download size={18} className="text-white/40 group-hover:text-white/60" />
                <span className="text-white/60 group-hover:text-white/80">Download Resume</span>
              </div>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl blur-xl opacity-20" />
              
              <div className="relative glass-card rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  Send a Message
                  <MessageCircle size={20} className="text-white/40" />
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute inset-0 bg-white/5 rounded-xl opacity-0 transition-opacity ${
                        focusedField === 'name' ? 'opacity-100' : ''
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-white/30 focus:outline-none transition-all placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className={`absolute left-4 transition-all pointer-events-none ${
                      formData.name || focusedField === 'name'
                        ? 'top-2 text-xs text-white/50'
                        : 'top-4 text-base text-white/30'
                    }`}>
                      Your Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute inset-0 bg-white/5 rounded-xl opacity-0 transition-opacity ${
                        focusedField === 'email' ? 'opacity-100' : ''
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-white/30 focus:outline-none transition-all placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className={`absolute left-4 transition-all pointer-events-none ${
                      formData.email || focusedField === 'email'
                        ? 'top-2 text-xs text-white/50'
                        : 'top-4 text-base text-white/30'
                    }`}>
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 bg-white/5 rounded-xl opacity-0 transition-opacity ${
                      focusedField === 'message' ? 'opacity-100' : ''
                    }`}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-white/30 focus:outline-none transition-all resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label className={`absolute left-4 transition-all pointer-events-none ${
                    formData.message || focusedField === 'message'
                      ? 'top-2 text-xs text-white/50'
                      : 'top-4 text-base text-white/30'
                  }`}>
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden group ${
                    isSubmitted 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'btn-primary'
                  }`}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Form Footer */}
                <p className="text-center text-xs text-white/20 mt-4">
                  I'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-center gap-3 text-white/20 text-sm">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="flex items-center gap-1">
              <Zap size={14} />
              Let's build something amazing together
            </span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;