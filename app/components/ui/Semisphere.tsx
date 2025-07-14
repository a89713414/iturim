import clsx from "clsx";

interface SemisphereProps {
  position?: "top" | "bottom";
}

export const Semisphere = ({ position = "top" }: SemisphereProps) => {
  return (
    <svg
      className={clsx("block w-full h-[45px] md:h-[90px]", position === "bottom" && "rotate-180")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 90"
      preserveAspectRatio="none"
    >
      <path className="fill-white" d="M0,0 L0,45 Q500,130 1000,45 L1000,0 Z" />
    </svg>
  );
};
