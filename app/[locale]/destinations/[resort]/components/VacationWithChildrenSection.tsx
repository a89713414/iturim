import clsx from "clsx";
import { InfoWithBgImageSection } from "./InfoWithBgImageSection";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";
import { FC } from "react";
import { InlineLink } from "@/app/components/ui/InlineLink";

interface VacationWithChildrenSectionProps {
  resort: ResortKey;
}

export const VacationWithChildrenSection: FC<VacationWithChildrenSectionProps> = async ({
  resort,
}) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.vacationWithChildren`);

  const content = t.raw("paragraphs").map((_: any, i: number) => (
    <p key={i} className={clsx("text-[20px]", "leading-[30px]", "mb-2.5")}>
      {t.rich(`paragraphs.${i}`, {
        link: chunk => <InlineLink href="">{chunk}</InlineLink>,
      })}
    </p>
  ));

  return (
    <InfoWithBgImageSection
      imgSrc="/destinations/resort/bg_with_children.jpg"
      title={t("title")}
      content={content}
      classes={{
        image: "!opacity-43",
      }}
    />
  );
};
