import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import MoreAboutMe from "./components/MoreAboutMe";
import LetsConnect from "./components/LetsConnect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040C18]">
      <Navigation />
      <Hero />
      <AboutMe />
      <Education />
      <Projects />
      <MoreAboutMe />
      <LetsConnect />
    </main>
  );
}
