import ReactPlayer from "react-player";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";
import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";

const mapResortKeyToVideoSrc: Partial<Record<ResortKey, string>> = {
  siargao: "https://www.youtube.com/watch?v=l6K6FgR2xB8",
};

export const SummarySection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.summary`);

  const videoSrc = mapResortKeyToVideoSrc[resort];

  return (
    <section className={clsx("py-12.5")}>
      <div className={clsx("flex", "flex-col-reverse", "md:flex-row", "p-2.5", "gap-4")}>
        <div
          className={clsx(
            "md:flex-1",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "text-center",
            "md:mx-6"
          )}
        >
          <DottedUnderlineTitle classes={{ hr: "!border-secondary" }}>
            {t("title")}
          </DottedUnderlineTitle>
          <p className={clsx("text-[20px]", "leading-[30px]")}>{t("text")}</p>
        </div>
        {videoSrc && (
          <div className={clsx("md:flex-1", "h-[230px]", "md:h-[500px]")}>
            <ReactPlayer controls width="100%" height="100%" src={videoSrc} />
          </div>
        )}
      </div>
    </section>
  );
};
