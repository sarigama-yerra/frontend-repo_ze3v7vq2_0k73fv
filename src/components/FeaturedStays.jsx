import { motion } from "framer-motion";

const stays = [
  {
    id: 1,
    title: "Sunset Cliff Villa",
    location: "Uluwatu, Bali",
    price: 320,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Nordic A-frame Cabin",
    location: "Tromsø, Norway",
    price: 180,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Minimalist City Loft",
    location: "Tokyo, Japan",
    price: 240,
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f06?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function FeaturedStays() {
  return (
    <section id="stays" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured stays</h2>
            <p className="text-slate-600 mt-2">A handpicked selection to spark your next getaway</p>
          </div>
          <a href="#" className="text-rose-600 font-semibold">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay, idx) => (
            <motion.a
              key={stay.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={stay.img} alt={stay.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-lg">${stay.price}/night</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{stay.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{stay.location}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
