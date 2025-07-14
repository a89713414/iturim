import clsx from "clsx";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Disclosure } from "../../components/Disclosure";
import { Timetable } from "../../components/Timetable";
import { ContactForm } from "../../components/ContactForm";
import { FeedbackSection } from "../../components/FeedbackSection";
import { AdvantagesSection } from "@/app/components/AdvantagesSection";
import { ContactUsInfoSection } from "@/app/components/ContactUsInfoSection";
import { PageTitle } from "@/app/components/ui/PageTitle";

export default async function ContactUsPage() {
  const t = await getTranslations("contactUs");
  return (
    <>
      <PageTitle title={t("title")} />

      <section className={clsx("md:py-12.5", "relative")}>
        <div
          id="contact-us-page-title"
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "w-full",
            "h-full",
            "bg-no-repeat",
            "bg-cover",
            "bg-center",
            "bg-[url(/bg-contact-us.jpg)]",
            "opacity-30",
            "z-1"
          )}
        />

        <div className={clsx("container", "mx-auto", "relative", "z-2")}>
          <ContactUsInfoSection />

          <div className={clsx("md:w-[40%]", "px-5")}>
            <Disclosure title={t("info.disclosureTitle")}>
              <Timetable />
            </Disclosure>
          </div>

          <div className="mt-20 grid grid-cols-10 gap-8">
            <div className="md:col-span-7 col-span-10">
              <ContactForm />
            </div>
            <div className="md:col-span-3 hidden md:flex flex-col items-center">
              <div className="flex items-center justify-center h-full">
                <Image
                  src="/whatsapp-qr-code.svg"
                  alt="WhatsApp QR"
                  width={200}
                  height={200}
                  className={clsx("rounded", "shadow-2xl")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
