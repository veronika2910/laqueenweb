import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

const SITE_NAME = "LaQueen — Svatební salon Boskovice";

function setMeta(nameOrProp: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${nameOrProp}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(nameOrProp, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Nastaví title + meta description + Open Graph tagy pro aktuální stránku.
 * Jednoduchá náhrada react-helmet bez nutnosti přidávat další knihovnu.
 */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === "" ? SITE_NAME : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
  }, [title, description]);

  return null;
}
