import { motion } from "framer-motion";
import Counter from "@/components/Counter";

const stats = [
  { num: 2000, suffix: "+", label: "Spokojených klientek" },
  { num: 10, suffix: "+", label: "Roků zkušeností" },
  { num: 37, suffix: "", label: "Recenzí ★★★★★" },
  { num: 1, suffix: "", label: "Střecha pro vše" },
];

export default function Numbers() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center"
            >
              <div className="font-serif text-5xl md:text-7xl lg:text-[80px] text-primary mb-4 font-light leading-none">
                <Counter from={0} to={stat.num} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] md:text-[12px] uppercase tracking-[3px] text-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
