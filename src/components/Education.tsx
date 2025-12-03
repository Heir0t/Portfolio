import { useState } from "react";
import { education } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, BookOpen, ChevronDown, FileText } from "lucide-react";

const Education = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Formação Acadêmica
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Ícone e Linha do Tempo */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                    <div className="hidden md:block w-0.5 flex-1 bg-border mt-2" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  {/* Cabeçalho */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      {edu.institution}
                    </p>

                    {/* Informações Adicionais */}
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      {edu.status && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium text-primary">
                            {edu.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descrição */}
                  {edu.description && (
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Disciplinas/Áreas de Foco */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botão Dropdown para Certificado */}
                  {edu.certificate && (
                    <div className="mt-6">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <FileText className="w-5 h-5" />
                        <span>Ver Certificado</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? "max-h-[800px] mt-4" : "max-h-0"
                        }`}
                      >
                        <div className="border-2 border-border rounded-xl p-6 bg-muted/50">
                          <div className="flex justify-center">
                            <img
                              src={edu.certificate}
                              alt={`Certificado - ${edu.degree}`}
                              className="max-w-full h-auto max-h-[500px] rounded-lg shadow-md object-contain"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <a
                              href={edu.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline font-medium"
                            >
                              Abrir em nova aba →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;