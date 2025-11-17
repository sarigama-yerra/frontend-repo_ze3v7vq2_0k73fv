import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ location, dates, guests: String(guests) }).toString();
    const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
    fetch(`${baseUrl}/api/search?${params}`)
      .then((r) => r.json())
      .then((data) => alert(`Found ${data.count} stays in ${location || 'selected area'}`))
      .catch(() => alert("Search service is not available yet."));
  };

  return (
    <form onSubmit={handleSearch} className="-mt-16 relative z-20 mx-auto max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-2xl">
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 ring-1 ring-black/10">
          <MapPin className="h-5 w-5 text-rose-500" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where to?"
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 ring-1 ring-black/10">
          <Calendar className="h-5 w-5 text-fuchsia-600" />
          <input
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="Add dates"
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 ring-1 ring-black/10">
          <Users className="h-5 w-5 text-indigo-600" />
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder="Guests"
            className="w-full outline-none text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-semibold rounded-xl px-6 py-3 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50"
        >
          Search
        </button>
      </div>
    </form>
  );
}
