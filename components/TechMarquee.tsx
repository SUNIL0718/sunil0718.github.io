"use client";

import { motion } from "framer-motion";
import { 
  GitBranch, 
  Triangle, 
  ArrowLeftRight, 
  Zap, 
  Layout, 
  Server, 
  Database, 
  Code2,
  HardDrive
} from "lucide-react";

const techItems = [
  { name: "Git", icon: GitBranch },
  { name: "Vercel", icon: Triangle },
  { name: "REST APIs", icon: ArrowLeftRight },
  { name: "Next.js", icon: Zap },
  { name: "React", icon: Layout },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Typescript", icon: Code2 },
  { name: "Tailwind", icon: HardDrive },
];

export default function TechMarquee() {
  // Triple the items to ensure seamless infinite scroll
  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="w-full overflow-hidden py-10 select-none">
      <div className="mx-auto max-w-7xl px-10 mb-8 text-center lg:text-left">
        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-text-muted dark:text-white/40">
          Tech Stack I Work With
        </p>
      </div>

      <div className="flex relative">
        <motion.div
          whileHover={{ animationPlayState: "paused" }}
          animate={{
            x: [0, "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex flex-nowrap gap-6 items-center whitespace-nowrap"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 py-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] shadow-sm hover:border-secondary transition-all group"
            >
              <item.icon 
                size={22} 
                className="text-secondary group-hover:scale-110 transition-transform" 
              />
              <span className="text-lg font-black text-primary dark:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
