import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full shadow-card hover:shadow-glow">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
          
          {/* Link Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{project.client}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{project.year}</span>
              </div>
            </div>
            <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="text-muted-foreground line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {project.industry}
            </Badge>
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {project.metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-display font-bold text-lg text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
