"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Mail, ArrowRight, MessageCircle, Send } from "lucide-react";

export default function CallToAction() {
  const ctaData = userData.sections.find((s) => s.id === "final_cta");
  if (!ctaData || ctaData.type !== "cta") return null;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-6xl font-bold font-heading mb-6"
        >
          {ctaData.title}
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-xl md:text-2xl text-text/60 mb-12"
        >
          {ctaData.subtitle}
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
           {ctaData.buttons?.map((btn: any, idx: number) => {
             const isPrimary = idx === 0;
             const isWhatsApp = btn.text.toLowerCase().includes('whatsapp');
             
             return (
               <Link 
                 key={idx}
                 href={btn.link}
                 className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 ${
                   isPrimary 
                   ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90" 
                   : isWhatsApp
                   ? "bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:bg-[#128C7E]"
                   : "bg-white text-primary border-2 border-primary/10 hover:border-primary/30 shadow-sm"
                 }`}
               >
                 {idx === 0 ? <Mail size={20} /> : null}
                 {isWhatsApp ? <MessageCircle size={20} /> : null}
                 {btn.text === "Contact" ? <Send size={20} /> : null}
                 {btn.text}
                 {btn.text === "Contact" ? <ArrowRight size={20} className="ml-1" /> : null}
               </Link>
             );
           })}
        </motion.div>
      </div>
    </section>
  );
}
