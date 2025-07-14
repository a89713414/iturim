import { notFound } from "next/navigation";

const allowedRoutes = ["/destinations", "/hotels", "/contact-us", "./recommendations"];

export default async function CatchAll({
  params,
}: {
  params: { locale: string; slug?: string[] };
}) {
  const slugPath = "/" + (params.slug || []).join("/");

  if (!allowedRoutes.includes(slugPath)) {
    notFound();
  }
  return <div>Valid route: {slugPath}</div>;
}
