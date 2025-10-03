import React, {forwardRef, useMemo} from "react";
import {motion} from "framer-motion";
import {defaultTransition, variants as variantsMap} from "./animations";

/**
 * <Animate as="h2" type="fade-up">Hello</Animate>
 *
 * Props:
 * - as: string | React component (default: 'div')
 * - type: one of keys in variantsMap (e.g., 'fade-up', 'fade-left', 'slide-left', 'slide-up', etc.)
 * - initial, animate, whileInView, viewport, transition: override defaults if needed
 * - children, className, style, ...rest
 */
const Animate = forwardRef(function Animate(
  {
    as = "div",
    type = "fade-up",
    initial = "hidden",
    animate,
    whileInView = "visible",
    viewport = {once: true, amount: 0.2},
    transition = defaultTransition,
    variants,
    children,
    ...rest
  },
  ref
) {
  // Create a motion component out of the provided tag
  const MotionTag = useMemo(() => motion(as), [as]);

  const resolvedVariants = variants || variantsMap[type];
  if (!resolvedVariants) {
    // Fallback: render without animation if the type is unknown
    return React.createElement(as, rest, children);
  }

  // If `animate` is provided, we respect it (useful for in-view vs. controlled)
  const animationProps = animate
    ? {initial, animate}
    : {initial, whileInView, viewport};

  return (
    <MotionTag
      ref={ref}
      variants={resolvedVariants}
      transition={transition}
      {...animationProps}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Animate;
