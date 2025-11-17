import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,255,255,0.08),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              >
                Escape to beautifully curated homes.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-rose-300 to-amber-200"> Toshi Homes</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mt-6 text-lg text-white/80 max-w-xl"
              >
                Book hand-picked stays with cinematic views, warm interiors and seamless check-ins. Discover mountain cabins, city lofts and beachfront villas designed for moments that matter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#search" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition">Start exploring</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white/90 ring-1 ring-white/20 hover:bg-white/10 transition">How it works</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-10 grid grid-cols-3 gap-6 text-center"
              >
                {["Curated", "Verified", "24/7"].map((label, i) => (
                  <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-sm p-4 ring-1 ring-white/10">
                    <p className="text-2xl font-bold text-white">{["200+","4.9","Support"][i]}</p>
                    <p className="text-white/70 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative h-[520px] w-full"
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-fuchsia-500/40 to-rose-500/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-black/40">
                {/* 3D scene embed (Spline). Replace with your own URL for custom characters/rooms */}
                <Spline scene="https://prod.spline.design/7ifEJk7bEMk2W7pn/scene.splinecode" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
