import clsx from "clsx";

interface PageTitleProps {
  title: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, className }) => (
  <div
    className={clsx(
      "w-full",
      "flex",
      "justify-center",
      "py-13",
      "bg-gradient-to-r",
      "from-[#2B2B83]",
      "to-[#3BB3D4]"
    )}
  >
    <h1
      className={clsx(
        "text-center",
        "text-white",
        "text-[55px]",
        "leading-[55px]",
        "font-black",
        className
      )}
    >
      {title}
    </h1>
  </div>
);
