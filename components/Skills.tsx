"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Layout, Server, Database, Box, Cpu } from "lucide-react";

export default function Skills() {
  const expertiseData = userData.sections.find((s) => s.id === "expertise");

  if (!expertiseData || expertiseData.type !== "skills") return null;

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return <Layout size={28} />;
      case 'backend': return <Server size={28} />;
      case 'database': return <Database size={28} />;
      default: return <Cpu size={28} />;
    }
  };

  return (
    <section id="expertise" className="py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4">My Superpowers</p>
          <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-primary">
            Technical Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseData.columns?.map((col: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-10 flex flex-col"
            >
              <div className="text-secondary mb-10 group-hover:scale-110 transition-transform">
                {getIcon(col.title)}
              </div>
              
              <h3 className="text-2xl font-black font-heading mb-4 text-primary">
                {col.title}
              </h3>
              
              <p className="text-text-muted mb-10 leading-relaxed text-sm font-bold flex-1">
                {col.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {col.stack?.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-[10px] font-black uppercase tracking-widest bg-gray-50 text-text-muted px-4 py-2 rounded-xl border border-black/5 hover:border-secondary transition-colors"
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
