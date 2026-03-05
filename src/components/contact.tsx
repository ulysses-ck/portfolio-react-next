"use client";

import { SOCIAL_MEDIA } from "@/data/profile";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-40" />

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[160px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-mono text-primary tracking-wider block mb-4">
            CONNECT
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let’s build from{" "}
            <span className="text-gradient">Argentina 🇦🇷</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I’m active across my social platforms. If you have an idea,
            opportunity, or collaboration in mind — let’s talk.
          </p>
        </motion.div>

        {/* Center Card */}
        <motion.div
          className="relative rounded-3xl glass-card border border-border/50 p-12 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-16">
            {/* Top row: location + availability */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-semibold text-lg">Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Availability
                  </p>
                  <p className="font-semibold text-lg">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-border/50" />

            {/* Social Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(SOCIAL_MEDIA).map(([platform, link]) => (
                <motion.a
                  key={`contact-${platform + link}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg">{platform}</p>
                      <p className="text-sm text-muted-foreground">
                        Follow / Connect
                      </p>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;