import React, { FC, MouseEventHandler } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavIconProps {
  icon: IconDefinition;
  onClick?: MouseEventHandler;
  classNames?: string;
}

export const NavIcon: FC<NavIconProps> = ({ onClick, icon, classNames }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={clsx(
        "absolute",
        "top-[50%]",
        "text-3xl",
        "text-neutral-300",
        "cursor-pointer",
        classNames
      )}
      onClick={onClick}
    />
  );
};
