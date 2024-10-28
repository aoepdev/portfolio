export const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 0, transition: { duration: 0 } },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -20,
    transitionEnd: { display: "none" },
    transition: { duration: 0.3 },
  },
};
