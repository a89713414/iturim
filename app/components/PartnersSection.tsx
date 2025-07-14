import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const partners = [
  { img: "/partner_1.webp" },
  { img: "/partner_2.webp" },
  { img: "/partner_3.webp" },
  { img: "/partner_4.webp" },
  { img: "/partner_5.webp" },
  { img: "/partner_6.webp" },
];

export const PartnersSection = async () => {
  const t = await getTranslations("homepage.partners");

  return (
    <section className={clsx("relative", "bg-white", "py-10")}>
      <div className={clsx("container", "mx-auto", "px-2", "md:px-0")}>
        <h2
          className={clsx(
            "text-center",
            "leading-none",
            "text-[36px]",
            "md:text-[58px]",
            "font-black",
            "mb-12"
          )}
        >
          {t("title")}
        </h2>

        <div className={clsx("grid", "grid-cols-3", "gap-5", "max-w-220", "mx-auto")}>
          {partners.map(({ img }) => (
            <div
              key={img}
              className={clsx(
                "relative",
                "w-[92px]",
                "h-[72px]",
                "md:w-[140px]",
                "md:h-[108px]",
                "mx-auto",
                "grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-500"
              )}
            >
              <Image src={img} alt="" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
