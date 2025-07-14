"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState, useRef, useEffect } from "react";
import { Rating } from "./Rating";
import { useTranslations } from "next-intl";

interface FeedbackCardProps {
  sourceImgSrc: string;
  name: string;
  date?: string;
  text: string;
  avatarImgSrc?: string;
  rating?: number;
  classes?: {
    container?: string;
    header?: string;
    name?: string;
    avatar?: string;
    text?: string;
  };
}

export const FeedbackCard: FC<FeedbackCardProps> = ({
  sourceImgSrc,
  avatarImgSrc,
  name,
  date,
  text,
  rating,
  classes,
}) => {
  const t = useTranslations("common.feedbackCard");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (isExpanded) {
      setIsClamped(true); // Always show button when expanded
      return;
    }
    // Temporarily remove line-clamp to measure full height
    const prev = el.style.webkitLineClamp;
    el.style.webkitLineClamp = "unset";
    el.style.display = "block";
    const fullHeight = el.scrollHeight;
    // Restore line-clamp
    el.style.webkitLineClamp = prev;
    el.style.display = "-webkit-box";
    // Now measure clamped height
    const clamped = fullHeight > el.clientHeight;
    setIsClamped(clamped);
  }, [text, isExpanded]);

  return (
    <div className={clsx("px-1")}>
      <div
        className={clsx(
          "min-h-[450px]",
          "md:min-h-[240px]",
          "bg-white",
          "border",
          "border-slate-200",
          "rounded-md",
          classes?.container
        )}
      >
        <div
          className={clsx(
            "flex",
            "justify-between",
            // "md:h-[96px]",
            "px-5",
            "pt-5",
            "pb-2",
            "border-b",
            "border-slate-200",
            classes?.header
          )}
        >
          <div>
            <Image
              className={clsx("rounded-full", "text-facebookBlue")}
              src={sourceImgSrc}
              width={26}
              height={26}
              alt=""
            />
          </div>
          <div className={clsx("flex", "gap-2")}>
            <div>
              <p className={clsx("text-[18px]", "font-semibold", "leading-[27px]", classes?.name)}>
                {name}
              </p>
              {date && (
                <p className={clsx("text-gray-400", "text-[12px]", "leading-[16px]")}>{date}</p>
              )}
            </div>
            {avatarImgSrc ? (
              <Image className="rounded-full" src={avatarImgSrc} width={66} height={66} alt="" />
            ) : (
              <div
                className={clsx(
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-[66px]",
                  "h-[66px]",
                  "bg-blue-500",
                  "text-white",
                  "rounded-full",
                  "text-[24px]",
                  "font-medium",
                  classes?.avatar
                )}
              >
                {name.slice(0, 1)}
              </div>
            )}
          </div>
        </div>
        <div className={clsx("px-5", "pb-5", "pt-2", "flex", "flex-col", "rtl:items-end")}>
          {rating && <Rating rating={rating} classes={{ container: "mb-2" }} />}
          <p
            ref={textRef}
            className={clsx(
              "text-neutral-500",
              "text-[18px]",
              "leading-[20px]",
              "rtl:text-end",
              !isExpanded && "line-clamp-4",
              classes?.text
            )}
            style={{
              display: !isExpanded ? "-webkit-box" : undefined,
              WebkitBoxOrient: !isExpanded ? "vertical" : undefined,
              WebkitLineClamp: !isExpanded ? 4 : undefined,
              overflow: !isExpanded ? "hidden" : undefined,
            }}
          >
            {text}
          </p>

          {isClamped && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:underline hover:text-gray-500 transition-colors mt-2"
            >
              {isExpanded ? t("showLess") : t("showMore")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
