import Link from "next/link";

export default function ManagementPreview() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="/images/amenities/back.webp"
          alt="Gerard Towers Management"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
              Management
            </p>

            <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
              Professionally Managed for Everyday Living
            </h2>

            <p className="text-lg leading-8 text-gray-200">
              On-site staff, 24/7 lobby support, BuildingLink communication,
              and professional management help keep Gerard Towers running
              smoothly every day.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "On-Site Support",
                text: "Resident Manager/Superintendent, porters, handymen, and staff support daily building operations.",
              },
              {
                title: "Resident Communication",
                text: "BuildingLink is used for notices, package updates, service requests, complaints, and building information.",
              },
              {
                title: "Daily Operations",
                text: "Management coordinates maintenance, vendors, common areas, amenities, and resident services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/95 p-6 text-center shadow-xl backdrop-blur"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/management"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Learn About Management
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}