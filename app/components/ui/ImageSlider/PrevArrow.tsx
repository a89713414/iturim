import { CustomArrowProps } from "react-slick";
import clsx from "clsx";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { NavIcon } from "./NavIcon";

export const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <NavIcon icon={faChevronLeft} classNames={clsx("-left-5", "md:-left-6")} onClick={onClick} />
);
