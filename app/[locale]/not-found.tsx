import { getTranslations } from "next-intl/server";
import Link from "next/link";
import clsx from "clsx";
import { ScrollToTop } from "@/app/components/ui/ScrollToTop";

export default async function NotFound() {
  const t = await getTranslations("common.404");
  const title = t("title");
  const text = t("text");
  const linkText = t("lint_text");

  return (
    <>
      <ScrollToTop />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: "url('/destinations/404.jpg')" }}
      >
        <div className="bg-white/20 backdrop-blur-lg text-center p-16 rounded-xl shadow-2xl max-w-4xl">
          <h1 className="text-5xl font-extrabold text-white mb-6">{title}</h1>
          <p className="text-2xl text-white mb-8">{text}</p>
          <Link
            className={clsx(
              "px-8",
              "py-4",
              "rounded-full",
              "bg-secondary",
              "hover:bg-primary",
              "text-white",
              "font-bold",
              "text-xl",
              "md:text-lg",
              "shadow-lg",
              "transition-colors",
              "duration-500",
              "cursor-pointer",
              "min-w-30"
            )}
            href="/"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </>
  );
}
