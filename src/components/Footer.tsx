import { profileInfo } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} {profileInfo.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
