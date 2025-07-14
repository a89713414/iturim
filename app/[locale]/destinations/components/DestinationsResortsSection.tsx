import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { Card } from "@/app/components/ui/Card";

export const DestinationsResortsSection = async () => {
  const t = await getTranslations("destinations");

  return (
    <section className={clsx("bg-gray-100", "py-12.5")}>
      <div className={clsx("container", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle>{t("resorts.title")}</DottedUnderlineTitle>

        <p className={clsx("text-center", "text-[22px]", "max-w-[1120px]", "mx-auto", "mb-3")}>
          {t.rich("resorts.description", {
            siargao: chunks => <InlineLink href="/destinations/siargao">{chunks}</InlineLink>,
            link: chunks => <InlineLink href="/destinations">{chunks}</InlineLink>,
          })}
        </p>

        <h2
          className={clsx(
            "text-center",
            "text-[32px]",
            "leading-[32px]",
            "font-medium",
            "text-primary"
          )}
        >
          {t("resorts.listTitle")}
        </h2>
      </div>

      <div className={clsx("bg-white", "relative", "mt-[120px]")}>
        <div
          className={clsx(
            "relative",
            "top-[-80px]",
            "container",
            "mx-auto",
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-3",
            "md:gap-5"
          )}
        >
          {Object.keys(t.raw("resorts.list")).map(key => (
            <LocalizedLink href={`/destinations/${key}`} key={key}>
              <Card
                imageSrc={`/destinations/resort/${key}/hero.jpg`}
                title={t(`resorts.list.${key}.title`)}
              />
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};
