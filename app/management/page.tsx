import Image from "next/image";

export default function ManagementPage() {
  return (
    <main className="bg-white">
      <section className="relative h-125 overflow-hidden">
        <Image
          src="/hero/management.webp"
          alt="Gerard Towers Management"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
              Management
            </p>

            <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
              Building Management
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-100">
              Gerard Towers is supported by professional management, 24/7
              doorman coverage, an on-premises Resident Manager/Superintendent,
              an on-site Management Office open Monday through Friday from
              9:00 AM to 5:00 PM, and dedicated building staff providing
              resident services and daily building operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              24/7 Doorman Coverage
            </h2>

            <p className="leading-7 text-gray-600">
              Gerard Towers offers around-the-clock doorman service supporting
              building access, visitors, deliveries, lobby operations, package
              handling, and resident assistance.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Resident Manager
            </h2>

            <p className="leading-7 text-gray-600">
              An on-premises Resident Manager/Superintendent oversees daily
              building operations, maintenance coordination, staff management,
              and building systems.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Management Office
            </h2>

            <p className="leading-7 text-gray-600">
              The on-site Management Office is available Monday through Friday,
              from 9:00 AM to 5:00 PM, to assist residents with building
              services, questions, and administrative matters.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              BuildingLink
            </h2>

            <p className="leading-7 text-gray-600">
              Gerard Towers utilizes BuildingLink to communicate with residents
              regarding notices, complaints, package updates, maintenance
              requests, and other building-related information.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Resident Services
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              Residents may contact the building office or management for
              questions related to maintenance requests, building operations,
              move procedures, amenity access, package matters, complaints,
              and general building services.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Through BuildingLink, residents can stay informed, submit
              requests, receive package notifications, and access important
              building communications.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Building Staff & Services
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• 24/7 doorman coverage</li>
              <li>• Resident Manager/Superintendent on premises</li>
              <li>• Management Office on premises (Mon–Fri, 9 AM–5 PM)</li>
              <li>• 9 porters supporting building upkeep</li>
              <li>• 3 handymen supporting maintenance and repairs</li>
              <li>• Resident communication through BuildingLink</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Porters
            </h2>

            <p className="leading-7 text-gray-600">
              A team of 9 porters helps maintain the cleanliness, appearance,
              and daily care of common areas, amenities, and shared building
              spaces.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Handymen
            </h2>

            <p className="leading-7 text-gray-600">
              A team of 3 handymen assists with maintenance needs, repairs,
              resident service requests, and support of building systems and
              operations.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Daily Operations
            </h2>

            <p className="leading-7 text-gray-600">
              Management and staff coordinate maintenance, amenities, common
              areas, vendors, resident communications, package services, and
              the overall operation of the property.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 text-sm leading-6 text-gray-600 shadow-sm">
          <strong className="text-gray-900">Note:</strong> Management contacts,
          office hours, staffing, BuildingLink services, procedures, and
          building policies may change. Residents should confirm current
          information directly with the building office or management.
        </div>
      </section>
    </main>
  );
}