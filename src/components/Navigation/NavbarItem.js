import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link
        style={{ color: "black", marginRight: "0", marginLeft: "1150px" }}
        as={NavLink}
        to={props.path}
      >
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
