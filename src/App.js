import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

