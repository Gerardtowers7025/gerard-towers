"use client";

import { useState } from "react";
import Image from "next/image";

const amenities = [
  {
    title: "Gym",
    cover: "/amenities/gym/1.webp",
    short: "A convenient fitness space available for residents.",
    details:
      "Stay active in our spacious on-site fitness center, featuring a wide variety of modern, regularly updated cardio and strength-training equipment to accommodate all fitness levels. The gym is open daily from 5:00 AM to 10:00 PM for convenient access, with membership available for an annual fee.",
    images: [
      "/amenities/gym/1.webp",
      "/amenities/gym/2.webp",
      "/amenities/gym/3.webp",
      "/amenities/gym/4.webp",
    ],
  },
  {
    title: "Seasonal Pool",
    cover: "/amenities/pool/1.webp",
    short: "A seasonal outdoor pool for relaxation and recreation.",
    details:
      "Residents can enjoy our seasonal Olympic-size outdoor swimming pool, featuring both sunny and shaded lounge areas for relaxing throughout the summer. The pool area also includes a separate, secure children's pool, making it ideal for families. Certified lifeguards are on duty during operating hours to ensure a safe and enjoyable experience for everyone. Residents also have access to a dedicated barbecue area, perfect for outdoor gatherings with family and friends during warm afternoons and evenings.",
    images: [
      "/amenities/pool/1.webp",
      "/amenities/pool/2.webp",
      "/amenities/pool/3.webp",
      "/amenities/pool/4-1.webp",
      "/amenities/pool/5.webp",
      "/amenities/pool/6.webp",
      "/amenities/pool/9.webp",
    ],
  },
  {
    title: "Playroom",
    cover: "/amenities/playroom/1.webp",
    short: "A dedicated indoor space for children and families.",
    details: "Our bright and welcoming indoor playroom provides a safe, fun, and engaging space for children to play year-round.",
    images: ["/amenities/playroom/1.webp", "/amenities/playroom/2.webp"],
  },
  {
    title: "Laundry Room",
    cover: "/amenities/laundry/1.webp",
    short: "On-site laundry facilities for resident convenience.",
    details:
      "Our spacious resident laundry room features a large number of modern, high-capacity washers and dryers, providing ample availability and convenience for everyday laundry needs. Conveniently located within the building, the laundry facility is designed to make routine chores quick and hassle-free.",
    images: [
      "/amenities/laundry/1.webp",
      "/amenities/laundry/2-1.webp",
      "/amenities/laundry/3.webp",
      "/amenities/laundry/4.webp",
    ],
  },
  {
    title: "Courtyard",
    cover: "/amenities/courtyard/3.webp",
    short: "Outdoor space and garden for residents to enjoy.",
    details:
      "Enjoy our beautifully landscaped courtyard, a peaceful outdoor retreat where residents can relax, socialize, and enjoy fresh air in a tranquil setting. The courtyard also features a dedicated community garden with planting areas, allowing residents to grow flowers, herbs, and seasonal plants while fostering a welcoming sense of community. The space is also available for resident gatherings, with reservations accepted for private parties and special events.",
    images: [
      "/amenities/courtyard/1.webp",
      "/amenities/courtyard/2.webp",
      "/amenities/courtyard/3.webp",
      "/amenities/courtyard/4.webp",
      "/amenities/courtyard/5.webp",
    ],
  },
  {
    title: "Lobby",
    cover: "/amenities/lobby/3.webp",
    short: "An attended lobby with full-service building access.",
    details:
      "Welcome home through our newly renovated lobby and waiting area, staffed by a professional 24-hour doorman team. Residents enjoy personalized daily assistance, including package handling, delivery support, luggage and shopping carts, visitor access management, and building security, ensuring convenience and peace of mind around the clock.",
    images: [
      "/amenities/lobby/2.webp",
      "/amenities/lobby/3.webp",
      "/amenities/lobby/4.webp",
      "/amenities/lobby/5.webp",
      "/amenities/lobby/6.webp",
      "/amenities/lobby/7.webp",
      "/amenities/lobby/10.webp",
    ],
  },
  {
    title: "Bike Room",
    cover: "/amenities/bike/1.webp",
    short: "Secure bike storage available in the building.",
    details:
      "Our secure on-site bike room provides residents with a convenient and organized place to store their bicycles year-round. The facility offers 24-hour access for added convenience, allowing residents to come and go on their own schedule. Bike storage is available for an annual fee, providing a safe and easily accessible solution for everyday cyclists.",
    images: [
      "/amenities/bike/1.webp",
      "/amenities/bike/2.webp",
      "/amenities/bike/3.webp",
      "/amenities/bike/4.webp",
    ],
  },
  {
    title: "Private Garage",
    cover: "/amenities/garage/3.webp",
    short: "Private garage parking available on-site.",
    details:
      "Enjoy the convenience of on-site indoor parking with immediate availability, 24-hour attendant service, and direct access to the building.",
    images: [
      "/amenities/garage/1.webp",
      "/amenities/garage/2.webp",
      "/amenities/garage/3.webp",
      "/amenities/garage/4.webp",
    ],
  },
  {
    title: "Library/Party Room",
    cover: "/amenities/party/1.webp",
    short:
      "A dedicated space for reading, socializing, and hosting events. Vending available.",
    details:
      "Our Library and Party Room offers a comfortable and versatile space for residents to read, relax, socialize, or host private gatherings. Whether you're enjoying a quiet afternoon with a book or celebrating a special occasion with family and friends, this welcoming space is available by reservation for private events. Convenient vending machines are also available for snacks and refreshments.",
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
    title: "Sauna Rooms",
    cover: "/amenities/sauna/1.webp",
    short:
      "A relaxing wellness space designed to help residents unwind and recharge.",
    details:
      "Unwind in our relaxing sauna, offering residents a peaceful space to recharge and enjoy the wellness benefits of heat therapy. Conveniently located near the fitness center and pool, the sauna is complemented by clean, well-maintained locker rooms and private shower facilities for a complete wellness experience.",
    images: [
      "/amenities/sauna/1.webp",
      "/amenities/sauna/2.webp",
    ],
  },
  {
    title: "Package Room",
    cover: "/amenities/package/1.webp",
    short:
      "A secure location for receiving and storing packages.",
    details:
      "Our secure package room provides a safe and convenient location for receiving and storing deliveries. Residents enjoy peace of mind knowing that packages are securely held until pickup, helping protect deliveries from loss or theft. The package room is professionally managed to ensure efficient handling of deliveries and easy access for residents during building hours.",
    images: [
      "/amenities/package/1.webp",
      "/amenities/package/2.webp",
      "/amenities/package/3.webp",
    ],
  },
];

