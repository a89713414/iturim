import { getTranslations } from "next-intl/server";
import clsx from "clsx";

import { WhyUsCard } from "@/app/components/ui/WhyUsCard";

const joinUsCards = [
  {
    src: "/destinations/dest_join-us_1.svg",
    title: "key_facts.item_1.title",
    description: "key_facts.item_1.description",
  },
  {
    src: "/destinations/dest_join-us_2.svg",
    title: "key_facts.item_2.title",
    description: "key_facts.item_2.description",
  },
  {
    src: "/destinations/dest_join-us_3.svg",
    title: "key_facts.item_3.title",
    description: "key_facts.item_3.description",
  },
];

export const DestinationsInfoSection = async () => {
  const t = await getTranslations("destinations");

  // const currentLocalTime = new Intl.DateTimeFormat("en-GB", {
  //   timeZone: "Asia/Bangkok",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // }).format(new Date());

  return (
    <>
      <p
        className={clsx("text-center", "text-[28px]", "leading-[33px]", "p-2.5", "mb-4", "md:mb-4")}
      >
        {t("text_1")}
      </p>

      <div className={clsx("w-full", "flex", "justify-between")}>
        {joinUsCards.map((item, idx) => (
          <div key={idx} className={clsx("flex-1", "p-2.5")}>
            <WhyUsCard
              src={item.src}
              // title={t(item.title, {
              //   time: currentLocalTime,
              // })}
              title={t(item.title)}
              description={t.rich(item.description, {
                hidden: chunks => <span className="hidden md:inline">{chunks}</span>,
              })}
              classes={{
                image: clsx("!w-[50px]", "!h-[50px]", "mb-4"),
                title: clsx(
                  "text-[16px]",
                  "md:text-[30px]",
                  "leading-[20px]",
                  "md:leading-[30px]",
                  "font-semibold",
                  "text-[#4CB6E8]",
                  "mb-2.5"
                ),
                description: clsx(
                  "text-[14px]",
                  "md:text-[17px]",
                  "!text-black",
                  "font-normal",
                  "mb-2"
                ),
              }}
            />
          </div>
        ))}
      </div>

      <p className={clsx("text-center", "text-[22px]", "leading-[26px]", "p-3", "mb-3")}>
        {t("text_2")}
      </p>
    </>
  );
};
