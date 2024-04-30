const SlideRightVariant = {
  initial: {
    right: "-100%",
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
  animate: {
    right: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const SlideLeftVariant = {
  initial: {
    left: "-100%",
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
  animate: {
    left: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const popupVariant = {
  close: { opacity: 0, scale: 0 },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
    },
  },
};

const opacityBlurVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
};

export { SlideRightVariant, SlideLeftVariant, popupVariant, opacityBlurVariants };
