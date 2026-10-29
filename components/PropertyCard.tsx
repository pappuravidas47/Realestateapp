import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/properties";

export default function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  return (
    <article className="group overflow-hidden bg-white property-card-shadow">
      <Link href={`/properties/${property.slug}`} className="image-zoom relative block aspect-[1.25/1] overflow-hidden bg-mist">
        <Image src={property.image} alt={property.title} fill priority={priority} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[0.62rem] font-bold tracking-[0.14em] text-ink uppercase">{property.type}</span>
        <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/95 text-lg text-ink transition group-hover:scale-110" aria-label="Save property">♡</span>
      </Link>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-ink-soft">{property.location}</p>
            <h3 className="display-font mt-1 text-2xl leading-tight text-ink"><Link href={`/properties/${property.slug}`} className="transition hover:text-gold">{property.title}</Link></h3>
          </div>
          <p className="shrink-0 text-sm font-bold text-ink">{formatPrice(property.price, property.type)}</p>
        </div>
        <div className="mt-5 flex border-t border-slate-100 pt-4 text-xs font-medium text-ink-soft">
          <span className="pr-4">{property.beds} beds</span>
          <span className="border-l border-slate-200 px-4">{property.baths} baths</span>
          <span className="border-l border-slate-200 pl-4">{property.area.toLocaleString()} sq ft</span>
        </div>
      </div>
    </article>
  );
}
