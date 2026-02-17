"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { userData } from "@/config/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projectsData = userData.sections.find((s) => s.id === "work");
  const [filter, setFilter] = useState("All");

  if (!projectsData || projectsData.type !== "projects") return null;

  const filteredProjects = projectsData.projects?.filter((project: any) =>
    filter === "All" ? true : project.categories.includes(filter)
  );

  return (
    <section id="work" className="py-40 bg-background dark:bg-background relative transition-colors duration-500">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4">Case Studies</p>
            <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-primary dark:text-white">
              Featured Work
            </h2>
          </motion.div>
          
          {/* Minimalist Filters */}
          <div className="flex flex-wrap gap-2">
            {projectsData.filters?.map((f: string) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                  filter === f
                    ? "bg-primary dark:bg-secondary text-white dark:text-primary-foreground"
                    : "bg-transparent text-text-muted dark:text-white/40 hover:text-secondary"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-40">
          <AnimatePresence mode="popLayout">
            {filteredProjects?.map((project: any, idx: number) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row gap-16 lg:gap-32 items-center",
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Project Image Box */}
                <div className="flex-1 w-full group">
                  <div className="relative aspect-[16/10] rounded-[4rem] overflow-hidden bg-gray-100 dark:bg-white/5 shadow-2xl border-8 border-white dark:border-white/5 transition-colors">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-primary/40 dark:bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                       <Link 
                        href={project.project_link || "#"}
                        className="w-24 h-24 rounded-full bg-white dark:bg-secondary flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-secondary dark:hover:bg-white hover:text-white dark:hover:text-primary"
                       >
                         <ArrowUpRight size={32} />
                       </Link>
                    </div>
                  </div>
                </div>
                
                {/* Project Content Box */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-8">
                     {project.categories.map((cat: string, i: number) => (
                        <span key={i} className="text-secondary font-black text-[10px] uppercase tracking-widest px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                           {cat}
                        </span>
                     ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black font-heading mb-8 text-primary dark:text-white tracking-tighter">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-text-muted dark:text-white/60 font-medium leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                    {project.features?.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-text-muted dark:text-white/40 font-medium leading-snug">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mb-16">
                    {project.stack?.map((tech: string, i: number) => (
                      <span key={i} className="text-[10px] font-black text-primary dark:text-white/40 px-5 py-2.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <Link
                      href={project.github_link || "#"}
                      className="flex items-center gap-3 text-primary dark:text-white font-black text-lg hover:text-secondary dark:hover:text-secondary transition-all group"
                    >
                      <Github size={24} className="group-hover:rotate-12 transition-transform" />
                      Source Code
                    </Link>
                    <Link
                      href={project.project_link || "#"}
                      className="flex items-center gap-3 text-primary dark:text-white font-black text-lg hover:text-secondary dark:hover:text-secondary transition-all group"
                    >
                      <ExternalLink size={24} className="group-hover:scale-110 transition-transform" />
                      Live Preview
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
