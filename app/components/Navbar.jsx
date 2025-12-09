"use client";

const links = [
  { href: "#capabilities", label: "Features" },
  { href: "#specs", label: "Specifications" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="section flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">
            E
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              EMMO AI
            </span>
            <span className="text-[11px] text-slate-500">
              Travel Robot
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-1.5 text-xs font-medium text-white shadow-md hover:bg-teal-300 transition-colors"
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
