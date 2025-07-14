import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ResortKey } from "../page.types";

export const RecommendedHotelsSection = async ({ resort }: { resort: ResortKey }) => {
  const t = await getTranslations(`destinations.resorts.list.${resort}.recommendedHotels`);

  return (
    <section className={clsx("py-12.5", "bg-gray-100")}>
      <div className={clsx("mx-auto", "p-2.5")}>
        <DottedUnderlineTitle>{t("title")}</DottedUnderlineTitle>

        <p className={clsx("text-center", "text-[20px]", "leading-[30px]")}>{t("description")}</p>

        {Object.keys(t.raw("groups")).map(group => (
          <div key={group}>
            <div className={clsx("mt-6")}>
              <h3
                className={clsx(
                  "text-[28px]",
                  "leading-[28px]",
                  "font-bold",
                  "text-center",
                  "text-[rgb(46,40,130)]"
                )}
              >
                {t(`groups.${group}.title`)}
              </h3>

              <div
                className={clsx(
                  "grid",
                  "grid-cols-1",
                  "md:grid-cols-4",
                  "pt-6",
                  "pb-5",
                  "md:pt-10",
                  "md:pb-12.5",
                  "md:px-7.5"
                )}
              >
                {Object.keys(t.raw(`groups.${group}.items`)).map(key => (
                  <div key={key} className="m-2">
                    <div
                      className={clsx(
                        "h-75",
                        "w-full",
                        "relative",
                        "bg-cover",
                        "bg-center",
                        "bg-no-repeat",
                        "group"
                      )}
                      style={{
                        backgroundImage: `url(/destinations/resort/${resort}/hotels/${key}.jpg)`,
                      }}
                    >
                      <div
                        className={clsx(
                          "h-full",
                          "w-full",
                          "bg-primary/90",
                          "flex",
                          "flex-col",
                          "items-center",
                          "justify-center",
                          "p-4",
                          "cursor-pointer"
                        )}
                      >
                        <h4
                          className={clsx(
                            "text-center",
                            "text-white",
                            "text-[16px]",
                            "leading-[24px]",
                            "font-medium",
                            "mb-5"
                          )}
                        >
                          {t(`groups.${group}.items.${key}.description`)}
                        </h4>
                        <span
                          className={clsx(
                            "py-2.5",
                            "px-5",
                            "border-1",
                            "border-white",
                            "text-white",
                            "text-[18px]",
                            "leading-[18px]",
                            "font-medium"
                          )}
                        >
                          {t(`btnTitle`)}
                        </span>
                      </div>

                      <div
                        className={clsx(
                          "flex",
                          "items-center",
                          "justify-center",
                          "absolute",
                          "bottom-0",
                          "left-0",
                          "right-0",
                          "p-4",
                          "h-full",
                          "w-full",
                          "bg-cover",
                          "bg-center",
                          "bg-no-repeat",
                          "transition-all",
                          "duration-800",
                          "ease-in-out",
                          "group-hover:scale-[0.5]",
                          "group-hover:opacity-0",
                          "origin-center"
                        )}
                        style={{
                          backgroundImage: `url(/destinations/resort/${resort}/hotels/${key}.jpg)`,
                        }}
                      >
                        <div className={clsx("absolute", "inset-0", "bg-black/10")} />

                        <div className={clsx("absolute", "z-10")}>
                          <h3
                            className={clsx(
                              "text-[28px]",
                              "leading-[28px]",
                              "text-white",
                              "text-center",
                              "font-bold"
                            )}
                          >
                            {t(`groups.${group}.items.${key}.title`)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
