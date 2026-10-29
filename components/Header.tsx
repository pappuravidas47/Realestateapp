"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = overlay ? "text-white" : "text-ink";
  const desktopBorder = overlay ? "border-white/15" : "border-slate-200";

  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-30" : "relative z-30 bg-white"}>
      <div className={`mx-auto flex h-20 w-[min(100%-2rem,1200px)] items-center justify-between border-b ${desktopBorder} sm:w-[min(100%-4rem,1200px)]`}>
        <Link href="/" className={`group flex items-center gap-3 ${textColor}`} onClick={() => setIsOpen(false)}>
          <span className="grid size-8 place-items-center border border-current text-xs font-bold tracking-tighter">H</span>
          <span className="display-font text-xl tracking-[0.08em]">HAVENLY</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm transition hover:text-gold ${textColor}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`border px-4 py-2 text-xs font-bold tracking-[0.12em] uppercase transition hover:bg-white hover:text-ink ${overlay ? "border-white text-white" : "border-ink text-ink hover:border-ink"}`}>
            Book a viewing
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`grid size-10 place-items-center md:hidden ${textColor}`}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "top-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-px w-5 bg-current transition ${isOpen ? "top-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-20 border-b border-slate-200 bg-white p-6 shadow-xl md:hidden">
          <nav className="mx-auto flex w-[min(100%,1200px)] flex-col gap-5" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="display-font text-2xl text-ink">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2 w-fit bg-ink px-5 py-3 text-xs font-bold tracking-[0.12em] text-white uppercase">
              Book a viewing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
