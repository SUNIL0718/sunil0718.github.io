"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Send, Linkedin, Github, MessageCircle, FileText, MapPin, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactData = userData.sections.find((s) => s.id === "contact") as any;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!contactData || contactData.type !== "contact_form") return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-40 bg-background dark:bg-background relative overflow-hidden transition-colors duration-500">
       {/* Background Accent */}
      <div className="mesh-blob bottom-[-20%] left-[-10%] w-[60rem] h-[60rem] bg-secondary/5 dark:bg-secondary/10" />

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start max-w-7xl mx-auto">
          
          {/* Header & Socials Split */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[45%]"
          >
            <p className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-6">Contact & Inquiries</p>
            <h2 className="text-6xl md:text-8xl font-black font-heading mb-10 text-primary dark:text-white tracking-tighter leading-[0.9]">
              Let&apos;s build <br /> <span className="text-secondary opacity-80">the next big</span> <br /> thing.
            </h2>
            <p className="text-xl text-text-muted dark:text-white/60 mb-16 leading-relaxed font-medium max-w-lg">
              {contactData.description}
            </p>

            <div className="space-y-12 mb-20">
              <ContactRow Icon={Mail} label="Direct Email" value={contactData.email || "sunil@example.com"} href={`mailto:${contactData.email}`} />
              <ContactRow Icon={MapPin} label="Office Location" value={contactData.location || "Punjab, India"} />
              <ContactRow Icon={MessageCircle} label="WhatsApp Me" value={contactData.phone || "+91 XXXXX XXXXX"} href={contactData.social_links?.whatsapp} />
            </div>

            <div className="flex gap-4">
              <SocialIcon Icon={Linkedin} href={contactData.social_links?.linkedin} />
              <SocialIcon Icon={Github} href={contactData.social_links?.github} />
            </div>
          </motion.div>

          {/* Form Split */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="p-8 md:p-14 rounded-[4rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
               <form className="grid grid-cols-1 gap-12 relative z-10" onSubmit={handleSubmit}>
                 {contactData.fields?.map((field: string) => (
                   <div key={field} className="relative group">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted dark:text-white/40 mb-2 block group-focus-within:text-secondary transition-colors italic">{field}</label>
                     {field.toLowerCase() === 'message' ? (
                        <textarea 
                          name={field.toLowerCase().replace(' ', '_')}
                          placeholder={`How can I help you?`} 
                          rows={4}
                          className="w-full bg-transparent border-b-2 border-black/5 dark:border-white/10 py-4 focus:outline-none focus:border-secondary transition-all resize-none font-bold text-xl text-primary dark:text-white placeholder:text-black/10 dark:placeholder:text-white/5"
                          required
                        />
                     ) : (
                        <input 
                          name={field.toLowerCase().replace(' ', '_')}
                          type={field.toLowerCase() === 'email' ? 'email' : 'text'} 
                          placeholder={field} 
                          className="w-full bg-transparent border-b-2 border-black/5 dark:border-white/10 py-4 focus:outline-none focus:border-secondary transition-all font-bold text-xl text-primary dark:text-white placeholder:text-black/10 dark:placeholder:text-white/5"
                          required
                        />
                     )}
                   </div>
                 ))}
                 <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className={`group w-full font-black py-8 rounded-[2rem] transition-all flex items-center justify-center gap-4 text-2xl mt-6 shadow-2xl ${
                      formState === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary dark:bg-secondary text-white dark:text-primary hover:scale-[1.02]'
                    }`}
                 >
                   {formState === 'submitting' ? 'Working...' : formState === 'success' ? 'Got it!' : 'Engage with me'}
                   {formState === 'idle' && <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />}
                 </button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, label, value, href }: any) {
  const Card = href ? 'a' : 'div';
  return (
    <Card href={href} className="flex items-start gap-6 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500 shadow-sm shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-[10px] text-text-muted dark:text-white/40 font-black uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-primary dark:text-white font-black text-2xl tracking-tight group-hover:text-secondary transition-colors">{value}</p>
      </div>
    </Card>
  );
}

function SocialIcon({ Icon, href }: any) {
  if (!href) return null;
  return (
    <Link
      href={href}
      className="w-16 h-16 rounded-2xl bg-primary dark:bg-white/5 text-white dark:text-white flex items-center justify-center hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-xl border border-white/5"
    >
      <Icon size={24} />
    </Link>
  );
}
