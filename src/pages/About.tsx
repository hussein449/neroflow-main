import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Wrench, Users, Repeat, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcomes First",
    description: "We start with the business result you need, then work backwards to design the right automation. Technology is a means, not an end.",
  },
  {
    icon: Wrench,
    title: "Tool Agnostic",
    description: "We're not loyal to any vendor. We select and combine the best tools for your specific needs, budget, and existing tech stack.",
  },
  {
    icon: Users,
    title: "Embedded Partnership",
    description: "We work alongside your team, not in isolation. Knowledge transfer and capability building are part of every engagement.",
  },
];

const approach = [
  {
    icon: Lightbulb,
    title: "Strategy Before Tools",
    description: "Before touching any technology, we deeply understand your operations, goals, and constraints. The right strategy makes implementation 10x easier.",
  },
  {
    icon: Repeat,
    title: "Iterative Design",
    description: "We build in phases, not big bangs. Each iteration delivers value while learning informs the next. This reduces risk and accelerates ROI.",
  },
  {
    icon: Handshake,
    title: "Your Team, Enabled",
    description: "We don't create black boxes. Every automation comes with documentation, training, and the knowledge your team needs to own it.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* changed: center align + center the block */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why <span className="gradient-text">Neroflow</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              Neroflow Consulting was founded on a simple belief: automation should
              serve business strategy, not the other way around.
            </p>

            <p className="text-lg text-muted-foreground">
              Too many companies chase automation for automation's sake,
              implementing flashy technology without clear outcomes. We're
              different. We combine business consulting rigor with automation
              engineering expertise to deliver solutions that actually move your
              KPIs.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-card/30">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with clients to ensure success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="glass-card p-8 h-full hover:-translate-y-1 transition-all duration-300">
                  <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex items-center justify-center font-display">
                    {index + 1}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-50" />
            <div className="relative z-10">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
                "We believe every business deserves operations that scale without
                friction. That's why we exist—to make automation accessible,
                strategic, and outcome-driven."
              </p>
              <div className="line-gradient" />
              <p className="font-display text-primary italic text-lg mt-8">
                — The Neroflow Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Build Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to see how Neroflow can transform your operations? Start with a
            strategy conversation.
          </p>
          <Link to="/contact" className="inline-flex">
            <Button variant="hero" size="xl" className="group">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
