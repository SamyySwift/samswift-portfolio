import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Footer from "@/components/Footer";
import { projects, industries, technologies, years } from "@/data/projects";

const Projects = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const industryMatch = selectedIndustry === "all" || project.industry === selectedIndustry;
      const techMatch = selectedTechnology === "all" || project.technologies.includes(selectedTechnology);
      const yearMatch = selectedYear === "all" || project.year.toString() === selectedYear;
      return industryMatch && techMatch && yearMatch;
    });
  }, [selectedIndustry, selectedTechnology, selectedYear]);

  const clearFilters = () => {
    setSelectedIndustry("all");
    setSelectedTechnology("all");
    setSelectedYear("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the full spectrum of our work—from Fortune 500 enterprises to 
              innovative startups transforming their industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Filters */}
            <ProjectFilter
              industries={industries}
              technologies={technologies}
              years={years}
              selectedIndustry={selectedIndustry}
              selectedTechnology={selectedTechnology}
              selectedYear={selectedYear}
              onIndustryChange={setSelectedIndustry}
              onTechnologyChange={setSelectedTechnology}
              onYearChange={setSelectedYear}
              onClearFilters={clearFilters}
            />

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">
                  No projects found matching your filters.
                </div>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
