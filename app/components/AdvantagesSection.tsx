import clsx from "clsx";
import { WhyUsCard } from "./ui/WhyUsCard";
import { getTranslations } from "next-intl/server";

const advantages = [
  {
    label: "title_1",
    img: "/contact-adv_1.svg",
  },
  {
    label: "title_2",
    img: "/contact-adv_2.svg",
  },
  {
    label: "title_3",
    img: "/contact-adv_3.svg",
  },
  {
    label: "title_4",
    img: "/contact-adv_4.svg",
  },
];

export const AdvantagesSection = async () => {
  const t = await getTranslations("contactUs.advantages");

  return (
    <section className={clsx("container", "mx-auto")}>
      <div
        className={clsx(
          "grid",
          "grid-cols-2",
          "md:grid-cols-4",
          "gap-2",
          "md:gap-4",
          "mt-4",
          "mb-4"
        )}
      >
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className={clsx(
              "group",
              "flex",
              "items-center",
              "justify-center",
              "rounded-tr-2xl",
              "rounded-bl-2xl",
              "transition",
              "duration-200",
              "border",
              "border-transparent",
              "hover:bg-gray-50",
              "hover:shadow-md",
              "hover:border-gray-200"
            )}
          >
            <WhyUsCard
              src={item.img}
              title={<>{t(item.label)}</>}
              classes={{
                title: clsx("text-[19px]", "font-bold"),
                image: clsx("!w-[70px]", "!h-[70px]", "bg-[#f6f6f6]", "rounded-full", "mb-3"),
                description: clsx("hidden", "md:block"),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
