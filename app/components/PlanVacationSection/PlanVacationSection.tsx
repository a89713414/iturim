import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { Semisphere } from "../ui/Semisphere";
import { Button } from "../ui/Button";
import { NextSectionButton } from "../Header/NextSectionButton";

export const PlanVacationSection = async () => {
  const t = await getTranslations("homepage.planVacation");

  return (
    <section className={clsx("bg-gray-100")}>
      <div className={clsx("container", "mx-auto", "px-2", "md:px-0")}>
        <div className={clsx("flex", "flex-col", "md:flex-row", "gap-4")}>
          <div className="flex-1">
            <h2
              className={clsx(
                "text-[36px]",
                "leading-[36px]",
                "md:text-[80px]",
                "font-black",
                "md:leading-[80px]",
                "px-12",
                "text-center",
                "text-primary"
              )}
            >
              {t("title")}?<span className="text-secondary">!</span>
            </h2>
          </div>
          <div className="flex-1">
            <p
              className={clsx(
                "text-[24px]",
                "leading-[26px]",
                "md:leading-[33px]",
                "md:text-[30px]",
                "text-center"
              )}
            >
              {t("text_1")}
              <br />
              {t("text_2")}
              <br />
              <span className="font-bold">{t("text_3")}</span>
            </p>
            <div className={clsx("text-center", "mt-12", "z-1", "relative")}>
              <NextSectionButton>
                <Button title={t("btnTitle")} />
              </NextSectionButton>
            </div>
          </div>
        </div>
      </div>
      <Semisphere position="bottom" />
    </section>
  );
};
