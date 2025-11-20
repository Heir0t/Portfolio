import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-foreground">Portfólio</h2>
        
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Tecnologias
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experiência
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Participações
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </button>
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Entre em Contato
        </Button>
      </nav>
    </header>
  );
};

export default Header;
