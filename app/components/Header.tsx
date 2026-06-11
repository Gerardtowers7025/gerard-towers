"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Apartments", href: "/apartments" },
    { label: "Amenities", href: "/amenities" },
    { label: "Neighborhood", href: "/neighborhood" },
    { label: "Management", href: "/management" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Gerard Towers"
            width={0}
            height={0}
            sizes="100vw"
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-wide transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="text-3xl font-bold text-black md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}