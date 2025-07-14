"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const localeNames: Record<string, string> = {
  en: "עב",
  he: "עב",
};

export const LanguageSwitcher = () => {
  const locale = useLocale();

  const otherLocale = locale === "en" ? "he" : "en";

  const pathname = usePathname();
  const newPathname = pathname.replace(/^\/(en|he)/, `/${otherLocale}`);

  return (
    <Link href={newPathname} locale={otherLocale}>
      <button className={clsx("font-black", "cursor-pointer", "underline")}>
        {localeNames[otherLocale]}
      </button>
    </Link>
  );
};