export default function AmenitiesPreview() {
  const [selectedAmenity, setSelectedAmenity] =
    useState<null | (typeof amenities)[0]>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = selectedAmenity?.images[activeIndex];

  function openAmenity(amenity: (typeof amenities)[0]) {
    setSelectedAmenity(amenity);
    setActiveIndex(0);
  }

  function closeAmenity() {
    setSelectedAmenity(null);
    setActiveIndex(0);
  }

  function previousImage() {
    if (!selectedAmenity) return;

    setActiveIndex((prev) =>
      (prev - 1 + selectedAmenity.images.length) %
      selectedAmenity.images.length
    );
  }

  function nextImage() {
    if (!selectedAmenity) return;

    setActiveIndex((prev) => (prev + 1) % selectedAmenity.images.length);
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Amenities
          </p>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            Building Amenities at a Glance
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Explore the spaces and services available throughout Gerard Towers,
            including recreation, convenience, storage, parking, and resident
            support. Amenities like pool, garage, fitness center, bike room and
            private use of party room are fee-based.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <button
              key={amenity.title}
              type="button"
              onClick={() => openAmenity(amenity)}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm"
            >
              <div className="relative h-44 bg-gray-200">
              <Image
                src={amenity.cover}
                alt={amenity.title}
                fill
                loading="lazy"
                quality={65}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover"
                placeholder="empty"
              />
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-black">
                  {amenity.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {amenity.short}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedAmenity && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeAmenity}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeAmenity}
              className="absolute right-4 top-4 z-20 rounded-full bg-white px-3 py-1 text-xl text-black shadow hover:bg-gray-100"
            >
              ×
            </button>

            <div className="relative h-[55vh] min-h-90 bg-black">
              <Image
                src={activeImage}
                alt={selectedAmenity.title}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
              />

              <button
                type="button"
                onClick={previousImage}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-6xl text-white transition hover:scale-125"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-6xl text-white transition hover:scale-125"
              >
                ›
              </button>
            </div>

            <div className="p-6">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-black!">
                    {selectedAmenity.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    {selectedAmenity.details}
                  </p>
                </div>

                <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                  {activeIndex + 1} / {selectedAmenity.images.length}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                {selectedAmenity.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-20 overflow-hidden rounded-xl border-2 ${
                      index === activeIndex
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                  <Image
                    src={image}
                    alt={`${selectedAmenity.title} ${index + 1}`}
                    fill
                    loading="lazy"
                    quality={50}
                    sizes="100px"
                    className="object-cover"
                  />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}