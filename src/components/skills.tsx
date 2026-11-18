"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Lock,
  Palette,
  Server,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const techStack = [
  { key: "frontend", icon: Code2, color: "from-primary to-cyan-400" },
  { key: "backend", icon: Server, color: "from-secondary to-purple-400" },
  { key: "database", icon: Database, color: "from-emerald-500 to-teal-400" },
  { key: "devops", icon: Cloud, color: "from-orange-500 to-amber-400" },
] as const;

const techStackSkills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "GSAP",
  ],
  backend: [
    "Node.js",
    "Python",
    "Go",
    "Express",
    "FastAPI",
    "GraphQL",
    "REST APIs",
    "WebSockets",
  ],
  database: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Supabase",
    "Firebase",
  ],
  devops: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD", "Kubernetes"],
} as const;

const expertise = [
  { icon: Code2, key: "frontend" },
  { icon: Server, key: "backend" },
  { icon: Database, key: "database" },
  { icon: Cloud, key: "cloud" },
  { icon: Palette, key: "design" },
  { icon: Lock, key: "security" },
  { icon: Layers, key: "architecture" },
  { icon: Zap, key: "performance" },
] as const;

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.rich("title", {
              gradient: (chunks) => (
                <span className="text-gradient">{chunks}</span>
              ),
            })}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.key}
              className="p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">
                {t(`expertise.${item.key}`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`expertise.${item.key}Desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.key}
              className="p-8 rounded-3xl glass-card border border-border/50 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${stack.color} bg-opacity-10`}
                >
                  <stack.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t(`categories.${stack.key}`)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStackSkills[stack.key].map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: stackIndex * 0.1 + skillIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
