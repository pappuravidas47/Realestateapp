import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertyExplorer from "@/components/PropertyExplorer";
import { properties } from "@/data/properties";

export const metadata: Metadata = { title: "Properties", description: "Explore Havenly's curated collection of homes." };

type SearchParams = Promise<{ type?: string; location?: string; category?: string }>;

export default async function PropertiesPage({ searchParams }: { searchParams: SearchParams }) {
  const filters = await searchParams;
  return (
    <main>
      <Header />
      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Find your place</p>
          <h1 className="display-font mt-3 max-w-2xl text-5xl leading-[1.02] sm:text-6xl">A considered collection of exceptional homes.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">Every address has been selected for its character, setting, and potential to become part of your story.</p>
        </div>
      </section>
      <section className="container-page py-12 sm:py-16">
        <PropertyExplorer properties={properties} initialType={filters.type} initialLocation={filters.location} initialCategory={filters.category} />
      </section>
      <Footer />
    </main>
  );
}
