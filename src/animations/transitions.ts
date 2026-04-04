import type { Transition } from "motion/react";

const transitions = {
  default: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  snappy: {
    duration: 0.3,
    ease: [0.2, 0.0, 0.0, 1.0],
  },
  gentle: {
    duration: 0.6,
    ease: [0.4, 0.0, 0.2, 1.0],
  },
  swift: {
    duration: 0.25,
    ease: [0.55, 0.0, 0.1, 1.0],
  },
  easeOut: {
    duration: 0.4,
    ease: [0.0, 0.0, 0.2, 1.0],
  },
  easeIn: {
    duration: 0.3,
    ease: [0.4, 0.0, 1.0, 1.0],
  },
  easeInOut: {
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1.0],
  },
  elastic: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 0.8,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 0.6,
  },
  smoothSpring: {
    type: "spring" as const,
    stiffness: 200,
    damping: 26,
    mass: 1,
  },
  dramatic: {
    duration: 0.8,
    ease: [0.16, 1.0, 0.3, 1.0],
  },
  reveal: {
    duration: 0.7,
    ease: [0.0, 0.55, 0.45, 1.0],
  },
  fade: {
    duration: 0.35,
    ease: [0.4, 0.0, 0.6, 1.0],
  },
} satisfies Record<string, Transition>;

type TransitionName = keyof typeof transitions;

export function getTransition(name: TransitionName, overrides?: Partial<Transition>): Transition {
  return { ...transitions[name], ...overrides };
}
