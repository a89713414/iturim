import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ImageCard } from "./ui/ImageCard";
import { Button } from "./ui/Button";

const hotelList = [
  {
    img: "/destinations/resort/siargao/hotels/kermit_resort.jpg",
    title:
      "destinations.resorts.list.siargao.recommendedHotels.groups.family.items.kermit_resort.title",
  },
  {
    img: "/destinations/resort/siargao/hotels/siargao_bliss_resort.jpg",
    title:
      "destinations.resorts.list.siargao.recommendedHotels.groups.family.items.siargao_bliss_resort.title",
  },
  {
    img: "/destinations/resort/siargao/hotels/harana_surf_resort.jpg",
    title:
      "destinations.resorts.list.siargao.recommendedHotels.groups.family.items.harana_surf_resort.title",
  },
  {
    img: "/destinations/resort/siargao/hotels/nuestra_playa.jpg",
    title:
      "destinations.resorts.list.siargao.recommendedHotels.groups.family.items.nuestra_playa.title",
  },
];

export const HotelsSection = async () => {
  const t = await getTranslations();

  return (
    <section
      className={clsx("bg-gradient-to-b", "from-white", "to-gray-100", "pt-16", "pb-5", "px-10")}
    >
      <div className={clsx()}>
        <h2
          className={clsx(
            "text-center",
            "leading-none",
            "text-[36px]",
            "md:text-[58px]",
            "font-black"
          )}
        >
          {t("homepage.hotels.title")}
        </h2>

        <div className={clsx("text-center", "mt-4", "mb-8")}>
          <Button title={t("homepage.hotels.btnTitle")} />
        </div>

        <div className={clsx("grid", "grid-cols-2", "md:grid-cols-4", "gap-5")}>
          {hotelList.map((item, index) => (
            <ImageCard
              key={index}
              src={item.img}
              // text={t(item.title)}
              classes={{
                container: "!h-50 md:!h-76",
                text: "text-[26px] md:!text-[36px]",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
