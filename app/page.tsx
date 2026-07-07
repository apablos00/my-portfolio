import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechProjects from "./components/TechProjects";
import BizProjects from "./components/BizProjects";
import Education from "./components/Education";
import MeInPictures from "./components/MeInPictures";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040C18]">
      <Navigation />
      <Hero />
      <AboutMe />
      <TechProjects />
      <BizProjects />
      <Education />
      <MeInPictures />
    </main>
  );
}
