import { Brain, Code2, Zap, Trophy } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Automation",
      description: "Building intelligent systems that automate complex workflows and enhance decision-making.",
    },
    {
      icon: Code2,
      title: "Machine Learning",
      description: "Developing predictive models and data-driven solutions that deliver actionable insights.",
    },
    {
      icon: Zap,
      title: "Web Development",
      description: "Creating high-performance, responsive web applications with modern frameworks and best practices.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Delivering projects that exceed expectations with measurable impact and lasting value.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              What I{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Do
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a full-stack engineer specializing in AI/ML solutions and modern web development. 
              My passion is transforming complex challenges into elegant, scalable systems.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-border">
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">
              My Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Understand", description: "Deep dive into your requirements and goals" },
                { step: "02", title: "Strategize", description: "Design the optimal solution architecture" },
                { step: "03", title: "Build", description: "Develop with clean code and best practices" },
                { step: "04", title: "Optimize", description: "Test, refine, and deliver excellence" },
              ].map((phase, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="font-display font-bold text-4xl text-primary/30 mb-2">
                    {phase.step}
                  </div>
                  <h4 className="font-display font-semibold text-lg text-foreground">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
