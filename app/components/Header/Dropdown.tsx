"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderDropdownProps = {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  isActive: boolean;
};

export const HeaderDropdown = ({ label, href, items, isActive }: HeaderDropdownProps) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShouldRender(true);
      setVisible(true);
    }, 150); // затримка відкриття
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      setShouldRender(false);
    }, 150); // затримка закриття
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={clsx(
        "relative",
        "flex",
        "items-center",
        "px-2",
        "py-4",
        "border-b-2",
        isActive
          ? ["text-black", "border-primary"]
          : ["text-black", "hover:text-black", "border-transparent", "hover:border-sky-400"]
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <LocalizedLink
        href={href}
        className={clsx(
          "flex justify-center items-center text-xl",
          "font-medium",
          "transition-colors"
        )}
      >
        <span className="flex items-center gap-1">{label}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-sm mr-2.5 ml-2.5" />
      </LocalizedLink>

      {shouldRender && (
        <div
          className={clsx(
            "absolute",
            "top-full",
            "right-0",
            "mt-2",
            "w-64",
            "bg-white",
            "shadow-lg",
            "z-50",
            "border",
            "border-gray-200",
            visible ? "opacity-100" : "opacity-0",
            "transition-opacity",
            "duration-150"
          )}
        >
          {items.map((sub, index) => (
            <LocalizedLink
              key={sub.href}
              href={sub.href}
              className={clsx(
                "block",
                "px-6",
                "py-4",
                "text-lg",
                "transition",
                "hover:bg-primary",
                "hover:text-white",
                index !== 0 && "border-t border-gray-200"
              )}
            >
              {sub.label}
            </LocalizedLink>
          ))}
        </div>
      )}
    </div>
  );
};
