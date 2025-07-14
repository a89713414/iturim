import clsx from "clsx";
import { FC, ReactNode } from "react";

interface DottedUnderlineTitleProps {
  children: ReactNode;
  align?: "center" | "start";
  reversed?: boolean;
  classes?: {
    hr?: string;
  };
}

export const DottedUnderlineTitle: FC<DottedUnderlineTitleProps> = ({
  children,
  align = "center",
  classes,
  reversed = false,
}) => {
  return (
    <div
      className={clsx(
        "flex",
        reversed ? "flex-col-reverse" : "flex-col",
        "mb-3",
        align === "start" && "text-start",
        align === "center" && "text-center"
      )}
    >
      <h2 className={clsx("text-[36px]", "leading-[36px]", "font-bold", "mb-5")}>{children}</h2>
      <hr
        className={clsx(
          "border-t-4",
          "border-t-primary",
          "border-dotted",
          "w-[155px]",
          align === "start" && "rtl:ml-auto ltr:mr-auto",
          align === "center" && "mx-auto",
          "mb-5",
          classes?.hr
        )}
      />
    </div>
  );
};
