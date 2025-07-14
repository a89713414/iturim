"use client";

import clsx from "clsx";
import Image from "next/image";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import config from "@/app/config/config.json";
import { Button } from "@/app/components/ui/Button";
import { useTranslations } from "next-intl";
import { InlineLink } from "@/app/components/ui/InlineLink";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SendMailModal } from "@/app/[locale]/contact-us/components/SendMailModal";

export const ContactFormSection = () => {
  const t = useTranslations("recommendations.form");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modal, setModal] = useState<"open-success" | "open-failed" | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const formData = {
      firstName: fullName,
      phone,
      email,
      message,
    };
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setModal("open-success");
        setIsSubmitted(true);
        form.reset();
      })
      .catch(err => {
        setModal("open-failed");
        console.error("Failed to send email:", err);
      });
  };

  return (
    <section className={clsx("bg-[#c4d1ff]")}>
      <div
        className={clsx("max-w-[1140px]", "mx-auto", "flex", "flex-col", "md:flex-row", "w-full")}
      >
        <div className={clsx("md:w-1/3", "flex", "flex-col", "justify-center", "items-center")}>
          <h2
            className={clsx(
              "text-[28px]",
              "leading-[33px]",
              "font-bold",
              "mt-2",
              "mb-4",
              "text-center"
            )}
          >
            {t("noAnswerTitle")}
          </h2>
          <p className={clsx("text-[16px]", "leading-[24px]", "mb-4", "text-center")}>
            {t("sendMessageInfo")}
          </p>
          <p className={clsx("text-[16px]", "leading-[24px]", "font-bold", "mb-4", "text-center")}>
            {t.rich("whatsappInfo", {
              link: chunk => (
                <InlineLink
                  external
                  href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
                >
                  {chunk}
                </InlineLink>
              ),
            })}
          </p>
          <Image
            src="/whatsapp-qr-code.svg"
            alt="WhatsApp QR"
            width={200}
            height={200}
            className={clsx("rounded", "shadow-2xl")}
          />
        </div>
        <div className={clsx("md:w-2/3", "flex")}>
          <form
            className={clsx("w-full", "flex", "flex-col", "rounded", "p-8")}
            onSubmit={handleSubmit}
          >
            <Input
              label={t("fullName.label")}
              name="fullName"
              required
              className="w-full"
              placeholder={t("fullName.placeholder")}
            />
            <Input
              label={t("phone.label")}
              name="phone"
              required
              className="w-full"
              placeholder={t.rich("phone.placeholder", { phone: config.phoneWhatsApp })}
            />
            <Input
              label={t("email.label")}
              name="email"
              type="email"
              required
              className="w-full"
              placeholder={t("email.placeholder", { email: config.email })}
            />
            <Textarea
              label={t("message.label")}
              name="message"
              required
              className="w-full"
              placeholder={t("message.placeholder")}
            />
            <Button title={t("submit")} className="w-full" type="submit" disabled={isSubmitted} />
          </form>
          {modal && <SendMailModal type={modal} onClose={() => setModal(null)} />}
        </div>
      </div>
    </section>
  );
};
