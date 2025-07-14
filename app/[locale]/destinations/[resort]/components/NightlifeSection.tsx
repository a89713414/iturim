import { getTranslations } from "next-intl/server";
import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { ResortKey } from "../page.types";
import { List } from "@/app/components/ui/List";

export const NightlifeSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.nightlife`);

  const items = t.raw("items");

  return (
    <section className={clsx("py-12.5")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <div className={clsx("mb-3")}>
          <DottedUnderlineTitle reversed classes={{ hr: "border-t-secondary" }}>
            {t("title")}
          </DottedUnderlineTitle>
          <p className={clsx("text-center", "text-[20px]", "leading-[30px]", "mb-3")}>
            {t.rich(`description`, {
              link: chunk => (
                <InlineLink external href="https://moonholidays.co.th">
                  {chunk}
                </InlineLink>
              ),
            })}
          </p>
        </div>

        <List items={items} />
      </div>
    </section>
  );
};
