import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 sm:p-12 lg:p-16 text-center">
          {/* Decorative Line */}
          <div className="line-gradient mb-8" />

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Automate Your Growth?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how strategic automation can transform your operations 
            and drive measurable business outcomes.
          </p>

          <p className="font-display text-primary italic text-lg mb-8">
            "where business meet automation"
          </p>

          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Book a Strategy Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Decorative Line */}
          <div className="line-gradient mt-8" />
        </div>
      </div>
    </section>
  );
}
