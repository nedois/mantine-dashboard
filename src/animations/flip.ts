import type { Variants } from "motion/react";

type Direction = "inX" | "inY" | "outX" | "outY";

export function varFlip(direction: Direction): Variants {
  const variants: Record<Direction, Variants> = {
    inX: {
      initial: { rotateX: -180, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 },
      exit: { rotateX: -180, opacity: 0 },
    },
    inY: {
      initial: { rotateY: -180, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -180, opacity: 0 },
    },
    outX: {
      initial: { rotateX: 0, opacity: 1 },
      animate: { rotateX: 70, opacity: 0 },
    },
    outY: {
      initial: { rotateY: 0, opacity: 1 },
      animate: { rotateY: 70, opacity: 0 },
    },
  };

  return variants[direction];
}
