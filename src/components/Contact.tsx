import { contactInfo } from "@/data/portfolioData";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const phoneNumber = '5551998942175'

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          Entre em Contato
        </h2>

        <div className="bg-card rounded-xl p-6 sm:p-8 md:p-12 shadow-lg border border-border">
          <p className="text-center text-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 px-2">
            Vamos trabalhar juntos? Entre em contato comigo através dos canais abaixo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
            <Button
              variant="outline"
              className="h-auto py-3 sm:py-4 flex items-center justify-start gap-3 sm:gap-4 border-border hover:border-primary hover:bg-secondary text-left"
              onClick={() => window.open(`mailto:${contactInfo.email}`)}
            >
              <div className="bg-primary/10 rounded-full p-2 sm:p-2.5 md:p-3 flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">Email</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{contactInfo.email}</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-3 sm:py-4 flex items-center justify-start gap-3 sm:gap-4 border-border hover:border-primary hover:bg-secondary"
              onClick={() => window.open(contactInfo.linkedin, "_blank")}
            >
              <div className="bg-primary/10 rounded-full p-2 sm:p-2.5 md:p-3 flex-shrink-0">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">LinkedIn</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground">Conectar</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-3 sm:py-4 flex items-center justify-start gap-3 sm:gap-4 border-border hover:border-primary hover:bg-secondary"
              onClick={() => window.open(contactInfo.github, "_blank")}
            >
              <div className="bg-primary/10 rounded-full p-2 sm:p-2.5 md:p-3 flex-shrink-0">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">GitHub</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground">Seguir</p>
              </div>
            </Button>

            {contactInfo.phone && (
              <Button
                variant="outline"
                className="h-auto py-3 sm:py-4 flex items-center justify-start gap-3 sm:gap-4 border-border hover:border-primary hover:bg-secondary"
                onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá!`, "_blank")}
              >
                <div className="bg-primary/10 rounded-full p-2 sm:p-2.5 md:p-3 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">Whatsapp</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{contactInfo.phone}</p>
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;