"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  const experienceData = userData.sections.find((s) => s.id === "experience");

  if (!experienceData || experienceData.type !== "work_experience") return null;

  return (
    <section id="experience" className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4">The Journey</p>
          <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-primary">
            Career Timeline
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="space-y-32">
            {experienceData.items?.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 md:gap-32 items-start"
              >
                {/* Year Side */}
                <div className="md:w-48 shrink-0">
                  <p className="text-secondary font-black text-4xl italic tracking-tighter mb-2">{item.period.split(' - ')[0]}</p>
                  <p className="text-text-muted font-black text-xs uppercase tracking-widest">{item.period.split(' - ')[1] || "Current"}</p>
                </div>

                {/* Content Side */}
                <div className="flex-1 border-l-2 border-black/5 pl-12 md:pl-20 relative">
                   <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-primary" />
                   
                   <h3 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tighter uppercase">{item.role}</h3>
                   <p className="text-xl md:text-2xl text-secondary font-bold mb-10 tracking-tight">{item.company}</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {item.responsibilities?.map((resp: string, i: number) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                           <p className="text-lg text-text-muted font-bold leading-relaxed">{resp}</p>
                        </div>
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
