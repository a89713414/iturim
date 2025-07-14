"use client";
import { useEffect, useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface DropdownProps {
  title: string;
  items: { href: string; itemText }[];
}

export const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const handleScrollToHash = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", hash);
    }
  };

  return (
    <div className="border border-neutral-400 rounded-sm w-full max-w-[586px] text-right bg-white overflow-hidden">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer px-4 py-2 border-b border-neutral-400"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={clsx("w-6", "h-6", "cursor-pointer", "rotate-180")}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={clsx("w-6", "h-6", "cursor-pointer")}
            />
          )}
        </span>
      </div>

      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: height }}
      >
        <ul ref={contentRef} className="px-6 py-3 space-y-2 text-sm">
          {items.map(({ href, itemText }, idx) => (
            <li
              key={idx}
              className="text-base flex gap-1 cursor-pointer"
              onClick={() => handleScrollToHash(href)}
            >
              <span>{idx + 1}.</span>
              <span>{itemText}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
