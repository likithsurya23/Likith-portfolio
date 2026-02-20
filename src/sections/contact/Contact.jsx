// File: src/sections/contact/Contact.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Sparkles,
  Download,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";

const Contact = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  // Network animation with interconnected moving points - Same as Hero.jsx
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let points = [];
    const numPoints = 20; // Slightly fewer points for Contact section
    const connectionDistance = 150;
    let mouseX = -1000;
    let mouseY = -1000;

    // Handle mouse move for interactive effect
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Initialize points
    const initPoints = () => {
      points = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: 1.5 + Math.random() * 2.5,
          originalRadius: 1.5 + Math.random() * 2.5,
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
          point.x = Math.max(0, Math.min(canvas.width, point.x));
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
          point.y = Math.max(0, Math.min(canvas.height, point.y));
        }

        // Mouse interaction
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100 * 0.5;
          point.x -= Math.cos(angle) * force;
          point.y -= Math.sin(angle) * force;
          point.radius = point.originalRadius * 1.5;
        } else {
          point.radius = point.originalRadius;
        }
      });

      // Draw connections
      ctx.strokeStyle = document.documentElement.classList.contains('dark')
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 0.8;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / connectionDistance) * 0.6;

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);

            // Gradient stroke for moving effect
            const gradient = ctx.createLinearGradient(
              points[i].x, points[i].y, points[j].x, points[j].y
            );

            if (document.documentElement.classList.contains('dark')) {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
              gradient.addColorStop(1, `rgba(200, 200, 255, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity})`);
              gradient.addColorStop(1, `rgba(100, 100, 100, ${opacity})`);
            }

            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);

        // Glow effect
        ctx.shadowColor = document.documentElement.classList.contains('dark')
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 6;

        ctx.fillStyle = document.documentElement.classList.contains('dark')
          ? 'rgba(255, 255, 255, 0.5)'
          : 'rgba(0, 0, 0, 0.4)';
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Inner glow for some points
        if (point.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = document.documentElement.classList.contains('dark')
            ? 'rgba(255, 255, 255, 0.7)'
            : 'rgba(0, 0, 0, 0.6)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // EmailJS submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_d61erkn",      // replace with your service ID
        "template_u51zkga",     // replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "WPog6C5XfDSP2-eqr"       // replace with your public key
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Canvas for interconnected points animation - Same as Hero.jsx */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Subtle gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 dark:from-black/30 dark:via-transparent dark:to-black/30 pointer-events-none z-[5]" />

      <div ref={ref} className="max-w-3xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Let's Connect">
            <span className="flex items-center justify-center gap-2">
              Get In Touch
              <Sparkles className="w-5 h-5 text-black/40 dark:text-white/40" />
            </span>
          </SectionHeading>
        </motion.div>

        {/* Stacked Layout - Same on all screen sizes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10 mt-16"
        >

          {/* TOP SECTION - Intro text and download button */}
          <motion.div variants={itemVariants} className="space-y-6 text-center">
            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project idea or collaboration in mind? I'm open to discussing new opportunities and challenges.
            </p>

            <p className="text-black/60 dark:text-white/60 max-w-xl mx-auto">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

          </motion.div>

          {/* BOTTOM SECTION - Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white text-center sm:text-left">
                Send a Message
              </h3>

              {/* Inputs */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {["name", "email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field === "name" ? "Your Name" : "Your Email"}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-4 py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-all backdrop-blur-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="relative mb-6">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-4 py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none resize-none transition-all backdrop-blur-sm"
                />
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Download Resume Button */}
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -2 }}
            href="https://drive.google.com/file/d/1BSLH9T8mhp0Jcwmo4qbFK5VVRB6yfjW1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all mt-4"
          >
            <Download size={18} className="text-black/50 dark:text-white/50" />
            <span className="text-black dark:text-white">Download Resume</span>
            <ArrowUpRight size={16} className="text-black/30 dark:text-white/30" />
          </motion.a>
        </motion.div>
      </div>

      {/* Gradient Fades - Kept for clean edges */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Contact;