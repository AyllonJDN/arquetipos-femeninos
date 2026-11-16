"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#introduccion", label: "Introducción" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#codificacion", label: "Codificación" },
  { href: "#resultados", label: "Resultados" },
  { href: "#conclusiones", label: "Conclusiones" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-marino text-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-serif font-semibold text-sm sm:text-base tracking-wide"
          onClick={() => setOpen(false)}
        >
          Arquetipos Femeninos
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-acento transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-marino border-t border-white/10 px-4 pb-4 flex flex-col gap-3 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-1 hover:text-acento transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
