import clsx from "clsx";

interface SubArticleProps {
  title: string;
  className?: string;
}

export const SubArticleTitle = ({ title, className }: SubArticleProps) => {
  return <h4 className={clsx("text-center font-bold text-3xl mb-2", className)}>{title}</h4>;
};
