import { Cursor } from "@/app/components/ui/icons/Cursor";
import { Pin } from "@/app/components/ui/icons/Pin";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";

export const GeoInfoSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.keyInfo`);

  const data = [
    <>
      <Pin width={14} height={14} color="white" />
      {t(`location`)}
    </>,
    <>
      <Cursor width={14} height={14} color="white" />
      {t(`neighbours`)}
    </>,
  ];

  return (
    <div className={clsx("bg-primary")}>
      <ul
        className={clsx(
          "flex",
          "flex-col",
          "md:flex-row",
          "gap-4",
          "text-[16px]",
          "md:text-[24px]",
          "font-medium",
          "leading-[24px]",
          "md:leading-[36px]",
          "text-white",
          "justify-center",
          "px-4"
        )}
      >
        {data.map((item, idx) => (
          <li key={idx} className={clsx("flex", "items-center", "gap-1")}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
