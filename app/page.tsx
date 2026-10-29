import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import PropertyCard from "@/components/PropertyCard";
import SearchPanel from "@/components/SearchPanel";
import { properties } from "@/data/properties";

const featured = properties.filter((property) => property.featured).slice(0, 3);

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header overlay />
        <HeroSlider />
      </div>
      <SearchPanel />

      <section className="container-page py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Curated collection</p>
            <h2 className="display-font mt-3 max-w-xl text-4xl leading-tight sm:text-5xl">The homes people remember.</h2>
          </div>
          <Link href="/properties" className="w-fit border-b border-ink pb-1 text-xs font-bold tracking-[0.13em] uppercase transition hover:border-gold hover:text-gold">View all homes <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, index) => <PropertyCard key={property.slug} property={property} priority={index === 0} />)}
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:items-center">
          <div className="relative aspect-[0.86] overflow-hidden bg-mist sm:aspect-[1.08]">
            <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85" alt="A serene modern Havenly interior" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 bg-white p-5 sm:bottom-7 sm:left-7">
              <p className="display-font text-3xl">14 years</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-[0.12em] text-ink-soft uppercase">of local perspective</p>
            </div>
          </div>
          <div className="max-w-xl lg:pl-8">
            <p className="eyebrow">The Havenly way</p>
            <h2 className="display-font mt-4 text-4xl leading-tight sm:text-5xl">More than square footage. A feeling of arrival.</h2>
            <p className="mt-6 text-base leading-8 text-ink-soft">We begin with how you want to live, then look for the setting that makes it possible. From first conversation to handover, our team brings clarity, discretion, and a quietly personal point of view.</p>
            <Link href="/about" className="mt-8 inline-flex border border-ink px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition hover:bg-ink hover:text-white">Meet Havenly</Link>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">A smarter search</p>
          <h2 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">Your next chapter begins with a conversation.</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-ink-soft">Tell us what matters: light, a shorter commute, somewhere for everyone to gather. We will bring the options, local insight, and time to explore them properly.</p>
          <Link href="/contact" className="mt-8 inline-flex bg-ink px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:bg-gold-dark">Talk to an advisor</Link>
        </div>
        <div className="texture grid grid-cols-2 gap-px bg-white/60 p-4 sm:p-7">
          {[['01', 'Listen first'], ['02', 'Curate thoughtfully'], ['03', 'Guide clearly'], ['04', 'Stay close']].map(([number, label]) => (
            <div key={number} className="bg-white p-6 sm:p-9">
              <span className="text-xs font-bold tracking-[0.14em] text-gold">{number}</span>
              <p className="display-font mt-10 text-2xl leading-tight sm:text-3xl">{label}</p>
              <p className="mt-3 text-sm leading-6 text-ink-soft">A focused, human process from your first enquiry to the moment you get the keys.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
