"use client";

import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { ArrowRight, Code, FileText, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const heroData = userData.sections.find((s) => s.id === "home") as any;
  const aboutData = userData.sections.find((s) => s.id === "about") as any;
  
  if (!heroData || heroData.type !== "hero") return null;

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden bg-background pt-24">
      {/* Mesh Blobs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mesh-blob top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-secondary/10" />
        <div className="mesh-blob bottom-[10%] right-[-10%] w-[50rem] h-[50rem] bg-secondary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-8 border border-secondary/20 uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for New Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black font-heading mb-8 leading-[0.95] tracking-tight text-primary"
            >
              <span className="text-gradient">Building</span> <br />
              the Future. <br />
              <span className="text-secondary">Together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-muted mb-12 font-medium leading-relaxed"
            >
              {heroData.title}. <br />
              <span className="text-primary font-bold">{heroData.subtitle}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                href="#work"
                className="group flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-2xl hover:-translate-y-1"
              >
                Explore My Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/resume.pdf"
                className="group flex items-center gap-3 px-10 py-5 bg-white text-primary border border-black/5 rounded-2xl font-bold text-lg hover:border-secondary transition-all hover:-translate-y-1 shadow-sm"
              >
                <FileText size={20} />
                Get Resume
              </Link>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="mt-16 flex items-center gap-6 border-t border-black/5 pt-10"
            >
               <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center font-bold text-secondary text-xs">
                       {i === 3 ? "10+" : ""}
                    </div>
                  ))}
               </div>
               <p className="text-sm text-text-muted font-bold tracking-wide">
                 Trusted by companies & <br /> open-source communities.
               </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative w-full max-w-xl group"
          >
            <div className="relative z-10 aspect-[4/5] bg-white rounded-[3rem] p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                <img 
                  src={aboutData?.profile_image || "/assets/profile.png"} 
                  alt="Sunil" 
                  className="w-full h-full object-cover rounded-[2rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-light rounded-2xl border-white/20 shadow-2xl">
                   <p className="text-primary font-black text-2xl mb-1">SUNIL</p>
                   <p className="text-secondary font-bold text-sm tracking-[0.2em] uppercase">Full-Stack Engineer</p>
                </div>
            </div>
            
            {/* Background Accent Lines */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-secondary/20 rounded-[3rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
