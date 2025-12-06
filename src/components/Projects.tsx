import { projects } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg sm:rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">
                  {project.name}
                </h3>
                
                <p className="text-foreground/80 text-sm leading-relaxed mb-3 sm:mb-4 flex-1 text-justify">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.websiteUrl && (
                  <a 
                    href={project.websiteUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mb-2 sm:mb-3 flex justify-center group cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 sm:gap-2 text-secondary-foreground text-xs sm:text-sm hover:text-primary transition-colors">
                      Acessar
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                )}

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base h-9 sm:h-10"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Ver no GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;