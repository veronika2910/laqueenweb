import Seo from "@/components/Seo";
import CtaButton from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center px-4 pt-32 pb-24 text-center">
      <Seo
        title="Stránka nenalezena"
        description="Požadovaná stránka neexistuje. Vraťte se prosím na úvodní stránku salonu LaQueen."
      />
      <div>
        <p className="font-serif text-6xl md:text-8xl text-primary mb-6">404</p>
        <h1 className="font-serif text-2xl md:text-4xl text-foreground font-light mb-4">
          Stránka nebyla nalezena
        </h1>
        <p className="text-muted-foreground font-light mb-10 max-w-md mx-auto">
          Omlouváme se, hledaná stránka neexistuje nebo byla přesunuta.
        </p>
        <CtaButton href="/" testId="button-404-home">
          Zpět na úvodní stránku
        </CtaButton>
      </div>
    </section>
  );
}
