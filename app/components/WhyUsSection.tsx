import clsx from "clsx";

import { getTranslations } from "next-intl/server";
import { Typography } from "./ui/Typography";
import { WhyUsCard } from "./ui/WhyUsCard";

const reasonItems = [
  {
    title_1: "reason_1.title_1",
    title_2: "reason_1.title_2",
    description: "reason_1.description",
    img: "/whyus_1.svg",
  },
  {
    title_1: "reason_2.title_1",
    title_2: "reason_2.title_2",
    description: "reason_2.description",
    img: "/whyus_2.svg",
  },
  {
    title_1: "reason_3.title_1",
    title_2: "reason_3.title_2",
    description: "reason_3.description",
    img: "/whyus_3.svg",
  },
  {
    title_1: "reason_4.title_1",
    title_2: "reason_4.title_2",
    description: "reason_4.description",
    img: "/whyus_4.svg",
  },
  {
    title_1: "reason_5.title_1",
    title_2: "reason_5.title_2",
    description: "reason_5.description",
    img: "/whyus_5.svg",
  },
];

export const WhyUsSection = async () => {
  const t = await getTranslations("homepage.whyUs");

  return (
    <section className={clsx("bg-gradient-to-b", "from-white", "to-gray-100", "pb-12", "md:pb-20")}>
      <div className={clsx("container", "mx-auto")}>
        <p className={clsx("text-4xl", "font-medium", "text-center", "mb-2")}>{t("question")}</p>
        <Typography.H2 className={clsx("text-center", "mb-4")}>{t("answer")}</Typography.H2>
        <p
          className={clsx(
            "text-md",
            "md:text-xl",
            "leading-tight",
            "font-light",
            "text-center",
            "mx-4",
            "md:mx-30"
          )}
        >
          {t("description")}
        </p>

        <div
          className={clsx(
            "grid",
            "grid-cols-2",
            "gap-2",
            "md:gap-4",
            "grid-cols-2",
            "md:grid-cols-5",
            "mt-12"
          )}
        >
          {reasonItems.map((item, index) => (
            <div key={index} className={clsx(index === 2 && ["col-span-2", "md:col-span-1"])}>
              <WhyUsCard
                src={item.img}
                title={
                  <>
                    {t(item.title_1)}
                    <br />
                    {t(item.title_2)}
                  </>
                }
                description={t(item.description)}
                classes={{
                  description: clsx("hidden", "md:block"),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
