"use client";

import { FC } from "react";
import { Button } from "../ui/Button";

interface AllRecommendationsButtonProps {
  title: string;
}

export const AllRecommendationsButton: FC<AllRecommendationsButtonProps> = ({ title }) => {
  const handleClick = () => {
    const section = document.getElementById("recommendations-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return <Button title={title} onClick={handleClick} />;
};
