"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Layout, Database, Server, Cpu } from "lucide-react";

export default function Skills() {
  const techStackData = userData.sections.find((s) => s.id === "tech_stack") as any;

  if (!techStackData) return null;

  return (
    <section id="expertise" className="py-40 bg-background dark:bg-background relative transition-colors duration-500">
      <div className="container mx-auto px-10 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4"
          >
            {techStackData.description || "MY SUPERPOWERS"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black font-heading text-primary dark:text-white tracking-tighter"
          >
            {techStackData.title}
          </motion.h2>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackData.groups?.map((group: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-secondary transition-all group h-full flex flex-col"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-primary-foreground transition-all">
                {getGroupIcon(group.category)}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-primary dark:text-white mb-4 tracking-tight">
                {group.category}
              </h3>
              <p className="text-text-muted dark:text-white/40 font-medium leading-relaxed mb-10 text-sm">
                {group.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {group.items?.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-[10px] font-black uppercase tracking-widest bg-gray-50 dark:bg-white/5 text-text-muted dark:text-white/60 px-4 py-2 rounded-xl border border-black/5 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function getGroupIcon(category: string) {
  switch (category.toLowerCase()) {
    case 'frontend': return <Layout size={28} />;
    case 'backend': return <Server size={28} />;
    case 'database': return <Database size={28} />;
    case 'tools & deployment': return <Cpu size={28} />;
    default: return <Cpu size={28} />;
  }
}
