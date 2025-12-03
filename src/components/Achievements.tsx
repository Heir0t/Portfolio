import React, { useState } from 'react';
import { achievements } from "@/data/portfolioData";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const Achievements = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Participações e Premiações
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300 min-h-[210px]"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">{achievement.event}</p>
                    <span className="text-muted-foreground text-xs">{achievement.year}</span>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.image && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    {expandedIndex === index ? (
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

              {/* Dropdown com imagem */}
              {achievement.image && expandedIndex === index && (
                <div className="px-6 pb-6">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover rounded-lg border border-border"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;