import React, { useState } from 'react';
import { achievements } from "@/data/portfolioData";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const Achievements = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Participações e Premiações
        </h2>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden md:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const isExpanded = expandedIndex === index;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Ponto na linha do tempo (desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                  {/* Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:ml-0' : 'md:ml-auto'}`}>
                    <div className="bg-card rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                            <Award className="w-6 h-6 text-primary" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {achievement.title}
                            </h3>
                            <p className="text-primary font-semibold text-sm">
                              {achievement.event}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                              {achievement.year}
                            </span>
                          </div>
                        </div>

                        {/* Descrição */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {achievement.description}
                        </p>

                        {/* Botão de expandir */}
                        {achievement.image && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="flex items-center gap-2 text-blue-600 font-medium text-sm transition-colors w-full justify-center py-2 mt-2"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Ocultar imagem
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Ver imagem
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Imagem expandida */}
                      {achievement.image && isExpanded && (
                        <div className="px-6 pb-6 pt-2">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-64 object-cover rounded-lg border border-slate-200 shadow-md"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;