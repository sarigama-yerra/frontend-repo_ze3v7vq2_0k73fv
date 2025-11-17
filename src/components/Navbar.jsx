import { Menu, Home, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/20 grid place-items-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide text-lg">toshi homes</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#stays" className="hover:text-white transition">Stays</a>
            <a href="#experiences" className="hover:text-white transition">Experiences</a>
            <a href="#why" className="hover:text-white transition">Why Toshi</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-3 py-1.5 rounded-full transition">
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="flex items-center gap-2 text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 px-4 py-2 rounded-full shadow-lg shadow-rose-500/30">
              <User className="h-4 w-4" />
              <span className="text-sm font-semibold">Sign in</span>
            </button>
            <button className="md:hidden text-white/90 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
