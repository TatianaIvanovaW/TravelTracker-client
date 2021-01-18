import React from "react";
// import { Col } from "react-bootstrap";

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "./use-demension.js";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import "./styles.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function ListVisits({ info }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation info={info} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      {/* <Col style={{ textAlign: "left" }}>
        List of countries:
        <ul>
          {data
            ? data.countries.map((c, i) => {
                return codeList.includes(c.code) ? (
                  <li key={c.name}>{c.name}</li>
                ) : null;
              })
            : null}
        </ul>
      </Col> */}
    </div>
  );
}
