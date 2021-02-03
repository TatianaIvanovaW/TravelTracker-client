import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <b>
        <Nav.Link
          style={{ color: "black", marginRight: "0" }}
          as={NavLink}
          to={props.path}
        >
          {props.linkText}
        </Nav.Link>
      </b>
    </Nav.Item>
  );
}
