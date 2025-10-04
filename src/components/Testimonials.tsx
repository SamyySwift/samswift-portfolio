import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FinanceFlow Inc.",
      content: "The team delivered beyond our expectations. Our platform now handles millions of transactions daily with zero downtime. Their technical expertise and attention to detail are unmatched.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "CTO, ShopConnect",
      content: "From concept to launch, the process was seamless. They transformed our vision into a scalable marketplace that has become the backbone of our business.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Emily Rodriguez",
      role: "Director, HealthTech Solutions",
      content: "Security and compliance were critical for our healthcare platform. The team's expertise in HIPAA requirements and their commitment to excellence gave us confidence throughout.",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Loved by{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-muted"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
