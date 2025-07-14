import { getTranslations } from "next-intl/server";
import Image from "next/image";
import clsx from "clsx";
import { FactList } from "@/app/components/ui/FactList";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { ResortKey } from "../page.types";

interface TouristInformationSectionProps {
  resort: ResortKey;
}

export async function TouristInformationSection({ resort }: TouristInformationSectionProps) {
  const t = await getTranslations(`destinations.resorts.list.${resort}.touristInfo`);

  const resortData: Record<string, { touristInfoImage: string }> = {
    phuket: {
      touristInfoImage: `/destinations/resort/${resort}/touristInfo.webp`,
    },
  };

  const imageSrc = resortData[resort]?.touristInfoImage;
  const paragraphs = ["p1", "p2", "p3", "p4"].map(p =>
    t.rich(`text.${p}`, {
      krabi: chunk => <InlineLink href="/destinations/krabi">{chunk}</InlineLink>,
      home: chunk => <InlineLink href="/">{chunk}</InlineLink>,
      thirty: chunk => (
        <InlineLink href="/destinations/30-attractions-with-kids">{chunk}</InlineLink>
      ),
    })
  ); // t(`text.${p}`));
  const nutshellFacts = t.raw(`nutshellFacts.items`);
  const [p1, p2, p3, p4] = paragraphs;

  return (
    <section className={clsx("pt-6", "md:pt-12.5", "pb-10")}>
      <div
        className={clsx("max-w-[1140px]", "mx-auto", "flex", "flex-col", "p-2.5", "text-center")}
      >
        <div>
          <h2
            className={clsx(
              "text-[32px]",
              "leading-[32px]",
              "font-black",

              "mb-3"
            )}
          >
            {t(`title`)}
          </h2>

          <div className={clsx("mb-6")}>
            {[p1, p2, p3].map((p, i) => (
              <p key={i} className={clsx("mb-3", "text-[20px]")}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-3">
          <Image
            src={`/destinations/resort/${resort}/tourist_info.jpg`}
            alt={t(`title`)}
            width={800}
            height={420}
            className={clsx("object-cover")}
          />
        </div>

        <div className="mx-auto mb-3">
          <Image src="/destinations/resort/separator_icon.svg" alt={""} width={52} height={52} />
        </div>

        <div className="mb-3">
          <p className={clsx("text-[20px]", "mb-3")}>{p4}</p>
        </div>

        <div className="mb-3">
          <h2 className={clsx("text-[32px]", "leading-[32px]", "font-black")}>
            {t(`nutshellFacts.title`)}
          </h2>
        </div>

        <FactList items={nutshellFacts} />
      </div>
    </section>
  );
}
