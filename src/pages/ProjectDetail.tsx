import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              asChild
              className="mb-8 -ml-2 hover:bg-muted"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            {/* Hero Image */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 animate-fade-in">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Header */}
            <div className="space-y-6 mb-12 animate-fade-in-up">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  {project.industry}
                </Badge>
                {project.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>

              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.summary}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Start Your Project</a>
                </Button>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 animate-fade-in">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border"
                  >
                    <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <section className="animate-fade-in">
                  <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
                    The Challenge
                  </h2>
                  <ul className="space-y-4">
                    {project.challenge.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-destructive" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Solution */}
                <section
                  className="animate-fade-in"
                  style={{ animationDelay: "100ms" }}
                >
                  <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
                    Our Solution
                  </h2>
                  <ul className="space-y-4">
                    {project.solution.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <div className="p-8 rounded-2xl bg-card border border-border animate-fade-in">
                  <h3 className="font-display font-semibold text-xl mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Facts */}
                <div
                  className="p-8 rounded-2xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: "100ms" }}
                >
                  <h3 className="font-display font-semibold text-xl mb-4">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground mb-1">
                        Industry
                      </dt>
                      <dd className="font-medium text-foreground">
                        {project.industry}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground mb-1">
                        Year
                      </dt>
                      <dd className="font-medium text-foreground">
                        {project.year}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <section className="mt-20 pt-16 border-t border-border">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">
                More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.id}`}
                      className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.summary}
                      </p>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
