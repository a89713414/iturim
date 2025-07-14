import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";
import { RestaurantsSection } from "./RestaurantsSection";

export const SpectacularViewRestaurantsSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.spectacularViewRestaurants`);

  const title = t("title");
  const description = t("description");
  const restaurants: { title: string; description: string }[] = t.raw("items");

  return (
    <RestaurantsSection
      title={title}
      description={description}
      restaurants={restaurants}
      classes={{ listItem: "md:basis-1/4" }}
    />
  );
};
