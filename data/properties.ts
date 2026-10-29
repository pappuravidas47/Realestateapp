export type Property = {
  slug: string;
  title: string;
  location: string;
  neighborhood: string;
  price: number;
  type: "For sale" | "For rent";
  category: "House" | "Villa" | "Apartment" | "Penthouse";
  beds: number;
  baths: number;
  area: number;
  year: number;
  image: string;
  gallery: string[];
  summary: string;
  description: string;
  features: string[];
  coordinates: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    slug: "marina-crest-villa",
    title: "Marina Crest Villa",
    location: "Palm Jumeirah, Dubai",
    neighborhood: "Palm Jumeirah",
    price: 4200000,
    type: "For sale",
    category: "Villa",
    beds: 5,
    baths: 6,
    area: 4820,
    year: 2024,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "A waterfront sanctuary with sunset terraces and private beach access.",
    description: "Designed around the water, this contemporary villa pairs generous entertaining spaces with quietly refined private rooms. Floor-to-ceiling glazing opens the living spaces to the marina, while stone, oak, and linen lend a warm, lasting material palette.",
    features: ["Private beach access", "Infinity pool", "Chef's kitchen", "Three-car garage", "Smart home system", "24-hour security"],
    coordinates: "25.1124° N, 55.1390° E",
    featured: true,
  },
  {
    slug: "hillside-house",
    title: "Hillside House",
    location: "Al Barari, Dubai",
    neighborhood: "Al Barari",
    price: 2950000,
    type: "For sale",
    category: "House",
    beds: 4,
    baths: 5,
    area: 3650,
    year: 2023,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "An architectural garden home defined by light, calm, and indoor-outdoor living.",
    description: "Tucked among mature planting, Hillside House is a calm counterpoint to the city. The open kitchen and living room flow to a shaded garden terrace, and each bedroom is arranged to capture greenery and soft morning light.",
    features: ["Landscaped garden", "Outdoor kitchen", "Home office", "Maids room", "Solar-ready roof", "Gated community"],
    coordinates: "25.1035° N, 55.3080° E",
    featured: true,
  },
  {
    slug: "skyline-residence",
    title: "Skyline Residence",
    location: "Downtown Dubai",
    neighborhood: "Downtown",
    price: 14500,
    type: "For rent",
    category: "Apartment",
    beds: 2,
    baths: 3,
    area: 1780,
    year: 2022,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "A polished city apartment with uninterrupted Burj Khalifa views.",
    description: "Set high above Downtown, this fully furnished residence offers an elegant, turnkey city base. A refined neutral palette and oversized windows frame the skyline, while the building's resort-style amenities are moments from your door.",
    features: ["Fully furnished", "Gym and spa", "Valet parking", "Concierge", "Balcony", "Weekly housekeeping available"],
    coordinates: "25.1973° N, 55.2742° E",
    featured: true,
  },
  {
    slug: "desert-courtyard-estate",
    title: "Desert Courtyard Estate",
    location: "Arabian Ranches, Dubai",
    neighborhood: "Arabian Ranches",
    price: 3350000,
    type: "For sale",
    category: "Villa",
    beds: 6,
    baths: 7,
    area: 5340,
    year: 2021,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "A family-scale desert retreat organised around a sunlit central courtyard.",
    description: "This expansive home combines generous family proportions with a resort-like garden. The central courtyard connects formal entertaining rooms, an open family kitchen, and a private guest wing with natural ease.",
    features: ["Central courtyard", "Pool and cabana", "Cinema room", "Golf course views", "Staff accommodation", "Double-height entry"],
    coordinates: "25.0580° N, 55.2814° E",
  },
  {
    slug: "canal-loft",
    title: "Canal Loft",
    location: "Business Bay, Dubai",
    neighborhood: "Business Bay",
    price: 9800,
    type: "For rent",
    category: "Apartment",
    beds: 1,
    baths: 2,
    area: 1120,
    year: 2024,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "A richly textured loft for an effortless work-and-weekend rhythm.",
    description: "Canal Loft has been considered down to its smallest detail: warm timber, tailored storage, a quiet home office nook, and a wide living room made for city evenings. The canal promenade is directly outside.",
    features: ["Canal views", "Co-working lounge", "Rooftop pool", "Pet-friendly", "Dedicated parking", "24-hour reception"],
    coordinates: "25.1841° N, 55.2638° E",
  },
  {
    slug: "azure-penthouse",
    title: "Azure Penthouse",
    location: "Dubai Marina, Dubai",
    neighborhood: "Dubai Marina",
    price: 6800000,
    type: "For sale",
    category: "Penthouse",
    beds: 4,
    baths: 5,
    area: 4280,
    year: 2025,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85",
    ],
    summary: "A top-floor escape with wraparound terraces and a full horizon of water.",
    description: "Azure Penthouse occupies an entire private floor, wrapped by broad terraces that follow the marina from sunrise through the evening. Inside, a gallery-like living room, statement kitchen, and separate family room make it as liveable as it is memorable.",
    features: ["Private lift lobby", "Wraparound terrace", "Wine room", "Four parking bays", "Private gym", "Panoramic marina views"],
    coordinates: "25.0839° N, 55.1400° E",
    featured: true,
  },
];

export const formatPrice = (price: number, type: Property["type"]) =>
  type === "For rent"
    ? `AED ${price.toLocaleString("en-US")}/mo`
    : `AED ${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;

export const getProperty = (slug: string) => properties.find((property) => property.slug === slug);
