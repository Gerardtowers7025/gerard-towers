import Hero from "./components/Hero";
import AmenitiesPreview from "./components/AmenitiesPreview";
import ApartmentsPreview from "./components/ApartmentsPreview";
import NeighborhoodPreview from "./components/NeighborhoodPreview";
import ManagementPreview from "./components/ManagementPreview";
import ContactPreview from "./components/ContactPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerard Towers | Home",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AmenitiesPreview />
      <ApartmentsPreview />
      <NeighborhoodPreview />
      <ManagementPreview />
      <ContactPreview />
    </main>
  );
}