import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PremiumPackageCard from "@/components/PremiumPackageCard";
import { PRICING } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Investice do krásy</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light">Ceník služeb</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {PRICING.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border py-2 px-4 group data-[state=open]:bg-secondary/20 transition-colors duration-500"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex w-full justify-between items-center pr-4">
                    <span className="font-serif text-xl md:text-3xl text-foreground font-light group-data-[state=open]:text-primary transition-colors">
                      {item.service}
                    </span>
                    <span className="text-[13px] md:text-[15px] uppercase tracking-[2px] font-medium text-foreground/80 group-data-[state=open]:text-primary transition-colors">
                      {item.price}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-muted-foreground font-light text-base leading-relaxed max-w-2xl pl-2 border-l-2 border-primary/30">
                    {item.details}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-[11px] uppercase tracking-[4px] text-primary font-medium mb-10"
        >
          Nejoblíbenější volba
        </motion.p>
        <PremiumPackageCard />
      </div>
    </section>
  );
}
