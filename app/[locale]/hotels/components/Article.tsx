import React from "react";
import clsx from "clsx";
interface ArticleProp {
  text: string;
  className?: string;
}

export const Article = ({ text, className }: ArticleProp) => {
  return <p className={clsx("p-2.5 text-2xl font-normal max-w-[1120px]", className)}>{text}</p>;
};
