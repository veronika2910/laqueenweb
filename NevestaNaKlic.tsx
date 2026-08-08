import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CtaButton from "@/components/CtaButton";
import { PREMIUM_PACKAGE } from "@/lib/site-data";

export default function NevestaNaKlic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Images with Parallax */}
          <div className="relative h-[600px] md:h-[800px] w-full">
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[80%] md:w-[75%] h-[80%] z-10">
              <img
                src="/IMG_9779.webp"
                alt="Nevěsta na klíč - Příprava"
                loading="lazy"
                className="w-full h-full object-cover shadow-2xl shadow-black/5"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-[55%] md:w-[50%] h-[55%] z-20 border-8 border-background"
            >
              <img
                src="/IMG_9778.webp"
                alt="Nevěsta na klíč - Detail"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="py-10 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Prémiová služba</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-[72px] font-light mb-8 leading-[1.05]">
                <span className="gold-shimmer block">Nevěsta</span>
                <span className="gold-shimmer block mt-2">na klíč</span>
              </h2>

              <div className="w-12 h-[1px] bg-primary/30 mb-8" />

              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-md">
                {PREMIUM_PACKAGE.description}
              </p>

              <div className="space-y-5 mb-14">
                {PREMIUM_PACKAGE.features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[15px] text-foreground tracking-wide font-light">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <CtaButton href="/cenik" testId="button-nevesta-na-klic-cenik">
                  Zobrazit cenu balíčku
                </CtaButton>
                <CtaButton href="/rezervace" variant="outline" testId="button-nevesta-na-klic-konzultace">
                  Rezervace
                </CtaButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
