"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { userData } from "@/config/data";
import { Send, Linkedin, Twitter, Github, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
  const contactData = userData.sections.find((s) => s.id === "contact");
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!contactData || contactData.type !== "contact_form") return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset after showing success message
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold font-heading mb-6 text-primary">
              {contactData.title}
            </h2>
            <p className="text-lg text-text/80 mb-10 leading-relaxed">
              {contactData.description}
            </p>

            <div className="flex gap-4">
              {contactData.social_links?.linkedin && (
                <Link
                  href={contactData.social_links.linkedin}
                  className="p-3 rounded-full bg-accent/20 hover:bg-secondary hover:text-white transition-all text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
              )}
               {contactData.social_links?.twitter && (
                <Link
                  href={contactData.social_links.twitter}
                  className="p-3 rounded-full bg-accent/20 hover:bg-secondary hover:text-white transition-all text-primary"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </Link>
              )}
               {contactData.social_links?.github && (
                <Link
                  href={contactData.social_links.github}
                  className="p-3 rounded-full bg-accent/20 hover:bg-secondary hover:text-white transition-all text-primary"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
              )}
               {contactData.social_links?.whatsapp && (
                <Link
                  href={contactData.social_links.whatsapp}
                  className="p-3 rounded-full bg-accent/20 hover:bg-[#25D366] hover:text-white transition-all text-primary"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </Link>
              )}
               {contactData.social_links?.instagram && (
                <Link
                  href={contactData.social_links.instagram}
                  className="p-3 rounded-full bg-accent/20 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all text-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/10 p-8 rounded-2xl border border-accent/50"
          >
             <form className="space-y-6" onSubmit={handleSubmit}>
               {contactData.fields?.map((field: string) => (
                 <div key={field} className="relative">
                   {field.toLowerCase() === 'message' ? (
                      <textarea 
                        name={field.toLowerCase().replace(' ', '_')}
                        placeholder={field} 
                        rows={4}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                        required
                      />
                   ) : (
                      <input 
                        name={field.toLowerCase().replace(' ', '_')}
                        type={
                          field.toLowerCase() === 'email' ? 'email' : 
                          field.toLowerCase().includes('mobile') ? 'tel' : 'text'
                        } 
                        placeholder={field} 
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        required
                        {...(field.toLowerCase().includes('mobile') ? {
                          pattern: "[0-9]{10,15}",
                          title: "Please enter a valid mobile number (10-15 digits)",
                          minLength: 10,
                          maxLength: 15,
                          onInput: (e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          }
                        } : {})}
                      />
                   )}
                 </div>
               ))}
               <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group ${
                    formState === 'success' 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
               >
                 {formState === 'submitting' ? 'Sending...' : formState === 'success' ? 'Message Sent!' : 'Send Message'}
                 {formState === 'idle' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
               </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
