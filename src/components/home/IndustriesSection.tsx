import { ShoppingBag, Code, Briefcase, Truck, Heart, Building } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Code, name: "SaaS" },
  { icon: Briefcase, name: "Agencies" },
  { icon: Truck, name: "Logistics" },
  { icon: Heart, name: "Healthcare" },
  { icon: Building, name: "Real Estate" },
];

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fast-growing startups to established enterprises, we've automated 
            operations across diverse sectors.
          </p>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300 group"
            >
              <industry.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
