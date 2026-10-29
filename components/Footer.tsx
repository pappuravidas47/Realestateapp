import Link from "next/link";

const footerLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.35fr_1fr_1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center border border-white/70 text-xs font-bold tracking-tighter">H</span>
            <span className="display-font text-xl tracking-[0.08em]">HAVENLY</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">A considered approach to finding a place that feels wholly yours. We represent exceptional homes and the lives lived within them.</p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Explore</p>
          <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="w-fit text-sm text-white/75 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Visit us</p>
          <p className="mt-5 text-sm leading-7 text-white/75">The Pavilion, Downtown Dubai<br />Dubai, United Arab Emirates</p>
          <a href="tel:+97145550198" className="mt-3 block w-fit text-sm text-white transition hover:text-gold">+971 4 555 0198</a>
          <a href="mailto:hello@havenly.example" className="mt-2 block w-fit text-sm text-white transition hover:text-gold">hello@havenly.example</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-[0.68rem] tracking-[0.12em] text-white/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Havenly Real Estate</span>
          <span>Designed for intentional living</span>
        </div>
      </div>
    </footer>
  );
}
