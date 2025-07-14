import clsx from "clsx";
import { FC, ReactNode } from "react";

const mapSizeToWidth = {
  s: 920,
  m: 1000,
  l: 1140,
  xl: 1400,
};

interface SectionProps {
  children: ReactNode;
  size?: "s" | "m" | "l" | "xl";
  classes?: {
    root?: string;
    content?: string;
  };
}

export const Section: FC<SectionProps> = ({ children, classes, size }) => {
  const maxWidthClassName = size && `max-w-[${mapSizeToWidth[size]}px]`;

  return (
    <section className={clsx("py-12.5", classes?.root)}>
      <div className={clsx(maxWidthClassName, "mx-auto", classes?.content)}>{children}</div>
    </section>
  );
};
