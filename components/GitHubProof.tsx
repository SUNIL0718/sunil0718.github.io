"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, GitMerge, Star } from "lucide-react";
import Link from "next/link";
import { userData } from "@/config/data";

export default function GitHubProof() {
  return (
    <section className="py-40 bg-primary dark:bg-background relative overflow-hidden group transition-colors duration-500">
      {/* Decorative background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10"><Github size={400} /></div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Text Content */}
          <div className="flex-1 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-6">Open Source & Proof</p>
              <h2 className="text-5xl md:text-7xl font-black font-heading mb-10 tracking-tighter leading-tight">
                Beyond the UI: <br />
                <span className="text-secondary/80">Code Transparency.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-medium max-w-2xl">
                I believe that clean, documented code is the ultimate proof of proficiency. My GitHub profile showcases real project repositories with structured commits, modular architecture, and production-ready logic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                 <ProofItem Icon={Code2} title="Clean Codebase" text="Modular components & strict typing." />
                 <ProofItem Icon={GitMerge} title="Git Workflow" text="Structured commits & branch strategy." />
                 <ProofItem Icon={Star} title="Documentation" text="Comprehensive READMEs & comments." />
                 <ProofItem Icon={ExternalLink} title="Active Status" text="Consistent contributions & updates." />
              </div>

              <Link 
                href="https://github.com/sunil0718"
                target="_blank"
                className="inline-flex items-center gap-4 px-10 py-5 bg-white dark:bg-secondary text-primary dark:text-primary-foreground rounded-2xl font-black text-xl hover:bg-secondary dark:hover:bg-white hover:text-white dark:hover:text-primary-foreground transition-all shadow-2xl hover:-translate-y-1 block sm:inline-block text-center"
              >
                <Github size={28} />
                Explore my Repositories
              </Link>
            </motion.div>
          </div>

          {/* Visual Element (Mock Github Stats Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden backdrop-blur-3xl shadow-2xl transition-colors">
               <div className="flex items-center justify-between mb-12 text-white">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Github size={24} />
                     </div>
                     <div>
                        <p className="font-black text-lg">sunil0718</p>
                        <p className="opacity-40 text-xs font-bold uppercase tracking-widest">Active Developer</p>
                     </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest border border-secondary/30">
                     Hiring Ready
                  </div>
               </div>

               <div className="space-y-8">
                  {[
                    { label: "Public Repositories", value: "15+" },
                    { label: "Consistent Contributions", value: "Daily" },
                    { label: "Code Quality", value: "Premium" },
                    { label: "Documentation", value: "Standard" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-end justify-between border-b border-white/5 pb-4 group-hover:border-secondary/20 transition-colors">
                       <p className="text-white/60 font-medium text-lg">{stat.label}</p>
                       <p className="text-secondary font-black text-3xl tracking-tighter">{stat.value}</p>
                    </div>
                  ))}
               </div>
               
               {/* GitHub Pattern Circles */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ProofItem({ Icon, title, text }: any) {
  return (
    <div className="flex items-start gap-4">
       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
          <Icon size={20} />
       </div>
       <div>
          <p className="text-white font-bold text-lg leading-none mb-1">{title}</p>
          <p className="text-white/40 text-sm font-medium">{text}</p>
       </div>
    </div>
  );
}
