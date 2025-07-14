import Image from "next/image";
import clsx from "clsx";

interface CardProps {
  imageSrc: string;
  title: string;
  className?: string;
}

export const Card = ({ imageSrc, title, className }: CardProps) => (
  <div
    className={clsx(
      "flex",
      "flex-col",
      "bg-white",
      "shadow-md",
      "overflow-hidden",
      "group",
      "m-2.5",
      "md:m-0",
      className
    )}
  >
    <div className={clsx("relative", "w-full", "h-[270px]", "overflow-hidden")}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className={clsx(
          "object-cover",
          "transition-transform",
          "duration-700",
          "ease-in-out",
          "group-hover:scale-110"
        )}
      />
    </div>
    <div className={clsx("py-8", "text-center")}>
      <span className={clsx("text-[20px]", "font-bold")}>{title}</span>
    </div>
  </div>
);
