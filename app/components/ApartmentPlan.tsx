"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const lineInfo: Record<
  string,
  {
    title: string;
    info: string;
    floors: string;
    layout: string;
    images: string[];
  }
> = {
  A: {
    title: "A Line",
    info: "1 bed • 1 bath • ~617 sq ft",
    floors: "Lobby to 25th",
    layout: "Classic layout with dining foyer",
    images: ["/floorplans/floorplans/A.png"],
  },
  B: {
    title: "B Line",
    info: "Studio/1 bed • 1 bath • ~613 sq ft",
    floors: "Lobby to 25th",
    layout: "Compact layout",
    images: ["/floorplans/floorplans/B.png"],
  },
  C: {
    title: "C Line",
    info: "2 bed • 1 bath • ~1,570 sq ft",
    floors: "Lobby to 25th",
    layout: "Corner layout with terrace",
    images: ["/floorplans/floorplans/C.png"],
  },
  D: {
    title: "D Line",
    info: "1 bed • 1 bath • ~950 sq ft",
    floors: "Lobby to 25th",
    layout: "Terrace, flexible dining/bedroom layout",
    images: ["/floorplans/floorplans/D.png"],
  },
  E: {
    title: "E Line",
    info: "1 bed • 1 bath • ~738 sq ft",
    floors: "Lobby to 25th",
    layout: "Terrace with dining foyer",
    images: ["/floorplans/floorplans/E.png"],
  },
  F: {
    title: "F Line",
    info: "Studio/1 bed • 1 bath • ~642 sq ft",
    floors: "Lobby to 25th",
    layout: "Terrace layout",
    images: ["/floorplans/floorplans/F.png"],
  },
  G: {
    title: "G Line",
    info: "1 bed • 1 bath • ~738 sq ft",
    floors: "Lobby to 25th",
    layout: "Terrace with dining foyer",
    images: ["/floorplans/floorplans/G.png"],
  },
  H: {
    title: "H Line",
    info: "1 bed • 1 bath • ~950 sq ft",
    floors: "Lobby to 25th",
    layout: "Terrace, flexible layout",
    images: ["/floorplans/floorplans/H.png"],
  },
  J: {
    title: "J Line",
    info: "2 bed • 1 bath • ~1,570 sq ft",
    floors: "Lobby to 25th",
    layout: "Corner layout with terrace",
    images: ["/floorplans/floorplans/J.png"],
  },
  K: {
    title: "K Line",
    info: "Studio/1 bed • 1 bath • ~613 sq ft",
    floors: "Lobby to 25th",
    layout: "Compact layout",
    images: ["/floorplans/floorplans/K.png"],
  },
  L: {
    title: "L Line",
    info: "1 bed • 1 bath • ~617 sq ft",
    floors: "Lobby to 25th",
    layout: "Classic layout with dining foyer",
    images: ["/floorplans/floorplans/L.png"],
  },
  M: {
    title: "M Line",
    info: "2 bed • 1 bath • ~1,203 sq ft",
    floors: "2nd to 25th",
    layout: "Large central layout",
    images: ["/floorplans/floorplans/M.png"],
  },
  N: {
    title: "N Line",
    info: "2 bed • 1 bath • ~1,240 sq ft",
    floors: "2nd to 25th",
    layout: "Large split layout",
    images: ["/floorplans/floorplans/N.png"],
  },
  O: {
    title: "O Line",
    info: "1 bed • 1 bath • ~752 sq ft",
    floors: "Lobby to 25th",
    layout: "Long layout",
    images: ["/floorplans/floorplans/O.png"],
  },
  P: {
    title: "P Line",
    info: "1 bed • 1 bath • ~626 sq ft",
    floors: "Lobby to 25th",
    layout: "Compact layout",
    images: ["/floorplans/floorplans/P.png"],
  },
  Q: {
    title: "Q Line",
    info: "1 bed • 1 bath • ~587 sq ft",
    floors: "Lobby to 25th",
    layout: "Small layout",
    images: ["/floorplans/floorplans/Q.png"],
  },
  R: {
    title: "R Line",
    info: "Lobby–18th: Studio • ~642 sq ft\n19th–25th: 1 bed • 1 bath • ~909 sq ft",
    floors: "Splits: Lobby–18th / 19th–25th",
    layout: "Irregular layout",
    images: ["/floorplans/floorplans/R.png", "/floorplans/floorplans/R2.png"],
  },
  S: {
    title: "S Line",
    info: "1 bed • 1 bath • ~653 sq ft",
    floors: "Lobby to 18th",
    layout: "Angled layout",
    images: ["/floorplans/floorplans/S.png"],
  },
  T: {
    title: "T Line",
    info: "1 bed • 1 bath • ~998 sq ft",
    floors: "Lobby to 18th",
    layout: "Terrace, flexible dining/bedroom layout",
    images: ["/floorplans/floorplans/T.png"],
  },
  U: {
    title: "U Line",
    info: "1 bed • 1 bath • ~830 sq ft",
    floors: "Lobby to 18th",
    layout: "Terrace layout",
    images: ["/floorplans/floorplans/U.png"],
  },
  V: {
    title: "V Line",
    info: "3 bed • 2 bath • ~1,857 sq ft",
    floors: "Lobby to 18th",
    layout: "Large irregular layout with terrace",
    images: ["/floorplans/floorplans/V.png"],
  },
  W: {
    title: "W Line",
    info: "1 bed • 1 bath • ~814 sq ft",
    floors: "1st to 18th",
    layout: "Long layout",
    images: ["/floorplans/floorplans/W.png"],
  },
  X: {
    title: "X Line",
    info: "Lobby–18th: 1 bed • 1 bath • ~907 sq ft\n19th–25th: 2 bed • 1 bath • ~1,174 sq ft",
    floors: "Splits: Lobby–18th / 19th–25th",
    layout: "Terrace layout",
    images: ["/floorplans/floorplans/X.png", "/floorplans/floorplans/X2.png"],
  },
  Y: {
    title: "Y Line",
    info: "1 bed • 1 bath • ~907 sq ft",
    floors: "Lobby to 25th",
    layout: "Compact layout",
    images: ["/floorplans/floorplans/Y.png"],
  },
  Z: {
    title: "Z Line",
    info: "1 bed • 1 bath • ~745 sq ft",
    floors: "Lobby to 25th",
    layout: "Simple layout",
    images: ["/floorplans/floorplans/Z.png"],
  },
};

