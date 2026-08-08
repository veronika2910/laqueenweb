import { motion } from "framer-motion";
import { CONTACT, OPENING_HOURS } from "@/lib/site-data";

export default function Reservation() {
  return (
    <section id="reservation" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative large crown in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none w-[800px] h-[800px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4" className="w-full h-full text-primary">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass p-10 md:p-16 lg:p-24 border border-border bg-white/60"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
              Těšíme se na vás
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              Objednávky přijímáme telefonicky, e-mailem nebo přes rezervační formulář níže.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-start">
            {/* Left: Opening Hours */}
            <div className="flex flex-col items-center md:items-start md:border-r border-border/50 md:pr-12">
              <p className="text-[11px] uppercase tracking-[4px] text-primary mb-8 font-medium">Otevírací doba</p>
              <ul className="space-y-3 w-full max-w-xs">
                {OPENING_HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between items-start text-foreground font-light gap-4"
                  >
                    <span>{row.day}</span>
                    <span className="text-right">
                      {row.hours.map((h) => (
                        <span key={h} className="block">
                          {h}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact */}
            <div className="flex flex-col items-center md:items-start md:pl-12">
              <p className="text-[11px] uppercase tracking-[4px] text-primary mb-8 font-medium">Rezervace</p>

              <a
                href={CONTACT.phoneHref}
                className="font-serif text-3xl md:text-4xl text-foreground hover:text-primary transition-colors mb-4 block"
              >
                {CONTACT.phone}
              </a>

              <a
                href={CONTACT.emailHref}
                className="text-muted-foreground font-light text-lg hover:text-primary transition-colors block mb-2"
              >
                {CONTACT.email}
              </a>

              <p className="text-muted-foreground font-light text-sm mb-10">
                {CONTACT.street}, {CONTACT.city}
              </p>

              <a
                href={CONTACT.phoneHref}
                className="inline-block px-10 py-5 text-[12px] uppercase tracking-[3px] font-medium bg-primary text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                Zavolat do salonu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
