import { technologies } from "@/data/portfolioData";

const Technologies = () => {
  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          Tecnologias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-2 sm:gap-3 border border-border"
            >
              {/* Renderiza a imagem PNG se existir */}
              {tech.image && (
                <img 
                  src={tech.image} 
                  alt={`${tech.name} logo`}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              )}
              
              {/* Fallback para emoji se não houver imagem */}
              {!tech.image && tech.icon && (
                <span className="text-3xl sm:text-4xl">{tech.icon}</span>
              )}
              
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;