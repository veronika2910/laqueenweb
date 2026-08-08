import { motion } from "framer-motion";

export default function BrandStatement() {
  const statement = "Připravujeme nevěsty na jejich nejkrásnější den.";
  const words = statement.split(" ");

  return (
    <section id="about" className="py-28 md:py-40 px-4 relative bg-background">
      {/* Decorative side element */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" 
        />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20 items-start">
          {/* Left: small editorial label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-4 font-medium">
              Od roku 2015
            </p>
            <div className="w-16 h-[1px] bg-primary/40" />
          </motion.div>
          
          {/* Right: main statement */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] text-foreground font-light leading-[1.25] mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              Osobní přístup ke každé nevěstě. Jeden salon, kde se postaráme o vše — od šatů přes účes až po poslední detail.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
