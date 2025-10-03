// Framer Motion variants (extend as needed)
export const variants = {
  "fade-up": {
    hidden: {opacity: 0, y: 24},
    visible: {opacity: 1, y: 0}
  },
  "fade-left": {
    hidden: {opacity: 0, x: -24},
    visible: {opacity: 1, x: 0}
  },
  "fade-bottom": {
    hidden: {opacity: 0, y: -24},
    visible: {opacity: 1, y: 0}
  },
  // "slide" here is like a longer travel fade (can tweak distance/duration)
  "slide-up": {
    hidden: {opacity: 0, y: 60},
    visible: {opacity: 1, y: 0}
  },
  "slide-left": {
    hidden: {opacity: 0, x: -60},
    visible: {opacity: 1, x: 0}
  },
  "slide-right": {
    hidden: {opacity: 0, x: 60},
    visible: {opacity: 1, x: 0}
  }
};

// Default transition you can override per use
export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut"
};
