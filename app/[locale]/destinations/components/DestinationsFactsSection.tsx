import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";

const facts = [
  {
    icon: "/destinations/dest_fact_1.svg",
    text: "fact_1.title",
  },
  {
    icon: "/destinations/dest_fact_2.svg",
    text: "fact_2.title",
  },
  {
    icon: "/destinations/dest_fact_3.svg",
    text: "fact_3.title",
  },
];

export const DestinationsFactsSection = async () => {
  const t = await getTranslations("destinations.important_facts");

  return (
    <section className={clsx("p-2.5", "md:mb-12.5")}>
      <DottedUnderlineTitle>{t("title")}</DottedUnderlineTitle>

      <div
        className={clsx(
          "mx-auto",
          "flex",
          "flex-col",
          "md:flex-row",
          "justify-between",
          "items-start",
          "gap-8",
          "md:gap-0"
        )}
      >
        {facts.map((fact, idx) => (
          <div key={idx} className={clsx("flex", "flex-col", "items-center", "w-full", "p-6")}>
            <div
              className={clsx(
                "p-6",
                "rounded-full",
                "bg-gray-100",
                "shadow-md",
                "flex",
                "items-center",
                "justify-center",
                "mb-4"
              )}
            >
              <Image src={fact.icon} alt="" width={63} height={63} />
            </div>
            <p className={clsx("text-[22px]", "leading-[33px]", "text-center")}>
              {t.rich(fact.text, {
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
              })}
            </p>
          </div>
        ))}
      </div>

      <div className={clsx("flex", "items-center", "gap-8", "p-5", "mt-10")}>
        <div className={clsx("flex", "flex-col", "items-center", "shrink-0")}>
          <div className="relative w-[51px] h-[51px] md:w-[84px] md:h-[84px]">
            <Image src="/destinations/light_icon.svg" alt="" fill className="object-contain" />
          </div>
          <span className={clsx("text-[19px]", "md:text-[31px]", "font-semibold", "mt-2")}>
            {t("didYouKnow.title")}
          </span>
        </div>
        <div
          className={clsx(
            "relative",
            "w-full",
            "bg-gray-100",
            "py-2",
            "px-4",
            "md:px-8",
            "md:pt-5",
            "md:pb-12",
            "flex-wrap"
          )}
        >
          <p className={clsx("text-center", "text-[18px]", "md:text-[32px]", "italic")}>
            {t("didYouKnow.fact")}
          </p>
          <span
            className={clsx(
              "absolute",
              "top-[35%]",
              "rtl:-right-[7px]",
              "ltr:-left-[7px]",
              "w-[14px]",
              "h-[14px]",
              "bg-gray-100",
              "rotate-45"
            )}
          />
        </div>
      </div>
    </section>
  );
};
