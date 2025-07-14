import { notFound } from "next/navigation";
import { ResortKey, resortKeys } from "./page.types";
import { mapResortToSections } from "./page.constants";

export default async function DestinationsResortPage({
  params,
}: {
  params: Promise<{ resort: string; locale: string }>;
}) {
  const resortKey = (await params).resort as ResortKey;

  if (!resortKeys.includes(resortKey)) return notFound();

  const sections = mapResortToSections[resortKey];

  if (!sections || !sections.length) return notFound();

  return sections.map((Section, index) => {
    if (!Section) return null;
    return <Section key={index} resort={resortKey} />;
  });
}
