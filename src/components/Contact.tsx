import { contactInfo } from "@/data/portfolioData";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const phoneNumber = '5551998942175'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Entre em Contato
        </h2>

        <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
          <p className="text-center text-foreground/80 text-lg mb-8">
            Vamos trabalhar juntos? Entre em contato comigo através dos canais abaixo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button
              variant="outline"
              className="h-auto py-4 flex items-center justify-start gap-4 border-border hover:border-primary hover:bg-secondary"
              onClick={() => window.open(`mailto:${contactInfo.email}`)}
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="text-sm font-semibold text-foreground">{contactInfo.email}</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-4 flex items-center justify-start gap-4 border-border hover:border-primary hover:bg-secondary"
              onClick={() => window.open(contactInfo.linkedin, "_blank")}
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-sm font-semibold text-foreground">Conectar</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-4 flex items-center justify-start gap-4 border-border hover:border-primary hover:bg-secondary"
              onClick={() => window.open(contactInfo.github, "_blank")}
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-1">GitHub</p>
                <p className="text-sm font-semibold text-foreground">Seguir</p>
              </div>
            </Button>

            {contactInfo.phone && (
              <Button
                variant="outline"
                className="h-auto py-4 flex items-center justify-start gap-4 border-border hover:border-primary hover:bg-secondary"
                onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá!`, "_blank")}
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-1">Whatsapp</p>
                  <p className="text-sm font-semibold text-foreground">{contactInfo.phone}</p>
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
