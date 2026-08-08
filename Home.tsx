import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Services from "@/components/Services";
import NevestaNaKlic from "@/components/NevestaNaKlic";
import Gallery from "@/components/Gallery";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <>
      <Seo
        title=""
        description="LaQueen — svatební salon v Boskovicích. Svatební a společenské šaty, modeláž nehtů, prodloužení řas, líčení a účesy pod jednou střechou. Rezervujte si termín ještě dnes."
      />
      <Hero />
      <BrandStatement />
      <Services limit={3} />
      <NevestaNaKlic />
      <Gallery />
      <Numbers />
      <Reviews />
      <Reservation />
    </>
  );
}
