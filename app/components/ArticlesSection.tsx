import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ArticleCard } from "./ui/ArticleCard";

const articleList = [
  {
    title: "article_1.title",
    text: "article_1.text",
    img: "/article_1.webp",
    date: "article_1.date",
  },
  {
    title: "article_2.title",
    text: "article_2.text",
    img: "/article_2.jpg",
    date: "article_2.date",
  },
  {
    title: "article_3.title",
    text: "article_3.text",
    img: "/article_3.jpg",
    date: "article_3.date",
  },
];

export const ArticlesSection = async () => {
  const t = await getTranslations("homepage.articles");

  return (
    <section className={clsx("bg-white", "py-10")}>
      <div
        className={clsx(
          "container",
          "mx-auto",
          "flex",
          "flex-col",
          "md:flex-row",
          "gap-10",
          "px-6",
          "md:px-30"
        )}
      >
        {articleList.map(item => (
          <ArticleCard
            date={t(item.date)}
            key={item.title}
            title={t(item.title)}
            text={t(item.text)}
            img={item.img}
            classNames={clsx(
              "flex-1",
              "shadow-lg",
              "hover:shadow-xl",
              "transition-shadow",
              "duration-300",
              "rounded-lg",
              "overflow-hidden"
            )}
          />
        ))}
      </div>
    </section>
  );
};
