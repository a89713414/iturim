import clsx from "clsx";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";

type NavItemProps = {
  label: string;
  href: string;
  isActive: boolean;
};
export const NavItem = ({ label, href, isActive }: NavItemProps) => {
  return (
    <div
      key={label}
      className={clsx(
        "relative",
        "flex",
        "items-center",
        "px-2",
        "py-4",
        "border-b-2",
        isActive
          ? ["text-sky-500", "border-sky-400"]
          : ["text-black", "hover:text-sky-500", "border-transparent", "hover:border-sky-400"]
      )}
    >
      <LocalizedLink href={href} className={clsx("text-xl", "font-medium", "transition-colors")}>
        <span className={clsx("flex", "items-center", "gap-1")}>{label}</span>
      </LocalizedLink>
    </div>
  );
};
