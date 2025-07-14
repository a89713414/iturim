"use client";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const NextSectionButton = () => {
  const handleClick = () => {
    const section = document.getElementById("destinations-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      className={clsx("w-6", "h-6", "animate-bounce", "cursor-pointer")}
      style={{ animationDuration: "1.5s" }}
      onClick={handleClick}
    />
  );
};
