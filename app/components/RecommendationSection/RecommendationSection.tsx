import clsx from "clsx";
import { Typography } from "../ui/Typography";
import { getTranslations } from "next-intl/server";
import { RecommendationCard } from "../ui/RecommendationCard";
import { ImageSlider } from "../ui/ImageSlider/ImageSlider";
import { AllRecommendationsButton } from "./AllRecommendationsButton";

const recommendationItems = [
  { img: "/rec_1.webp", name: "feedback_1.name", text: "feedback_1.text" },
  { img: "/rec_2.webp", name: "feedback_2.name", text: "feedback_2.text" },
  { img: "/rec_3.webp", name: "feedback_3.name", text: "feedback_3.text" },
];

export const RecommendationSection = async () => {
  const t = await getTranslations("homepage.recommendation");

  const cards = recommendationItems.map((item, index) => (
    <RecommendationCard key={index} img={item.img} name={t(item.name)} text={t(item.text)} />
  ));

  return (
    <section
      id="recommendations-section"
      className={clsx("bg-white", "pt-16", "pb-10", "scroll-mt-[50px]")}
    >
      <Typography.H2 className={clsx("text-center", "mb-12")}>{t("title")}</Typography.H2>

      <div className={clsx("container", "hidden", "md:grid", "grid-cols-3", "gap-4", "mx-auto")}>
        {cards}
      </div>

      <div className="w-full bg-white relative mx-auto md:hidden">
        <ImageSlider>{cards}</ImageSlider>
      </div>

      <div className={clsx("text-center", "mt-10", "md:mt-5")}>
        <AllRecommendationsButton title={t("btnTitle")} />
      </div>
    </section>
  );
};
