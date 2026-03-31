"use client";

import { motion } from "framer-motion";

const LandingBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 animated-bg" />

      <motion.div
        className="absolute top-[8vh] left-[8%] h-80 w-80 rounded-full bg-primary/20 blur-[100px] pulse-glow"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[60vh] right-[6%] h-96 w-96 rounded-full bg-secondary/20 blur-[100px] pulse-glow"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.7 }}
      />
      <motion.div
        className="absolute top-[130vh] left-[14%] h-96 w-96 rounded-full bg-primary/15 blur-[120px] pulse-glow"
        animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, delay: 1.2 }}
      />
      <motion.div
        className="absolute top-[195vh] right-[12%] h-80 w-80 rounded-full bg-secondary/15 blur-[110px] pulse-glow"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.18, 0.35, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1.8 }}
      />

      <motion.div
        className="floating absolute top-20 right-20 h-20 w-20 rounded-lg border border-primary/30"
        style={{ animationDelay: "0s" }}
        initial={{ opacity: 0.7, rotate: 45 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="floating absolute top-[105vh] left-10 h-12 w-12 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20"
        style={{ animationDelay: "2s" }}
        initial={{ opacity: 0.65 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="floating absolute top-[220vh] right-24 h-16 w-16 rounded-full border border-secondary/30"
        style={{ animationDelay: "4s" }}
        initial={{ opacity: 0.65 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default LandingBackground;
