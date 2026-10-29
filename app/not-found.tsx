import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main><Header /><section className="container-page grid min-h-[60vh] place-items-center py-20 text-center"><div><p className="eyebrow">404</p><h1 className="display-font mt-3 text-5xl">This address is not on our list.</h1><p className="mt-4 text-ink-soft">The page may have moved, or the property is no longer available.</p><Link href="/properties" className="mt-8 inline-flex bg-ink px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase">Explore properties</Link></div></section><Footer /></main>
  );
}
