import { getTranslations } from "next-intl/server";
import { Section } from "@/app/components/ui/Section";
import { RecommendationsInfo } from "./components/RecommendationsInfo";
import { SourceSection } from "./components/SourceSection";
import clsx from "clsx";
import { ContactFormSection } from "./components/ContactFormSection";

export default async function RecommendationsPage() {
  const t = await getTranslations("recommendations");

  return (
    <>
      <section className={clsx("py-12.5")}>
        <div className={clsx("max-w-[920px]", "mx-auto")}>
          <RecommendationsInfo />
        </div>
      </section>

      <SourceSection
        title={t("google.title")}
        caption={t.rich("google.caption", {
          number: 123,
          bold: chunks => <span className={clsx("font-bold", "underline")}>{chunks}</span>,
        })}
        imgSrc="/google_img.svg"
        items={t.raw("google.items").map((item: any) => ({
          ...item,
          sourceImg: "/recommendations/source_google.svg",
          rating: 5,
        }))}
      />

      <SourceSection
        title={t("facebook.title")}
        caption={t.rich("facebook.caption", {
          number: 89,
          bold: chunks => <span className={clsx("font-bold", "underline")}>{chunks}</span>,
        })}
        imgSrc="/facebook_img.png"
        items={t.raw("facebook.items").map((item: any) => ({
          ...item,
          sourceImg: "/fb.svg",
          rating: 5,
        }))}
      />

      <ContactFormSection />
    </>
  );
}
