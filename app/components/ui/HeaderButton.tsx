import clsx from "clsx";
import { LocalizedLink } from "./LocalizedLink";

interface HeaderButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const HeaderButton = ({ children, href, className, onClick }: HeaderButtonProps) => (
  <div
    className={clsx("flex", "h-full", "p-4", "justify-center", "items-center", className)}
    onClick={onClick}
  >
    {href ? (
      <LocalizedLink
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "text-center",
          "text-white",
          "text-xl",
          "font-bold",
          "leading-none"
        )}
        href={href}
      >
        {children}
      </LocalizedLink>
    ) : (
      <div
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "text-center",
          "text-white",
          "text-xl",
          "font-bold",
          "leading-none",
          "cursor-pointer"
        )}
      >
        {children}
      </div>
    )}
  </div>
);
