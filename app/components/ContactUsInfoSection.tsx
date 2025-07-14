import clsx from "clsx";
import config from "@/app/config/config.json";
import { getTranslations } from "next-intl/server";
import React from "react";

export const ContactUsInfoSection = async () => {
  const t = await getTranslations("contactUs");
  return (
    <div className={clsx("md:mb-8", "p-5")}>
      <h2 className={clsx("text-[51px]", "leading-[51px]", "font-black", "mb-3")}>
        {t("info.title")}
      </h2>

      <p className={clsx("text-[20px]", "font-bold", "mb-4")}>{t("info.subtitle")}</p>

      <p className={clsx("text-[20px]", "mb-4")}>{t("info.text")}</p>

      <p className={clsx("mb-4")}>
        <span className={clsx("text-[20px]", "font-bold")}>{t("info.phoneLabel")}</span>{" "}
        <a
          href={`tel:${config.phone}`}
          className={clsx("text-pink-600", "text-[20px]", "font-bold")}
        >
          {config.phone}
        </a>
      </p>

      <p className={clsx("text-[20px]", "font-bold", "mb-4")}>
        {t.rich &&
          t.rich("info.whatsAppLabel", {
            link: (chunks: React.ReactNode) => (
              <a
                href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
                className={clsx("text-pink-600", "font-bold", "underline")}
              >
                {chunks}
              </a>
            ),
          })}
      </p>
    </div>
  );
};
