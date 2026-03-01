import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Events",
  description:
    "Find workshops, support groups, community gatherings, and volunteering opportunities from St Katharine Rural Connect. Filter by audience, type, or format.",
  path: "/events",
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
