"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#"
            className="text-lg font-bold font-mono"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">{"<AC />"}</span>
          </motion.a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & Tailwind
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;