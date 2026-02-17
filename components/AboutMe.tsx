"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";

export default function AboutMe() {
  const aboutData = userData.sections.find((s) => s.id === "about") as any;
  if (!aboutData || aboutData.type !== "about") return null;

  return (
    <section id="about" className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Label Side */}
          <div className="lg:w-1/4">
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-secondary font-black text-xs uppercase tracking-[0.5em] lg:rotate-90 lg:origin-left lg:mt-32 whitespace-nowrap"
             >
               Profile & Introduction
             </motion.p>
          </div>

          {/* Content Side */}
          <div className="flex-1">
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-black font-heading mb-16 text-primary tracking-tighter"
             >
               Crafting experiences <br />
               that <span className="text-secondary">matter.</span>
             </motion.h2>

             <div className="flex flex-col md:flex-row gap-16 items-start">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex-1"
               >
                 <p className="text-2xl md:text-3xl text-primary font-bold leading-tight mb-10">
                   {aboutData.content.split('\n\n')[0]}
                 </p>
                 <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed whitespace-pre-line">
                   {aboutData.content.split('\n\n').slice(1).join('\n\n')}
                 </p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="w-full md:w-80 bento-card p-10 flex flex-col justify-between"
               >
                  <div className="mb-20">
                     <p className="text-secondary font-black text-5xl mb-2">10+</p>
                     <p className="text-text-muted text-xs uppercase font-black tracking-widest">Solutions Launched</p>
                  </div>
                  <div>
                     <p className="text-primary font-black text-2xl mb-1">Full-Stack</p>
                     <p className="text-text-muted text-xs uppercase font-black tracking-widest leading-none">Engineering Focus</p>
                  </div>
               </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
