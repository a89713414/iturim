import React from "react";
import clsx from "clsx";

interface ArticleTitle {
  title: string;
  className?: string;
}

export const ArticleTitle = ({ title, className }: ArticleTitle) => {
  return <h3 className={clsx("text-5xl font-bold", className)}> {title}</h3>;
};
