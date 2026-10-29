import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "Our story", description: "The people and point of view behind Havenly." };

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Our story</p>
            <h1 className="display-font mt-4 max-w-3xl text-5xl leading-[1.03] sm:text-6xl">Finding home should feel deeply personal.</h1>
          </div>
          <p className="max-w-lg text-base leading-8 text-white/70">Havenly was founded on a simple belief: the best real estate advice starts with curiosity about the person, not just the property.</p>
        </div>
      </section>
      <section className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative aspect-[1.05] overflow-hidden bg-mist">
          <Image src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85" alt="Light-filled Havenly living room" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="lg:pl-8">
          <p className="eyebrow">A different kind of agency</p>
          <h2 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">Good advice, beautifully delivered.</h2>
          <p className="mt-6 text-base leading-8 text-ink-soft">We are a small, senior team with a wide view of Dubai and an unhurried way of working. We offer the market knowledge you need, without the noise you do not.</p>
          <p className="mt-4 text-base leading-8 text-ink-soft">Whether you are buying, renting, or selling, you will work directly with an advisor who has the time to understand the details that make a house feel like home.</p>
        </div>
      </section>
      <section className="bg-sand py-20 sm:py-28">
        <div className="container-page">
          <p className="eyebrow">What guides us</p>
          <div className="mt-8 grid gap-px bg-white sm:grid-cols-3">
            {[['Perspective', 'Local knowledge is valuable when it is shared plainly and honestly.'], ['Care', 'We treat each decision with the care it deserves, whether it is your first home or your fifth.'], ['Continuity', 'Our relationship does not end at the handover. We are here for the next chapter too.']].map(([title, copy]) => <div key={title} className="p-7 sm:p-9"><h2 className="display-font text-3xl">{title}</h2><p className="mt-4 text-sm leading-7 text-ink-soft">{copy}</p></div>)}
          </div>
          <Link href="/contact" className="mt-9 inline-flex bg-ink px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:bg-gold-dark">Start a conversation</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
