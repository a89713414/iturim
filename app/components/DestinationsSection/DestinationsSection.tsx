import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ImageCard } from "../ui/ImageCard";
import { Typography } from "../ui/Typography";
import { LocalizedLink } from "../ui/LocalizedLink";
import { Button } from "../ui/Button";

const items = [
  {
    text: "destinations.resorts.list.siargao.title",
    img: "/destinations/resort/siargao/hero.jpg",
    href: "/destinations/siargao",
  },
  {
    text: "destinations.resorts.list.boracay.title",
    img: "/destinations/resort/boracay/hero.jpg",
    href: "/destinations/boracay",
  },
  {
    text: "destinations.resorts.list.palawan.title",
    img: "/destinations/resort/palawan/hero.jpg",
    href: "/destinations/palawan",
  },
  {
    text: "destinations.resorts.list.cebu.title",
    img: "/destinations/resort/cebu/hero.jpg",
    href: "/destinations/cebu",
  },
  {
    text: "destinations.resorts.list.bohol.title",
    img: "/destinations/resort/bohol/hero.jpg",
    href: "/destinations/bohol",
  },
  {
    text: "destinations.resorts.list.tagaytay.title",
    img: "/destinations/resort/tagaytay/hero.jpg",
    href: "/destinations/tagaytay",
  },
];

export const DestinationsSection = async () => {
  const t = await getTranslations();

  return (
    <section
      id="destinations-section"
      className={clsx(
        "bg-white",
        "pt-4",
        "pb-8",
        "md:py-12",
        "px-7",
        "md:px-6",
        "scroll-mt-[50px]"
      )}
    >
      <div className={clsx("container", "mx-auto")}>
        <Typography.H2 className={clsx("text-center", "mb-6", "md:mb-12")}>
          {t("homepage.destinations.title")}
        </Typography.H2>

        <div className={clsx("grid", "grid-cols-2", "md:grid-cols-3", "gap-5")}>
          {items.map(item => (
            <LocalizedLink key={item.href} href={item.href}>
              <ImageCard text={t(item.text)} src={item.img} />
            </LocalizedLink>
          ))}
        </div>

        {/* <div className={clsx("text-center", "mt-10")}>
          <Button href="/destinations" title={t("homepage.destinations.btnTitle")} />
        </div> */}
      </div>
    </section>
  );
};
