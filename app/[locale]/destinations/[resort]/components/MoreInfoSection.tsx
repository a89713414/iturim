import { ArticleCard } from "@/app/components/ui/ArticleCard";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";

export const MoreInfoSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.moreInfo`);

  return (
    <section className={clsx("pt-20", "pb-12.5", "bg-secondary")}>
      <div className={clsx("max-w-[1000px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle classes={{ hr: "!border-white" }}>{t("title")}</DottedUnderlineTitle>

        <div className={clsx("grid", "grid-cols-1", "md:grid-cols-3", "gap-4")}>
          {Object.keys(t.raw("items")).map(key => (
            <ArticleCard
              key={key}
              date={t(`items.${key}.date`)}
              text={t(`items.${key}.text`)}
              title={t(`items.${key}.title`)}
              img={`/destinations/resort/${resort}/moreInfo/${key}.jpg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
