const apartmentLines = [
  {
    line: "A",
    type: "Studio",
    details: "Classic layout with dining foyer",
    baths: 1,
    terrace: "No",
    sqft: "617",
    downloads: [{ label: "Download", file: "/floorplans/A.pdf" }],
  },
  {
    line: "B",
    type: "Studio",
    details: "Compact layout",
    baths: 1,
    terrace: "No",
    sqft: "613",
    downloads: [{ label: "Download", file: "/floorplans/B.pdf" }],
  },
  {
    line: "C",
    type: "2 Bed",
    details: "Corner layout with terrace",
    baths: 2,
    terrace: "Yes",
    sqft: "1,570",
    downloads: [{ label: "Download", file: "/floorplans/C.pdf" }],
  },
  {
    line: "D",
    type: "2 Bed",
    details: "Terrace, flexible dining/bedroom layout",
    baths: 1,
    terrace: "Yes",
    sqft: "950",
    downloads: [{ label: "Download", file: "/floorplans/D.pdf" }],
  },
  {
    line: "E",
    type: "1 Bed",
    details: "Terrace with dining foyer",
    baths: 1,
    terrace: "Yes",
    sqft: "738",
    downloads: [{ label: "Download", file: "/floorplans/E.pdf" }],
  },
  {
    line: "F",
    type: "Studio",
    details: "Terrace layout",
    baths: 1,
    terrace: "Yes",
    sqft: "642",
    downloads: [{ label: "Download", file: "/floorplans/F.pdf" }],
  },
  {
    line: "G",
    type: "1 Bed",
    details: "Terrace with dining foyer",
    baths: 1,
    terrace: "Yes",
    sqft: "738",
    downloads: [{ label: "Download", file: "/floorplans/G.pdf" }],
  },
  {
    line: "H",
    type: "2 Bed",
    details: "Terrace, flexible layout",
    baths: 1,
    terrace: "Yes",
    sqft: "950",
    downloads: [{ label: "Download", file: "/floorplans/H.pdf" }],
  },
  {
    line: "J",
    type: "2 Bed",
    details: "Corner layout with terrace",
    baths: 2,
    terrace: "Yes",
    sqft: "1,570",
    downloads: [{ label: "Download", file: "/floorplans/J.pdf" }],
  },
  {
    line: "K",
    type: "Studio",
    details: "Compact layout",
    baths: 1,
    terrace: "No",
    sqft: "613",
    downloads: [{ label: "Download", file: "/floorplans/K.pdf" }],
  },
  {
    line: "L",
    type: "Studio",
    details: "Classic layout with dining foyer",
    baths: 1,
    terrace: "No",
    sqft: "617",
    downloads: [{ label: "Download", file: "/floorplans/L.pdf" }],
  },
  {
    line: "M",
    type: "2 Bed",
    details: "Large central layout",
    baths: 2,
    terrace: "No",
    sqft: "1,203",
    downloads: [{ label: "Download", file: "/floorplans/M.pdf" }],
  },
  {
    line: "N",
    type: "2 Bed",
    details: "Large split layout",
    baths: 2,
    terrace: "No",
    sqft: "1,240",
    downloads: [{ label: "Download", file: "/floorplans/N.pdf" }],
  },
  {
    line: "O",
    type: "1 Bed",
    details: "Long layout",
    baths: 1,
    terrace: "No",
    sqft: "752",
    downloads: [{ label: "Download", file: "/floorplans/O.pdf" }],
  },
  {
    line: "P",
    type: "Studio",
    details: "Compact layout",
    baths: 1,
    terrace: "No",
    sqft: "626",
    downloads: [{ label: "Download", file: "/floorplans/P.pdf" }],
  },
  {
    line: "Q",
    type: "Studio",
    details: "Small layout",
    baths: 1,
    terrace: "No",
    sqft: "587",
    downloads: [{ label: "Download", file: "/floorplans/Q.pdf" }],
  },
  {
    line: "R",
    type: "Studio / 1 Bed",
    details: "Varies by floor (Lobby–18th Studio, 19th–25th 1 Bed)",
    baths: 1,
    terrace: "No. 19R only with terrace.",
    sqft: "642–909",
    downloads: [
      { label: "Lobby–18", file: "/floorplans/R.pdf" },
      { label: "19–25", file: "/floorplans/R2.pdf" },
    ],
  },
  {
    line: "S",
    type: "Studio",
    details: "Angled layout",
    baths: 1,
    terrace: "No",
    sqft: "653",
    downloads: [{ label: "Download", file: "/floorplans/S.pdf" }],
  },
  {
    line: "T",
    type: "1 Bed",
    details: "Terrace, flexible dining/bedroom layout",
    baths: 1,
    terrace: "Yes",
    sqft: "998",
    downloads: [{ label: "Download", file: "/floorplans/T.pdf" }],
  },
  {
    line: "U",
    type: "1 Bed",
    details: "Terrace layout",
    baths: 1,
    terrace: "Yes",
    sqft: "830",
    downloads: [{ label: "Download", file: "/floorplans/U.pdf" }],
  },
  {
    line: "V",
    type: "3 Bed",
    details: "Large irregular layout with terrace",
    baths: 2,
    terrace: "Yes",
    sqft: "1,857",
    downloads: [{ label: "Download", file: "/floorplans/V.pdf" }],
  },
  {
    line: "W",
    type: "1 Bed",
    details: "Long layout",
    baths: 1,
    terrace: "No",
    sqft: "814",
    downloads: [{ label: "Download", file: "/floorplans/W.pdf" }],
  },
  {
    line: "X",
    type: "1 Bed / 2 Bed",
    details: "Varies by floor (Lobby–18th 1 Bed, 19th–25th 2 Bed)",
    baths: "1/2",
    terrace: "Yes",
    sqft: "907–1,174",
    downloads: [
      { label: "Lobby–18", file: "/floorplans/X.pdf" },
      { label: "19–25", file: "/floorplans/X2.pdf" },
    ],
  },
  {
    line: "Y",
    type: "1 Bed",
    details: "Compact layout",
    baths: 1,
    terrace: "Yes",
    sqft: "907",
    downloads: [{ label: "Download", file: "/floorplans/Y.pdf" }],
  },
  {
    line: "Z",
    type: "1 Bed",
    details: "Simple layout",
    baths: 1,
    terrace: "No",
    sqft: "745",
    downloads: [{ label: "Download", file: "/floorplans/Z.pdf" }],
  },
];

