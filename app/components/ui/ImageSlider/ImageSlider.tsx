"use client";

import React, { FC } from "react";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";
import { useLocale } from "next-intl";

import { useIsMobile } from "../../../hooks/useIsMobile";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";

interface ImageSliderProps extends Partial<Pick<Settings, "autoplay" | "autoplaySpeed">> {
  children: React.ReactNode;
  slidesToShow?: number;
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export const ImageSlider: FC<ImageSliderProps> = ({
  children,
  autoplay = false,
  autoplaySpeed,
  slidesToShow = 3,
}) => {
  const isMobile = useIsMobile();
  const locale = useLocale();

  return (
    <div className={clsx("image-slider-container", "px-6", "relative")}>
      <Slider
        {...settings}
        rtl={locale === "he"}
        slidesToShow={isMobile ? 1 : slidesToShow}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        className={clsx("pb-2", "md:pb-4")}
      >
        {children}
      </Slider>
    </div>
  );
};
