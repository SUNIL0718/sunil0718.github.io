"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Quote } from "lucide-react";

export default function Philosophy() {
  const philosophyData = userData.sections.find((s) => s.id === "philosophy");
  if (!philosophyData || philosophyData.type !== "philosophy") return null;

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <Quote size={48} className="mx-auto mb-8 text-secondary opacity-50" />
          <h3 className="text-3xl md:text-5xl font-serif italic font-light leading-relaxed mb-8">
            &quot;{philosophyData.quote}&quot;
          </h3>
          <p className="text-xl font-heading font-medium tracking-wide opacity-80">
             — {philosophyData.author}
          </p>
        </motion.div>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
    </section>
  );
}
