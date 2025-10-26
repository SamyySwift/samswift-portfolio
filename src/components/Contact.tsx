import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Let's Work{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Book a free consultation and let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 animate-fade-in">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="web-development">Web Development</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project and what you're looking to achieve..."
                    rows={6}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity group"
                >
                  Book Consultation
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border">
                <h3 className="font-display font-semibold text-xl mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Email</div>
                      <a 
                        href="mailto:hello@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Phone</div>
                      <a 
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Location</div>
                      <p className="text-muted-foreground">
                        Remote / Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-2">AI Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent workflows, chatbots, and process automation
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Predictive models, data analysis, and ML solutions
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack applications with modern frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
