import Image from "next/image";
import { Rating } from "@/app/components/ui/Rating";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import { ImageSlider } from "@/app/components/ui/ImageSlider/ImageSlider";
import { FeedbackCard } from "@/app/components/ui/FeedbackCard";

interface SourceSectionProps {
  title: string;
  caption: ReactNode;
  imgSrc: string;
  items: {
    sourceImg: string;
    name: string;
    date: string;
    rating: number;
    text: string;
  }[];
}

export const SourceSection: FC<SourceSectionProps> = async ({ title, caption, imgSrc, items }) => {
  return (
    <section className={clsx("py-12.5")}>
      <div className={clsx("max-w-[1400px]", "mx-auto")}>
        <div className={clsx("flex", "flex-col", "justify-center", "items-center")}>
          <h2 className={clsx("text-[24px]", "leading-[32px]", "font-bold", "mb-1")}>{title}</h2>
          <Rating rating={5} classes={{ container: "mb-1", icon: clsx("!w-7.5", "!h-7.5") }} />
          <p className={clsx("text-[15px]", "leading-[21px]", "mb-1")}>{caption}</p>
          <Image src={imgSrc} alt="" width={110} height={35} className="mt-2" />

          <div className={clsx("w-full", "mt-6")}>
            <ImageSlider autoplay={false} autoplaySpeed={5000} slidesToShow={4}>
              {items.map(item => (
                <FeedbackCard
                  key={item.name}
                  name={item.name}
                  date={item.date}
                  sourceImgSrc={item.sourceImg}
                  text={item.text}
                  rating={item.rating}
                  classes={{
                    container: clsx("!min-h-[250px]"),
                    header: clsx("!p-4"),
                    avatar: clsx("!w-10", "!h-10"),
                    name: clsx("!text-[14px]", "!font-bold", "!leading-[20px]"),
                    text: clsx("!text-[15px]", "!leading-[22px]"),
                  }}
                />
              ))}
            </ImageSlider>
          </div>
        </div>
      </div>
    </section>
  );
};
