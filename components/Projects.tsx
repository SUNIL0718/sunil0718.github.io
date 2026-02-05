"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { userData } from "@/config/data";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projectsData = userData.sections.find((s) => s.id === "work");
  const [filter, setFilter] = useState("All");

  if (!projectsData || projectsData.type !== "projects") return null;

  const filteredProjects = projectsData.projects?.filter((project: any) =>
    filter === "All" ? true : project.categories.includes(filter)
  );

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10 text-primary">
            {projectsData.title || "Featured Projects"}
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {projectsData.filters?.map((f: string) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  filter === f
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-white text-text/60 border border-gray-100 hover:border-primary/30 hover:bg-gray-50"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects?.map((project: any, idx: number) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Text Container */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <motion.h3 
                    className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <Link
                    href={project.project_link || "#"}
                    className="inline-flex items-center gap-2 text-white/90 font-semibold text-lg hover:text-white transition-colors group/link"
                  >
                    View Case Study 
                    <ExternalLink size={20} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
