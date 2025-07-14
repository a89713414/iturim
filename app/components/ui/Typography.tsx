import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type TypographyProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const H2 = ({ children, className, ...rest }: TypographyProps) => {
  return (
    <h2 {...rest} className={clsx("text-4xl", "md:text-6xl", "font-black", className)}>
      {children}
    </h2>
  );
};

export const Typography = {
  H2,
};
