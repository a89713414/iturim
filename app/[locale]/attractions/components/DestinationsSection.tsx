import { Card } from "@/app/components/ui/Card";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const DestinationsSection = async () => {
  const t = await getTranslations("attractions.destinations");

  return (
    <section className={clsx("pb-12")}>
      <div className={clsx("max-w-[1140px]", "mx-auto")}>
        <h2 className={clsx("text-[43px]", "font-bold", "leading-[43px]", "text-center", "mb-3")}>
          {t("title")}
        </h2>
        <div className={clsx("grid", "grid-cols-1", "md:grid-cols-2", "p-2.5")}>
          {Object.keys(t.raw("list")).map(key => (
            <LocalizedLink href={`/attractions/${key}`} key={key}>
              <Card
                className="!m-2.5 rounded-[10px]"
                imageSrc={`/attractions/${key}.jpg`}
                title={t(`list.${key}.title`)}
              />
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};
