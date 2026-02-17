"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Trophy, Star, Code2, Award } from "lucide-react";

export default function Achievements() {
  const achData = userData.sections.find((s) => s.id === "achievements") as any;
  if (!achData || achData.type !== "achievements") return null;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 size={24} />;
      case 1: return <Star size={24} />;
      case 2: return <Trophy size={24} />;
      case 3: return <Award size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-background dark:bg-background transition-colors duration-500">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 text-primary dark:text-white tracking-tight">
            Recognition & <span className="text-secondary">Proof</span>
          </h2>
          <p className="text-lg text-text-muted dark:text-white/40 font-medium max-w-2xl leading-relaxed">
            Quantifiable evidence of technical skill, community impact, and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {achData.items.map((item: any, idx: number) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col items-center text-center transition-all group hover:border-secondary/30"
             >
                <div className="w-16 h-16 rounded-3xl bg-white dark:bg-background flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:scale-110 transition-transform">
                   {getIcon(idx)}
                </div>
                <h3 className="text-2xl font-black text-primary dark:text-white mb-2 tracking-tight group-hover:text-secondary transition-colors">
                   {item.title}
                </h3>
                <p className="text-base text-text-muted dark:text-white/40 font-medium leading-relaxed">
                   {item.value}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
