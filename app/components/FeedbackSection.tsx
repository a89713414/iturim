import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ImageSlider } from "./ui/ImageSlider/ImageSlider";
import { FeedbackCard } from "./ui/FeedbackCard";
import { Button } from "./ui/Button";

const feedbackList = [
  {
    avatarImgSrc: "/feedback_avatar_1.jpg",
    sourceImgSrc: "/fb.svg",
    name: "קסם מזגאוקר",
    text: "text_1",
  },
  {
    avatarImgSrc: "/feedback_avatar_2.jpg",
    sourceImgSrc: "/fb.svg",
    name: "משפחת בונדר",
    text: "text_2",
  },
  {
    avatarImgSrc: "/feedback_avatar_3.jpg",
    sourceImgSrc: "/fb.svg",
    name: "אילנה כהן",
    text: "text_3",
  },
  {
    avatarImgSrc: "/feedback_avatar_4.jpg",
    sourceImgSrc: "/fb.svg",
    name: "אילנית סעדי",
    text: "text_4",
  },
  {
    avatarImgSrc: "/feedback_avatar_5.png",
    sourceImgSrc: "/google.svg",
    name: "גדי אליהו",
    text: "text_5",
  },
  {
    avatarImgSrc: "/feedback_avatar_6.jpg",
    sourceImgSrc: "/fb.svg",
    name: "Michal Mashal",
    text: "text_6",
  },
  {
    avatarImgSrc: "/feedback_avatar_7.webp",
    sourceImgSrc: "/fb.svg",
    name: "Lee Grebenau Dankner",
    text: "text_7",
  },
  {
    avatarImgSrc: "/feedback_avatar_8.jpg",
    sourceImgSrc: "/fb.svg",
    name: "Doron Ginsburg",
    text: "text_8",
  },
  {
    avatarImgSrc: "/feedback_avatar_9.jpg",
    sourceImgSrc: "/fb.svg",
    name: "Zvia Chaim",
    text: "text_9",
  },
  {
    avatarImgSrc: "/feedback_avatar_10.jpg",
    sourceImgSrc: "/fb.svg",
    name: "Bar Madrer Melamed",
    text: "text_10",
  },
  {
    avatarImgSrc: "/feedback_avatar_11.webp",
    sourceImgSrc: "/google.svg",
    name: "אלון עמיר",
    text: "text_11",
  },
  {
    avatarImgSrc: "/feedback_avatar_12.webp",
    sourceImgSrc: "/fb.svg",
    name: "Galya Dekel",
    text: "text_12",
  },
  {
    avatarImgSrc: "/feedback_avatar_13.webp",
    sourceImgSrc: "/lametayel.svg",
    name: "חנה ויענקלה אברהם",
    text: "text_13",
  },
];

export const FeedbackSection = async () => {
  const t = await getTranslations("homepage.feedback");

  return (
    <section className={clsx("bg-gray-100", "pt-15", "pb-10")}>
      <div className={clsx("container", "mx-auto", "px-2", "md:px-0")}>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "md:flex-row",
            "justify-center",
            "mb-12",
            "gap-6",
            "md:gap-40"
          )}
        >
          <h2
            className={clsx(
              "text-center",
              "leading-none",
              "text-[36px]",
              "md:text-[39px]",
              "font-bold"
            )}
          >
            {t("title")}
          </h2>

          <div className={clsx("self-center")}>
            <Button title={t("btnTitle")} />
          </div>
        </div>

        <ImageSlider autoplay autoplaySpeed={5000}>
          {feedbackList.map(item => (
            <FeedbackCard
              key={item.name}
              avatarImgSrc={item.avatarImgSrc}
              name={item.name}
              sourceImgSrc={item.sourceImgSrc}
              text={t(item.text)}
              classes={{ text: "line-clamp-12" }}
            />
          ))}
        </ImageSlider>
      </div>
    </section>
  );
};
