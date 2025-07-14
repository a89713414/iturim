"use client";
import { useEffect, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ArticleTitle } from "@/app/[locale]/hotels/components/ArticleTitle";

export interface FaqItem {
  q: string;
  a: string;
}

export interface HotelsFaqProps {
  title: string;
  faq: FaqItem[];
}

export const FaqAccordion = ({ title, faq }: HotelsFaqProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [orientation, setOrientation] = useState<"rtl" | "ltr">();

  useEffect(() => {
    const orient = document.documentElement.getAttribute("dir") as "rtl" | "ltr";
    setOrientation(orient);
  }, []);

  const toggle = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-grey-900 py-12 px-4 text-right">
      <div className="max-w-screen-xl mx-auto">
        <ArticleTitle title={title} className="text-center mb-5" />
        <ul className="space-y-6">
          {faq.map((item, index) => (
            <li key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggle(index)}
                className="flex items-center w-full  font-semibold text-black"
              >
                <FontAwesomeIcon
                  icon={orientation === "rtl" ? faCaretLeft : faCaretRight}
                  className={clsx(
                    "transition-transform",
                    openIndexes.includes(index) ? "rotate-90" : "",
                    "px-2"
                  )}
                />
                <span
                  className={clsx(
                    openIndexes.includes(index) ? "text-primary" : "",
                    "text-2xl p-4"
                  )}
                >
                  {item.q}
                </span>
              </button>
              {openIndexes.includes(index) && (
                <p className="mt-2 text-xl text-gray-700 text-center">{item.a}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
