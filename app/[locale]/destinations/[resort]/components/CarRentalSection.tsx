import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { ResortKey } from "../page.types";

export const CarRentalSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.carRental`);

  return (
    <section className={clsx("py-12.5", "bg-gray-100")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle>{t("title")}</DottedUnderlineTitle>
        <p className={clsx("text-center", "text-[20px]", "leading-[30px]")}>{t("text")}</p>
      </div>
    </section>
  );
};
