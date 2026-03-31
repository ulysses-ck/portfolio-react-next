import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LandingBackground from "@/components/landing-background";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <LandingBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
