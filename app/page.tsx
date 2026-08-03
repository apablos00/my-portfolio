import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <Background />
      <Contact />
    </main>
  );
}
