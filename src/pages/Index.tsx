
import { useEffect } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-white">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
    </main>
  );
};

export default Index;
