"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { userData } from "@/config/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = userData.navigation.map((item) => item.link.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="relative group z-50 flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo Icon */}
          <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          
          <span className="text-xl md:text-2xl font-bold font-heading text-primary">
            {userData.site_title.replace("Portfolio of ", "")}
            <span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {userData.navigation.map((item, index) => {
              const isActive = activeSection === item.link.substring(1);
              return (
                <a
                  key={index}
                  href={item.link}
                  onClick={(e) => handleLinkClick(e, item.link)}
                  className={cn(
                    "font-medium transition-colors relative group text-sm uppercase tracking-wide",
                    isActive ? "text-primary font-semibold" : "text-text/60 hover:text-primary"
                  )}
                >
                  {item.title}
                  <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text hover:text-primary transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {userData.navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={(e) => handleLinkClick(e, item.link)}
                  className="text-2xl font-bold text-text hover:text-secondary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
