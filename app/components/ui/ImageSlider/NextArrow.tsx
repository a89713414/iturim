import { CustomArrowProps } from "react-slick";
import clsx from "clsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { NavIcon } from "./NavIcon";

export const NextArrow = ({ onClick }: CustomArrowProps) => (
  <NavIcon icon={faChevronRight} classNames={clsx("-right-5", "md:-right-6")} onClick={onClick} />
);
