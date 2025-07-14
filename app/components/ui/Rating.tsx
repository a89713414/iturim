import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC } from "react";

interface RatingProps {
  rating: number;
  classes?: {
    container?: string;
    icon?: string;
  };
}

export const Rating: FC<RatingProps> = ({ rating, classes }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={clsx(
        "w-4",
        "h-4",
        index < rating ? "text-orange-400" : "text-gray-300",
        classes?.icon
      )}
    />
  ));

  return <div className={clsx("flex", "gap-1", classes?.container)}>{stars}</div>;
};
