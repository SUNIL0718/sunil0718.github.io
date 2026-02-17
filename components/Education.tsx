"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const educationData = userData.sections.find((s) => s.id === "education") as any;
  if (!educationData || educationData.type !== "education") return null;

  return (
    <section id="education" className="py-24 bg-background dark:bg-background transition-colors duration-500">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 text-primary dark:text-white tracking-tight">
                Academic <br />
                <span className="text-secondary">Foundation</span>
              </h2>
              <p className="text-lg text-text-muted dark:text-white/40 font-medium max-w-sm leading-relaxed">
                Combining formal engineering education with intensive industry-focused specialization to deliver high-quality code.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 space-y-12 relative">
             {/* Timeline Line */}
             <div className="absolute left-[19px] top-4 bottom-4 w-px bg-black/5 dark:bg-white/5" />

             {educationData.items.map((item: any, idx: number) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="relative pl-16 group"
               >
                 {/* Dot */}
                 <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-primary dark:text-white group-hover:bg-secondary group-hover:text-primary transition-all shadow-sm z-10">
                    <GraduationCap size={20} />
                 </div>

                 <div>
                    <div className="flex items-center gap-3 text-secondary text-xs font-black uppercase tracking-widest mb-2">
                       <Calendar size={14} />
                       {item.period}
                    </div>
                    <h3 className="text-2xl font-black text-primary dark:text-white mb-2 tracking-tight group-hover:text-secondary transition-colors">
                       {item.degree}
                    </h3>
                    <p className="text-lg font-bold text-primary dark:text-white/80 mb-4">{item.institution}</p>
                    <p className="text-text-muted dark:text-white/40 font-medium leading-relaxed max-w-2xl text-base">
                       {item.description}
                    </p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
