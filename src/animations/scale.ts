import type { Variants } from "motion/react";

type Direction = "in" | "inX" | "inY" | "out" | "outX" | "outY";

interface Options {
  scale?: number;
}

export function varScale(direction: Direction, options?: Options): Variants {
  const scale = options?.scale ?? 0;

  const variants: Record<Direction, Variants> = {
    in: {
      initial: { scale, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
    },
    inX: {
      initial: { scaleX: scale, opacity: 0 },
      animate: { scaleX: 1, opacity: 1 },
      exit: { scaleX: 0, opacity: 0 },
    },
    inY: {
      initial: { scaleY: scale, opacity: 0 },
      animate: { scaleY: 1, opacity: 1 },
      exit: { scaleY: 0, opacity: 0 },
    },
    out: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0 },
    },
    outX: {
      initial: { scaleX: 1, opacity: 1 },
      animate: { scaleX: 0, opacity: 0 },
    },
    outY: {
      initial: { scaleY: 1, opacity: 1 },
      animate: { scaleY: 0, opacity: 0 },
    },
  };

  return variants[direction];
}
