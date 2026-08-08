import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import Reservation from "@/components/Reservation";
import ReservationForm from "@/components/ReservationForm";
import FaqSection from "@/components/FaqSection";

export default function ReservationPage() {
  return (
    <>
      <Seo
        title="Rezervace"
        description="Zarezervujte si termín v salonu LaQueen — vyplňte rezervační formulář nebo nás kontaktujte telefonicky či e-mailem."
      />

      <section className="pt-36 pb-0 md:pt-44 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Rezervace termínu</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light">Domluvme si váš termín</h1>
        </div>
      </section>

      <Reservation />

      <section className="py-20 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Rezervační formulář</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">Napište nám</h2>
            <p className="text-muted-foreground font-light mt-4">
              Vyplňte formulář a ozveme se vám co nejdříve s potvrzením termínu.
            </p>
          </motion.div>

          <div className="glass p-8 md:p-12 border border-border bg-white/70">
            <ReservationForm />
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
