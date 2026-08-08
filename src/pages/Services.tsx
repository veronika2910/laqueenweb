import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Služby"
        description="Svatební a společenské šaty, modeláž nehtů, prodloužení řas, líčení a účesy — kompletní nabídka služeb salonu LaQueen v Boskovicích."
      />

      <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-14 md:mb-16"
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Naše služby</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light leading-tight max-w-2xl mx-auto">
              Vše pro váš velký den. <br className="hidden md:block" />
              <span className="text-muted-foreground italic">Pod jednou střechou.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
