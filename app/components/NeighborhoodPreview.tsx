import Link from "next/link";
import Image from "next/image";

export default function NeighborhoodPreview() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          Neighborhood
        </p>

        <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
          In the Heart of Forest Hills
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-600">
          Gerard Towers is located near Austin Street, Yellowstone Boulevard,
          and Gerard Place, placing residents close to shopping, dining, parks,
          services, and everyday neighborhood convenience.
        </p>
<div className="mb-12 overflow-hidden rounded-3xl shadow-lg">
  <div className="relative h-87.5 md:h-125">
    <Image
      src="/images/neighborhood.webp"
      alt="Forest Hills Neighborhood"
      fill
      className="object-cover object-top"
      priority
    />
  </div>
</div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Austin Street
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              Nearby cafés, restaurants, shops, banks, pharmacies, and local
              services.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Parks & Recreation
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              Close to local green spaces, playgrounds, walking areas, and
              community recreation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Everyday Convenience
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              Groceries, medical offices, transportation options, and daily
              essentials nearby.
            </p>
          </div>
<div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left">
  <h3 className="mb-4 text-lg font-semibold text-gray-900">
    Transportation Access
  </h3>

  <div className="relative mb-4 h-20 overflow-hidden rounded-xl bg-white">
    <Image
      src="/neighborhood/EFMR.webp"
      alt="E F M R Subway Lines"
      fill
      className="object-contain"
    />
  </div>

  <p className="text-sm leading-6 text-gray-600">
    Walking distance to the E, F, M, and R subway lines, Forest Hills–71st
    Avenue station, Long Island Rail Road (LIRR), express bus service, and
    major roadways connecting Queens, Manhattan, and Long Island.
  </p>
</div>
        </div>

        <Link
          href="/neighborhood"
          className="mt-10 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Explore the Neighborhood
        </Link>
      </div>
    </section>
  );
}