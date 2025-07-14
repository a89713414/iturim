import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const EssentialsSection = async () => {
  const t = await getTranslations("attractions.essentials");

  return (
    <section className={clsx("pb-6", "md:pb-12")}>
      <div className={clsx("relative", "max-w-[1140px]", "mx-auto", "p-2.5")}>
        <div
          className={clsx(
            "relative",
            "-top-10",
            "w-full",
            "p-7.5",
            "rounded",
            "shadow-2xl",
            "bg-white"
          )}
        >
          <h1
            className={clsx(
              "text-[40px]",
              "md:text-[57px]",
              "font-extrabold",
              "leading-[57px]",
              "text-center",
              "text-[#2e2882]",
              "mb-3"
            )}
          >
            {t("title")}
          </h1>
          <p className={clsx("text-[20px]", "leading-[30px]", "text-center")}>{t("text")}</p>
        </div>
      </div>
    </section>
  );
};
