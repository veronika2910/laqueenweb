import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/site-data";

export default function FaqSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Máte otázky?</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">Často kladené dotazy</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border px-2 group data-[state=open]:bg-background transition-colors duration-500"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="font-serif text-lg md:text-xl text-foreground font-light group-data-[state=open]:text-primary transition-colors pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed pl-2 border-l-2 border-primary/30">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
