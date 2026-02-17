"use client";

import { userData } from "@/config/data";
import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const contactData = userData.sections.find((s) => s.id === "contact");

  return (
    <footer className="bg-background dark:bg-background pt-32 pb-12 border-t border-black/5 dark:border-white/10 relative transition-colors duration-500">
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="text-left">
            <Link href="#home" className="text-4xl font-black font-heading text-primary dark:text-white tracking-tighter mb-6 block group">
              SUNIL<span className="text-secondary group-hover:rotate-12 transition-transform inline-block">.</span>
            </Link>
            <p className="text-text-muted dark:text-white/40 max-w-sm font-medium text-lg leading-relaxed">
              Building high-performance digital products and scalable systems for the modern web.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
             <div>
                <p className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-8 italic">Navigation</p>
                <div className="flex flex-col gap-4">
                   {['Home', 'About', 'Work', 'Expertise'].map((item) => (
                     <Link key={item} href={`#${item.toLowerCase()}`} className="text-primary dark:text-white/60 font-bold hover:text-secondary dark:hover:text-secondary transition-colors">
                        {item}
                     </Link>
                   ))}
                </div>
             </div>
             <div>
                <p className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-8 italic">Social</p>
                <div className="flex flex-col gap-4">
                   <Link href={contactData?.social_links?.linkedin || "#"} className="text-primary dark:text-white/60 font-bold hover:text-secondary dark:hover:text-secondary transition-colors">LinkedIn</Link>
                   <Link href={contactData?.social_links?.github || "#"} className="text-primary dark:text-white/60 font-bold hover:text-secondary dark:hover:text-secondary transition-colors">GitHub</Link>
                   <Link href={contactData?.social_links?.whatsapp || "#"} className="text-primary dark:text-white/60 font-bold hover:text-secondary dark:hover:text-secondary transition-colors">WhatsApp</Link>
                </div>
             </div>
          </div>
        </div>

        <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-text-muted dark:text-white/20 text-sm font-bold tracking-tight">
            &copy; {new Date().getFullYear()} Sunil. {userData.footer.text}
          </p>
          <div className="flex gap-8">
            <p className="text-[10px] font-black text-text-muted dark:text-white/20 uppercase tracking-widest italic">
               Made with excellence in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ Icon, href }: any) {
  if (!href) return null;
  return (
    <Link href={href} className="text-text-muted hover:text-secondary transition-colors">
      <Icon size={24} />
    </Link>
  );
}
