"use client";

import { useState } from "react";
import { SubsectionArticle } from "@/app/[locale]/hotels/components/SubsectionArticle";
import { ExpandableSectionButton } from "@/app/[locale]/hotels/components/ExpandableSectionButton";
import clsx from "clsx";

interface ExpandableSection {
  items: { title: string; description: string }[];
  buttonText: {
    open: string;
    close: string;
  };
  isFirstOpen?: boolean;
}

export const ExpandableSection = ({ items, buttonText, isFirstOpen = true }: ExpandableSection) => {
  const [open, setOpen] = useState(false);

  const expandableItems = items.map(item => (
    <SubsectionArticle key={item.title} title={item.title} text={item.description} />
  ));

  return (
    <>
      {isFirstOpen ? (
        <div>
          {expandableItems[0]}

          <div
            className={clsx(
              "overflow-hidden transition-[max-height] duration-300 ease-in-out",
              open ? "max-h-[1050px]" : "max-h-0"
            )}
          >
            {expandableItems.slice(1)}
          </div>

          <div className="flex justify-center mt-5">
            <ExpandableSectionButton
              openText={buttonText.open}
              closeText={buttonText.close}
              onToggle={() => setOpen(!open)}
              isOpen={open}
            />
          </div>
        </div>
      ) : (
        <div>
          <div
            className={clsx(
              "overflow-hidden transition-[max-height] duration-300 ease-in-out",
              open ? "max-h-[1050px]" : "max-h-0"
            )}
          >
            {expandableItems}
          </div>
          <div className="flex justify-center mt-5">
            <ExpandableSectionButton
              openText={buttonText.open}
              closeText={buttonText.close}
              onToggle={() => setOpen(!open)}
              isOpen={open}
            />
          </div>
        </div>
      )}
    </>
  );
};
