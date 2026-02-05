"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { ArrowRight, Code, PenTool } from "lucide-react";

export default function Hero() {
  const heroData = userData.sections.find((s) => s.id === "home");
  if (!heroData || heroData.type !== "hero") return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
             className="text-7xl md:text-9xl font-bold font-heading mb-6 leading-tight tracking-tighter text-primary"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
          >
           {heroData.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl text-text/80 mb-4 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {heroData.subtitle}
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-text/50 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {heroData.cta_buttons?.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.link}
                className={`group flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1 ${
                    idx === 0 
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90" 
                    : "bg-white text-primary border border-gray-200 hover:border-secondary hover:text-secondary shadow-sm"
                }`}
              >
                {idx === 0 ? <Code size={20} /> : <PenTool size={20} />}
                {btn.text}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
