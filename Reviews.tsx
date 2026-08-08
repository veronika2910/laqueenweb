import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { REVIEWS, REVIEW_STATS } from "@/lib/site-data";

export default function Reviews() {
  return (
    <section className="py-20 md:py-24 bg-secondary/20 border-y border-border relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-4">Řekli o nás</h2>
          <div className="flex justify-center gap-1 text-primary text-xl">★★★★★</div>
          <p className="text-muted-foreground text-sm font-light mt-3 tracking-wide">
            Facebook: {REVIEW_STATS.facebook.count} recenzí {"★".repeat(REVIEW_STATS.facebook.rating)}
            <span className="mx-3 text-muted-foreground/40">·</span>
            Google: {REVIEW_STATS.google.count} recenzí {"★".repeat(REVIEW_STATS.google.rating)}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <Carousel opts={{ align: "start", loop: true }} className="w-full" data-testid="carousel-reviews">
          <CarouselContent className="-ml-4 md:-ml-6">
            {REVIEWS.map((review, i) => (
              <CarouselItem key={i} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="glass p-8 h-full flex flex-col justify-between" data-testid={`card-review-${i}`}>
                  <div>
                    <div className="flex gap-1 text-primary mb-4">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed font-light mb-8">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/15 text-primary text-xs font-medium">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[12px] text-foreground font-medium">{review.name}</p>
                      <p className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground">
                        {review.source} · {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0" data-testid="button-review-prev" />
            <CarouselNext className="static translate-y-0" data-testid="button-review-next" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
