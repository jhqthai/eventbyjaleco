"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import Reveal from "./Reveal";

type RevealGroupProps = {
  children: ReactNode;
  /** Delay between each child reveal, in milliseconds. */
  stagger?: number;
  /** Initial delay applied to the first child. */
  initialDelay?: number;
};

type RevealLikeProps = {
  delay?: number;
};

/**
 * Wraps a list of `<Reveal />` children and injects a staggered `delay`
 * prop into each one, so callers don't have to hand-roll
 * `delay={i * 60}` math everywhere.
 *
 * Children that aren't `Reveal` instances are passed through untouched,
 * so it's safe to mix in a non-revealed item (e.g. a separator).
 */
export default function RevealGroup({
  children,
  stagger = 60,
  initialDelay = 0,
}: RevealGroupProps) {
  let revealIndex = 0;

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        if (child.type !== Reveal) return child;

        const typed = child as ReactElement<RevealLikeProps>;
        const existing = typed.props.delay ?? 0;
        const injected = initialDelay + revealIndex * stagger;
        revealIndex += 1;
        return cloneElement(typed, { delay: existing || injected });
      })}
    </>
  );
}
