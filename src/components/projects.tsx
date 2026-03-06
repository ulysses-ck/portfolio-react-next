"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

import dictappImage from "@/assets/dictapp.png";
import carlasfoodImage from "@/assets/carlasfood.png";
import timeTrackingDashboardImage from "@/assets/time-tracking-dashboard.png";
import unboredImage from "@/assets/unbored.png";

import angularTodoImage from "@/assets/angular-todo.png";
import angularBudgetImage from "@/assets/angular-budget.png";
import angularBmiImage from "@/assets/angular-bmi-calculator.png";
import angularSearchImage from "@/assets/angular-images.png";
import angularCreditCardImage from "@/assets/angular-credit-card.png";

import dictionaryAppImage from "@/assets/dictionary-app.png";
import reactExpressDymamoDBImage from "@/assets/react-express-dynamodb.png";

export const projects = [
  {
    title: "Dictionary App",
    description:
      "Web dictionary application that fetches word definitions and phonetics from an external API.",
    image: dictappImage,
    tags: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Git", "Netlify"],
    color: "from-primary/20 to-secondary/20",
    featured: true,
    publishUrl: "https://dictapp.netlify.app/",
    repoUrl: "",
  },
  {
    title: "Carla's Food",
    description:
      "Restaurant menu web application built with Express and Pug templates.",
    image: carlasfoodImage,
    tags: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS", "Pug", "Git"],
    color: "from-secondary/20 to-primary/20",
    featured: false,
    publishUrl: "",
    repoUrl: "https://github.com/ulysses-ck/carlasfood",
  },
  {
    title: "Time Tracking Dashboard",
    description:
      "Dashboard to track time spent on different activities with dynamic reports.",
    image: timeTrackingDashboardImage,
    tags: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Vercel"],
    color: "from-primary/20 to-secondary/20",
    featured: true,
    publishUrl: "http://time-tracking-dashboard-roan.vercel.app/",
    repoUrl: "",
  },
  {
    title: "Unbored",
    description:
      "Activity suggestion app that helps users find things to do when they are bored.",
    image: unboredImage,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Git",
      "ESLint",
      "Prettier",
      "Netlify",
    ],
    color: "from-secondary/20 to-primary/20",
    featured: true,
    publishUrl: "https://unbored.netlify.app/",
    repoUrl: "",
  },
  {
    title: "Angular Todo App",
    description:
      "Task management application built with Angular and Tailwind CSS.",
    image: angularTodoImage,
    tags: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "Prettier",
      "Netlify",
    ],
    color: "from-primary/20 to-secondary/20",
    featured: false,
    publishUrl: "https://calm-llama-ae8039.netlify.app/",
    repoUrl: "",
  },
  {
    title: "Angular Budget",
    description: "Budget management web application built with Angular.",
    image: angularBudgetImage,
    tags: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Git",
      "Prettier",
      "Vercel",
    ],
    color: "from-secondary/20 to-primary/20",
    featured: false,
    publishUrl: "https://angular-budget-seven.vercel.app/",
    repoUrl: "",
  },
  {
    title: "Angular BMI Calculator",
    description:
      "BMI calculator web application built with Angular and Tailwind CSS.",
    image: angularBmiImage,
    tags: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "Prettier",
      "Netlify",
    ],
    color: "from-primary/20 to-secondary/20",
    featured: false,
    publishUrl: "https://heartfelt-profiterole-ddaf4e.netlify.app/",
    repoUrl: "",
  },
  {
    title: "Angular Search Images",
    description:
      "Image search application using Angular and external image APIs.",
    image: angularSearchImage,
    tags: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Git",
      "Prettier",
      "Netlify",
    ],
    color: "from-secondary/20 to-primary/20",
    featured: false,
    publishUrl: "https://angular-search-images.vercel.app/",
    repoUrl: "",
  },
  {
    title: "Dictionary App (Vanilla)",
    description:
      "Simple dictionary application built using vanilla JavaScript.",
    image: dictionaryAppImage,
    tags: ["JavaScript", "HTML", "CSS", "Git", "Netlify"],
    color: "from-primary/20 to-secondary/20",
    featured: false,
    publishUrl: "https://safjkib2pr.netlify.app/",
    repoUrl: "",
  },
  {
    title: "Angular Credit Card Manager",
    description:
      "Credit card management application with Firebase integration.",
    image: angularCreditCardImage,
    tags: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "Git",
      "Prettier",
      "Netlify",
    ],
    color: "from-secondary/20 to-primary/20",
    featured: false,
    publishUrl:
      "https://6481663a0da9322601e3bcf2--candid-douhua-47bd82.netlify.app/",
    repoUrl: "",
  },
  {
    title: "React Express DynamoDB",
    description:
      "Fullstack application using React, Express and DynamoDB hosted on AWS.",
    image: reactExpressDymamoDBImage,
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "AWS",
      "Git",
      "ESLint",
      "Prettier",
    ],
    color: "from-primary/20 to-secondary/20",
    featured: true,
    publishUrl: "",
    repoUrl: "https://github.com/ulysses-ck/express-react-dynamodb",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of projects that showcase my passion for building
            beautiful, functional applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative rounded-3xl overflow-hidden glass-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} to-background/90`}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.repoUrl && (
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass-card border border-primary/50 hover:glow-effect"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </motion.a>
                    )}

                    {project.publishUrl && (
                      <motion.a
                        href={project.publishUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass-card border border-primary/50 hover:glow-effect"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono text-primary">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                className="group p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {project.publishUrl && (
                      <a
                        href={project.publishUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
