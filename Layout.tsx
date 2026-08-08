import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-background min-h-[100dvh] font-sans selection:bg-primary/30 selection:text-foreground">
      <ScrollToTop />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
