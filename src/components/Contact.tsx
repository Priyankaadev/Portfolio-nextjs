"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Let’s Work Together
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-4 text-neutral-400 max-w-xl mx-auto"
      >
        Have a project, idea, or just want to say hi?  
       
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center gap-4 flex-wrap"
      >
        <a
          href="mailto:priyankaaswal56@gmail.com"
          className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/priyanka-aswal-822927209/"
          target="_blank"
          className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center gap-6 text-2xl"
      >
        <a
          href="https://github.com/Priyankaadev"
          target="_blank"
          className="text-neutral-400 hover:text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:priyankaaswal56@gmail.com"
          className="text-neutral-400 hover:text-white hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/priyanka-aswal-822927209/"
          target="_blank"
          className="text-neutral-400 hover:text-white hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
