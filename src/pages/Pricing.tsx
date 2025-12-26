import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Rocket, RefreshCw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "Deep dive into your operations to identify high-impact automation opportunities and build a strategic roadmap.",
    features: [
      "Comprehensive operations audit",
      "Workflow mapping and analysis",
      "Automation opportunity scoring",
      "ROI projections for top opportunities",
      "Strategic implementation roadmap",
      "Executive presentation",
    ],
    duration: "2-4 weeks",
    cta: "Start Discovery",
  },
  {
    icon: Rocket,
    title: "Implementation Sprint",
    description:
      "Focused execution to design, build, and deploy specific automation solutions with measurable outcomes.",
    features: [
      "Solution architecture and design",
      "Custom automation development",
      "Integration with existing systems",
      "Testing and quality assurance",
      "Team training and documentation",
      "30-day post-launch support",
    ],
    duration: "4-8 weeks per sprint",
    cta: "Plan a Sprint",
    popular: true,
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimization",
    description:
      "Continuous partnership to monitor, maintain, and expand your automation ecosystem over time.",
    features: [
      "Performance monitoring and reporting",
      "Proactive maintenance and updates",
      "Continuous improvement iterations",
      "New automation development",
      "Priority support access",
      "Quarterly strategy reviews",
    ],
    duration: "Monthly retainer",
    cta: "Discuss Retainer",
  },
];

const faqs = [
  {
    question: "How long does a typical automation project take?",
    answer:
      "It depends on complexity. A simple workflow automation might take 2-3 weeks, while a comprehensive system redesign could span 2-3 months. We'll provide clear timelines after the Discovery phase.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "We're tool-agnostic and work with a wide range of platforms including Zapier, Make, n8n, custom API integrations, CRMs (Salesforce, HubSpot), ERPs, and more. We select tools based on your needs, not vendor relationships.",
  },
  {
    question: "Do we need technical expertise on our team?",
    answer:
      "No. We handle all technical implementation. That said, we'll train your team to manage and make basic adjustments to automations. For complex changes, we're always available.",
  },
  {
    question: "What happens after the project is complete?",
    answer:
      "You own everything we build. We provide comprehensive documentation and training. Many clients continue with our Ongoing Optimization retainer for continuous improvement and support.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We define clear KPIs before starting. Metrics like time saved, error reduction, revenue impact, or customer satisfaction. We track and report on these throughout the engagement.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We specialize in connecting disparate systems. Whether it's legacy software, modern SaaS, or custom applications, we'll find a way to make them work together seamlessly.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer project-based pricing for Discovery and Implementation, and monthly retainers for Ongoing Optimization. Pricing is custom based on scope, complexity, and your business context. We'll provide detailed proposals after an initial consultation.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Engagement <span className="gradient-text">Models</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible engagement options designed to meet you where you are.
              From initial discovery to ongoing partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding pt-8">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* added overflow-visible in case a parent was clipping */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`glass-card p-8 relative overflow-visible hover:-translate-y-1 transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full whitespace-nowrap leading-none">
                    Most Popular
                  </div>
                )}

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <pkg.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>

                <div className="text-sm text-primary font-medium mb-6">
                  Duration: {pkg.duration}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    className="w-full group"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            All pricing is custom based on scope and complexity. Contact us for a
            detailed proposal.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with Neroflow.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a strategy call to discuss your needs and explore how Neroflow
            can help you achieve your automation goals.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
