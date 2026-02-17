"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";

export default function AboutMe() {
  const aboutData = userData.sections.find((s) => s.id === "about") as any;
  if (!aboutData || aboutData.type !== "about") return null;

  return (
    <section id="about" className="py-40 bg-background dark:bg-background relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 lg:items-center">
          
          {/* Label Side */}
          <div className="lg:w-1/4 flex lg:items-center lg:justify-center">
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-secondary font-black text-sm uppercase tracking-[0.5em] lg:rotate-90 whitespace-nowrap"
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
               className="text-5xl md:text-7xl font-black font-heading mb-16 text-primary dark:text-white tracking-tighter"
             >
               {aboutData.title}
             </motion.h2>

             <div className="flex flex-col md:flex-row gap-16 items-start">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex-1"
               >
                 <p className="text-2xl md:text-3xl text-primary dark:text-white font-bold leading-tight mb-10">
                   {aboutData.content.split('\n\n')[0]}
                 </p>
                 <div className="space-y-6">
                    {aboutData.content.split('\n\n').slice(1).map((para: string, idx: number) => (
                      <p key={idx} className="text-lg md:text-xl text-text-muted dark:text-white/60 font-medium leading-relaxed">
                        {para}
                      </p>
                    ))}
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="w-full md:w-80 p-10 rounded-[3rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col justify-between aspect-square"
               >
                  <div className="mb-20">
                     <p className="text-secondary font-black text-6xl mb-2">10+</p>
                     <p className="text-text-muted dark:text-white/40 text-[10px] uppercase font-black tracking-widest">Solutions Launched</p>
                  </div>
                  <div>
                     <p className="text-primary dark:text-white font-black text-3xl mb-1 italic">Full-Stack</p>
                     <p className="text-text-muted dark:text-white/40 text-[10px] uppercase font-black tracking-widest leading-none">Engineering Focus</p>
                  </div>
               </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
