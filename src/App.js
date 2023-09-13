import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Me from "./components/Me";

export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font bg-cover">
        
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Me />
      <Contact />
    </main>
  );
}