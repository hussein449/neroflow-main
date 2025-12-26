import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdrqeno";
const CALENDAR_URL = "https://calendly.com/neroflow-ai/strategy-call";

const revenueRanges = [
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K - $1M" },
  { value: "1m-5m", label: "$1M - $5M" },
  { value: "5m-10m", label: "$5M - $10M" },
  { value: "10m-plus", label: "$10M+" },
];

const referralSources = [
  { value: "google", label: "Google Search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral" },
  { value: "social", label: "Social Media" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [revenue, setRevenue] = useState<string>("");
  const [source, setSource] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      formData.set("revenue", revenue || "");
      formData.set("source", source || "");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Form submission failed");

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setRevenue("");
      setSource("");
    } catch {
      toast({
        title: "Message not sent",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* If any global overlay exists, it will not block clicks */}
      <div className="absolute inset-0 pointer-events-none -z-10" />

      <Navbar />

      {/* Inline style is the hard override. This fixes cases where .glass-card or other CSS sets pointer-events:none */}
      <main
        className="flex-1 pt-16 lg:pt-20 relative"
        style={{ pointerEvents: "auto" }}
      >
        {/* Hero */}
        <section className="section-padding pt-24 lg:pt-32">
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's <span className="gradient-text">Talk</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your operations? Tell us about your business and automation goals. We'll
                respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding pt-8">
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="glass-card p-8 sm:p-10" style={{ pointerEvents: "auto" }}>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          required
                          className="bg-secondary/50 border-border/50"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="bg-secondary/50 border-border/50"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Company Name"
                          required
                          className="bg-secondary/50 border-border/50"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Input
                          id="role"
                          name="role"
                          placeholder="CEO, COO, VP Operations..."
                          required
                          className="bg-secondary/50 border-border/50"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Monthly Revenue Range</Label>
                        <Select value={revenue} onValueChange={setRevenue}>
                          <SelectTrigger
                            className="bg-secondary/50 border-border/50"
                            style={{ pointerEvents: "auto" }}
                          >
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999]" style={{ pointerEvents: "auto" }}>
                            {revenueRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>How did you hear about us?</Label>
                        <Select value={source} onValueChange={setSource}>
                          <SelectTrigger
                            className="bg-secondary/50 border-border/50"
                            style={{ pointerEvents: "auto" }}
                          >
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999]" style={{ pointerEvents: "auto" }}>
                            {referralSources.map((s) => (
                              <SelectItem key={s.value} value={s.value}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problem">What's your main operational challenge? *</Label>
                      <Textarea
                        id="problem"
                        name="problem"
                        placeholder="Describe the processes you'd like to automate, pain points you're experiencing, or goals you want to achieve..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-border/50 resize-none"
                        style={{ pointerEvents: "auto" }}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      style={{ pointerEvents: "auto" }}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-card p-8" style={{ pointerEvents: "auto" }}>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:neroflow.ai@gmail.com"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          neroflow.ai@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground">-Lebanon: 70899830</p>
                        <p className="text-foreground">-Cyprus: 95152082</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Remote, Global</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8" style={{ pointerEvents: "auto" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Schedule Directly
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    Prefer to book a specific time? Use our calendar to schedule a 30-minute strategy call.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    type="button"
                    onClick={openCalendar}
                    style={{ pointerEvents: "auto" }}
                  >
                    Open Calendar
                  </Button>
                </div>

                <div
                  className="p-6 rounded-xl bg-primary/5 border border-primary/20"
                  style={{ pointerEvents: "auto" }}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary font-medium">Response time:</span>{" "}
                    We typically respond within 24 hours on business days. For urgent inquiries, please
                    mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
