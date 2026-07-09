"use client";

import {
  worksIcon,
  worksIconFrame,
  worksLink,
  worksLinkHovered,
} from "@/components/main/home/main.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { type ComponentProps, useState } from "react";

type WorksIconLinkProps = ComponentProps<typeof Link> & {
  iconSrc: string;
};

export default function WorksIconLink({
  iconSrc,
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...props
}: WorksIconLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      {...props}
      className={clsx(worksLink, hovered && worksLinkHovered, className)}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        setHovered(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setHovered(false);
        onBlur?.(event);
      }}
    >
      <span className={worksIconFrame}>
        <Image src={iconSrc} width={160} height={160} className={clsx(worksIcon)} alt="" />
      </span>
    </Link>
  );
}
