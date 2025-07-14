"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { LocalizedLink } from "../ui/LocalizedLink";
import config from "../../config/config.json";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

interface MobileHeaderProps {
  navItems: NavItem[];
}

export const MobileHeader = ({ navItems }: MobileHeaderProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("common.header");

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 shadow-md bg-white md:hidden fixed w-full z-50">
        <LocalizedLink href="/">
          <Image src="/newlogo.png" alt="Logo" width={50} height={50} />
        </LocalizedLink>
        <button onClick={() => setOpen(!open)} aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </header>

      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-60 transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end items-center p-4">
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100vh-64px)] p-6 pb-[50px]">
  
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${config.phone}`}
              className="w-full bg-primary text-white text-center py-2 rounded font-semibold"
            >
              {t("phone")}: {config.phone}
            </a>

            <LocalizedLink
              href="/contact-us"
              className="w-full bg-secondary text-white text-center py-2 rounded font-semibold"
              onClick={() => setOpen(false)}
            >
              {t("contact")}
            </LocalizedLink>

            <div className="flex justify-center gap-6 mt-2">
              <a href={config.fb} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-blue-600" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500" />
              </a>
            </div>

            {/* <div className="flex justify-center mt-2 text-xl">
              <LanguageSwitcher />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
