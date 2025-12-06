import { useState } from "react";
import { education } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, BookOpen, ChevronDown, FileText } from "lucide-react";

const Education = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          Formação Acadêmica
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Ícone e Linha do Tempo */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="hidden sm:block w-0.5 flex-1 bg-border mt-2" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  {/* Cabeçalho */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 break-words">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-primary font-semibold mb-2 sm:mb-3 break-words">
                      {edu.institution}
                    </p>

                    {/* Informações Adicionais */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      {edu.status && (
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="font-medium text-primary">
                            {edu.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descrição */}
                  {edu.description && (
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Disciplinas/Áreas de Foco */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="mt-3 sm:mt-4">
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botão Dropdown para Certificado */}
                  {edu.certificate && (
                    <div className="mt-4 sm:mt-6">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
                      >
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Ver Certificado</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? "max-h-[800px] mt-3 sm:mt-4" : "max-h-0"
                        }`}
                      >
                        <div className="border-2 border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 bg-muted/50">
                          <div className="flex justify-center">
                            <img
                              src={edu.certificate}
                              alt={`Certificado - ${edu.degree}`}
                              className="max-w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] rounded-lg shadow-md object-contain"
                            />
                          </div>
                          <div className="text-center mt-3 sm:mt-4">
                            <a
                              href={edu.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-primary hover:underline font-medium"
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