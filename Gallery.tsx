import { motion } from "framer-motion";
import CtaButton from "@/components/CtaButton";
import { ALL_GALLERY_PHOTOS } from "@/lib/gallery-data";

const photos = ALL_GALLERY_PHOTOS;
const half = Math.ceil(photos.length / 2);
const Row1 = photos.slice(0, half);
const Row2 = photos.slice(half);

export default function Gallery() {
  return (
    <section className="py-20 md:py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">Galerie</h2>
        </motion.div>
      </div>

      {/* Marquee Photo Strip */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 - Left */}
        <div className="flex w-fit marquee-track hover:[animation-play-state:paused] mb-6 md:mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-6 md:gap-8 px-3 md:px-4">
              {Row1.map((src, j) => (
                <div key={j} className="h-64 md:h-[400px] aspect-[3/4] overflow-hidden">
                  <img src={src} alt="Fotografie z galerie LaQueen" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 - Right */}
        <div className="flex w-fit marquee-track hover:[animation-play-state:paused] [animation-direction:reverse]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-6 md:gap-8 px-3 md:px-4">
              {Row2.map((src, j) => (
                <div key={j} className="h-64 md:h-[400px] aspect-[3/4] overflow-hidden">
                  <img src={src} alt="Fotografie z galerie LaQueen" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <CtaButton href="/galerie" variant="outline" testId="button-cela-galerie">
          Zobrazit celou galerii
        </CtaButton>
      </div>
    </section>
  );
}
