// File: src/sections/contact/Contact.jsx
import React, { useState, useRef } from "react";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

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
              className="p-6 sm:p-8 rounded-3xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black"
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
                      className="w-full px-4 py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-all"
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
                  className="w-full px-4 py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none resize-none transition-all"
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
            whileHover={{ y: -2 }}
            href="https://drive.google.com/file/d/1BSLH9T8mhp0Jcwmo4qbFK5VVRB6yfjW1/view?usp=drive_link"
            download
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all mt-4"
          >
            <Download size={18} className="text-black/50 dark:text-white/50" />
            <span className="text-black dark:text-white">Download Resume</span>
            <ArrowUpRight size={16} className="text-black/30 dark:text-white/30" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;