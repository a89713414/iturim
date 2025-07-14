import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";
import { InfoWithBgImageSection } from "./InfoWithBgImageSection";

interface FlightsInfoSectionProps {
  resort: ResortKey;
}

export async function FlightsInfoSection({ resort }: FlightsInfoSectionProps) {
  const t = await getTranslations(`destinations.resorts.list.${resort}.flightsInfo`);

  const content = (
    <p className={clsx("text-[20px]", "leading-[30px]")}>
      {t.rich(`text`, {
        link: chunks => (
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={clsx("text-[#E04A7F]", "font-medium", "no-underline")}
          >
            {chunks}
          </a>
        ),
        bold: chunks => <span className={clsx("font-bold")}>{chunks}</span>,
        br: () => <br className={clsx("my-2")} />,
      })}
    </p>
  );

  return (
    <InfoWithBgImageSection
      imgSrc="/destinations/resort/bg_flights.jpg"
      title={t(`title`)}
      content={content}
    />
  );
}
