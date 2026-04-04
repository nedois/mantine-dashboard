import type { Variants } from "motion/react";

type Direction = "in" | "inUp" | "inDown" | "inLeft" | "inRight" | "out" | "outUp" | "outDown" | "outLeft" | "outRight";

interface Options {
  distance?: number;
}

export function varFade(direction: Direction, options?: Options): Variants {
  const distance = options?.distance ?? 24;

  const variants: Record<Direction, Variants> = {
    in: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    inUp: {
      initial: { y: distance, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: distance, opacity: 0 },
    },
    inDown: {
      initial: { y: -distance, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -distance, opacity: 0 },
    },
    inLeft: {
      initial: { x: -distance, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -distance, opacity: 0 },
    },
    inRight: {
      initial: { x: distance, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: distance, opacity: 0 },
    },
    out: {
      initial: { opacity: 1 },
      animate: { opacity: 0 },
      exit: { opacity: 1 },
    },
    outUp: {
      initial: { y: 0, opacity: 1 },
      animate: { y: -distance, opacity: 0 },
      exit: { y: 0, opacity: 1 },
    },
    outDown: {
      initial: { y: 0, opacity: 1 },
      animate: { y: distance, opacity: 0 },
      exit: { y: 0, opacity: 1 },
    },
    outLeft: {
      initial: { x: 0, opacity: 1 },
      animate: { x: -distance, opacity: 0 },
      exit: { x: 0, opacity: 1 },
    },
    outRight: {
      initial: { x: 0, opacity: 1 },
      animate: { x: distance, opacity: 0 },
      exit: { x: 0, opacity: 1 },
    },
  };

  return variants[direction];
}
