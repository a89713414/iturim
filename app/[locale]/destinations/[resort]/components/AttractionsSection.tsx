import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { Card } from "./Card";
import { getTranslations } from "next-intl/server";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { ResortKey } from "../page.types";

export const AttractionsSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.attractions`);

  return (
    <section className={clsx("md:py-12.5", "bg-primary")}>
      <div className={clsx("max-w-[1000px]", "mx-auto")}>
        <div className={clsx("p-2.5")}>
          <DottedUnderlineTitle reversed classes={{ hr: clsx("border-t-secondary") }}>
            {t(`title`)}
          </DottedUnderlineTitle>
          <div className={clsx("flex", "flex-col", "gap-2.5")}>
            {Object.keys(t.raw("items")).map(key => {
              const paragraphs = t.raw(`items.${key}.paragraphs`) as string[];

              return (
                <Card
                  key={key}
                  title={t(`items.${key}.title`)}
                  description={paragraphs.map((_, i) => (
                    <p key={i} className="mb-2.5">
                      {t.rich(`items.${key}.paragraphs.${i}`, {
                        link: chunk => (
                          <InlineLink href={`/destinations/${resort}/attractions/${key}`}>
                            {chunk}
                          </InlineLink>
                        ),
                      })}
                    </p>
                  ))}
                  image={`/destinations/resort/${resort}/attractions/${key}.jpg`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
