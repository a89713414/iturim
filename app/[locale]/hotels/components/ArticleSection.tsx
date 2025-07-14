import React from "react";
import clsx from "clsx";
import { ArticleTitle } from "@/app/[locale]/hotels/components/ArticleTitle";
import { Article } from "@/app/[locale]/hotels/components/Article";

interface ArticleSectionProps {
  id: string;
  title: string;
  article: string;
  className?: string;
  children?: React.ReactNode;
}

export const ArticleSection = ({
  id,
  title,
  article,
  className,
  children,
}: ArticleSectionProps) => {
  return (
    <section id={id} className={clsx("text-center", className)}>
      <ArticleTitle title={title} />
      <div className="flex justify-center">
        <Article text={article} />
      </div>
      {children}
    </section>
  );
};
