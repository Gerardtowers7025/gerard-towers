import ApartmentPlan from "./ApartmentPlan";

export default function ApartmentsPreview() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Apartments
          </p>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            Explore Apartment Lines & Layouts
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            View the building’s apartment lines, floor plans, layouts,
            bedrooms, bathrooms, and approximate square footage throughout
            Gerard Towers. <br />Click on each line for more details and photos of the apartment plans.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <ApartmentPlan />
        </div>
      </div>
    </section>
  );
}