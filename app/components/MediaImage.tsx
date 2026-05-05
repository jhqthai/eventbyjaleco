"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type MediaImageProps = ImageProps & {
  /** Extra wrapper-level classes (rare; usually pass `className` for the image). */
  wrapperClassName?: string;
};

/**
 * Thin wrapper around `next/image` that fades the image in from opacity-0
 * to opacity-100 once the underlying asset has finished decoding. Reads
 * better on a "quiet luxury" editorial site than the default hard pop-in.
 *
 * - Honors `priority`: priority images skip the fade so the LCP isn't
 *   delayed by an extra opacity transition.
 * - Honors `prefers-reduced-motion` via the global stylesheet rule that
 *   neutralises `transition-duration`.
 */
export default function MediaImage({
  className = "",
  wrapperClassName,
  priority,
  onLoad,
  ...rest
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(Boolean(priority));

  const fadeClass = priority
    ? ""
    : `transition-opacity duration-[600ms] ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`;

  const merged = `${fadeClass} ${className}`.trim();

  const img = (
    <Image
      {...rest}
      priority={priority}
      className={merged}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
    />
  );

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{img}</div>;
  }
  return img;
}
