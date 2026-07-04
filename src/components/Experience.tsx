"use client";

import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>

      {/* Featured Card */}
      <div className="space-y-8 max-w-3xl mx-auto">
    {experience.map((exp, index) => (
      <motion.div
      key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="max-w-3xl mx-auto bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-8 shadow-xl"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">
              {exp.role}
            </h3>
            <p className="text-indigo-400">
              {exp.company}
            </p>
          </div>
          <span className="text-sm text-neutral-400">
            {exp.duration}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-neutral-300 leading-relaxed">
          {exp.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      ))}
      </div>
    </section>
  );
}
