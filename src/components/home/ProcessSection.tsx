import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Deep dive into your operations. Map workflows, identify bottlenecks, and quantify the impact of inefficiencies on your bottom line.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Architect automation solutions tailored to your business. Define success metrics, build prototypes, and validate with your team.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implement",
    description: "Deploy automation in controlled phases. Test rigorously, train your team, and ensure seamless integration with existing systems.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Optimize",
    description: "Monitor performance against KPIs. Continuously refine and expand automation to maximize ROI over time.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="gradient-text">Neroflow</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms complex operations into 
            streamlined, automated systems.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-display">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
