"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md shadow-lg text-white px-6 py-4 flex justify-between">
      <div className="flex justify-start gap-3">
        <span className="text-2xl">🐾</span>
        <span className="text-xl font-bold text-orange-600">Mascotas</span>
      </div>

      <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/about" className="hover:text-orange-600 transition">
          Acerca de
        </Link>
        <Link href="/donaciones" className="hover:text-orange-600 transition">
          Donaciones
        </Link>
        <Link href="/registro" className="hover:text-orange-600 transition">
          Regístrate
        </Link>
      </nav>
    </header>
  );
}
