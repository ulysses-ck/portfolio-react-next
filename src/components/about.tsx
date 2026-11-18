"use client";

import { motion } from "framer-motion";
import { Briefcase, Coffee, GraduationCap, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const tExp = useTranslations("Experience");

  const experience = [
    {
      key: "wow",
      company: "Wow Web Group",
      period: "Mar 2024 - May 2025",
    },
    {
      key: "companiesWebs",
      company: "Companies Webs",
      period: "Dec 2023 - Mar 2024",
    },
    {
      key: "freelancer",
      company: "Freelancer",
      period: "Dec 2019 - Present",
    },
  ] as const;

  const facts = [
    { icon: MapPin, key: "location" },
    { icon: Coffee, key: "availability" },
    { icon: GraduationCap, key: "education" },
    { icon: Briefcase, key: "experience" },
  ] as const;

  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">
              {t("label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.rich("title", {
                gradient: (chunks) => (
                  <span className="text-gradient">{chunks}</span>
                ),
              })}
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                {t.rich("p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("p2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>{t("p3")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((item) => (
                <div key={item.key} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t(`facts.${item.key}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{tExp("title")}</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    className="relative pl-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                    <div className="p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {tExp(`${exp.key}.role`)}
                        </h4>
                        <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-secondary font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tExp(`${exp.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
