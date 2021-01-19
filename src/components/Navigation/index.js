import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
// import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getUserWithStoredToken } from "../../store/user/actions";

import { MDBNav } from "mdbreact";

export default function Navigation() {
  const token = useSelector(selectToken);
  // const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div
      style={{ boxShadow: "0px 5px 15px 1px #DCDCDC", marginBottom: "15px" }}
    >
      <MDBNav color="peach-gradient" className="font-weight-bold">
        <NavLink style={{ margin: "10px", color: "black" }} as={NavLink} to="/">
          Travel Tracker
        </NavLink>

        {token ? (
          <NavLink
            style={{ margin: "10px", color: "black" }}
            as={NavLink}
            to="/user"
          >
            My profile
          </NavLink>
        ) : null}

        {loginLogoutControls}
      </MDBNav>
    </div>
  );
}
