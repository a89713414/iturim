import { getTranslations } from "next-intl/server";
import { Typography } from "../ui/Typography";
import clsx from "clsx";
import { NextSectionButton } from "./NextSectionButton";

export const HeroSection = async () => {
  const t = await getTranslations("homepage.hero");

  return (
    <section
      className={clsx(
        "relative",
        "bg-no-repeat",
        "bg-cover",
        "bg-center",
        "bg-[url(/hero.jpg)]",
        "min-h-[48vh]",
        "md:min-h-[75vh]",
        "text-white",
        "rounded-b-90"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "w-full",
          "h-full",
          "bg-linear-to-b",
          "from-black/55",
          "to-transparent"
        )}
      />
      <div
        className={clsx(
          "absolute",
          "w-full",
          "h-full",
          "flex",
          "flex-col",
          "items-center",
          "justify-center"
        )}
      >
        <Typography.H2 className={clsx("mb-4", "text-center", "md:text-left")}>
          {t("title")}
        </Typography.H2>

        <h1 className={clsx("text-2xl", "md:text-5xl", "font-semibold", "text-center")}>{t("subtitleTop")}</h1>

        <p className={clsx("text-2xl", "md:text-5xl", "mb-8", "md:mb-12", "text-center")}>{t("subtitleBottom")}</p>

        <NextSectionButton />
      </div>
    </section>
  );
};
