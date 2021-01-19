import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <div style={{ color: "black", marginRight: "0", marginLeft: "1050px" }}>
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
    </div>
  );
}
