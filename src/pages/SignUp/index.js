import React, { useState, useEffect } from "react";

import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div>
      {" "}
      <MDBContainer>
        <MDBRow style={{ margin: "50px", justifyContent: "center" }}>
          <MDBCol md="6">
            <form>
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your name
              </label>
              <input
                onChange={(event) => setName(event.target.value)}
                type="name"
                style={{ fontFamily: "Fraunces, serif", fontWeight: "bold" }}
                className="form-control"
              />
              <br />
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
                  Sign Up
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <Link style={{ color: "#85144b" }} to="/login">
          Click here to log in
        </Link>
      </MDBContainer>
    </div>
  );
}
