"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Quote } from "lucide-react";

export default function Philosophy() {
  const philData = userData.sections.find((s) => s.id === "philosophy") as any;

  if (!philData || philData.type !== "philosophy") return null;

  return (
    <section className="py-40 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 text-secondary"
          >
            <Quote size={48} />
          </motion.div>
          
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-16 text-white italic leading-tight tracking-tighter"
          >
            &quot;{philData.quote}&quot;
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
             <div className="h-px w-16 bg-white/20" />
             <p className="text-secondary font-black tracking-[0.4em] uppercase text-sm md:text-base">
               {philData.author}
             </p>
             <div className="h-px w-16 bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
