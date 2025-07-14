"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { HeaderButton } from "./ui/HeaderButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import config from "../config/config.json";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
// import { useModal } from "../providers/ModalProvider";
import { usePathname } from "next/navigation";
import { LocalizedLink } from "./ui/LocalizedLink";

const navItems = [
  // { label: "מגזין", href: "/magazine" },
  // {
  //   label: "מידע",
  //   href: "/info",
  //   dropdown: [
  //     { label: "מידע 1", href: "/info/1" },
  //     { label: "מידע 2", href: "/info/2" },
  //   ],
  // },
  // {
  //   label: "ירח דבש וצעירים",
  //   href: "/honeymoon",
  //   dropdown: [
  //     { label: "צעירים 1", href: "/honeymoon/1" },
  //     { label: "צעירים 2", href: "/honeymoon/2" },
  //   ],
  // },
  // {
  //   label: "משפחות",
  //   href: "/families",
  //   dropdown: [
  //     { label: "משפחות 1", href: "/families/1" },
  //     { label: "משפחות 2", href: "/families/2" },
  //   ],
  // },
  // {
  //   label: "טיסות",
  //   href: "/flights",
  //   dropdown: [
  //     { label: "טיסות 1", href: "/flights/1" },
  //     { label: "טיסות 2", href: "/flights/2" },
  //   ],
  // },
  // {
  //   label: "אטרקציות בתאילנד",
  //   href: "/attractions",
  //   dropdown: [
  //     { label: "אטרקציות בבנגקוק", href: "/attractions/bangkok" },
  //     { label: "אטרקציות בפוקט", href: "/attractions/phuket" },
  //     { label: "אטרקציות בצ'יאנג מאי", href: "/attractions/chiang-mai" },
  //   ],
  // },

  { label: "nav.destinations", href: "/destinations" },
  { label: "nav.hotels", href: "/hotels" },
];

export const Header = () => {
  // const { openModal } = useModal();
  const pathname = usePathname();

  const t = useTranslations("common.header");

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
      <nav className={clsx("flex", "items-center", "grow", "px-20")}>
        <div className={clsx("flex", "gap-8")}>

          {navItems.map(item => {
            const isActive = pathname.slice(3) === item.href;
            return (
              <div
                key={item.label}
                className={clsx(
                  "relative",
                  "flex",
                  "items-center",
                  "px-2",
                  "py-6",
                  "border-b-2",
                  isActive
                    ? ["text-sky-500", "border-sky-400"]
                    : [
                        "text-black",
                        "hover:text-sky-500",
                        "border-transparent",
                        "hover:border-sky-400",
                      ]
                )}
              >
                <LocalizedLink
                  href={item.href}
                  className={clsx("text-xl", "font-medium", "transition-colors")}
                >
                  <span className={clsx("flex", "items-center", "gap-1")}>
                    {t(item.label)}
                    {/* {item.dropdown && "+"} */}
                  </span>
                </LocalizedLink>
                {/* {item.dropdown && (
                  <div
                    className={clsx(
                      "absolute",
                      "top-10",
                      "right-0",
                      "mt-2",
                      "w-64",
                      "bg-white",
                      "shadow-lg",
                      "z-50",
                      "hidden",
                      "group-hover:block"
                    )}
                  >
                    {item.dropdown.map((sub) => (
                      <LocalizedLink
                        key={sub.label}
                        href={sub.href}
                        className={clsx("block", "px-6", "py-4", "text-lg", "hover:bg-gray-100")}
                      >
                        {sub.label}
                      </LocalizedLink>
                    ))}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
        
      </nav>
      <div className={clsx("flex", "items-center")}>
        <HeaderButton className={clsx("w-[200px]", "bg-primary")} href={`tel:${config.phone}`}>
          <span>{t("phone")}</span>
          <span>{config.phone}</span>
        </HeaderButton>
        <HeaderButton
          className={clsx("w-[84px]", "bg-secondary", "cursor-pointer")}
          href="/contact-us"
          // onClick={openModal}
        >
          {t("contact")}
        </HeaderButton>
        <div className={clsx("flex", "items-center", "gap-5", "px-5")}>
          {/* <a
            href={config.fb}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          > */}
          <FontAwesomeIcon icon={faFacebookSquare} className={clsx("text-blue-600")} size="2xl" />
          {/* </a> */}
          <a
            href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className={clsx("text-green-500")} size="2xl" />
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
