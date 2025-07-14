"use client";

import clsx from "clsx";
import { FC, useState } from "react";

interface DisclosureProps {
  title?: string;
  children?: React.ReactNode;
  classes?: {
    button?: string;
  };
}

export const Disclosure: FC<DisclosureProps> = ({ title, children, classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("shadow-lg", "shadow-black/20")}>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={clsx(
          "text-[20px]",
          "font-medium",
          "p-4",
          "cursor-pointer",
          "bg-gray-50",
          "flex",
          "items-center",
          "w-full",
          "gap-4",
          classes?.button
        )}
      >
        <span
          className={clsx(
            "text-[13px]",
            "transition-transform",
            "duration-300",
            "transform",
            "inline-block",
            isOpen ? ["ltr:rotate-270", "rtl:-rotate-90"] : "ltr:rotate-180"
          )}
        >
          ◀
        </span>

        {title}
      </button>

      <div
        className={clsx(
          "overflow-hidden",
          "transition-all",
          "duration-800",
          isOpen ? "max-h-[200px]" : "max-h-0"
        )}
      >
        <div className="bg-white">{children}</div>
      </div>
    </div>
  );
};
