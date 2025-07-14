"use client";
import clsx from "clsx";

interface NextSectionButtonProps {
  children: React.ReactNode;
  targetId?: string;
  className?: string;
}

export const NextSectionButton = ({
  children,
  targetId = "contact-us-page-title",
  className
}: NextSectionButtonProps) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ height: "100%" }} onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
