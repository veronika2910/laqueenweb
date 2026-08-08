import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import CtaButton from "@/components/CtaButton";
import { SERVICES } from "@/lib/site-data";

type ServicesProps = { limit?: number; showHeading?: boolean };

export default function Services({ limit, showHeading = true }: ServicesProps) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-14 md:mb-16"
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Naše služby</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light leading-tight max-w-2xl mx-auto">
              Vše pro váš velký den. <br className="hidden md:block" />
              <span className="text-muted-foreground italic">Žádné běhání po městě.</span>
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {limit && limit < SERVICES.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <CtaButton href="/sluzby" variant="outline" testId="button-vsechny-sluzby">
              Zobrazit všechny služby
            </CtaButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
