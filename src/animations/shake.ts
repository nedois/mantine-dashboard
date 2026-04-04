import type { Variants } from "motion/react";

type Axis = "x" | "y";

interface Options {
  distance?: number;
  repeat?: number;
}

export function varShake(axis: Axis = "x", options?: Options): Variants {
  const distance = options?.distance ?? 8;
  const d = distance;

  if (axis === "x") {
    return {
      initial: { x: 0 },
      animate: { x: [0, -d, d, -d, d, -d / 2, d / 2, 0] },
      exit: { x: 0 },
    };
  }

  return {
    initial: { y: 0 },
    animate: { y: [0, -d, d, -d, d, -d / 2, d / 2, 0] },
    exit: { y: 0 },
  };
}
