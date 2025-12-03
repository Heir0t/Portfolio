import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Technologies />
      <Education />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
