import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="section-padding pt-24 lg:pt-32 min-h-[70vh] flex items-center">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="font-display text-8xl sm:text-9xl font-bold gradient-text">
              404
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg" className="group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
