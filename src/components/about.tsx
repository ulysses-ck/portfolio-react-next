"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Coffee } from "lucide-react";

const experience = [
  {
    role: "Software Engineer",
    company: "Wow Web Group",
    period: "Mar 2024 - May 2025",
    description:
      "Developed complex fullstack applications using Next.js, TypeScript and Prisma, integrating Google Cloud Platform services and third-party APIs such as Docusign and Holded. Managed Linux (Ubuntu) VPS deployments with Nginx, PM2 and SSL, and built advanced 3D e-commerce interfaces with Three.js and ModelViewer while optimizing content architectures with Contentful and Tailwind CSS for performance and SEO.",
  },
  {
    role: "Software Engineer",
    company: "Companies Webs",
    period: "Dec 2023 - Mar 2024",
    description:
      "Designed high-performance platforms using Astro, Supabase and Framer Motion for low-latency user experiences. Developed headless e-commerce systems with Shopify, Remix Run and Hydrogen using GraphQL APIs, and implemented scalable headless CMS architectures with Sanity.io and Next.js.",
  },
  {
    role: "Fullstack Developer",
    company: "Freelancer",
    period: "Dec 2019 - Present",
    description:
      "Built diverse software solutions including AI-powered PDF data extraction tools integrating Gemini and OpenAI with Next.js and TypeScript. Developed secure backend platforms using Java 21, Spring Boot, Spring Security and JWT authentication, and optimized large-scale batch processing pipelines with Spring Batch.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building <span className="text-gradient">scalable</span> software
              & modern web platforms
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a Software Engineer focused on building scalable end-to-end
                systems using <strong>Java (Spring Boot)</strong> and{" "}
                <strong>Next.js</strong>. I specialize in designing robust
                architectures, integrating modern APIs, and delivering
                high-performance applications for production environments.
              </p>

              <p>
                My experience ranges from fullstack SaaS platforms and headless
                e-commerce systems to secure backend services and AI-powered
                tools. I have worked with European companies developing complex
                applications, deploying them on Linux infrastructure, and
                optimizing them for performance, SEO, and scalability.
              </p>

              <p>
                I enjoy solving complex engineering problems, integrating AI
                into real products, and building software that balances strong
                backend architecture with modern, high-quality frontend
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "Buenos Aires, Argentina" },
                { icon: Coffee, text: "Open to Opportunities" },
                {
                  icon: GraduationCap,
                  text: "Software Development @ IFTS Nº18",
                },
                { icon: Briefcase, text: "5+ Years Experience" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
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
                        <h4 className="font-semibold text-foreground">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-secondary font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
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
