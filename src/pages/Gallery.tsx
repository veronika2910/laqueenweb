import { motion, AnimatePresence } from "framer-motion";
import { useRoute, useLocation } from "wouter";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Seo from "@/components/Seo";
import { GALLERY_CATEGORIES } from "@/lib/gallery-data";

export default function GalleryPage() {
  const [match, params] = useRoute("/galerie/:slug");
  const [, navigate] = useLocation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeCategory = match
    ? GALLERY_CATEGORIES.find((c) => c.slug === params?.slug)
    : undefined;

  // ── Detail kategorie ──
  if (activeCategory) {
    const photos = activeCategory.photos;

    return (
      <>
        <Seo
          title={activeCategory.title}
          description={`${activeCategory.title} — fotogalerie salonu LaQueen v Boskovicích.`}
        />

        <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <button
              onClick={() => navigate("/galerie")}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-muted-foreground hover:text-primary transition-colors mb-8"
              data-testid="button-zpet-galerie"
            >
              <ArrowLeft size={14} /> Zpět na galerii
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Galerie</p>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light">
                {activeCategory.title}
              </h1>
            </motion.div>

            {photos.length === 0 ? (
              <p className="text-center text-muted-foreground font-light py-16">
                Fotografie v této kategorii připravujeme. Brzy je zde najdete.
              </p>
            ) : (
              <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {photos.map((src, i) => (
                  <motion.button
                    key={src + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: (i % 6) * 0.05 }}
                    onClick={() => setLightboxIndex(i)}
                    className="break-inside-avoid overflow-hidden block w-full"
                    data-testid={`button-photo-${i}`}
                  >
                    <img
                      src={src}
                      alt={`${activeCategory.title} — fotografie ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
                aria-label="Zavřít"
                data-testid="button-lightbox-close"
              >
                <X size={28} />
              </button>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
                    }}
                    className="absolute left-4 md:left-8 text-white/80 hover:text-white"
                    aria-label="Předchozí fotografie"
                    data-testid="button-lightbox-prev"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
                    }}
                    className="absolute right-4 md:right-8 text-white/80 hover:text-white"
                    aria-label="Další fotografie"
                    data-testid="button-lightbox-next"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={photos[lightboxIndex]}
                alt={`${activeCategory.title} — fotografie ${lightboxIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ── Přehled kategorií ──
  return (
    <>
      <Seo
        title="Galerie"
        description="Naše kolekce svatebních a společenských šatů, nehtů, řas a účesů — prohlédněte si fotogalerii salonu LaQueen v Boskovicích."
      />

      <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[5px] text-primary mb-6 font-medium">Naše práce</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground font-light">Galerie</h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {GALLERY_CATEGORIES.map((category, i) => (
              <motion.button
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                onClick={() => navigate(`/galerie/${category.slug}`)}
                className="group relative h-[340px] md:h-[400px] overflow-hidden bg-secondary text-left"
                data-testid={`card-gallery-category-${category.slug}`}
              >
                {category.cover ? (
                  <img
                    src={category.cover}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary">
                    <span className="font-serif italic text-2xl text-muted-foreground/50">Již brzy</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-white font-light">{category.title}</h2>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-white/70 mt-2 group-hover:text-primary transition-colors">
                    Zobrazit galerii
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
