import React from "react";
import clsx from "clsx";
import { LocalizedLink } from "./LocalizedLink";

type InlineLinkProps = React.ComponentProps<typeof LocalizedLink> & {
  external?: boolean;
  className?: string;
};

export const InlineLink = ({ className, external = false, ...props }: InlineLinkProps) => {
  if (external) {
    const { href, ...rest } = props;
    return (
      <a
        {...rest}
        href={typeof href === "string" ? href : undefined}
        className={clsx("text-[#E04A7F]", "font-medium", "no-underline", className)}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  }

  return (
    <LocalizedLink
      {...props}
      className={clsx("text-[#E04A7F]", "font-medium", "no-underline", className)}
    />
  );
};
