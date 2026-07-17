"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Apartments", href: "/apartments" },
  { label: "Amenities", href: "/amenities" },
  { label: "Neighborhood", href: "/neighborhood" },
  { label: "Management", href: "/management" },
  { label: "Contact", href: "/contact" },
];

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=70-25+Yellowstone+Blvd+Forest+Hills+NY+11375";

function LocationPin() {
  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Gerard Towers location in Google Maps"
      className="flex items-center gap-2 rounded-full px-3 py-2 text-black transition-colors hover:bg-gray-100"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C12 21 19 15.5 19 9.5C19 5.36 15.87 2 12 2C8.13 2 5 5.36 5 9.5C5 15.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="12"
          cy="9.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>

      <span className="hidden text-sm font-medium xl:inline">
        70-25 Yellowstone Blvd
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 text-blacknone">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-3 py-2">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
            aria-label="Gerard Towers home"
          >
            <Image
              src="/logo-4.png"
              alt="Gerard Towers"
              width={300}
              height={180}
              className="h-24 w-auto md:h-30"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap tracking-wide text-black transition-colors hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center: Mobile Hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-3xl font-bold text-black transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Right: Google Maps Pin */}
        <div className="flex justify-end">
          <LocationPin />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}