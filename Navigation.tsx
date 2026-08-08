import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_ITEMS } from "@/lib/site-data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  // Zavřít mobilní menu při každé změně stránky.
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Na podstránkách (bez plnoformátového hero pozadí) je hlavička vždy "scrolled".
  const isHome = location === "/";
  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        solid ? "glass shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 max-w-[1400px] mx-auto">
        <Link href="/" className="group shrink-0" data-testid="link-logo">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] uppercase tracking-[2.5px] transition-all duration-300 hover:text-primary font-medium ${
                location === item.href ? "text-primary" : solid ? "text-foreground/80" : "text-white/90"
              }`}
              data-testid={`nav-${item.href.replace("/", "") || "domu"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rezervace"
            className="px-6 py-3 text-[10px] uppercase tracking-[2.5px] font-semibold bg-primary text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            data-testid="button-rezervovat-termin"
          >
            Rezervovat termín
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              solid ? "border-foreground/20 text-foreground" : "border-white/30 text-white"
            }`}
            data-testid="button-menu-toggle"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-4">
          <Link
            href="/rezervace"
            className="hidden sm:block px-4 py-2.5 text-[10px] uppercase tracking-[2px] font-semibold bg-primary text-white"
            data-testid="button-mobile-rezervovat"
          >
            Rezervovat
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 flex items-center justify-center border ${
              solid ? "border-foreground/20 text-foreground" : "border-white/30 text-white"
            }`}
            data-testid="button-mobile-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Rozbalovací menu — světlé pozadí, tmavý (černý) text pro dobrou čitelnost */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
      >
        <div className="bg-white border-t border-border px-8 py-8 flex flex-col items-center gap-6 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl font-serif transition-colors ${
                location === item.href ? "text-primary" : "text-[#1A1512] hover:text-primary"
              }`}
              data-testid={`nav-mobile-${item.href.replace("/", "") || "domu"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rezervace"
            className="mt-2 px-10 py-3.5 text-[11px] uppercase tracking-[2.5px] font-semibold bg-primary text-white w-full max-w-xs text-center"
          >
            Rezervovat termín
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
