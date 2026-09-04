import React from "react";
import Ambient from "./components/Ambient.jsx";
import { CursorGlow, ScrollProgress } from "./components/Effects.jsx";
import Nav from "./components/Nav.jsx";
import SectionDots from "./components/SectionDots.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Ambient />
      <Nav />
      <SectionDots />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
