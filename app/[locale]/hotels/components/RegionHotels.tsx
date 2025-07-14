import React from "react";
import { ColouredSectionHeading } from "@/app/[locale]/hotels/components/ColouredSectionHeading";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";
import clsx from "clsx";
import { Card } from "@/app/components/ui/Card";

interface RegionHotelsProps {
  title: string;
  resorts: {
    name: string;
    title: string;
    imgSrc: string;
  }[];
  className?: string;
}

export const RegionHotels = ({ title, resorts, className }: RegionHotelsProps) => {
  return (
    <div className={clsx(className)}>
      <ColouredSectionHeading title={title} />
      <div
        className={clsx(
          "pt-6",
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-3",
          "md:gap-5"
        )}
      >
        {resorts.map(i => (
          <LocalizedLink href={`/hotels/${i.name}`} key={i.name}>
            <Card title={i.title} imageSrc={i.imgSrc} className={"text-[#2e2489]"} />
          </LocalizedLink>
        ))}
      </div>
    </div>
  );
};
