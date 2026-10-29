"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { properties } from "@/data/properties";

const slides = properties.filter((property) => property.featured).slice(0, 3);

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-ink sm:min-h-[720px]">
      {slides.map((item, index) => (
        <Image
          key={item.slug}
          src={item.image}
          alt={index === active ? `${item.title}, ${item.location}` : ""}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="hero-shade absolute inset-0" />

      <div className="container-page relative flex min-h-[680px] items-end pb-24 pt-36 sm:min-h-[720px] sm:pb-28">
        <div className="max-w-2xl text-white">
          <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#dec4a4] uppercase">Featured residence · {slide.neighborhood}</p>
          <h1 className="display-font text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">A place that feels like <em className="font-normal text-[#e5c59e]">yours.</em></h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base">{slide.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href={`/properties/${slide.slug}`} className="bg-white px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-ink uppercase transition hover:bg-[#e9d2b3]">Discover the home</Link>
            <span className="text-sm text-white/85">{slide.beds} beds · {slide.baths} baths · {slide.area.toLocaleString()} sq ft</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 z-10 flex items-center gap-4 sm:right-8 lg:right-[max(2rem,calc((100vw-1200px)/2))]">
        <button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="grid size-11 place-items-center border border-white/40 text-xl text-white transition hover:bg-white hover:text-ink" aria-label="Previous featured property">←</button>
        <div className="flex gap-2" aria-label="Choose featured property">
          {slides.map((item, index) => (
            <button key={item.slug} type="button" onClick={() => setActive(index)} className={`h-1 transition-all ${index === active ? "w-8 bg-white" : "w-4 bg-white/45 hover:bg-white/80"}`} aria-label={`View ${item.title}`} aria-current={index === active} />
          ))}
        </div>
        <button type="button" onClick={() => setActive((active + 1) % slides.length)} className="grid size-11 place-items-center border border-white/40 text-xl text-white transition hover:bg-white hover:text-ink" aria-label="Next featured property">→</button>
      </div>
    </section>
  );
}
