"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { HeaderButton } from "../ui/HeaderButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import config from "../../config/config.json";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
// import { useModal } from "../providers/ModalProvider";
import { usePathname } from "next/navigation";
import { LocalizedLink } from "../ui/LocalizedLink";
import { HeaderDropdown } from "@/app/components/Header/Dropdown";
import { NavItem } from "@/app/components/Header/NavItem";
import { NextSectionButton } from "./NextSectionButton";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

interface DesktopHeaderProps {
  navItems: NavItem[];
}

export const DesktopHeader = ({ navItems }: DesktopHeaderProps) => {
  // const { openModal } = useModal();
  const pathname = usePathname();

  const t = useTranslations("common.header");
  const locale = useLocale();

  return (
    <header
      className={clsx(
        "fixed",
        "z-100",
        "hidden",
        "md:flex",
        "w-full",
        "justify-between",
        "mx-auto",
        "bg-white",
        "shadow-md"
      )}
    >
      <div className={clsx("py-1", "ms-6")}>
        <LocalizedLink href="/">
          <Image src="/newlogo.png" alt="" width={76} height={76} priority />
        </LocalizedLink>
      </div>
      <nav
        className={clsx(
          "h-full",
          "flex",
          "items-center",
          "grow",
          "mt-2.5",
          locale === "he" ? "pr-16 pl-3" : "pl-16 p3-3"
        )}
      ></nav>
      <div className={clsx("flex", "items-center")}>
        <HeaderButton
          className={clsx("w-[200px]", "bg-primary")}
          href={`tel:${config.phone}`}
        >
          <span>{t("phone")}</span>
          <span>{config.phone}</span>
        </HeaderButton>
        <NextSectionButton>
          <HeaderButton
            className={clsx("w-[84px]", "bg-secondary", "cursor-pointer")}
          >
            {t("contact")}
          </HeaderButton>
        </NextSectionButton>

        <div className={clsx("flex", "items-center", "gap-5", "px-5")}>
          <a
            href={config.fb}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className={clsx("text-blue-600")}
              size="2xl"
            />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={clsx("text-green-500")}
              size="2xl"
            />
          </a>
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </header>
  );
};
