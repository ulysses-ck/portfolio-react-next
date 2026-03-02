"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Palette,
  Layers,
  Zap,
  Cloud,
  Lock,
  Terminal,
  Globe,
  Cpu,
  GitBranch,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-primary to-cyan-400",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-secondary to-purple-400",
    skills: [
      "Node.js",
      "Python",
      "Go",
      "Express",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: "DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-400",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Kubernetes",
    ],
  },
];

const expertise = [
  { icon: Code2, title: "Frontend", desc: "React, Vue, Next.js" },
  { icon: Server, title: "Backend", desc: "Node, Python, Go" },
  { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB" },
  { icon: Cloud, title: "Cloud", desc: "AWS, Vercel, GCP" },
  { icon: Palette, title: "Design", desc: "Figma, UI/UX" },
  { icon: Lock, title: "Security", desc: "Auth, Encryption" },
  { icon: Layers, title: "Architecture", desc: "Microservices" },
  { icon: Zap, title: "Performance", desc: "Optimization" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-50" />

      <div className="container relative z-10 px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">
            WHAT I DO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bridging the gap between beautiful design and powerful functionality
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
              key={item.title}
              className="p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
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
                <h3 className="text-xl font-semibold">{stack.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, skillIndex) => (
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
