import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";
import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import { Disclosure } from "@/app/components/Disclosure";

export const FAQSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.faq`);

  const data = t.raw("items") as { question: string; answer: string }[];

  return (
    <section className={clsx("md:py-12.5", "bg-secondary")}>
      <div className={clsx("max-w-[1000px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle classes={{ hr: "!border-white" }}>{t("title")}</DottedUnderlineTitle>

        <div className={clsx("flex", "flex-col", "gap-3.5")}>
          {data.map(item => (
            <Disclosure
              key={item.question}
              title={item.question}
              classes={{
                button: clsx("text-[22px]", "leading-[22px]", "text-bold"),
              }}
            >
              <div className="p-4">
                <p className={clsx("text-[16px]", "leading-[24px]", "mb-3.5")}>{item.answer}</p>
              </div>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};
