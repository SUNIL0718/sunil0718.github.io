"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";

export default function Skills() {
  const expertiseData = userData.sections.find((s) => s.id === "expertise");

  if (!expertiseData || expertiseData.type !== "skills") return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="expertise" className="py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
            {expertiseData.title || "My Expertise"}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertiseData.columns?.map((col: any, idx: number) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-accent/10 p-8 rounded-2xl border border-border/50 hover:border-secondary transition-all hover:shadow-lg group"
            >
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">
                {col.title}
              </h3>
              <p className="text-text/70 mb-6 leading-relaxed">
                {col.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {col.stack?.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-white text-primary border border-border px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
       <div className="absolute right-0 top-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
    </section>
  );
}
