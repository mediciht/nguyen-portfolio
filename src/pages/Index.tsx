import { useEffect } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import HowCanIHelp from "@/components/HowCanIHelp";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <HowCanIHelp />
      <Certificates />
    </main>
  );
};

export default Index;
