import { TrendingDown, Zap, Clock, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    title: "Reduce Manual Work by 60%",
    description: "Eliminate repetitive tasks that drain your team's time. Redirect human effort toward high-value activities that grow your business.",
    metric: "60% less manual processing",
  },
  {
    icon: Zap,
    title: "Shorten Your Sales Cycle",
    description: "Automate lead qualification, follow-ups, and handoffs. Convert prospects to customers faster with zero dropped leads.",
    metric: "40% faster deal closure",
  },
  {
    icon: Clock,
    title: "Cut Support Backlog",
    description: "Intelligent routing and auto-responses handle common queries instantly. Your team focuses on complex issues that matter.",
    metric: "70% faster first response",
  },
  {
    icon: ShieldCheck,
    title: "Eliminate Process Errors",
    description: "Automated workflows execute consistently every time. No more human error in critical business operations.",
    metric: "95% error reduction",
  },
];

export function OutcomesSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Sell <span className="gradient-text">Outcomes</span>, Not Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every automation we build ties directly to your business KPIs. 
            No buzzwords—just measurable results.
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <outcome.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {outcome.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {outcome.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
