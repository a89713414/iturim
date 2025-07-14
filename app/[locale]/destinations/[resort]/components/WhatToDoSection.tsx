import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { Card } from "./Card";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { ResortKey } from "../page.types";

const whatToDoItems = [
  {
    key: "big_buddah",
    image: "big_buddah.jpeg",
  },
  {
    key: "old_town",
    image: "old_town.jpeg",
  },
  {
    key: "chillva_market",
    image: "chillva_market.jpeg",
  },
  {
    key: "central_phuket",
    image: "central_phuket.jpeg",
  },
  {
    key: "karon_viewpoint",
    image: "karon_viewpoint.jpeg",
  },
  {
    key: "mai_doo_bua_cafe",
    image: "mai_doo_bua_cafe.jpeg",
  },
  {
    key: "rawai_seafood_market",
    image: "rawai_market.jpg",
  },
  {
    key: "beach_club_cafe_del_mar",
    image: "beach_club_cafe_del_mar.jpeg",
  },
  {
    key: "akoya_star_lounge",
    image: "akoya_star_lounge.jpg",
  },
];

export const WhatToDoSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.whatToDo`);

  return (
    <section className={clsx("py-12.5")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle>{t("title")}</DottedUnderlineTitle>

        <p className={clsx("text-center", "text-[20px]", "leading-[30px]")}>{t("description")}</p>

        <div className={clsx("flex", "flex-col", "gap-2.5")}>
          {Object.keys(t.raw("items")).map((key, index) => (
            <Card
              key={key}
              title={t(`items.${key}.title`)}
              description={t.rich(`items.${key}.description`, {
                withchildren: chunk => <InlineLink href="/thai-with-children">{chunk}</InlineLink>,
              })}
              image={`/destinations/resort/${resort}/whatToDo/${key}.jpg`}
              className={clsx({
                "md:flex-row-reverse": index % 2 === 1,
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
