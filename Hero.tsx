import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    label: "Svatební\nšaty",
    icon: (
      <svg viewBox="0 0 32 42" fill="none" className="w-7 h-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2 L6 12 L2 40 L30 40 L26 12 L22 2" />
        <path d="M10 2 Q16 8 22 2" />
        <path d="M8 14 Q16 20 24 14" />
      </svg>
    ),
  },
  {
    label: "Manikúra\n& pedikúra",
    icon: (
      <svg viewBox="0 0 28 40" fill="none" className="w-6 h-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="12" height="18" rx="6" />
        <path d="M14 20 L14 38" />
        <path d="M8 30 Q14 35 20 30" />
      </svg>
    ),
  },
  {
    label: "Řasy\n& obočí",
    icon: (
      <svg viewBox="0 0 36 20" fill="none" className="w-9 h-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M2 14 Q18 2 34 14" />
        <path d="M6 10 L4 2" />
        <path d="M12 7 L11 1" />
        <path d="M18 6 L18 1" />
        <path d="M24 7 L25 1" />
        <path d="M30 10 L32 2" />
      </svg>
    ),
  },
  {
    label: "Luxusní\npřístup",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 2 L20 12 L30 12 L22 18 L25 29 L16 23 L7 29 L10 18 L2 12 L12 12 Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden flex flex-col"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center ken-burns"
          style={{ backgroundImage: 'url("/IMG_8642.JPG")' }}
        />
        {/* Dark cinematic overlays — heavier than before, brownish tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* Warm sepia tint */}
        <div className="absolute inset-0" style={{ background: "rgba(40,20,5,0.25)" }} />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-6 max-w-[760px] mx-auto md:mx-0">
        {/* Italic script line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-none mb-1"
          style={{ color: "#C9A961" }}
        >
          Váš den
        </motion.p>

        {/* Large bold ALL CAPS lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
        >
          <h1
            className="font-serif font-semibold text-white leading-[0.9] tracking-tight uppercase"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            JAKO
            <br />
            KRÁLOVNA
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 mb-3 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-primary/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
          <span className="w-8 h-px bg-primary/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p className="text-white/80 text-[13px] tracking-[2px] uppercase font-light">
            Šaty, Nehty, Řasy — vše pod jednou střechou
          </p>
          <p
            className="font-serif italic mt-1 text-base"
            style={{ color: "#C9A961" }}
          >
            od roku 2015
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35 }}
          className="mt-8"
        >
          <Link
            href="/rezervace"
            className="inline-flex items-center gap-4 px-8 py-4 text-[11px] uppercase tracking-[3px] font-semibold bg-primary text-white transition-all duration-500 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 group"
            data-testid="button-rezervovat-termín"
          >
            Rezervovat termín
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* ── BOTTOM SERVICE BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.6 }}
        className="relative z-10 w-full border-t border-white/10"
        style={{ background: "rgba(15,8,4,0.55)", backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {services.map((svc, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 md:px-8 py-5 group hover:bg-white/5 transition-colors cursor-default"
              data-testid={`service-bar-${i}`}
            >
              <span className="text-primary/80 shrink-0 transition-all duration-300 group-hover:text-primary">
                {svc.icon}
              </span>
              <span className="text-[11px] uppercase tracking-[1.5px] text-white/75 font-medium leading-snug whitespace-pre-line group-hover:text-white/95 transition-colors">
                {svc.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
