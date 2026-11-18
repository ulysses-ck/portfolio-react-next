"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import angularBmiImage from "@/assets/angular-bmi-calculator.png";
import angularBudgetImage from "@/assets/angular-budget.png";
import angularCreditCardImage from "@/assets/angular-credit-card.png";
import angularSearchImage from "@/assets/angular-images.png";

import angularTodoImage from "@/assets/angular-todo.png";
import carlasfoodImage from "@/assets/carlasfood.png";
import dictappImage from "@/assets/dictapp.png";
import dictionaryAppImage from "@/assets/dictionary-app.png";
import reactExpressDymamoDBImage from "@/assets/react-express-dynamodb.png";
import timeTrackingDashboardImage from "@/assets/time-tracking-dashboard.png";
import unboredImage from "@/assets/unbored.png";
import { GithubIcon } from "@/components/icons";

export const projects = [
  {
    id: "dictapp",
    title: "Dictionary App",
    image: dictappImage,
    tags: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Git", "Netlify"],
    featured: true,
    publishUrl: "https://dictapp.netlify.app/",
    repoUrl: "",
  },
  {
    id: "carlasfood",
    title: "Carla's Food",
    image: carlasfoodImage,
    tags: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS", "Pug", "Git"],
    featured: false,
    publishUrl: "",
    repoUrl: "https://github.com/ulysses-ck/carlasfood",
  },
  {
    id: "timeTracking",
    title: "Time Tracking Dashboard",
    image: timeTrackingDashboardImage,
    tags: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Vercel"],
    featured: true,
    publishUrl: "http://time-tracking-dashboard-roan.vercel.app/",
    repoUrl: "",
  },
  {
    id: "unbored",
    title: "Unbored",
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
    featured: true,
    publishUrl: "https://unbored.netlify.app/",
    repoUrl: "",
  },
  {
    id: "angularTodo",
    title: "Angular Todo App",
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
    featured: false,
    publishUrl: "https://calm-llama-ae8039.netlify.app/",
    repoUrl: "",
  },
  {
    id: "angularBudget",
    title: "Angular Budget",
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
    featured: false,
    publishUrl: "https://angular-budget-seven.vercel.app/",
    repoUrl: "",
  },
  {
    id: "angularBmi",
    title: "Angular BMI Calculator",
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
    featured: false,
    publishUrl: "https://heartfelt-profiterole-ddaf4e.netlify.app/",
    repoUrl: "",
  },
  {
    id: "angularSearch",
    title: "Angular Search Images",
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
    featured: false,
    publishUrl: "https://angular-search-images.vercel.app/",
    repoUrl: "",
  },
  {
    id: "dictionaryVanilla",
    title: "Dictionary App (Vanilla)",
    image: dictionaryAppImage,
    tags: ["JavaScript", "HTML", "CSS", "Git", "Netlify"],
    featured: false,
    publishUrl: "https://safjkib2pr.netlify.app/",
    repoUrl: "",
  },
  {
    id: "angularCreditCard",
    title: "Angular Credit Card Manager",
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
    featured: false,
    publishUrl:
      "https://6481663a0da9322601e3bcf2--candid-douhua-47bd82.netlify.app/",
    repoUrl: "",
  },
  {
    id: "reactExpressDynamo",
    title: "React Express DynamoDB",
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
    featured: true,
    publishUrl: "",
    repoUrl: "https://github.com/ulysses-ck/express-react-dynamodb",
  },
];

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
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

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.article
                key={project.id}
                className="group relative rounded-3xl overflow-hidden glass-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.repoUrl && (
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("viewCode")} — ${project.title}`}
                        className="p-3 rounded-full glass-card border border-primary/50 hover:glow-effect focus-visible:outline-2 focus-visible:outline-ring"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GithubIcon className="w-5 h-5 text-primary" />
                      </motion.a>
                    )}

                    {project.publishUrl && (
                      <motion.a
                        href={project.publishUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("viewLive")} — ${project.title}`}
                        className="p-3 rounded-full glass-card border border-primary/50 hover:glow-effect focus-visible:outline-2 focus-visible:outline-ring"
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
                      {t("featured")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(`items.${project.id}`)}
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
              </motion.article>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.article
                key={project.id}
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
                        aria-label={`${t("viewCode")} — ${project.title}`}
                        className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-ring"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}

                    {project.publishUrl && (
                      <a
                        href={project.publishUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("viewLive")} — ${project.title}`}
                        className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-ring"
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
                  {t(`items.${project.id}`)}
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
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
