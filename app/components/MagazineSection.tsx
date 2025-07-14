import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/Button";
import { Semisphere } from "./ui/Semisphere";
import { NextSectionButton } from "./Header/NextSectionButton";

export const MagazineSection = async () => {
  const t = await getTranslations("homepage.magazine");

  return (
    <section
      data-testid="magazine-section"
      className={clsx(
        "text-white",
        "text-center",
        "bg-cover",
        "md:bg-fixed",
        "bg-[position:center]",
        "bg-[url('/bg-img.jpg')]"
      )}
    >
      <Semisphere />
      <div className={clsx("pt-24", "-mb-10", "relative", "z-10")}>
        <h2
          className={clsx(
            "text-[36px]",
            "md:text-[81px]",
            "leading-[36px]",
            "md:leading-[81px]",
            "font-black",
            "mb-6"
          )}
        >
          {t("title")}
        </h2>
        <h3
          className={clsx(
            "text-[26px]",
            "md:text-[58px]",
            "leading-[26px]",
            "md:leading-[58px]",
            "font-bold",
            "mx-10"
          )}
        >
          {t("subtitle")}
        </h3>
        <div className={clsx("text-center", "mt-16")}>
          <NextSectionButton>
            <Button title={t("btnTitle")} />
          </NextSectionButton>
        </div>
      </div>
      <Semisphere position="bottom" />
    </section>
  );
};
