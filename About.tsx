import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import CtaButton from "@/components/CtaButton";
import Numbers from "@/components/Numbers";

// Dočasná fotografie do doby, než bude dodána reálná fotografie majitelky salonu.
const OWNER_PHOTO = "/TERKANASVATBE.webp";

export default function About() {
  return (
    <>
      <Seo
        title="O nás"
        description="Poznejte příběh salonu LaQueen v Boskovicích — osobní přístup, dlouholeté zkušenosti a péče o každou nevěstu do posledního detailu."
      />

      <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={OWNER_PHOTO}
                  alt="Majitelka salonu LaQueen"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-8 border-background bg-primary/10 hidden md:block" />
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Od roku 2015</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.15] mb-8">
                Váš vysněný den je i mým posláním
              </h1>

              <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-base md:text-lg">
                <p>
                  Salon LaQueen jsem založila s jednoduchou myšlenkou — aby si každá nevěsta mohla vše potřebné
                  vyřídit na jednom místě, s klidem, důvěrou a osobní péčí, kterou si takový den zaslouží.
                </p>
                <p>
                  Za více než deset let praxe jsem se svým týmem doprovodila stovky nevěst od prvního výběru šatů
                  až po poslední úpravu účesu před obřadem. Každý detail — od střihu šatů po odstín laku — beru
                  stejně vážně jako vy.
                </p>
                <p>
                  Individuální přístup je pro mě samozřejmostí. Naslouchám, radím a pomáhám najít přesně to,
                  co bude slušet vaší postavě, stylu i osobnosti. A když na konci zkoušky vidím úsměv a slzy
                  dojetí, vím, že dělám svou práci správně.
                </p>
                <p className="text-foreground font-normal">
                  Těším se, že budu i vaší součástí příprav na nejkrásnější den vašeho života.
                </p>
                <p>
                  Na závěr bych ráda poděkovala všem svým nevěstám za krásné recenze i fotografie ze svateb,
                  které mi po obřadu posíláte. Jsou pro mě tou nejkrásnější odměnou a důkazem, že má práce má
                  smysl.
                </p>
              </div>

              <div className="mt-10">
                <CtaButton href="/rezervace" testId="button-about-rezervovat">
                  Domluvit konzultaci
                </CtaButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Numbers />
    </>
  );
}
