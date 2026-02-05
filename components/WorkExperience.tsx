"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  const experienceData = userData.sections.find((s) => s.id === "experience");

  if (!experienceData || experienceData.type !== "work_experience") return null;

  return (
    <section id="experience" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            {experienceData.title}
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experienceData.items?.map((item: any, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm hidden md:block z-10" 
                       style={{ top: '50%' }} />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative group"
                    >
                      <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-text/60 text-sm font-bold mb-6">
                        {item.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                        {item.company}
                        <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                      </h3>
                      
                      <div className="flex items-center gap-2 text-secondary font-semibold mb-6">
                        <Briefcase size={18} />
                        {item.role}
                      </div>

                      <ul className="space-y-3">
                        {item.responsibilities?.map((resp: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-text/70">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-text/20 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
