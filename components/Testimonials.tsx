"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonialsData = userData.sections.find((s) => s.id === "testimonials");
  if (!testimonialsData || testimonialsData.type !== "testimonials") return null;

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
          Client Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.items?.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-accent/5 p-8 rounded-2xl relative"
            >
              <Quote className="text-secondary mb-4 opacity-50" size={32} />
              <p className="text-lg text-text/80 mb-6 italic leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-primary">{item.name}</div>
                <div className="text-sm text-text/50">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
