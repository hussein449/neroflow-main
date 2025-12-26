import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Headphones,
  Mail,
  Database,
  Briefcase,
  Clock,
  Settings,
  ShoppingCart,
  Target,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", name: "All" },
  { id: "sales", name: "Sales" },
  { id: "support", name: "Support" },
  { id: "operations", name: "Operations" },
];

const useCases = [
  {
    icon: Users,
    category: "sales",
    title: "myoffice.lb. Outreach + Lead Qualification Bots",
    description:
      "We built outreach chatbots and an internal lead management flow. Bots qualify and classify leads, capture the right fields, route to the correct person, and keep the pipeline clean so sales stays focused on closing.",
    kpis: [
      "Lead response time",
      "Qualified lead rate",
      "Conversion rate",
      "Sales cycle length",
      "Pipeline visibility",
    ],
    outcomes: [
      "Faster replies to prospects, fewer missed opportunities.",
      "Cleaner lead classification and prioritization, less time wasted on low intent leads.",
      "Consistent follow-up, more booked calls from the same inbound volume.",
    ],
  },
  {
    icon: Mail,
    category: "sales",
    title: "Multi-Channel Outreach Automation",
    description:
      "Automated outreach sequences with personalized messaging and smart follow-ups. Engagement signals trigger next steps automatically, and the team gets notified only when a prospect is ready to talk.",
    kpis: ["Open rate", "Reply rate", "Meetings booked", "Pipeline generated"],
    outcomes: [
      "Higher reply rates with fewer manual follow-ups.",
      "A scalable outbound process without adding headcount.",
    ],
  },
  {
    icon: Headphones,
    category: "support",
    title: "myoffice.lb. Customer Support Chatbots",
    description:
      "Customer support bots that answer common questions, gather context, and escalate the right cases to humans with full conversation history, so agents stop starting from zero.",
    kpis: [
      "First response time",
      "Resolution time",
      "Ticket deflection rate",
      "Customer satisfaction",
    ],
    outcomes: [
      "Instant answers for repetitive questions, less load on the team.",
      "Better handoff to humans, fewer back-and-forth messages.",
    ],
  },
  {
    icon: Database,
    category: "operations",
    title: "realeastate.lb. Automated Data Collection + Listing Intelligence",
    description:
      "Automated data collection from multiple websites to keep listings, pricing, and market signals up to date. Chatbots help visitors find properties faster and capture serious leads with the right requirements.",
    kpis: [
      "Data freshness",
      "Manual hours saved",
      "Lead quality",
      "Time to match client needs",
    ],
    outcomes: [
      "Always up to date inventory without manual scraping work.",
      "Higher quality inbound leads with structured requirements captured by the bot.",
      "Faster property discovery experience, less drop-off.",
    ],
  },
  {
    icon: Settings,
    category: "operations",
    title: "AI Strategy Integration. Operations + Management Upgrade",
    description:
      "A business strategy refresh that integrates AI tools into daily operations and management. We map workflows, remove bottlenecks, automate decision support, and standardize how teams execute.",
    kpis: [
      "Cycle time reduction",
      "Operational cost",
      "Process consistency",
      "Team productivity",
      "Management visibility",
    ],
    outcomes: [
      "Execution becomes repeatable and less dependent on individuals.",
      "Fewer bottlenecks, faster delivery across teams.",
      "Clear visibility for management into work, performance, and priorities.",
    ],
  },
  {
    icon: Briefcase,
    category: "operations",
    title: "Euro Pharm. New Software Implementation + Department Workflow Redesign",
    description:
      "Implemented new software from scratch, reorganized department communication, and streamlined inventory workflows to reduce errors and improve accountability across teams.",
    kpis: [
      "Stock accuracy",
      "Stockout rate",
      "Reorder cycle time",
      "Inter-department handoff time",
      "Operational error rate",
    ],
    outcomes: [
      "Cleaner communication between departments, fewer delays and misunderstandings.",
      "Inventory is visible and controlled, fewer stockouts and less waste.",
      "Smoother day-to-day operations with clear ownership.",
    ],
  },
  {
    icon: ShoppingCart,
    category: "operations",
    title: "ZAR Beauty. Support Chatbot + Inventory Planning",
    description:
      "Customer support chatbot integrations combined with an inventory planning approach. Reduced repetitive support load while improving stock planning to match demand.",
    kpis: [
      "Support response time",
      "Ticket deflection rate",
      "Stock availability",
      "Forecast accuracy",
      "Inventory turnover",
    ],
    outcomes: [
      "Support team focuses on real issues, bot handles repetitive requests.",
      "Fewer out of stock situations and better purchasing decisions.",
    ],
  },
  {
    icon: Database,
    category: "operations",
    title: "Naserddine Electronics. Full Inventory Management System",
    description:
      "Designed and delivered a full inventory management system to track items, stock movements, and availability. Built to reduce loss, prevent errors, and keep purchasing aligned with real demand.",
    kpis: [
      "Inventory accuracy",
      "Shrinkage reduction",
      "Stockout rate",
      "Receiving time",
      "Audit time",
    ],
    outcomes: [
      "Reliable stock numbers, fewer mistakes in selling and purchasing.",
      "Faster audits and clearer tracking of movements.",
      "Better replenishment decisions and stronger availability control.",
    ],
  },
  {
    icon: Target,
    category: "operations",
    title: "Euro Pharm. Representative Tracking App + Per-Rep Inventory Management",
    description:
      "We developed a field app to track representatives, manage inventory per rep, and measure performance with clear KPIs. This connects field activity to stock movement and management reporting.",
    kpis: [
      "Visits completed per rep",
      "Order volume per rep",
      "Conversion rate per visit",
      "On-time reporting rate",
      "Stock variance per rep",
      "Return rate",
      "Days to replenish rep stock",
    ],
    outcomes: [
      "Full visibility into rep activity and outcomes, no guessing and no manual reporting gaps.",
      "Per-rep inventory control, fewer stock variances and missing items.",
      "Better forecasting and replenishment decisions based on real field data.",
    ],
    objectives: [
      "Track representative visits and customer interactions in one system.",
      "Manage per-rep stock allocation, transfers, returns, and reconciliation.",
      "Provide dashboards for managers. performance, inventory, and coverage.",
      "Standardize field reporting to improve accountability and decision making.",
    ],
  },

  // New use case: Social media full flow automation
  {
    icon: Share2,
    category: "operations",
    title: "Social Media Full-Flow Automation. Generate, Review, Post",
    description:
      "We built a workflow that takes a topic, generates an image and a caption, then lets you accept, edit, or regenerate. After approval, it automatically schedules or posts to your social media channels with no manual steps.",
    kpis: [
      "Content production time",
      "Posts per week",
      "Approval time",
      "Consistency of posting",
      "Engagement rate",
      "Cost per post",
    ],
    outcomes: [
      "Content creation becomes fast and repeatable, no creative bottleneck.",
      "Full control stays with you. you approve, edit, or regenerate before posting.",
      "More consistent posting, which improves reach and engagement over time.",
    ],
    objectives: [
      "Turn any topic into ready-to-publish content in minutes.",
      "Keep a human approval step to protect brand voice and quality.",
      "Automate publishing to remove manual posting work and reduce mistakes.",
    ],
  },

  {
    icon: Clock,
    category: "support",
    title: "SLA Monitoring & Escalation",
    description:
      "Track SLAs in real time, auto-escalate at risk cases, notify stakeholders, and generate reports. Keeps service reliable as volume grows.",
    kpis: ["SLA compliance", "Escalation time", "Customer retention"],
    outcomes: ["Fewer SLA breaches.", "Clear accountability and faster response."],
  },
];

export default function UseCases() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => activeFilter === "all" || uc.category === activeFilter);
  }, [activeFilter]);

  const categoryLabel = useMemo(() => {
    const match = filters.find((f) => f.id === activeFilter);
    return match ? match.name : "All";
  }, [activeFilter]);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Proven <span className="gradient-text">Automation Use Cases</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real implementations across sales, support, and operations. Built to improve speed, accuracy,
              and visibility. Our strategies work because AI is integrated into daily operations and
              management, not added as a gimmick.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{categoryLabel}</span> use cases.
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding pt-8">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className="glass-card p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {useCase.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground break-words">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {useCase.description}
                </p>

                {useCase.outcomes?.length ? (
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                      Results After Implementation
                    </span>
                    <ul className="space-y-2">
                      {useCase.outcomes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {useCase.objectives?.length ? (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Objectives
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {useCase.objectives.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    KPIs Impacted
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {useCase.kpis.map((kpi) => (
                      <span
                        key={kpi}
                        className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Want Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We build systems that actually run the business better. AI is embedded into the workflows your
            team uses daily, with clear KPIs, ownership, and measurable operational improvements.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