export default function ApartmentLinesTable() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Apartment Line Summary
        </h2>

        <p className="mb-6 text-gray-600">
          Apartment configurations, layouts, and square footage may vary by
          floor. Split lines include separate floor plan downloads where
          applicable.
        </p>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden">
          {apartmentLines.map((apt) => (
            <div
              key={apt.line}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Line
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {apt.line}
                  </h3>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {apt.type}
                </span>
              </div>

              <div className="space-y-2 text-sm leading-6 text-gray-600">
                <p>
                  <strong className="text-gray-900">Details:</strong>{" "}
                  {apt.details}
                </p>

                <p>
                  <strong className="text-gray-900">Baths:</strong> {apt.baths}
                </p>

                <p>
                  <strong className="text-gray-900">Terrace:</strong>{" "}
                  {apt.terrace}
                </p>

                <p>
                  <strong className="text-gray-900">Approx. Sq Ft:</strong>{" "}
                  {apt.sqft}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {apt.downloads.map((download) => (
                  <a
                    key={download.file}
                    href={download.file}
                    download
                    className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                  >
                    {download.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 md:block">
          <table className="w-full text-left text-sm text-gray-700 dark:text-gray-200">
            <thead className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">
              <tr>
                <th className="p-4">Line</th>
                <th className="p-4">Type</th>
                <th className="p-4">Details</th>
                <th className="p-4">Baths</th>
                <th className="p-4">Terrace</th>
                <th className="p-4">Approx. Sq Ft</th>
                <th className="p-4">Floor Plan</th>
              </tr>
            </thead>

            <tbody>
              {apartmentLines.map((apt) => (
                <tr
                  key={apt.line}
                  className="border-t border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
                >
                  <td className="p-4 font-semibold">{apt.line}</td>
                  <td className="p-4">{apt.type}</td>
                  <td className="p-4">{apt.details}</td>
                  <td className="p-4">{apt.baths}</td>
                  <td className="p-4">{apt.terrace}</td>
                  <td className="p-4">{apt.sqft}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {apt.downloads.map((download) => (
                        <a
                          key={download.file}
                          href={download.file}
                          download
                          className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                        >
                          {download.label}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}