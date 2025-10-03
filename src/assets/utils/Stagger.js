import React from "react";
import {motion} from "framer-motion";

export const Stagger = ({children, delayChildren = 0.1, stagger = 0.08}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.15}}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
