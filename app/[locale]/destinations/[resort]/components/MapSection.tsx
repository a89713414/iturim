import clsx from "clsx";
import { Map } from "@/app/components/Map";
import { ResortKey } from "../page.types";
import { getTranslations } from "next-intl/server";

const mapResortKeyToMapLink: Partial<Record<ResortKey, string>> = {
  siargao:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550628.6785560225!2d125.74695592957556!3d9.841253502805307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3304043652d9e9b3%3A0xd4c56a60c9a11b84!2sSiargao%20Island!5e0!3m2!1sen!2spt!4v1751543125852!5m2!1sen!2spt",
};

export const MapSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.map`);

  const src = mapResortKeyToMapLink[resort];

  if (!src) return null;

  return (
    <section className="py-12.5">
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <h2 className={clsx("text-[36px]", "leading-[36px]", "font-bold", "text-center", "mb-3")}>
          {t("title")}
        </h2>
        <Map src={src} />
      </div>
    </section>
  );
};
