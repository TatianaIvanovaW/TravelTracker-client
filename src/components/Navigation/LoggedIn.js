import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { NavLink } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <div style={{ color: "black", marginRight: "0", marginLeft: "1050px" }}>
      <NavLink
        as={NavLink}
        to="/"
        style={{
          margin: "3px",
          color: "white",
          border: "none",
        }}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </NavLink>
    </div>
  );
}
