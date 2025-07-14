import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const RecommendationsInfo = async () => {
  const t = await getTranslations("recommendations");

  return (
    <div className={clsx("text-center")}>
      <h2 className={clsx("text-[36px]", "font-bold", "leading-[65px]", "mb-8")}>{t("title")}</h2>

      <p className={clsx("text-[19px]", "font-black", "leading-[28px]", "mb-4")}>{t("subtitle")}</p>

      {Object.keys(t.raw("text")).map(key => (
        <p key={key} className={clsx("text-[19px]", "leading-[28px]", "mb-4")}>
          {t.rich(`text.${key}`, {
            highlight: chunk => <span className={clsx("font-semibold", "underline")}>{chunk}</span>,
          })}
        </p>
      ))}
    </div>
  );
};
