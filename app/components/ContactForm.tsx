"use client";

import { countries } from "countries-list";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Select } from "./ui/Select";
import { RadioGroup } from "./ui/RadioGroup";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SendMailModal } from "@/app/[locale]/contact-us/components/SendMailModal";
import clsx from "clsx";

const countryOptions = Object.entries(countries)
  .map(([code, country]) => ({
    code,
    name: country.name,
    phone: country.phone.toString(),
  }))
  .sort((a, b) => {
    if (a.code === "IL") return -1;
    if (b.code === "IL") return 1;
    return a.name.localeCompare(b.name);
  });

const mobileCarrierOptions = [
  { value: "050", label: "050" },
  { value: "051", label: "051" },
  { value: "052", label: "052" },
  { value: "053", label: "053" },
  { value: "054", label: "054" },
  { value: "055", label: "055" },
  { value: "058", label: "058" },
];

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations("contactUs.form");
  const [modal, setModal] = useState<"open-success" | "open-failed" | null>(null);
  const ticketOptions = [
    { value: "yes", label: t("ticket.options.yes") },
    { value: "no", label: t("ticket.options.no") },
    { value: "other", label: t("ticket.options.other") },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const mobileCarrier = (form.elements.namedItem("mobileCarrier") as HTMLSelectElement)?.value;
    const countryCode = (form.elements.namedItem("countryCode") as HTMLSelectElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const ticket = (form.elements.namedItem("ticket") as RadioNodeList)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const formData = {
      firstName,
      lastName,
      phone,
      mobileCarrier,
      countryCode,
      email,
      ticket,
      message,
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        console.log("Email sent");
        setModal("open-success");
        setIsSubmitted(true);
        form.reset();
      })
      .catch(err => {
        setModal("open-failed");
        console.error("Failed to send email:", err);
      });
    console.log("Form submitted");
  };

  return (
    <div className={clsx("relative")}>
      <form
        className={clsx(
          "w-full",
          "grid",
          "grid-cols-10",
          "gap-x-4",
          "bg-gray-50",
          "md:bg-transparent",
          "px-5",
          "py-10",
          "md:py-0",
          "md:px-0"
        )}
        onSubmit={handleSubmit}
      >
        <div className={clsx("md:col-span-5", "col-span-10", "order-1")}>
          <Input
            label={t("firstName.label")}
            name="firstName"
            placeholder={t("firstName.placeholder")}
            required
          />
        </div>
        <div className={clsx("md:col-span-5", "col-span-10", "order-2")}>
          <Input
            label={t("lastName.label")}
            name="lastName"
            placeholder={t("lastName.placeholder")}
            required
          />
        </div>

        <div className={clsx("md:col-span-3", "col-span-10", "order-3", "md:rtl:order-5")}>
          <Select label={t("countryCode.label")} required name="countryCode">
            {countryOptions.map(({ code, phone }) => (
              <option key={code} value={phone}>
                {code} (+{phone})
              </option>
            ))}
          </Select>
        </div>
        <div className={clsx("md:col-span-2", "col-span-10", "order-4")}>
          <Select label={t("mobileCarrier.label")} required name="mobileCarrier">
            {mobileCarrierOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>
        <div className={clsx("md:col-span-3", "col-span-10", "order-5", "md:rtl:order-3")}>
          <Input label={t("phone.label")} name="phone" required />
        </div>

        <div className={clsx("md:col-span-5", "col-span-10", "order-6")}>
          <Input
            label={t("email.label")}
            name="email"
            placeholder={t("email.placeholder")}
            type="email"
          />
        </div>
        <div className={clsx("md:col-span-3", "col-span-10", "order-7")}>
          <RadioGroup label={t("ticket.label")} name="ticket" options={ticketOptions} required />
        </div>

        <div className={clsx("md:col-span-10", "col-span-10", "order-8")}>
          <Textarea
            label={t("message.label")}
            name="message"
            placeholder={t("message.placeholder")}
          />
        </div>

        <div className={clsx("md:col-span-10", "col-span-10", "order-9")}>
          <Button title={t("submit")} className="w-full" disabled={isSubmitted} />
        </div>
      </form>
      {modal && <SendMailModal type={modal} onClose={() => setModal(null)} />}
    </div>
  );
};
