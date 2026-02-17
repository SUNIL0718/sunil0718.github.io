"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { ArrowRight, Code, FileText, Github, Zap } from "lucide-react";
import Link from "next/link";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  const heroData = userData.sections.find((s) => s.id === "home") as any;
  if (!heroData || heroData.type !== "hero") return null;

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-background dark:bg-background transition-colors duration-500">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-1 flex items-center pt-32 pb-20">
        <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Open for Opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-8 text-primary dark:text-white leading-[0.95] tracking-tight"
            >
              {heroData.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={word === "Next.js" || word === "Node.js" ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#3CB38E]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-muted dark:text-white/60 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              {heroData.subtitle} <br />
              <span className="text-[16px] text-text-muted/60 dark:text-white/30 font-medium">
                {heroData.description}
              </span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row justify-center lg:justify-start gap-4"
            >
              <Link
                href="/resume.pdf"
                className="group flex items-center gap-3 px-10 py-5 bg-primary dark:bg-secondary text-white dark:text-primary-foreground rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
              >
                <FileText size={20} />
                Download Resume
              </Link>
              <Link
                href="#work"
                className="group flex items-center gap-3 px-10 py-5 bg-white dark:bg-white/5 text-primary dark:text-white border border-black/5 dark:border-white/10 rounded-2xl font-black text-lg hover:border-secondary transition-all shadow-sm"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Credibility Badges */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-4 border-t border-black/5 dark:border-white/5 pt-10"
            >
               {heroData.badges?.map((badge: string, idx: number) => (
                 <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {badge}
                 </div>
               ))}
            </motion.div>
          </div>

          {/* Right Visual / Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-[480px] relative mt-10 lg:mt-0"
          >
             {/* Stacked Cards Effect */}
             <div className="relative group">
                {/* Visual Frames (The 'Ghost' Cards) */}
                <div className="absolute -top-6 -left-6 w-full h-full rounded-[4rem] border border-secondary/20 pointer-events-none transform -rotate-1" />
                <div className="absolute -top-12 -left-12 w-full h-full rounded-[4rem] border border-secondary/10 pointer-events-none transform rotate-1" />
                
                {/* Main Card */}
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white dark:border-white/5 shadow-2xl bg-white dark:bg-white/5 z-10">
                   <img 
                     src={heroData.profile_image} 
                     alt="Sunil" 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                   />
                   
                   {/* Bottom Text Overlay */}
                   <div className="absolute bottom-10 left-10 z-20">
                      <p className="text-4xl font-black text-black transition-colors">SUNIL</p>
                      <p className="text-xs font-black text-secondary uppercase tracking-[0.2em] mt-1">Full-Stack Engineer</p>
                   </div>

                   {/* Subtle Gradient Overlay for Text Readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating Tech Badge */}
                <div className="absolute top-8 -right-4 bg-white dark:bg-background p-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-black/5 dark:border-white/10 z-30">
                   <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Zap size={20} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-white/40 leading-none mb-1">Expertise</p>
                      <p className="text-sm font-black text-primary dark:text-white uppercase">Full-Stack</p>
                   </div>
                </div>
             </div>

             {/* Background Geometric Elements */}
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
             <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-primary/20 dark:bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
        
        </div>
      </div>

      {/* Animated Tech Marquee - Full Width */}
      <div className="w-full mt-auto pb-10">
        <TechMarquee />
      </div>
    </section>
  );
}
