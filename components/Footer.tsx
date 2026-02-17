"use client";

import { userData } from "@/config/data";
import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const contactData = userData.sections.find((s) => s.id === "contact");

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-black/5 relative grid-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-3xl font-black font-heading text-primary tracking-tighter mb-4 block">
              SUNIL<span className="text-secondary">.</span>
            </Link>
            <p className="text-text-muted max-w-xs font-bold">
              Building high-performance digital products for the modern web.
            </p>
          </div>

          <div className="flex gap-6">
            <FooterIcon Icon={Github} href={contactData?.social_links?.github} />
            <FooterIcon Icon={Linkedin} href={contactData?.social_links?.linkedin} />
            <FooterIcon Icon={MessageCircle} href={contactData?.social_links?.whatsapp} />
          </div>
        </div>

        <div className="h-px w-full bg-black/5 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-bold">
            {userData.footer.text}
          </p>
          <div className="flex gap-8">
            {userData.footer.links.map((link, i) => (
              <Link key={i} href="#" className="text-xs font-black text-text-muted hover:text-primary transition-colors uppercase tracking-widest">
                {link}
              </Link>
            ))}
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
