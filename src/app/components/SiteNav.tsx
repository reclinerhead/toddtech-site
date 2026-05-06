import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/75 backdrop-blur-[14px] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex flex-col leading-tight gap-px group">
            <div className="font-display text-[1.2rem] font-bold tracking-[-0.01em]">
              <span className="text-cyan-400">ToddTech</span>
              <span className="text-white"> LLC</span>
            </div>
            <span className="text-[0.6rem] text-gray-500 tracking-[0.18em] uppercase">
              Todd Wyatt · Kalamazoo, MI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/#portfolio"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="bg-cyan-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-cyan-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">Open menu</span>☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
