import clsx from "clsx";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { FactList } from "@/app/components/ui/FactList";
import { ResortKey } from "../page.types";

export const WeatherInfoSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.weatherInfo`);

  return (
    <section className={clsx("relative", "bg-primary", "pt-40", "pb-12.5")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <div
          className={clsx(
            "absolute",
            "-top-[100px]",
            "left-1/2",
            "transform",
            "-translate-x-1/2",
            "w-[256px]",
            "h-[256px]",
            "mx-auto"
          )}
        >
          <Image
            src="/destinations/resort/sun_icon.svg"
            alt=""
            fill
            className={clsx("object-contain")}
          />
        </div>

        <DottedUnderlineTitle classes={{ hr: clsx("border-t-white") }}>
          {t(`title`)}
        </DottedUnderlineTitle>
        <FactList items={t.raw(`items`)} classes={{ root: clsx("text-white") }} />
      </div>
    </section>
  );
};
