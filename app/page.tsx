"use client";

import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import { FloatingNav } from "@/app/components/ui/FloatingNavbar";
import { navItems } from "./data";
import { Timeline } from "@/app/components/ui/Timeline";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import { ModeToggle } from "./components/ui/ModeToggle";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden ">
      <div className=" w-full">
        {/* <ModeToggle /> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        {/* <Education /> */}
        <Contact />
      </div>
    </main>
  );
}
