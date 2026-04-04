import type { Variants } from "motion/react";

type Direction = "inUp" | "inDown" | "inLeft" | "inRight" | "outUp" | "outDown" | "outLeft" | "outRight";

interface Options {
  distance?: number;
}

export function varSlide(direction: Direction, options?: Options): Variants {
  const distance = options?.distance ?? 160;

  const variants: Record<Direction, Variants> = {
    inUp: {
      initial: { y: distance },
      animate: { y: 0 },
      exit: { y: distance },
    },
    inDown: {
      initial: { y: -distance },
      animate: { y: 0 },
      exit: { y: -distance },
    },
    inLeft: {
      initial: { x: -distance },
      animate: { x: 0 },
      exit: { x: -distance },
    },
    inRight: {
      initial: { x: distance },
      animate: { x: 0 },
      exit: { x: distance },
    },
    outUp: {
      initial: { y: 0 },
      animate: { y: -distance },
      exit: { y: 0 },
    },
    outDown: {
      initial: { y: 0 },
      animate: { y: distance },
      exit: { y: 0 },
    },
    outLeft: {
      initial: { x: 0 },
      animate: { x: -distance },
      exit: { x: 0 },
    },
    outRight: {
      initial: { x: 0 },
      animate: { x: distance },
      exit: { x: 0 },
    },
  };

  return variants[direction];
}
