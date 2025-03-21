import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
