"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#portfolio", label: "Work", external: false },
  { href: "/#about", label: "About", external: false },
  { href: "https://github.com/reclinerhead", label: "GitHub", external: true },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/75 backdrop-blur-[14px] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            onClick={close}
            className="flex flex-col leading-tight gap-px group"
          >
            <div className="font-display text-[1.2rem] font-bold tracking-[-0.01em]">
              <span className="text-cyan-400">ToddTech</span>
              <span className="text-white"> LLC</span>
            </div>
            <span className="text-[0.6rem] text-gray-500 tracking-[0.18em] uppercase">
              Todd Wyatt · Kalamazoo, MI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/#contact"
              className="bg-cyan-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-cyan-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <X className="w-5 h-5" strokeWidth={1.75} aria-hidden />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="md:hidden border-t border-white/5 bg-[#030712]/90 backdrop-blur-[14px]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="py-3 text-gray-300 hover:text-white transition-colors text-base border-b border-white/5"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className="py-3 text-gray-300 hover:text-white transition-colors text-base border-b border-white/5"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/#contact"
              onClick={close}
              className="mt-3 mb-1 bg-cyan-600 text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-cyan-700 transition-colors text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SiteNav;
