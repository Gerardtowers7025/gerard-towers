"use client";

import Image from "next/image";
import { useState } from "react";

const amenities = [
  {
    title: "Outdoor Pool",
    description:
      "A seasonal outdoor pool area available for residents to enjoy during the warmer months.",
    images: [
      "/amenities/pool/1.webp",
      "/amenities/pool/2.webp",
      "/amenities/pool/3.webp",
      "/amenities/pool/4-1.webp",
      "/amenities/pool/5.webp",
      "/amenities/pool/6.webp",
      "/amenities/pool/7.webp",
      "/amenities/pool/8.webp",
      "/amenities/pool/9.webp",
      "/amenities/pool/10.webp",
    ],
  },
  {
    title: "Fitness Center",
    description:
      "An on-site fitness room with equipment for convenient everyday workouts.",
    images: [
      "/amenities/gym/1.webp",
      "/amenities/gym/2.webp",
      "/amenities/gym/3.webp",
      "/amenities/gym/4.webp",
    ],
  },
  {
    title: "Laundry Room",
    description:
      "A resident laundry room located within the building for everyday convenience.",
    images: [
      "/amenities/laundry/1.webp",
      "/amenities/laundry/2-1.webp",
      "/amenities/laundry/3.webp",
      "/amenities/laundry/4.webp",
    ],
  },
  {
    title: "Courtyard",
    description:
      "Outdoor shared space for residents to enjoy fresh air, quiet moments, and community space. A garden area for planting is also available.",
    images: [
      "/amenities/courtyard/1.webp",
      "/amenities/courtyard/2.webp",
      "/amenities/courtyard/3.webp",
      "/amenities/courtyard/4.webp",
      "/amenities/courtyard/5.webp",
    ],
  },
  {
    title: "Playroom",
    description: "A dedicated indoor play area for families and children.",
    images: [
      "/amenities/playroom/1.webp",
      "/amenities/playroom/2.webp",
    ],
  },
  {
    title: "Bike Room",
    description:
      "Bike storage available for residents who need a convenient place to keep bicycles.",
    images: [
      "/amenities/bike/1.webp",
      "/amenities/bike/2.webp",
      "/amenities/bike/3.webp",
      "/amenities/bike/4.webp",
    ],
  },
  {
    title: "Private Garage",
    description:
      "Private garage parking available separately for residents, subject to availability.",
    images: [
      "/amenities/garage/1.webp",
      "/amenities/garage/2.webp",
      "/amenities/garage/3.webp",
      "/amenities/garage/4.webp",
    ],
  },
  {
    title: "Lobby",
    description:
      "A staffed lobby providing daily support, package assistance, and building access oversight.",
    images: [
      "/amenities/lobby/1.webp",
      "/amenities/lobby/2.webp",
      "/amenities/lobby/3.webp",
      "/amenities/lobby/4.webp",
      "/amenities/lobby/5.webp",
      "/amenities/lobby/6.webp",
      "/amenities/lobby/7.webp",
      "/amenities/lobby/8.webp",
      "/amenities/lobby/10.webp",
      "/amenities/lobby/11.webp",
    ],
  },
  {
    title: "Library/Party Room",
    description:
      "A dedicated space for reading, socializing, and hosting events. Vending available.",
    images: [
      "/amenities/party/1.webp",
      "/amenities/party/2.webp",
      "/amenities/party/3.webp",
      "/amenities/party/4.webp",
      "/amenities/party/5.webp",
      "/amenities/party/6.webp",
    ],
  },
  {
    title: "Sauna Room",
    description:
      "A relaxing wellness space designed to help residents unwind and recharge.",
    images: [
      "/amenities/sauna/1.webp",
      "/amenities/sauna/2.webp",
    ],
  },
  {
    title: "Package Room",
    description:
      "A secure location for receiving and storing packages.",
    images: [
      "/amenities/package/1.webp",
      "/amenities/package/2.webp",
      "/amenities/package/3.webp",
    ],
  },
];

export default function AmenitiesPage() {
  const [activeGallery, setActiveGallery] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex !== null ? activeGallery[activeIndex] : null;

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
    src="/hero/1.webp"
    alt="Amenities at Gerard Towers"
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/60" />

  <div className="absolute inset-0 flex items-center justify-center px-6">
    <div className="max-w-4xl text-center text-white">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
        Amenities
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
        Amenities at Gerard Towers
      </h1>

      <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-100">
        Gerard Towers offers resident amenities designed for convenience,
        recreation, comfort, and everyday living. Amenities like pool, garage, fitness center, bike room and private use of party room are fee-based.
      </p>
    </div>
  </div>
</section>

      {amenities.map((amenity, index) => (
        <section
          key={amenity.title}
          className={`px-6 py-16 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                {amenity.title}
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                {amenity.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {amenity.images.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openGallery(amenity.images, imageIndex)}
                  className="group relative h-72 overflow-hidden rounded-2xl bg-gray-200 text-left"
                >
                  <Image
                    src={image}
                    alt={`${amenity.title} ${imageIndex + 1}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black opacity-0 transition group-hover:opacity-100">
                    View Gallery
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-gray-50 p-6 text-sm leading-6 text-gray-600">
          <strong className="text-gray-900">Note:</strong> Amenity access,
          hours, fees, and rules may vary. Residents should contact the building
          office or management for current information.
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
                  alt="Amenity gallery image"
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

            <div className="mt-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">
              {activeIndex + 1} / {activeGallery.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}