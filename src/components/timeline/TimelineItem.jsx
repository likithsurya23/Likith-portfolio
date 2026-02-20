// File: src/components/timeline/TimelineItem.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Award, ChevronRight } from "lucide-react";

const TimelineItem = ({
  title,
  company,
  date,
  location,
  description,
  skills,
  type,
  icon: Icon,
  index,
  isLast,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      className="relative"
    >
      {/* Timeline vertical line (desktop only) */}
      {!isLast && (
        <div className="hidden sm:block absolute left-6 top-16 bottom-0 w-px bg-black/10 dark:bg-white/10" />
      )}

      <div className="flex gap-4 sm:gap-6">
        {/* ICON */}
        <div className="relative flex flex-col items-center">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black flex items-center justify-center`}
          >
            {Icon && (
              <Icon
                size={16}
                className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-black/60 dark:text-white/60"
              />
            )}
          </div>

          {/* Achievement badge */}
          {type === "achievement" && (
            <Award
              size={14}
              className="absolute -top-1 -right-1 text-black dark:text-white"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="flex-1 pb-6 sm:pb-7 md:pb-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative p-4 sm:p-5 md:p-6 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-black dark:text-white">
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-black/50 dark:text-white/50">{company}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-black/40 dark:text-white/40 mt-1 sm:mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} className="sm:w-3 sm:h-3" />
                    {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} className="sm:w-3 sm:h-3" />
                    {location}
                  </span>
                </div>
              </div>

              {/* Expand Button */}
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileTap={{ scale: 0.95 }}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Collapse description" : "Expand description"}
                className="self-start sm:self-auto p-1.5 sm:p-2 rounded-lg border border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={14} className="sm:w-4 sm:h-4 text-black/40 dark:text-white/40" />
                </motion.div>
              </motion.button>            </div>

            {/* Description (smooth expand) */}
            <AnimatePresence initial={false}>
              <motion.div
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className={`text-xs sm:text-sm text-black/60 dark:text-white/60 leading-relaxed ${!isExpanded && "line-clamp-2 sm:line-clamp-3"
                    }`}
                >
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {skills?.map((skill) => (
                <span
                  key={skill}
                  className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/50 dark:text-white/50 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;