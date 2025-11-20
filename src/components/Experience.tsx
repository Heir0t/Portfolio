import { experiences } from "@/data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Experiência Profissional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0 text-sm md:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
