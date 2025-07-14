import clsx from "clsx";
import Image from "next/image";

export const ArticleCard = ({
  title,
  text,
  img,
  date,
  classNames,
}: {
  title: string;
  text: string;
  img: string;
  date: string;
  classNames?: string;
}) => (
  <article
    className={clsx(
      "flex",
      "flex-col",
      "bg-white",
      "shadow-lg",
      "hover:shadow-xl",
      "transition-shadow",
      "duration-300",
      "rounded-lg",
      "overflow-hidden",
      classNames
    )}
  >
    <div className={clsx("relative", "w-full", "h-130")}>
      <Image src={img} alt="" fill className="object-cover" />
    </div>
    {/* <div className={clsx("flex", "flex-col", "flex-grow")}>
      <div className={clsx("px-8", "py-6", "flex-grow")}>
        <h3 className={clsx("text-[24px]", "font-bold", "mb-6")}>{title}</h3>
        <p className={clsx("text-[16px]", "text-neutral-400")}>{text}</p>
      </div>
      <p className={clsx("py-4", "px-8", "text-neutral-400", "border-t", "border-gray-200")}>
        {date}
      </p>
    </div> */}
  </article>
);
