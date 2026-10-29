import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Contact", description: "Talk to a Havenly property advisor." };

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Let&apos;s talk</p>
          <h1 className="display-font mt-3 text-5xl leading-[1.02] sm:text-6xl">What does home look like to you?</h1>
          <p className="mt-6 max-w-md text-base leading-8 text-ink-soft">Tell us where you are in the process and an advisor will be in touch. There is no pressure, only a useful first conversation.</p>
          <div className="mt-10 space-y-6 border-t border-slate-200 pt-7 text-sm">
            <div><p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Call</p><a href="tel:+97145550198" className="mt-1 block w-fit text-ink transition hover:text-gold">+971 4 555 0198</a></div>
            <div><p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Email</p><a href="mailto:hello@havenly.example" className="mt-1 block w-fit text-ink transition hover:text-gold">hello@havenly.example</a></div>
            <div><p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Office</p><p className="mt-1 text-ink">The Pavilion, Downtown Dubai<br />Monday–Saturday, 9am–6pm</p></div>
          </div>
        </div>
        <div className="bg-sand p-6 sm:p-10"><h2 className="display-font text-3xl">Send an enquiry</h2><p className="mt-2 text-sm leading-6 text-ink-soft">We usually reply within one working day.</p><div className="mt-7"><InquiryForm /></div></div>
      </section>
      <Footer />
    </main>
  );
}
