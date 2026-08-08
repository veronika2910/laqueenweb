// ─────────────────────────────────────────────────────────────
// Data galerie webu LaQueen — rozdělení do kategorií.
// Pro doplnění fotografie do kategorie stačí přidat cestu k souboru
// z /public do pole photos u příslušné kategorie.
// ─────────────────────────────────────────────────────────────

export type GalleryCategory = {
  slug: string;
  title: string;
  cover: string;
  photos: string[];
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    slug: "nase-nevesty",
    title: "Naše nevěsty",
    cover: "/nevesta-satysvatebni.webp",
    photos: [
      "/nevesta-satysvatebni.webp",
      "/nevesta-2.webp",
      "/nevesta-3.webp",
      "/nevesta-4.webp",
      "/nevesta-5.webp",
      "/nevesta-6.webp",
      "/NEVESTANAKLIC2.webp",
      "/NEVESTANAKLIC3.webp",
      "/IMG_8640.JPG",
      "/IMG_8642.JPG",
    ],
  },
  {
    slug: "maturantky-a-plesy",
    title: "Naše maturantky a plesy",
    cover: "/ples-ruzove.webp",
    photos: ["/ples-ruzove.webp", "/ples-cerne-1.webp", "/ples-cerne-2.webp"],
  },
  {
    slug: "rasy",
    title: "Řasy",
    cover: "/RASY.webp",
    photos: ["/RASY.webp", "/RASY2.webp"],
  },
  {
    slug: "nehty",
    title: "Nehty",
    cover: "/NEHTY.webp",
    photos: ["/NEHTY.webp", "/NEHTY2.webp", "/NEHTY3.webp"],
  },
  {
    slug: "kolekce-svatebnich-saty",
    title: "Kolekce svatebních šatů",
    cover: "",
    photos: [],
  },
  {
    slug: "kolekce-plesovych-saty",
    title: "Kolekce plesových šatů",
    cover: "/ples-modre-1.webp",
    photos: ["/ples-modre-1.webp", "/ples-modre-2.webp"],
  },
];

// Všechny fotografie použité napříč kategoriemi hlavní galerie —
// využívá je posuvná galerie na domovské stránce.
export const ALL_GALLERY_PHOTOS: string[] = GALLERY_CATEGORIES.flatMap((c) => c.photos);
