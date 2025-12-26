import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OutcomesSection />
      <ProcessSection />
      <UseCasesSection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
