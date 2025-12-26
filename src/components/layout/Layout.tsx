// Layout.tsx
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background layer should never block clicks */}
      <div className="absolute inset-0 pointer-events-none -z-10" />

      <Navbar />

      {/* Cleanest fix: no z-index here, so it can't sit above the Navbar */}
      <main className="flex-1 pt-16 lg:pt-20 relative">
        {children}
      </main>

      <Footer />
    </div>
  );
}
