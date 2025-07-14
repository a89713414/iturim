import { getTranslations } from "next-intl/server";
import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { ResortKey } from "../page.types";
import { List } from "@/app/components/ui/List";

export const MarketsSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.markets`);

  const items = t.raw("items");

  return (
    <section className={clsx("py-12.5", "bg-gray-100")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <div className={clsx("mb-3")}>
          <DottedUnderlineTitle reversed classes={{ hr: "border-t-secondary" }}>
            {t("title")}
          </DottedUnderlineTitle>
        </div>

        <List items={items} />
      </div>
    </section>
  );
};
