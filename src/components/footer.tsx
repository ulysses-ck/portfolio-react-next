"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#top"
            className="text-lg font-bold font-mono focus-visible:outline-2 focus-visible:outline-ring"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">{"<AC />"}</span>
          </motion.a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t.rich("crafted", {
              heart: () => (
                <Heart className="w-4 h-4 text-primary fill-primary" />
              ),
            })}
          </p>

          <p className="text-sm text-muted-foreground">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
