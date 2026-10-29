"use client";

import { useMemo, useState } from "react";
import type { Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function PropertyExplorer({ properties, initialType = "", initialLocation = "", initialCategory = "" }: { properties: Property[]; initialType?: string; initialLocation?: string; initialCategory?: string }) {
  const [type, setType] = useState(initialType);
  const [location, setLocation] = useState(initialLocation);
  const [category, setCategory] = useState(initialCategory);
  const [minimumBeds, setMinimumBeds] = useState("0");

  const filtered = useMemo(() => properties.filter((property) => {
    const matchesType = !type || property.type === type;
    const matchesLocation = !location || property.location.includes(location) || property.neighborhood.includes(location);
    const matchesCategory = !category || property.category === category;
    const matchesBeds = property.beds >= Number(minimumBeds);
    return matchesType && matchesLocation && matchesCategory && matchesBeds;
  }), [properties, type, location, category, minimumBeds]);

  const clearFilters = () => {
    setType("");
    setLocation("");
    setCategory("");
    setMinimumBeds("0");
  };

  return (
    <div>
      <div className="mb-10 grid gap-3 border-y border-slate-200 py-5 sm:grid-cols-2 lg:grid-cols-5">
        <select value={type} onChange={(event) => setType(event.target.value)} className="border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold">
          <option value="">Buy or rent</option><option value="For sale">For sale</option><option value="For rent">For rent</option>
        </select>
        <select value={location} onChange={(event) => setLocation(event.target.value)} className="border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold">
          <option value="">Any location</option><option value="Downtown">Downtown</option><option value="Dubai Marina">Dubai Marina</option><option value="Palm Jumeirah">Palm Jumeirah</option><option value="Al Barari">Al Barari</option><option value="Business Bay">Business Bay</option><option value="Arabian Ranches">Arabian Ranches</option>
        </select>
        <select value={category} onChange={(event) => setCategory(event.target.value)} className="border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold">
          <option value="">Any property type</option><option>House</option><option>Villa</option><option>Apartment</option><option>Penthouse</option>
        </select>
        <select value={minimumBeds} onChange={(event) => setMinimumBeds(event.target.value)} className="border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold">
          <option value="0">Any bedrooms</option><option value="1">1+ bedrooms</option><option value="2">2+ bedrooms</option><option value="3">3+ bedrooms</option><option value="4">4+ bedrooms</option>
        </select>
        <button type="button" onClick={clearFilters} className="px-3 py-3 text-left text-xs font-bold tracking-[0.12em] text-ink uppercase transition hover:text-gold">Clear filters <span aria-hidden="true">×</span></button>
      </div>

      <p className="mb-6 text-sm text-ink-soft"><span className="font-bold text-ink">{filtered.length}</span> {filtered.length === 1 ? "home" : "homes"} to explore</p>
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.slug} property={property} />)}</div>
      ) : (
        <div className="border border-dashed border-slate-300 py-20 text-center"><p className="display-font text-3xl">Nothing here just yet.</p><button type="button" onClick={clearFilters} className="mt-4 text-sm font-bold text-gold underline underline-offset-4">Reset your search</button></div>
      )}
    </div>
  );
}
