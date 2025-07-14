"use client";

import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import { format } from "url";

interface LocalizedLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export const LocalizedLink: FC<LocalizedLinkProps> = ({ href, children, ...props }) => {
  const params = useParams();

  const locale = params.locale;

  const hrefString = typeof href === "string" ? href : format(href);

  const isExternal =
    hrefString.startsWith("http://") ||
    hrefString.startsWith("https://") ||
    hrefString.startsWith("mailto:") ||
    hrefString.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={hrefString} {...props}>
        {children}
      </a>
    );
  }

  const localizedHref = hrefString.startsWith(`/${locale}`)
    ? href
    : `/${locale}${hrefString.startsWith("/") ? "" : "/"}${hrefString}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
};
