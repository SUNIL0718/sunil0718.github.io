"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Briefcase, Globe, Monitor, Award } from "lucide-react";

const icons: Record<string, any> = {
  briefcase: Briefcase,
  globe: Globe,
  monitor: Monitor,
  award: Award,
};

export default function SocialProof() {
  const proofData = userData.sections.find((s) => s.id === "social_proof");
  if (!proofData || proofData.type !== "social_proof") return null;

  return (
    <section className="py-10 border-b border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-text/40 uppercase tracking-widest mb-8">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {proofData.items?.map((item: any, idx: number) => {
            const Icon = icons[item.icon] || Globe;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group"
              >
                <Icon size={28} className="text-primary group-hover:text-secondary transition-colors" />
                <span className="text-xl font-bold text-primary/80 group-hover:text-primary transition-colors">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
