import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import CtaButton from "@/components/CtaButton";
import { CONTACT, OPENING_HOURS } from "@/lib/site-data";

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${CONTACT.street}, ${CONTACT.city}`);

  return (
    <>
      <Seo
        title="Kontakt"
        description={`Kontaktujte salon LaQueen v Boskovicích. Adresa: ${CONTACT.street}, ${CONTACT.city}. Telefon: ${CONTACT.phone}.`}
      />

      <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Jsme tu pro vás</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light">Kontakt</h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass p-10 md:p-12 border border-border bg-white/70 flex flex-col justify-between"
            >
              <div className="space-y-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[4px] text-primary mb-4 font-medium">Adresa</p>
                  <address className="not-italic text-foreground font-light text-lg leading-relaxed">
                    {CONTACT.street}
                    <br />
                    {CONTACT.city}
                  </address>
                  <p className="text-muted-foreground text-sm mt-2">IČ: {CONTACT.ico}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[4px] text-primary mb-4 font-medium">Spojení</p>
                  <a
                    href={CONTACT.phoneHref}
                    className="block font-serif text-2xl md:text-3xl text-foreground hover:text-primary transition-colors mb-2"
                  >
                    {CONTACT.phone}
                  </a>
                  <a
                    href={CONTACT.emailHref}
                    className="block text-muted-foreground font-light text-lg hover:text-primary transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[4px] text-primary mb-4 font-medium">Otevírací doba</p>
                  <ul className="space-y-2">
                    {OPENING_HOURS.map((row) => (
                      <li key={row.day} className="flex justify-between text-sm text-foreground font-light gap-4">
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
              </div>

              <div className="mt-10">
                <CtaButton href="/rezervace" testId="button-contact-rezervovat">
                  Rezervovat termín
                </CtaButton>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="min-h-[420px] w-full overflow-hidden border border-border"
            >
              <iframe
                title="Mapa - LaQueen Boskovice"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
