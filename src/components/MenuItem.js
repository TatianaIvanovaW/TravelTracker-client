import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItem({ name }) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" />
      <div className="text-placeholder">
        <b>{name}</b>
      </div>
    </motion.li>
  );
}
