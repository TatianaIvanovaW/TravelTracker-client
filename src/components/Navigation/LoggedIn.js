import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";

import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ margin: "10px", color: "black" }}>
        Welcome, {user.name}!
      </Nav.Item>
      <button
        style={{
          outline: "none",

          margin: "3px",

          backgroundColor: "transparent",

          border: "none",
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </>
  );
}
