import type { Variants } from "motion/react";

type Direction = "in" | "out";

interface Options {
  deg?: number;
}

export function varRotate(direction: Direction, options?: Options): Variants {
  const deg = options?.deg ?? 360;

  const variants: Record<Direction, Variants> = {
    in: {
      initial: { opacity: 0, rotate: -deg },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: -deg },
    },
    out: {
      initial: { opacity: 1, rotate: 0 },
      animate: { opacity: 0, rotate: -deg },
    },
  };

  return variants[direction];
}
