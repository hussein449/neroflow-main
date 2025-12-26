import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShoppingCart, Headphones, FileText, Mail, Database } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Lead Qualification & Routing",
    description: "Automatically score, qualify, and route leads to the right sales rep based on custom criteria.",
    outcome: "40% faster response time",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Order Automation",
    description: "Handle orders, refunds, shipping updates, and inventory sync without manual intervention.",
    outcome: "85% reduction in order errors",
  },
  {
    icon: Headphones,
    title: "Support Triage & Response",
    description: "Smart ticket routing with auto-responses for common queries and seamless human handoff.",
    outcome: "70% tickets auto-resolved",
  },
  {
    icon: Mail,
    title: "Client Onboarding Sequences",
    description: "Orchestrate welcome emails, document collection, and account setup automatically.",
    outcome: "50% shorter onboarding time",
  },
  {
    icon: Database,
    title: "Data Sync & Reporting",
    description: "Keep systems in sync and generate real-time dashboards across your tech stack.",
    outcome: "100% data accuracy",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Example <span className="gradient-text">Automations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real-world automation solutions we've built for businesses like yours.
            </p>
          </div>
          <Link to="/use-cases">
            <Button variant="outline" className="group">
              View All Use Cases
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {useCase.description}
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Outcome</span>
                  <span className="text-sm font-medium text-primary">{useCase.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
