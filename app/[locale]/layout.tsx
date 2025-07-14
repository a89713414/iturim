import { Assistant } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import clsx from "clsx";

import { FloatingButton } from "../components/FloatingButton";
import { Footer } from "../components/Footer";
import { ModalForm } from "../components/ModalForm";
import { ModalProvider } from "../providers/ModalProvider";
import { routing } from "../../i18n/routing";
import "../globals.css";
import { Header } from "@/app/components/Header/Header";

const fontAssistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dir = locale === "he" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir} className={fontAssistant.variable}>
      <body>
        <ModalProvider>
          <NextIntlClientProvider>
            <Header />
            <main className={clsx("md:pt-20")}>{children}</main>
            <Footer />

            <FloatingButton />
            <ModalForm />
          </NextIntlClientProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
