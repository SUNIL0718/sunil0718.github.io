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
    <section id="work" className="py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4">Case Studies</p>
            <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-primary">
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
                    ? "bg-primary text-white"
                    : "bg-transparent text-text-muted hover:text-secondary"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-32">
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
                  <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Link 
                        href={project.project_link || "#"}
                        className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-secondary hover:text-white"
                       >
                         <ArrowUpRight size={32} />
                       </Link>
                    </div>
                  </div>
                </div>
                
                {/* Project Content Box */}
                <div className="flex-1">
                  <p className="text-secondary font-black text-xs uppercase tracking-widest mb-6">{project.categories.join(' & ')}</p>
                  <h3 className="text-4xl md:text-6xl font-black font-heading mb-8 text-primary tracking-tighter">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-text-muted font-bold leading-relaxed mb-12">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-16">
                    {project.stack?.map((tech: string, i: number) => (
                      <span key={i} className="text-xs font-black text-primary px-5 py-2.5 rounded-2xl bg-gray-50 border border-black/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <Link
                      href={project.github_link || "#"}
                      className="flex items-center gap-3 text-primary font-black text-lg hover:text-secondary transition-colors"
                    >
                      <Github size={24} />
                      Source Code
                    </Link>
                    <Link
                      href={project.project_link || "#"}
                      className="flex items-center gap-3 text-primary font-black text-lg hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={24} />
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
