"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "Forest Hills, Queens",
    title: "Gerard Towers",
    description:
      "A full-service cooperative residence located at 70-25 Yellowstone Boulevard in the heart of Forest Hills.",
    image: "/hero/gt.webp",
  },
  {
    eyebrow: "Apartment Lines",
    title: "Explore Our Residences",
    description:
      "View apartment lines, layout details, approximate square footage, and downloadable floor plans.",
    image: "/hero/apts.webp",
    buttonText: "View Apartments",
    href: "/apartments",
  },
  {
    eyebrow: "Amenities",
    title: "Comfort & Convenience",
    description:
      "Discover resident amenities including the pool, fitness center, laundry room, courtyard, garage, and lobby services.",
    image: "/hero/1.webp",
    buttonText: "View Amenities",
    href: "/amenities",
  },
  {
    eyebrow: "Neighborhood",
    title: "Life in Forest Hills",
    description:
      "Close to Austin Street, shopping, dining, parks, and everyday neighborhood conveniences.",
    image: "/hero/neighborhood2.webp",
    buttonText: "Explore Neighborhood",
    href: "/neighborhood",
  },
];

const SLIDE_DELAY = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearSlideTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  function startSlideTimer() {
    clearSlideTimer();

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DELAY);
  }

  function goToSlide(index: number) {
    setCurrent(index);
    startSlideTimer();
  }

  function goToPrevious() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideTimer();
  }

  function goToNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
    startSlideTimer();
  }

  useEffect(() => {
    startSlideTimer();

    return () => clearSlideTimer();
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[75vh] overflow-hidden text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover object-top"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-20">
        <div
          key={slide.title}
          className="max-w-2xl animate-[fadeSlide_0.8s_ease-out]"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
            {slide.eyebrow}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {slide.title}
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-200">
            {slide.description}
          </p>

          {slide.buttonText && slide.href && (
            <Link
              href={slide.href}
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              {slide.buttonText}
            </Link>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-5xl text-white transition hover:scale-150"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-5xl text-white transition hover:scale-150"
        aria-label="Next Slide"
      >
        ›
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to ${item.title}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}