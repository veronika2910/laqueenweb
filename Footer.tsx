import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiTiktok, SiYoutube } from "react-icons/si";
import Logo from "@/components/Logo";
import { CONTACT, NAV_ITEMS } from "@/lib/site-data";

const SOCIAL_LINKS = [
  { icon: SiInstagram, label: "Instagram", href: CONTACT.instagram },
  { icon: SiFacebook, label: "Facebook", href: CONTACT.facebook },
  { icon: SiTiktok, label: "TikTok", href: CONTACT.tiktok },
  { icon: SiYoutube, label: "YouTube", href: CONTACT.youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1512] text-[#FAF7F2] border-t border-primary/20 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="group mb-6">
              <Logo variant="light" />
            </Link>
            <p className="text-[#FAF7F2]/60 font-light text-sm max-w-xs text-center md:text-left mb-8">
              Připravujeme nevěsty na jejich nejkrásnější den. Od roku 2015.
            </p>
            <Link
              href="/rezervace"
              className="px-6 py-3 text-[10px] uppercase tracking-[2.5px] font-semibold bg-primary text-white transition-all duration-300 hover:bg-primary/90"
              data-testid="button-footer-rezervovat"
            >
              Rezervovat termín
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[11px] uppercase tracking-[4px] text-primary mb-6 font-medium">Kontakt</p>
            <address className="not-italic text-[#FAF7F2]/80 font-light text-sm space-y-2 mb-6 text-center md:text-left">
              <p>{CONTACT.street}</p>
              <p>{CONTACT.city}</p>
              <p className="text-[#FAF7F2]/50 text-xs pt-1">IČ: {CONTACT.ico}</p>
            </address>
            <div className="flex flex-col items-center md:items-start space-y-2 text-sm font-light">
              <a href={CONTACT.phoneHref} className="text-[#FAF7F2]/80 hover:text-primary transition-colors">
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="text-[#FAF7F2]/80 hover:text-primary transition-colors">
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[11px] uppercase tracking-[4px] text-primary mb-6 font-medium">Rychlé odkazy</p>
            <div className="flex flex-col items-center md:items-start gap-3 text-[#FAF7F2]/70 text-sm font-light">
              {NAV_ITEMS.filter((i) => i.href !== "/").map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[11px] uppercase tracking-[4px] text-primary mb-6 font-medium">Sledujte nás</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-[#FAF7F2]/20 text-[#FAF7F2]/80 hover:text-primary hover:border-primary/50 transition-colors"
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FAF7F2]/40 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} LaQueen. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4 text-[#FAF7F2]/40 text-xs font-light">
            <a href="#" className="hover:text-[#FAF7F2]/80 transition-colors">Ochrana osobních údajů</a>
            <a href="#" className="hover:text-[#FAF7F2]/80 transition-colors">Obchodní podmínky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
