import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import clsx from "clsx";
import { Dropdown, DropdownProps } from "@/app/[locale]/hotels/components/Dropdown";
import { LocalizedLink } from "@/app/components/ui/LocalizedLink";
import { ArticleSection } from "@/app/[locale]/hotels/components/ArticleSection";
import { NeedToKnowExplanationArticle } from "@/app/[locale]/hotels/components/NeedToKnowExplanationArticle";
import { ExpandableSection } from "@/app/[locale]/hotels/components/ExpandableSection";
import { BestHotelsTable } from "@/app/[locale]/hotels/components/BestHotelsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ArticleTitle } from "@/app/[locale]/hotels/components/ArticleTitle";
import { RegionHotels } from "@/app/[locale]/hotels/components/RegionHotels";
import config from "@/app/config/config.json";
import { FaqAccordion } from "@/app/[locale]/hotels/components/FaqAccordion";

export const HotelsPageContent = async () => {
  const t = await getTranslations("hotels");
  const dropdownTitle = t("dropdown.title");
  const dropdownItems: DropdownProps["items"] = t.raw("dropdown.items").map((item, index) => ({
    href: `#section${index + 1}`,
    itemText: item,
  }));

  const aboutHotelsItems = t
    .raw("aboutHotels.items")
    .map((item: { hotel: string; description: string }) => ({
      title: item.hotel,
      description: item.description,
    }));

  const aboutLuxuryHotelsItems = t
    .raw("aboutLuxuryHotels.items")
    .map((item: { title: string; description: string }) => ({
      title: item.title,
      description: item.description,
    }));

  const aboutHotelsButtonText = {
    open: t("aboutHotels.buttonText.open"),
    close: t("aboutHotels.buttonText.close"),
  };

  const northernHotels = t.raw("recommendedHotelsByRegion.regions")["northern"]["resorts"];
  const centralHotels = t.raw("recommendedHotelsByRegion.regions")["central"]["resorts"];
  const southernHotels = t.raw("recommendedHotelsByRegion.regions")["southern"]["resorts"];

  const toRegionHotelsData = (resorts: { ["key"]: string }) => {
    return Object.entries(resorts).map(([name, title]) => ({
      name,
      title,
      imgSrc: `/hotels/resorts/${name}.png`,
    }));
  };

  const faqTitle = t("fagHotels.faqTitle");
  const faqItems = t.raw("fagHotels.faq");

  return (
    <div>
      <section className={"p-2.5"}>
        <div className={"flex justify-center pt-17"}>
          <LocalizedLink className={"text-primary"} href={"/"}>
            {t("homeLink")}
          </LocalizedLink>
          <span className="mx-2">-</span>
          <span>{t("title")}</span>
        </div>
        <h2 style={{ color: "var(--brand)" }} className={"m-1 text-center text-6xl font-black"}>
          {t("title")}
        </h2>
      </section>

      <section className={"p-2.5 flex justify-center"}>
        <Dropdown title={dropdownTitle} items={dropdownItems} />
      </section>

      <ArticleSection
        id="section1"
        title={t("getToKnow.title")}
        article={t("getToKnow.article")}
        className="mt-12"
      >
        <div className={"flex justify-center align-middle p-5"}>
          <Image src={"/hotels/get-to-know.webp"} width={800} height={420} alt={"get-to-know"} />
        </div>
      </ArticleSection>

      <ArticleSection
        id="section2"
        title={t("recommendedHotels.title")}
        article={t("recommendedHotels.article")}
        className="bg-secondary text-white p-8 mt-10"
      />

      <ArticleSection
        id="section3"
        title={t("needToKnow.title")}
        article={t("needToKnow.article")}
        className="mt-7"
      >
        <NeedToKnowExplanationArticle />
      </ArticleSection>

      <ArticleSection
        id="section4"
        title={t("nutshell.title")}
        article={t("nutshell.article")}
        className="mt-7"
      ></ArticleSection>

      <ExpandableSection items={aboutHotelsItems} buttonText={aboutHotelsButtonText} />

      <section id="section5">
        <BestHotelsTable />
      </section>

      <section className="bg-[#2e2489] py-10 text-white text-center">
        <p className="text-3xl font-bold max-w-6xl mx-auto px-4">{t("contactForTheHotel")}</p>
        <div className="flex items-center justify-center">
          <a
            href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
            className={clsx(
              "mt-6 relative flex h-15 w-15 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:cursor-pointer"
            )}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
          </a>
        </div>
      </section>

      <ArticleSection
        id="section6"
        title={t("luxuryHotels.title")}
        article={t("luxuryHotels.article")}
        className="mt-7"
      />

      <section className="pt-10">
        <ExpandableSection
          items={aboutLuxuryHotelsItems}
          buttonText={aboutHotelsButtonText}
          isFirstOpen={false}
        />
      </section>

      <section id="section7" className="flex flex-col items-center px-4">
        <ArticleTitle
          title={t("recommendedHotelsByRegion.title")}
          className="text-center mt-12 mb-6"
        />
        <div className="w-full max-w-[70rem]">
          <RegionHotels
            title={t("recommendedHotelsByRegion.regions.northern.title")}
            resorts={toRegionHotelsData(northernHotels)}
            className={"mb-5"}
          />

          <RegionHotels
            title={t("recommendedHotelsByRegion.regions.central.title")}
            resorts={toRegionHotelsData(centralHotels)}
            className={"mb-5"}
          />
          <RegionHotels
            title={t("recommendedHotelsByRegion.regions.southern.title")}
            resorts={toRegionHotelsData(southernHotels)}
            className={"mb-5"}
          />
        </div>
      </section>

      <section id="section8">
        <FaqAccordion title={faqTitle} faq={faqItems} />
      </section>
    </div>
  );
};
