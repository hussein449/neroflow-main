import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Cog, Users, BarChart3, Check, X } from "lucide-react";

const pillars = [
  {
    icon: DollarSign,
    title: "Revenue Systems",
    description: "Automation that directly impacts your top line—from lead generation to deal closure and beyond.",
    automations: [
      "Lead scoring and qualification workflows",
      "Sales pipeline automation and alerts",
      "Quote generation and approval routing",
      "Contract and proposal automation",
    ],
  },
  {
    icon: Cog,
    title: "Operational Efficiency",
    description: "Streamline internal processes to reduce costs and free up your team for high-value work.",
    automations: [
      "Invoice processing and reconciliation",
      "Inventory and supply chain sync",
      "Employee onboarding workflows",
      "Vendor management automation",
    ],
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Deliver exceptional service at scale with intelligent automation that feels personal.",
    automations: [
      "Support ticket triage and routing",
      "Automated response for common queries",
      "Customer onboarding sequences",
      "Feedback collection and analysis",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description: "Turn scattered data into actionable insights with automated collection and visualization.",
    automations: [
      "Cross-platform data synchronization",
      "Real-time dashboard generation",
      "Automated report distribution",
      "Alert systems for key metrics",
    ],
  },
];

const comparison = {
  traditional: [
    "Manual data entry across multiple systems",
    "Inconsistent follow-up on leads and tickets",
    "Delayed reporting and blind spots",
    "High error rates in repetitive tasks",
    "Team burnout from tedious work",
  ],
  automated: [
    "Data flows seamlessly between systems",
    "Every lead and ticket handled on time",
    "Real-time visibility into operations",
    "Near-zero errors in automated processes",
    "Team focused on strategic initiatives",
  ],
};

export default function Solutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* changed: center align + center the block */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Automation Across Your{" "}
              <span className="gradient-text">Entire Business Stack</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              We don't just automate tasks. We redesign processes for maximum
              efficiency. From revenue operations to customer experience, our
              solutions span every critical function.
            </p>

            <Link to="/contact" className="inline-flex">
              <Button variant="hero" size="lg" className="group">
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {pillar.automations.map((automation) => (
                    <li
                      key={automation}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-card/30">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The <span className="gradient-text">Neroflow</span> Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how automation transforms every aspect of your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <div className="glass-card p-8 border-destructive/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                Traditional Way
              </h3>
              <ul className="space-y-4">
                {comparison.traditional.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Automated */}
            <div className="glass-card p-8 border-primary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                Neroflow Automated
              </h3>
              <ul className="space-y-4">
                {comparison.automated.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's identify the automation opportunities that will have the
            biggest impact on your business.
          </p>
          <Link to="/contact" className="inline-flex">
            <Button variant="hero" size="xl" className="group">
              Start the Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
