import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { Rating } from "./Rating";

interface RecommendationCardProps {
  img: string;
  name: string;
  text: string;
}

export const RecommendationCard: FC<RecommendationCardProps> = ({ img, name, text }) => (
  <div>
    <div className={clsx("p-4", "flex", "flex-col-reverse", "md:flex-col", "gap-6", "gap-4")}>
      <div
        className={clsx(
          "flex",
          "flex-row-reverse",
          "md:flex-col",
          "items-center",
          "justify-center",
          "gap-4",
          "md:gap-2"
        )}
      >
        <div className={clsx("flex", "flex-col", "items-center", "gap-2")}>
          <div className={clsx("relative", "w-[102px]", "h-[102px]")}>
            <Image className={clsx("rounded-full")} src={img} alt="" fill />
          </div>

          <Rating
            rating={5}
            classes={{
              container: clsx("hidden", "md:block"),
            }}
          />
        </div>
        <p className={clsx("text-[14px]", "md:text-2xl", "font-medium", "md:font-black")}>{name}</p>
      </div>
      <p className={clsx("text-[22px]", "md:text-xl", "text-center")}>{text}</p>
    </div>
  </div>
);
