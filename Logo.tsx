// Oficiální logo salonu LaQueen (public/logo.png a jeho světlá varianta
// public/logo-light.png pro tmavá pozadí).
// Logo už samo obsahuje nápis "La Queen — Svatební salon", proto se
// vedle něj nezdvojuje textový wordmark.
// Komponenta se používá na jediném místě -> propíše se automaticky
// do hlavičky i patičky. Pro výměnu grafiky stačí nahradit oba soubory.

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  // Na tmavém pozadí (průhledná hlavička přes hero fotografii, patička)
  // použijeme světlou/zlatou variantu loga pro dobrou čitelnost.
  // Na světlém pozadí zůstává původní tmavá varianta.
  const src = variant === "light" ? "/logo-light.png" : "/logo.png";

  return (
    <span className={`flex items-center ${className}`}>
      <img
        src={src}
        alt="LaQueen — svatební salon"
        width="120"
        height="128"
        className="h-14 md:h-16 w-auto shrink-0 transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
      />
    </span>
  );
}
