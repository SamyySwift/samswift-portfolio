import { Code2, Users, Rocket, Award } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Code2,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest frameworks and tools to build scalable, performant applications.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our diverse team of designers, developers, and strategists brings decades of combined experience.",
    },
    {
      icon: Rocket,
      title: "Agile Process",
      description: "Fast iterations, continuous delivery, and transparent communication throughout the project lifecycle.",
    },
    {
      icon: Award,
      title: "Award-Winning Work",
      description: "Recognized by industry leaders for excellence in design, innovation, and user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just developers—we're digital craftsmen obsessed with creating 
              exceptional experiences that drive business results.
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
              Our Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", description: "Understanding your vision and goals" },
                { step: "02", title: "Design", description: "Crafting beautiful, user-centric interfaces" },
                { step: "03", title: "Develop", description: "Building with best practices and modern tech" },
                { step: "04", title: "Deliver", description: "Launching and optimizing for success" },
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
