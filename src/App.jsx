import React, { useState } from "react";
import Hero from "./components/Hero";
import CustomNavbar from "./components/Navbar";
import "./App.css";
import SplashCursor from "./special-comps/SplashCursor.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <SplashCursor />
      <CustomNavbar onToggleTheme={toggleTheme} theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </>
  );
}

export default App;
