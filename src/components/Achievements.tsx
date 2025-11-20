import { achievements } from "@/data/portfolioData";
import { Award } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Participações e Premiações
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
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
              <p className="text-foreground/80 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
