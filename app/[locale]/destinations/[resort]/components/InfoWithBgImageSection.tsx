import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface InfoWithBgImageSectionProps {
  imgSrc: string;
  title: string;
  content: ReactNode;
  classes?: {
    image?: string;
  };
}

export const InfoWithBgImageSection: FC<InfoWithBgImageSectionProps> = ({
  imgSrc,
  title,
  content,
  classes,
}) => {
  return (
    <section
      className={clsx(
        "relative",
        "pt-[200px]",
        "md:pt-[90px]",
        "pb-[100px]",
        "bg-gradient-to-r",
        "from-white",
        "from-46%",
        "to-[#F6F6F6]",
        "to-100%"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "top-0",
          "left-0",
          "w-full",
          "h-full",
          "bg-contain",
          "bg-end",
          "bg-no-repeat",
          "opacity-67",
          "ltr:scale-x-[-1]",
          classes?.image
        )}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
      <div className={clsx("w-full", "md:w-[1140px]", "mx-auto", "relative", "z-10")}>
        <div className={clsx("md:w-[60%]", "p-2.5")}>
          <DottedUnderlineTitle align="start">{title}</DottedUnderlineTitle>
          {content}
        </div>
      </div>
    </section>
  );
};
