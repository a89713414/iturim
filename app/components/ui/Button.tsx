import clsx from "clsx";
import { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { LocalizedLink } from "./LocalizedLink";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  href?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ title, href, className, disabled, ...props }) => {
  const classes = clsx(
    "px-8",
    "py-4",
    "rounded-full",
    disabled
      ? "bg-gray-400 cursor-not-allowed opacity-60"
      : [
          "bg-secondary",
          "hover:bg-primary",
          "text-white",
          "font-bold",
          "text-xl",
          "md:text-lg",
          "shadow-lg",
          "transition-colors",
          "duration-500",
          "cursor-pointer",
          "min-w-30",
        ],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      );
    }
    return (
      <LocalizedLink
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {title}
      </LocalizedLink>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {title}
    </button>
  );
};
