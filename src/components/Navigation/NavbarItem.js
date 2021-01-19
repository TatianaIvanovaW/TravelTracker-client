import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Nav.Link as={NavLink} to={props.path}>
          {props.linkText}
        </Nav.Link>
      </motion.div>
    </Nav.Item>
  );
}