export default function ApartmentPlan() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [svgVersion, setSvgVersion] = useState("");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setSvgVersion(`?v=${Date.now()}`);
  }, []);

  function handleSvgLoad(e: React.SyntheticEvent<HTMLObjectElement>) {
    const svgDoc = e.currentTarget.contentDocument;

    if (!svgDoc) return;

    const svgRoot = svgDoc.documentElement;
    svgRoot.style.pointerEvents = "auto";

    Object.keys(lineInfo).forEach((line) => {
      const el = svgDoc.getElementById(`apt-${line}`) as SVGPathElement | null;

      if (!el) return;

      el.style.pointerEvents = "all";
      el.style.cursor = "pointer";
      el.style.transition = "fill 0.2s ease, opacity 0.2s ease";

      el.setAttribute("fill", "#d1d5db");
      el.setAttribute("opacity", "0");
      el.setAttribute("pointer-events", "all");

      el.onmouseenter = () => {
        setHovered(line);
        el.setAttribute("opacity", "0.5");
      };

      el.onmouseleave = () => {
        setHovered(null);
        el.setAttribute("opacity", "0");
      };
el.onpointerdown = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setSelected(line);
};
      el.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSelected(line);
      };
    });
  }

  function closeImageViewer() {
    setActiveImage(null);
    setZoomed(false);
  }

  const selectedInfo = selected ? lineInfo[selected] : null;

  return (
    <div className="relative w-full">
      <object
        data={`/plan.svg${svgVersion}`}
        type="image/svg+xml"
        className="block h-175 w-full border"
        onLoad={handleSvgLoad}
      />

      {hovered && (
        <div className="absolute left-4 top-4 z-20 rounded-lg bg-black px-4 py-2 text-white shadow">
          <strong>{hovered} Line</strong>
          <div className="text-sm">{lineInfo[hovered].info}</div>
        </div>
      )}

      {selectedInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 px-3 py-1 text-xl hover:bg-gray-200"
            >
              ×
            </button>

            <h3 className="mb-4 pr-10 text-2xl font-bold text-black">
              {selectedInfo.title}
            </h3>

            <div className="whitespace-pre-line space-y-3 text-gray-700">
              <p>
                <strong>Apartment:</strong> {selectedInfo.info}
              </p>

              <p>
                <strong>Floors:</strong> {selectedInfo.floors}
              </p>

              <p>
                <strong>Layout:</strong> {selectedInfo.layout}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Floor Plan Images
              </h4>

              <div
                className={`grid gap-5 ${
                  selectedInfo.images.length > 1 ? "md:grid-cols-2" : ""
                }`}
              >
                {selectedInfo.images.map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-xl border bg-gray-50"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImage(image);
                        setZoomed(false);
                      }}
                      className="group relative h-105 w-full cursor-zoom-in"
                    >
                      <Image
                        src={image}
                        alt={`${selectedInfo.title} floor plan ${index + 1}`}
                        fill
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                      />

                      <div className="absolute bottom-4 left-4 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                        Open
                      </div>
                    </button>

                    {selectedInfo.images.length > 1 && (
                      <div className="border-t bg-white px-4 py-3 text-sm font-medium text-gray-700">
                        Plan {index + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/85 p-4"
          onClick={closeImageViewer}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setZoomed(!zoomed)}
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
              >
                {zoomed ? "Zoom Out" : "Zoom In"}
              </button>

              <a
                href={activeImage}
                download
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
              >
                Download
              </a>

              <button
                type="button"
                onClick={closeImageViewer}
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
              >
                Close
              </button>
            </div>

            <div
              className={`relative w-full overflow-auto rounded-xl bg-white ${
                zoomed ? "h-[85vh]" : "h-[80vh]"
              }`}
            >
              <div
                className={
                  zoomed
                    ? "relative h-325 w-325"
                    : "relative h-full w-full"
                }
              >
                <Image
                  src={activeImage}
                  alt="Floor plan preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}