import React, { useState, useEffect } from "react";

import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/user");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <MDBContainer
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          boxShadow: "3px 3px 20px 3px #888888",
          borderRadius: "12px",
        }}
      >
        <MDBRow style={{ margin: "50px", justifyContent: "center" }}>
          <MDBCol md="6">
            <form style={{ marginTop: "20px" }}>
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                style={{ fontFamily: "Fraunces, serif", fontWeight: "bold" }}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />

              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                style={{ fontFamily: "Fraunces, serif", fontWeight: "bold" }}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn onClick={submitForm} color="unique" type="submit">
                  Log In
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <Link style={{ color: "#85144b", paddingBottom: "12px" }} to="/signup">
          Click here to sign up
        </Link>
      </MDBContainer>
    </div>
  );
}
