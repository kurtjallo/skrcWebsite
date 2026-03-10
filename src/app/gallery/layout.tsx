import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Photos from St Katharine Rural Connect community events, workshops, paint nights, sports days, and gatherings. See our community in action.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
