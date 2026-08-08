import { motion } from "framer-motion";
import CtaButton from "@/components/CtaButton";
import type { ServiceCardData } from "@/lib/site-data";

type ServiceCardProps = {
  service: ServiceCardData;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: (index % 3) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col h-full"
      data-testid={`card-service-${index}`}
    >
      <div className="overflow-hidden relative h-[360px] md:h-[440px] w-full bg-muted">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
        />
      </div>

      <div className="glass p-8 md:p-10 -mt-16 mx-4 relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/5 flex-grow flex flex-col">
        <h3 className="font-serif text-2xl text-foreground mb-4 leading-snug">{service.title}</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base mb-6">
          {service.description}
        </p>
        <CtaButton
          href="/rezervace"
          size="default"
          className="mt-auto self-start !px-6 !py-3"
          testId={`button-service-cta-${index}`}
        >
          {service.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </CtaButton>
      </div>
    </motion.div>
  );
}
