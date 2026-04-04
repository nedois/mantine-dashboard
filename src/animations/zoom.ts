import type { Variants } from "motion/react";

type Direction = "in" | "inUp" | "inDown" | "inLeft" | "inRight" | "out" | "outUp" | "outDown" | "outLeft" | "outRight";

interface Options {
  distance?: number;
}

export function varZoom(direction: Direction, options?: Options): Variants {
  const distance = options?.distance ?? 720;

  const variants: Record<Direction, Variants> = {
    in: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
    },
    inUp: {
      initial: { scale: 0, opacity: 0, translateY: distance },
      animate: { scale: 1, opacity: 1, translateY: 0 },
      exit: { scale: 0, opacity: 0, translateY: distance },
    },
    inDown: {
      initial: { scale: 0, opacity: 0, translateY: -distance },
      animate: { scale: 1, opacity: 1, translateY: 0 },
      exit: { scale: 0, opacity: 0, translateY: -distance },
    },
    inLeft: {
      initial: { scale: 0, opacity: 0, translateX: -distance },
      animate: { scale: 1, opacity: 1, translateX: 0 },
      exit: { scale: 0, opacity: 0, translateX: -distance },
    },
    inRight: {
      initial: { scale: 0, opacity: 0, translateX: distance },
      animate: { scale: 1, opacity: 1, translateX: 0 },
      exit: { scale: 0, opacity: 0, translateX: distance },
    },
    out: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0 },
    },
    outUp: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0, translateY: -distance },
    },
    outDown: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0, translateY: distance },
    },
    outLeft: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0, translateX: -distance },
    },
    outRight: {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 0, opacity: 0, translateX: distance },
    },
  };

  return variants[direction];
}
