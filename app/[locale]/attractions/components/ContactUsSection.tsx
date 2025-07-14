import clsx from "clsx";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import config from "@/app/config/config.json";

export const ContactUsSection = async () => {
  const t = await getTranslations("attractions.contactUs");

  return (
    <section className={clsx("bg-[rgb(46,40,130)]", "py-4")}>
      <div
        className={clsx(
          "max-w-[1140px]",
          "mx-auto",
          "flex",
          "flex-col",
          "md:flex-row",
          "items-center"
        )}
      >
        <Image src="/newlogo.png" alt="" width={120} height={120} className="p-2.5" />

        <p
          className={clsx(
            "text-white",
            "text-[27px]",
            "leading-[40px]",
            "flex",
            "text-center",
            "p-2.5",
            "mb-4"
          )}
        >
          {t("title")}
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp"
          className={clsx("p-2.5", "group")}
        >
          <span
            className={clsx(
              "flex",
              "h-[72px]",
              "w-[72px]",
              "items-center",
              "justify-center",
              "rounded-full",
              "bg-green-600",
              "text-white",
              "shadow-lg",
              "transition-transform",
              "duration-300",
              "hover:bg-green-700",
              "hover:scale-110"
            )}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
          </span>
        </a>
      </div>
    </section>
  );
};
