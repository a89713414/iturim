import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";

export const ChabadHouseSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.chabadHouse`);

  return (
    <section className={clsx("md:py-12.5", "bg-secondary")}>
      <div className={clsx("max-w-[1140px]", "mx-auto")}>
        <div className={clsx("p-2.5")}>
          <h2
            className={clsx(
              "text-black",
              "text-[36px]",
              "leading-[36px]",
              "font-bold",
              "mb-3",
              "text-center"
            )}
          >
            {t("title")}
          </h2>
          <p className={clsx("text-black", "text-[20px]", "leading-[30px]", "text-center")}>
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
