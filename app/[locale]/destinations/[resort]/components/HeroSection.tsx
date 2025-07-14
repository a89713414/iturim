import clsx from "clsx";
import { ResortKey } from "../page.types";
import { getTranslations } from "next-intl/server";

interface HeroSectionProps {
  resort: ResortKey;
}

export const HeroSection = async ({ resort }: HeroSectionProps) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}`);

  return (
    <div
      className={clsx(
        "relative",
        "min-h-[230px]",
        "md:min-h-[500px]",
        "flex",
        "items-center",
        "justify-center",
        "bg-cover",
        "md:bg-fixed",
        "bg-[position:50%_85%]"
      )}
      style={{
        backgroundImage: `url(/destinations/resort/${resort}/hero.jpg)`,
      }}
    >
      <div
        className={clsx("absolute", "inset-0", "bg-black", "opacity-14", "pointer-events-none")}
      />
      <h1
        className={clsx("relative", "z-10", "text-[76px]", "font-black", "text-white")}
        style={{
          textShadow: "0px 0px 22px rgba(0, 0, 0, 0.69)",
        }}
      >
        {t("title")}
      </h1>
    </div>
  );
};
