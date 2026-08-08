import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import { PREMIUM_PACKAGE } from "@/lib/site-data";

export default function PremiumPackageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative max-w-3xl mx-auto"
      data-testid="card-premium-package"
    >
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-[#E8D5A3]/60 to-primary/40 blur-2xl opacity-60 rounded-lg" />

      <div className="relative bg-[#1A1512] text-[#FAF7F2] p-10 md:p-16 border border-primary/40 rounded-lg overflow-hidden">
        {/* Subtle shimmer edge */}
        <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-lg" />

        <div className="flex items-center gap-3 mb-6">
          <Crown className="text-primary" size={22} />
          <span className="text-[11px] uppercase tracking-[4px] text-primary font-medium">
            {PREMIUM_PACKAGE.tagline}
          </span>
        </div>

        <h3 className="font-serif text-4xl md:text-5xl font-light mb-6">{PREMIUM_PACKAGE.name}</h3>

        <p className="text-[#FAF7F2]/70 font-light leading-relaxed max-w-xl mb-10">
          {PREMIUM_PACKAGE.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {PREMIUM_PACKAGE.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-[#FAF7F2]/90 font-light">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pt-8 border-t border-[#FAF7F2]/10">
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-[#FAF7F2]/50 mb-2">Cena balíčku</p>
            <p className="font-serif text-4xl md:text-5xl text-primary">{PREMIUM_PACKAGE.price}</p>
          </div>
          <CtaButton href="/rezervace" testId="button-premium-rezervovat">
            Rezervovat balíček
          </CtaButton>
        </div>

        <p className="text-xs text-[#FAF7F2]/40 font-light italic mt-8 max-w-xl">
          {PREMIUM_PACKAGE.exclusiveNote}
        </p>
      </div>
    </motion.div>
  );
}
