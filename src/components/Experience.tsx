import { experience } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
                    Experiência Profissional
                </h2>

                <div className="space-y-4 sm:space-y-6">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                {/* Ícone e Linha do Tempo */}
                                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <div className="hidden sm:block w-0.5 flex-1 bg-border mt-2" />
                                </div>

                                {/* Conteúdo */}
                                <div className="flex-1 min-w-0">
                                    {/* Cabeçalho */}
                                    <div className="mb-3 sm:mb-4">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 break-words">
                                            {exp.role}
                                        </h3>
                                        <p className="text-base sm:text-lg text-primary font-semibold mb-2 sm:mb-3 break-words">
                                            {exp.company}
                                        </p>

                                        {/* Informações Adicionais */}
                                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                <span>{exp.period}</span>
                                            </div>
                                            {exp.location && (
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Descrição */}
                                    {exp.description && (
                                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                                            {exp.description}
                                        </p>
                                    )}

                                    {/* Highlights / Responsabilidades */}
                                    {exp.highlights && exp.highlights.length > 0 && (
                                        <div className="mt-3 sm:mt-4">
                                            <div className="flex flex-col gap-2">
                                                {exp.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tecnologias Utilizadas */}
                                    {exp.technologies && exp.technologies.length > 0 && (
                                        <div className="mt-4 sm:mt-6">
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2.5 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
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

export default Experience;
