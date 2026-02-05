"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";

export default function ExperienceSummary() {
  const summaryData = userData.sections.find((s) => s.id === "experience_summary");
  if (!summaryData || summaryData.type !== "experience_summary") return null;

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                Crafting digital experiences for over 5 years.
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {summaryData.text}
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="grid grid-cols-2 sm:grid-cols-3 gap-8"
            >
               {summaryData.stats?.map((stat: any, idx: number) => (
                 <div key={idx} className="text-center md:text-left">
                    <div className="text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
                 </div>
               ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
