"use client";

import Image from "next/image";
import { socials } from "../data/social";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/20 via-neutral-950 to-neutral-950" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full -z-10" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-indigo-400 tracking-widest uppercase text-sm">
          Frontend Web Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building clean <br />
          <span className="text-indigo-400">web experiences</span>
        </h1>

        <p className="max-w-md text-neutral-300">
         I'm a frontend developer who loves building modern, fast, and user-centric web applications.
        </p>

        {/* CTA */}
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition shadow-lg"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative"
        >
          <Image
            src="/profile.png"
            alt="Priyanka Aswal"
            width={300}
            height={300}
            className="rounded-3xl shadow-2xl rotate-6"
          />
        </motion.div>
      </motion.div>

      {/* SOCIALS – VERTICAL (UNIQUE TOUCH) */}
      <div className="hidden md:flex flex-col gap-15 absolute left-8 bottom-62">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition hover:scale-110"
            >
              <Icon size={22} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
