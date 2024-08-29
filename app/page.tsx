"use client";

import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import { FloatingNav } from "@/app/components/ui/FloatingNavbar";
import { navItems } from "./data";
import { Timeline } from "@/app/components/ui/Timeline";
import Education from "./components/Education";
import Links from "./components/Links";
import Contact from "./components/Contact";
// import { ModeToggle } from "./components/ui/ModeToggle";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden ">
      <div className="max-w-7xl w-full">
        {/* <ModeToggle /> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
