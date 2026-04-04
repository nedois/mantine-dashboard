import type { Transition, Variants } from "motion/react";

interface Options {
  transitionIn?: Transition;
  transitionOut?: Transition;
}

export function varContainer(props?: Options): Variants {
  return {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
        ...props?.transitionIn,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        ...props?.transitionOut,
      },
    },
  };
}
