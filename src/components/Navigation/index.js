import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./style.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  return (
    <nav className="navigation">
      <a className="logof somelink" href="/">
        Travel Tracker
      </a>
      <ul className="ulist">
        {/* {token ? (
          <li className="list">
            <a className="somelink" href="/account">
              My account
            </a>
          </li>
        ) : null} */}
        {token ? (
          <li className="list">
            <a className="somelink" href="/user">
              My Map
            </a>
          </li>
        ) : null}
        {token ? (
          <li className="list">
            <a
              className="somelink"
              href="/"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Logout
            </a>
          </li>
        ) : (
          <li className="list">
            <a className="somelink" href="/login">
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
    // <div
    //   style={{
    //     boxShadow: "0px 5px 15px 1px #DCDCDC",
    //   }}
    // >
    //   <MDBNav
    //     style={{ padding: "15px" }}
    //     color={color}
    //     className="font-weight-bold"
    //   >
    //     <Col sm={2}>
    //       {" "}
    //       <NavLink
    //         style={{ margin: "10px", color: "black" }}
    //         as={NavLink}
    //         to="/"
    //       >
    //         Travel Tracker
    //       </NavLink>
    //     </Col>
    //     <Col md={{ span: 6, offset: 4 }} style={{ textAlign: "right" }}>
    //       <Row>
    //         <Col>
    //           {" "}
    //           {token ? (
    //             <NavLink
    //               style={{ margin: "10px", color: "black" }}
    //               as={NavLink}
    //               to="/user"
    //             >
    //               My map
    //             </NavLink>
    //           ) : null}
    //         </Col>
    //         <Col>
    //           {" "}
    //           {token ? (
    //             <NavLink
    //               style={{ margin: "10px", color: "black" }}
    //               as={NavLink}
    //               to="/account"
    //             >
    //               My account
    //             </NavLink>
    //           ) : null}
    //         </Col>
    // <Col></Col>{" "}
    //       </Row>
    //     </Col>
    //   </MDBNav>
    // </div>
  );
}
