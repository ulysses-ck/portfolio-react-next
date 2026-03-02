"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Coffee } from "lucide-react";

const experience = [
  {
    role: "Senior Fullstack Developer",
    company: "TechCorp",
    period: "2022 - Present",
    description: "Leading development of enterprise SaaS products, mentoring junior developers, and architecting scalable solutions.",
  },
  {
    role: "Frontend Developer",
    company: "StartupX",
    period: "2020 - 2022",
    description: "Built responsive web applications and implemented design systems for multiple client projects.",
  },
  {
    role: "Junior Developer",
    company: "CodeAgency",
    period: "2018 - 2020",
    description: "Started my journey building websites and gradually moved into fullstack development.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate about <span className="text-gradient">crafting</span> digital experiences
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a fullstack developer with 6+ years of experience building web applications 
                that are not only functional but also beautiful and intuitive.
              </p>
              <p>
                My journey started with a curiosity for how things work on the web, which led me 
                to master both frontend technologies and backend systems. Today, I specialize in 
                creating seamless user experiences backed by robust, scalable architectures.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or enjoying a good cup of coffee while sketching UI ideas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "San Francisco, CA" },
                { icon: Coffee, text: "Coffee Enthusiast" },
                { icon: GraduationCap, text: "CS @ Stanford" },
                { icon: Briefcase, text: "6+ Years Exp" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
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
              <h3 className="text-xl font-semibold">Experience</h3>
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
                        <h4 className="font-semibold text-foreground">{exp.role}</h4>
                        <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-secondary font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
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