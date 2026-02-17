"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import GitHubProof from "@/components/GitHubProof";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-secondary/30">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Philosophy />
      <Projects />
      <GitHubProof />
      <WorkExperience />
      <div id="contact-form-section">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
