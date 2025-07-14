import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { Card, GroupCard } from "./Card";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { ResortKey } from "../page.types";

interface RecommendedBeachesSectionProps {
  resort: ResortKey;
}

export const RecommendedBeachesSection: FC<RecommendedBeachesSectionProps> = async ({ resort }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.recommendedBeaches`);

  return (
    <div
      className={clsx(
        "relative",
        "min-h-screen",
        "pt-12.5",
        "pb-10",
        "md:pb-50",
        "bg-[url('/destinations/resort/bg_beaches.jpg')]",
        "bg-fixed",
        "bg-center",
        "bg-no-repeat",
        "bg-cover"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "top-0",
          "left-0",
          "w-full",
          "h-full",
          "bg-white",
          "md:bg-transparent",
          "md:bg-gradient-to-b",
          "md:from-white/90",
          "md:from-58%",
          "md:to-transparent"
        )}
      />
      <div className={clsx("relative", "z-10", "max-w-[900px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle>{t("title")}</DottedUnderlineTitle>

        <p className={clsx("mb-3", "text-center", "text-[20px]", "leading-[30px]")}>{t("info")}</p>

        <div className={clsx("flex", "flex-col", "gap-2.5", "pt-6", "md:pt-0")}>
          {Object.keys(t.raw("items")).map(key => (
            <Card
              key={key}
              title={t(`items.${key}.title`)}
              description={t.rich(`items.${key}.description`, {
                br: () => <br />,
                hotels: chunk => (
                  <InlineLink href="/destinations/phuket-10-luxury-hotels">{chunk}</InlineLink>
                ),
              })}
              image={`/destinations/resort/${resort}/beaches/${key}.jpg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
