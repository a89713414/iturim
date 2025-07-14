import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";

interface ImageCardProps {
  text: string;
  src: string;
  classes?: {
    container?: string;
    text?: string;
  };
}

export const ImageCard: FC<ImageCardProps> = ({ text, src, classes }) => (
  <div
    className={clsx(
      "relative",
      "overflow-hidden",
      "rounded-lg",
      "h-50",
      "md:h-105",
      "w-full",
      classes?.container
    )}
  >
    <div
      className={clsx(
        "w-full",
        "h-full",
        "transition",
        "ease-in-out",
        "duration-1500",
        "transform",
        "hover:scale-120",
        "hover:brightness-70"
      )}
    >
      <Image src={src} alt="" fill className={clsx("object-cover")} />
    </div>
    <h3
      className={clsx(
        "absolute",
        "w-full",
        "bottom-8",
        "md:bottom-0",
        "self-end",
        "text-2xl",
        "md:text-5xl",
        "leading-none",
        "text-white",
        "font-black",
        "text-center",
        "mx-auto",
        "px-2",
        "md:p-8",
        "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
        classes?.text
      )}
    >
      {text}
    </h3>
  </div>
);
