import { technologies } from "@/data/portfolioData";

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Tecnologias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 border border-border"
            >
              <span className="text-4xl">{tech.icon}</span>
              <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
