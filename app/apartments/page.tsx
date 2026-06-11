import Image from "next/image";
import ApartmentPlan from "../components/ApartmentPlan";
import ApartmentLinesTable from "../components/ApartmentLinesTable";

export default function ApartmentsPage() {
  return (
    <main className="bg-white">
      <section className="relative h-125 overflow-hidden">
        <Image
          src="/hero/apartments.webp"
          alt="Gerard Towers Apartments"
          fill
          priority
          className="object-cover object-[center_15%]"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
              Apartments
            </p>

            <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
              Apartment Lines at Gerard Towers
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-100">
              Explore the apartment lines at Gerard Towers. Select a line on the
              building plan or review the table below for layout information,
              approximate square footage, and available floor plan downloads.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <ApartmentPlan />
        </div>
      </section>

      <ApartmentLinesTable />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl bg-gray-50 p-6 text-sm leading-6 text-gray-600">
          <strong className="text-gray-900">Note:</strong> Apartment sizes,
          layouts, and floor plan details are approximate and may vary by floor
          or individual apartment.
        </div>
      </section>
    </main>
  );
}