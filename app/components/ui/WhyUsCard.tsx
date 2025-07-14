import clsx from "clsx";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface WhyUsCardProps {
  src: string;
  title: ReactNode;
  description?: string | ReactNode;
  classes?: {
    title?: string;
    image?: string;
    description?: string;
  };
}

export const WhyUsCard: FC<WhyUsCardProps> = ({ src, title, description, classes }) => (
  <div className={clsx("flex", "flex-col", "items-center", "text-center", "md:p-5")}>
    <figure>
      <div
        className={clsx(
          "relative",
          "mx-auto",
          "w-14",
          "h-14",
          "sm:w-22",
          "sm:h-22",
          classes?.image
        )}
      >
        <Image src={src} alt="" fill className="object-contain" />
      </div>
      <figcaption
        className={clsx(
          "text-2xl",
          "font-bold",
          "leading-6",
          "text-center",
          "my-2",
          classes?.title
        )}
      >
        {title}
      </figcaption>
    </figure>
    <p className={clsx("text-neutral-400", classes?.description)}>{description}</p>
  </div>
);
