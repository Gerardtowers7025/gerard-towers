"use client";

import { useState } from "react";
import Image from "next/image";

const neighborhoodImages = [
  { title: "Austin Street", image: "/neighborhood/Austin Street.webp" },
  { title: "Citi Field", image: "/neighborhood/citi field.webp" },
  {
    title: "Flushing Meadows Corona Park",
    image: "/neighborhood/Flushing Meadows Corona Park.webp",
  },
  {
    title: "Forest Hills Gardens",
    image: "/neighborhood/forest hills gardens.webp",
  },
  {
    title: "Forest Hills Stadium",
    image: "/neighborhood/forest hills stadium.webp",
  },
  { title: "Forest Park", image: "/neighborhood/forest park.webp" },
  {
    title: "New York Hall of Science",
    image: "/neighborhood/new york hall of science.webp",
  },
  { title: "Queens Museum", image: "/neighborhood/queens museum.webp" },
  { title: "Queens Zoo", image: "/neighborhood/queens zoo.webp" },
  { title: "US Open Tennis", image: "/neighborhood/us open tennis.webp" },
  {
    title: "West Side Tennis Club",
    image: "/neighborhood/westside tennis club.webp",
  },
];

const highlights = [
{
  title: "Dining & Cafés",
  description:
    "Forest Hills is renowned for its vibrant dining scene, offering an exceptional variety of restaurants, cafés, bakeries, and neighborhood favorites just steps from Gerard Towers. Residents can explore the famous Austin Street 'Restaurant Row,' featuring Chinese, Thai, Japanese, Korean, Mediterranean, Italian, Mexican, Greek, vegetarian, and many other international cuisines. The neighborhood also offers steakhouses, diners, coffee shops, bagel stores, bakeries, bars, and fast-casual dining, providing countless options for every taste.",
},
{
  title: "Entertainment & Everyday Convenience",
  description:
    "Everything you need for daily living is just moments away. Residents enjoy convenient access to shopping, grocery stores, pharmacies, banks, medical offices, urgent care centers, fitness clubs, dance studios, the Queens Public Library, movie theater, seasonal farmers markets, organic markets, and a wide variety of local shops and professional services, making Forest Hills one of Queens' most walkable and convenient neighborhoods.",
},
{
  title: "Transportation Access",
  image: "/neighborhood/EFMR.webp",
  description:
    "Gerard Towers offers excellent transportation access, with nearby highways and parkways providing convenient travel throughout New York City and beyond. JFK and LaGuardia airports are both just minutes away by car. Residents are within walking distance of the Forest Hills–71st Avenue subway station, served by the E, F, M, and R lines, as well as the Forest Hills LIRR station. Local and express bus routes also provide convenient connections throughout Queens, Manhattan, Brooklyn, and Long Island.",
},
{
  title: "Schools",
  description:
    "Gerard Towers is zoned for P.S. 144 Col. Jeromus Remsen School, Russell Sage Junior High School, and Forest Hills High School. The neighborhood also offers a variety of private schools, preschools, daycare centers, and early childhood education programs, making it an excellent location for families with children of all ages.",
},
{
  title: "Houses of Worship",
  description:
    "Forest Hills is home to a diverse collection of houses of worship representing many faiths and traditions. Nearby residents have convenient access to churches, synagogues, and other places of worship, including the historic Church-in-the-Gardens, Our Lady Queen of Martyrs Roman Catholic Church, Forest Hills Jewish Center, and Saint Luke's Episcopal Church, along with many other religious and community institutions.",
},
];

export default function NeighborhoodPage() {
  const [activeGallery, setActiveGallery] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryImages = neighborhoodImages.map((item) => item.image);

  const activeImage =
    activeIndex !== null ? activeGallery[activeIndex] : null;

  const activeTitle =
    activeIndex !== null ? neighborhoodImages[activeIndex]?.title : "";

  function openGallery(images: string[], index: number) {
    setActiveGallery(images);
    setActiveIndex(index);
  }

  function closeGallery() {
    setActiveGallery([]);
    setActiveIndex(null);
  }

  function showPrevious() {
    if (activeIndex === null || activeGallery.length === 0) return;

    setActiveIndex(
      (activeIndex - 1 + activeGallery.length) % activeGallery.length
    );
  }

  function showNext() {
    if (activeIndex === null || activeGallery.length === 0) return;

    setActiveIndex((activeIndex + 1) % activeGallery.length);
  }

  return (
    <main className="bg-white">
      <section className="relative h-125 overflow-hidden">
        <Image
          src="/hero/foresthillsgarden1.webp"
          alt="Forest Hills Neighborhood"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
              Neighborhood
            </p>

            <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
              Living in Forest Hills
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-100">
              Gerard Towers is located in Forest Hills, Queens, close to local
              shopping, dining, parks, services, and everyday neighborhood
              conveniences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Neighborhood Highlights
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Forest Hills offers a balance of residential comfort and city
              convenience, with local destinations nearby for shopping,
              recreation, dining, transportation, and daily needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                {"image" in item && item.image && (
                  <div className="relative mb-4 h-24 overflow-hidden rounded-xl bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Around Forest Hills
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Explore nearby destinations, parks, cultural spaces, and local
              landmarks throughout Forest Hills and the surrounding Queens area.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {neighborhoodImages.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openGallery(galleryImages, index)}
                className="group relative h-64 overflow-hidden rounded-2xl bg-gray-200 text-left shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black opacity-0 transition group-hover:opacity-100">
                  View Gallery
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 text-sm leading-6 text-gray-600 shadow-sm">
          <strong className="text-gray-900">Note:</strong> Nearby businesses,
          services, transit options, hours, and availability may change over
          time. Residents and visitors should confirm details directly with each
          location or service provider.
        </div>
      </section>

      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeGallery}
        >
          <div
            className="relative flex w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute right-0 top-0 z-20 rounded-full bg-white px-3 py-1 text-lg font-bold text-black"
            >
              ×
            </button>

            <div className="relative flex w-full items-center justify-center">
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-3xl font-bold text-black hover:bg-white"
              >
                ‹
              </button>

              <div className="relative h-[75vh] w-full max-w-5xl">
                <Image
                  src={activeImage}
                  alt="Neighborhood gallery image"
                  fill
                  className="rounded-xl object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-3xl font-bold text-black hover:bg-white"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">
                {activeIndex + 1} / {activeGallery.length}
              </div>

              {activeTitle && (
                <div className="text-center text-lg font-semibold text-white">
                  {activeTitle}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}