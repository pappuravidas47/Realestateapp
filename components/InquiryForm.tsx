"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm({ propertyName }: { propertyName?: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="bg-sand p-7 text-center"><p className="display-font text-2xl">Thank you.</p><p className="mt-2 text-sm leading-6 text-ink-soft">A Havenly advisor will be in touch shortly.</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold tracking-[0.1em] text-ink-soft uppercase">First name<input required name="firstName" className="mt-2 w-full border border-slate-200 px-3 py-3 text-sm font-normal tracking-normal text-ink normal-case outline-none focus:border-gold" /></label>
        <label className="text-xs font-bold tracking-[0.1em] text-ink-soft uppercase">Last name<input required name="lastName" className="mt-2 w-full border border-slate-200 px-3 py-3 text-sm font-normal tracking-normal text-ink normal-case outline-none focus:border-gold" /></label>
      </div>
      <label className="block text-xs font-bold tracking-[0.1em] text-ink-soft uppercase">Email address<input required type="email" name="email" className="mt-2 w-full border border-slate-200 px-3 py-3 text-sm font-normal tracking-normal text-ink normal-case outline-none focus:border-gold" /></label>
      <label className="block text-xs font-bold tracking-[0.1em] text-ink-soft uppercase">Message<textarea required name="message" defaultValue={propertyName ? `I'd like to arrange a viewing for ${propertyName}.` : ""} rows={4} className="mt-2 w-full resize-y border border-slate-200 px-3 py-3 text-sm font-normal leading-6 tracking-normal text-ink normal-case outline-none focus:border-gold" /></label>
      <button type="submit" className="w-full bg-ink px-5 py-4 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:bg-gold-dark">Send enquiry</button>
      <p className="text-center text-xs leading-5 text-ink-soft">By submitting, you agree to be contacted about this property.</p>
    </form>
  );
}
