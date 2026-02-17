"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { 
  Code, Layout, Server, Database, Palette, Github, Zap
} from "lucide-react";

export default function TechStack() {
  const stackData = userData.sections.find((s) => s.id === "tech_stack") as any;

  if (!stackData || stackData.type !== "tech_stack") return null;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'next.js': return <Code size={20} />;
      case 'react': return <Layout size={20} />;
      case 'node.js': return <Server size={20} />;
      case 'mongodb': return <Database size={20} />;
      case 'tailwind': return <Palette size={20} />;
      case 'git': return <Github size={20} />;
      case 'vercel': return <Zap size={20} />;
      case 'rest apis': return <ZipIcon />;
      default: return <Code size={20} />;
    }
  };

  return (
    <section className="py-20 bg-background border-y border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center md:text-left">
        <p className="text-text-muted text-xs font-black uppercase tracking-[0.3em]">{stackData.title}</p>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee gap-8 whitespace-nowrap py-4">
           {([...(stackData.items || []), ...(stackData.items || [])]).map((item: any, idx: number) => (
             <div 
               key={idx}
               className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border border-black/5 hover:border-secondary/30 transition-all group/item shadow-sm"
             >
                <span className="text-secondary group-hover/item:scale-110 transition-transform">{getIcon(item.name)}</span>
                <span className="text-primary font-bold tracking-wider">{item.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function ZipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 15 5 9 12 17 19 9 17 15" />
      <path d="M12 9V2" />
    </svg>
  );
}
