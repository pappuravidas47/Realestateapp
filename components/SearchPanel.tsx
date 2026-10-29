export default function SearchPanel() {
  return (
    <form action="/properties" className="relative z-10 mx-auto -mt-10 w-[min(100%-2rem,1050px)] bg-white p-5 shadow-[0_18px_50px_rgb(16_28_44/14%)] sm:w-[min(100%-4rem,1050px)] sm:p-7">
      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
        <label className="block">
          <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.13em] text-ink-soft uppercase">Location</span>
          <select name="location" className="w-full border-b border-slate-300 bg-transparent py-2 text-sm text-ink outline-none transition focus:border-gold">
            <option value="">All locations</option>
            <option>Downtown</option>
            <option>Dubai Marina</option>
            <option>Palm Jumeirah</option>
            <option>Al Barari</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.13em] text-ink-soft uppercase">Looking for</span>
          <select name="type" className="w-full border-b border-slate-300 bg-transparent py-2 text-sm text-ink outline-none transition focus:border-gold">
            <option value="">Buy or rent</option>
            <option value="For sale">To buy</option>
            <option value="For rent">To rent</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.13em] text-ink-soft uppercase">Home type</span>
          <select name="category" className="w-full border-b border-slate-300 bg-transparent py-2 text-sm text-ink outline-none transition focus:border-gold">
            <option value="">Any property</option>
            <option>House</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
          </select>
        </label>
        <button type="submit" className="bg-ink px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:bg-gold-dark">Search homes</button>
      </div>
    </form>
  );
}
