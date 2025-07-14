import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import config from "../config/config.json";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
import { LocalizedLink } from "./ui/LocalizedLink";

const FASocialMediaIcon = ({ icon }: { icon: IconProp }) => (
  <FontAwesomeIcon icon={icon} size="xl" />
);

const socialMedia = [
  {
    link: config.fb,
    icon: <FASocialMediaIcon icon={faFacebookF} />,
  },
  {
    link: config.youtube,
    icon: <FASocialMediaIcon icon={faYoutube} />,
  },
  {
    link: config.instagram,
    icon: <FASocialMediaIcon icon={faInstagram} />,
  },
  {
    link: config.lametayel,
    icon: <Image src="/lametayel_social.svg" width={24} height={24} alt="" />,
  },
];

export const Footer = async () => {
  const t = await getTranslations();

  const contacts = [
    {
      icon: faEnvelope,
      el: <a href={`mailto:${config.email}`}>{config.email}</a>,
    },
    {
      icon: faPhoneSquareAlt,
      el: (
        <span>
          {t("homepage.contacts.phoneFromIsrael")}{" "}
          <a href={`tel:${config.phone}`}>{config.phone}</a>
        </span>
      ),
    },
    {
      icon: faWhatsapp,
      el: (
        <a
          href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp"
        >
          {t("homepage.contacts.whatsappContact")}
        </a>
      ),
    },
  ];

  const destinations = Object.keys(t.raw("destinations.resorts.list")).map(key => ({
    title: t(`destinations.resorts.list.${key}.title`),
    link: `/destinations/${key}`,
  }));

  const usefulLinks = [
    {
      title: t("common.footer.usefulLinks.items.siargaoHotels"),
      link: "/hotels/siargao",
    },
    {
      title: t("common.footer.usefulLinks.items.boracayHotels"),
      link: "/hotels/boracay",
    },
    {
      title: t("common.footer.usefulLinks.items.palawanHotels"),
      link: "/hotels/palawan",
    },
    {
      title: t("common.footer.usefulLinks.items.domesticFlights"),
      link: "/domestic-flights",
    },
    {
      title: t("common.footer.usefulLinks.items.internationalFlights"),
      link: "/international-flights",
    },
    {
      title: t("common.footer.usefulLinks.items.ferries"),
      link: "/ferries",
    },
    {
      title: t("common.footer.usefulLinks.items.withChildren"),
      link: "/with-children",
    },
  ];

  const information = [
    {
      title: t("common.footer.information.items.aboutUs"),
      link: "/about-us",
    },
    {
      title: t("common.footer.information.items.bookingConditions"),
      link: "/booking-conditions",
    },
    {
      title: t("common.footer.information.items.recommendations"),
      link: "/recommendations",
    },
    {
      title: t("common.footer.information.items.contactUs"),
      link: "/contact-us",
    },
    {
      title: t("common.footer.information.items.workInPhilippines"),
      link: "/work-in-philippines",
    },
    {
      title: t("common.footer.information.items.chabadHouse"),
      link: "/chabad-house",
    },
    {
      title: t("common.footer.information.items.weather"),
      link: "/weather",
    },
    {
      title: t("common.footer.information.items.emergencyInfo"),
      link: "/emergency-info",
    },
  ];

  return (
    <section className={clsx("relative", "bg-[rgb(46,40,130)]", "py-12")}>
      <div
        className={clsx(
          "absolute",
          "top-0",
          "left-0",
          "w-full",
          "h-full",
          "bg-no-repeat",
          "bg-cover",
          "bg-center",
          "bg-[url(/bg_contacts_section.jpg)]",
          "opacity-30",
          "z-1"
        )}
      />
      <div className="relative z-1 container mx-auto px-8 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-4">
        <div className="col-span-4 md:col-span-1 p-2.5">
          <Image src="/newlogo.png" width={82} height={82} alt="" className="mb-3" />
          <div className="mb-4">
            {contacts.map((item, index) => (
              <ContactBlock key={index} icon={item.icon} el={item.el} />
            ))}
          </div>

          <h4 className={clsx("text-[18px]", "font-bold", "leading-[18px]", "text-white", "mb-3")}>
            {t("homepage.contacts.followUs")}
          </h4>

          <div className={clsx("flex", "gap-2")}>
            {socialMedia.map(item => (
              <SocialMediaLink key={item.link} icon={item.icon} link={item.link} />
            ))}
          </div>
        </div>
        {/* <div className="col-span-4 md:col-span-1 p-2.5">
          <FooterSection
            title={t("common.footer.destinations.title")}
            items={destinations}
            classes={{ list: "grid-cols-2" }}
          />
        </div> */}
        {/* <div className="col-span-2 md:col-span-1 p-2.5">
          <FooterSection title={t("common.footer.usefulLinks.title")} items={usefulLinks} />
        </div>
        <div className="col-span-2 md:col-span-1 p-2.5">
          <FooterSection title={t("common.footer.information.title")} items={information} />
        </div> */}
      </div>
    </section>
  );
};

const ContactBlock = ({ icon, el }: { icon: IconProp; el: ReactNode }) => (
  <div className={clsx("flex", "gap-3", "items-center", "mb-2", "text-white")}>
    <FontAwesomeIcon icon={icon} />
    {el}
  </div>
);

const SocialMediaLink = ({ icon }: { icon: ReactNode; link: string }) => (
  // <a href={link} target="_blank" rel="noopener noreferrer">
  <div
    className={clsx(
      "w-10",
      "h-10",
      "flex",
      "justify-center",
      "items-center",
      "bg-primary",
      "text-white",
      "rounded-full"
    )}
  >
    {icon}
  </div>
  // </a>
);

const FooterSection = ({
  items,
  title,
  classes,
}: {
  title: string;
  items: { title: string; link: string }[];
  classes?: {
    list?: string;
  };
}) => {
  return (
    <section>
      <h4
        className={clsx(
          "text-[18px]",
          "leading-[18px]",
          "font-bold",
          "border-b",
          "text-white",
          "mb-3",
          "pb-1.5"
        )}
      >
        {title}
      </h4>
      <ul className={clsx("grid", "gap-2", classes?.list)}>
        {items.map(item => (
          <li
            key={item.link}
            className={clsx("text-[16px]", "leading-[24px]", "font-medium", "text-white")}
          >
            <LocalizedLink href={item.link}>{item.title}</LocalizedLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
