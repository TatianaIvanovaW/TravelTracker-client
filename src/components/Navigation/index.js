import React from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { fetchUserWithCountries } from "../../store/country/action";
import { MDBNav } from "mdbreact";
import { Col, Row } from "react-bootstrap";
import "./style.css";

export default function Navigation() {
  const token = useSelector(selectToken);
  const [path, set_path] = useState("");
  const [color, set_color] = useState("blue-gradient");
  // const location = useLocation();
  const location = useLocation();
  console.log(color);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserWithCountries());
    set_path(location.pathname);

    if (path === "/login" || path === "/signup") {
      set_color("purple-gradient");
    } else if (path === "/") {
      set_color("peach-gradient");
    } else {
      set_color("blue-gradient");
    }
  }, [dispatch, path, location]);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div
      style={{
        boxShadow: "0px 5px 15px 1px #DCDCDC",
      }}
    >
      <MDBNav
        style={{ padding: "15px" }}
        color={color}
        className="font-weight-bold"
      >
        <Col sm={2}>
          {" "}
          <NavLink
            style={{ margin: "10px", color: "black" }}
            as={NavLink}
            to="/"
          >
            Travel Tracker
          </NavLink>
        </Col>
        <Col md={{ span: 6, offset: 4 }} style={{ textAlign: "right" }}>
          <Row>
            <Col>
              {" "}
              {token ? (
                <NavLink
                  style={{ margin: "10px", color: "black" }}
                  as={NavLink}
                  to="/user"
                >
                  My map
                </NavLink>
              ) : null}
            </Col>
            <Col>
              {" "}
              {token ? (
                <NavLink
                  style={{ margin: "10px", color: "black" }}
                  as={NavLink}
                  to="/account"
                >
                  My account
                </NavLink>
              ) : null}
            </Col>
            <Col>{loginLogoutControls}</Col>{" "}
          </Row>
        </Col>
      </MDBNav>
    </div>
  );
}
