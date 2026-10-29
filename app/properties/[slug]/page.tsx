import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";
import PropertyCard from "@/components/PropertyCard";
import { formatPrice, getProperty, properties } from "@/data/properties";

type DetailPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property not found" };
  return { title: property.title, description: property.summary };
}

export default async function PropertyDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const related = properties.filter((item) => item.slug !== property.slug && (item.type === property.type || item.category === property.category)).slice(0, 3);

  return (
    <main>
      <Header />
      <section className="container-page py-7 sm:py-10">
        <Link href="/properties" className="text-xs font-bold tracking-[0.12em] text-ink-soft uppercase transition hover:text-gold">← Back to properties</Link>
        <div className="mt-6 flex flex-col gap-5 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">{property.type} · {property.neighborhood}</p>
            <h1 className="display-font mt-2 text-4xl leading-tight sm:text-5xl">{property.title}</h1>
            <p className="mt-2 text-sm text-ink-soft">{property.location}</p>
          </div>
          <p className="display-font text-3xl text-ink">{formatPrice(property.price, property.type)}</p>
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden bg-mist md:row-span-2">
            <Image src={property.gallery[0]} alt={`${property.title} exterior`} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative min-h-[210px] overflow-hidden bg-mist"><Image src={property.gallery[1]} alt={`${property.title} living space`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
          <div className="relative min-h-[210px] overflow-hidden bg-mist"><Image src={property.gallery[2]} alt={`${property.title} interior detail`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_370px]">
        <div>
          <div className="grid grid-cols-2 border-y border-slate-200 sm:grid-cols-4">
            {[[`${property.beds}`, "Bedrooms"], [`${property.baths}`, "Bathrooms"], [property.area.toLocaleString(), "Square feet"], [`${property.year}`, "Built"]].map(([value, label]) => <div key={label} className="border-r border-slate-200 px-4 py-5 last:border-r-0 sm:px-5"><p className="display-font text-2xl">{value}</p><p className="mt-1 text-[0.62rem] font-bold tracking-[0.12em] text-ink-soft uppercase">{label}</p></div>)}
          </div>
          <div className="mt-10">
            <p className="eyebrow">The home</p>
            <h2 className="display-font mt-3 text-3xl sm:text-4xl">Space to live beautifully.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft">{property.description}</p>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="display-font text-3xl">At a glance</h2>
            <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {property.features.map((feature) => <p key={feature} className="flex items-center gap-3 text-sm text-ink"><span className="grid size-5 place-items-center rounded-full bg-sand text-[0.7rem] text-gold">✓</span>{feature}</p>)}
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8">
            <p className="text-xs font-bold tracking-[0.13em] text-ink-soft uppercase">Location</p>
            <p className="display-font mt-2 text-2xl">{property.neighborhood}</p>
            <p className="mt-2 text-sm text-ink-soft">{property.coordinates} · Dubai, United Arab Emirates</p>
            <div className="mt-5 grid min-h-44 place-items-center bg-mist text-center"><div><p className="text-xs font-bold tracking-[0.13em] text-gold uppercase">Havenly location guide</p><p className="mt-2 text-sm text-ink-soft">Explore the neighbourhood with your advisor.</p></div></div>
          </div>
        </div>
        <aside className="h-fit bg-sand p-6 sm:p-8 lg:sticky lg:top-7">
          <p className="eyebrow">Private viewing</p>
          <h2 className="display-font mt-3 text-3xl">Interested in this home?</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">Arrange a viewing, ask for the brochure, or talk through the details with a Havenly advisor.</p>
          <div className="mt-6"><InquiryForm propertyName={property.title} /></div>
        </aside>
      </section>

      {related.length > 0 && <section className="bg-sand py-16 sm:py-20"><div className="container-page"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Keep exploring</p><h2 className="display-font mt-2 text-4xl">More to discover</h2></div><Link href="/properties" className="w-fit border-b border-ink pb-1 text-xs font-bold tracking-[0.12em] uppercase">All properties ↗</Link></div><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <PropertyCard key={item.slug} property={item} />)}</div></div></section>}
      <Footer />
    </main>
  );
}
