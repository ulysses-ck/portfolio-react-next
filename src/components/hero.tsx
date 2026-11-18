"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SOCIAL_MEDIA } from "@/data/profile";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px] pulse-glow"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[80px] pulse-glow"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div aria-hidden="true">
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rounded-lg floating"
          style={{ animationDelay: "0s" }}
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 border border-secondary/30 rounded-full floating"
          style={{ animationDelay: "2s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.div
          className="absolute top-1/3 left-10 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg floating"
          style={{ animationDelay: "4s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-mono text-primary border border-primary/30 rounded-full glass-card">
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-foreground">{t("greeting")}</span>
          <span className="text-gradient">{t("name")}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.rich("tagline", {
            role: (chunks) => (
              <span className="text-foreground font-medium">{chunks}</span>
            ),
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
            secondary: (chunks) => (
              <span className="text-secondary">{chunks}</span>
            ),
          })}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/#projects"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 glow-effect transition-all duration-300 focus-visible:outline-2 focus-visible:outline-ring"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("viewProjects")}
          </motion.a>
          <motion.a
            href="/#contact"
            className="px-6 py-3 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-ring"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("getInTouch")}
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            {
              icon: GithubIcon,
              href: SOCIAL_MEDIA.GitHub,
              label: t("github"),
            },
            {
              icon: LinkedinIcon,
              href: SOCIAL_MEDIA.LinkedIn,
              label: t("linkedin"),
            },
            {
              icon: Mail,
              href: SOCIAL_MEDIA.Email,
              label: t("email"),
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-xl glass-card border border-border/50 hover:border-primary/50 hover:glow-effect transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-ring"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="/#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">{t("explore")}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
