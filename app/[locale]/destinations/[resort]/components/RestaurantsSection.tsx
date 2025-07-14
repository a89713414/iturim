import clsx from "clsx";
import { DottedUnderlineTitle } from "@/app/components/ui/DottedUnderlineTitle";

export const RestaurantsSection = ({
  title,
  description,
  restaurants,
  classes,
}: {
  title: string;
  description: string;
  restaurants: { title: string; description: string }[];
  classes?: {
    listItem?: string;
  };
}) => {
  return (
    <section className={clsx("md:py-12.5")}>
      <div className={clsx("max-w-[1140px]", "mx-auto", "p-2.5")}>
        <DottedUnderlineTitle reversed classes={{ hr: "border-t-secondary" }}>
          {title}
        </DottedUnderlineTitle>

        <p className={clsx("text-center", "text-[20px]", "leading-[30px]", "mb-3")}>
          {description}
        </p>

        <div className={clsx("flex", "flex-wrap", "justify-center", "mt-10")}>
          {restaurants.map(item => (
            <div key={item.title} className={clsx("basis-1/1", classes?.listItem)}>
              <div className={clsx("m-2.5", "border-t-4", "border-t-gray-300", "border-dotted")}>
                <div
                  className={clsx(
                    "mt-2",
                    "mb-1",
                    "text-[#2e2882]",
                    "text-[22px]",
                    "leading-[26px]",
                    "font-bold"
                  )}
                >
                  {item.title}
                </div>
                <div className={clsx("text-[16px]", "leading-[24px]")}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
