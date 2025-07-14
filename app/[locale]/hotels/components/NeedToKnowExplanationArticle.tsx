import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const NeedToKnowExplanationArticle = async () => {
  const t = await getTranslations("hotels");
  return (
    <div className="flex justify-center">
      <p className={clsx("p-2.5 text-center text-2xl font-normal max-w-[1120px]")}>
        {t.rich("needToKnow.explanation", {
          a: chunks => {
            const children = t("needToKnow.link.children");
            const href = chunks[0] === children ? "/children" : "/";
            return (
              <a href={href} className="text-[#c36] font-bold text-2xl">
                {chunks}
              </a>
            );
          },
          br: () => <br />,
        })}
      </p>
    </div>
  );
};
