import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";
import { selectUserName } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { ALL_USERS } from "../../components/graphql/userquery";
import { showMessageWithTimeout } from "../../store/appState/actions";
// import { useSubscription } from "@apollo/react-hooks";

import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  const [content, setContent] = useState("");
  const name = useSelector(selectUserName);

  const dispatch = useDispatch();

  const copyLink = () => {
    navigator.clipboard.writeText("https://traveltracker.netlify.app");
    dispatch(showMessageWithTimeout("success", true, "Link copied!"));
  };

  // const { data } = useSubscription(ALL_USERS);
  // if (data) console.log(`useeeeeeeers`, data);

  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col
          style={{
            textAlign: "left",
            marginLeft: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            height: "550px",
            marginTop: "0.7%",
            boxShadow: "3px 3px 20px 3px #888888",
          }}
          sm={4}
        >
          <h4
            style={{
              textAlign: "center",
              marginBottom: "25px",
              marginTop: "20px",
            }}
          >
            Welcome, {name ? name : "Traveler"} !
          </h4>
          <p>
            Ever wanted to show off your travel? Look no further! With the
            travel tracker app you can create your personal travel log and keep
            track of the countries you have visited
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <img
                style={{
                  width: "18px",
                  margin: "8px",
                  marginLeft: "0",
                  marginBottom: "12px",
                }}
                alt="compass"
                src="https://img.icons8.com/ios-filled/50/000000/compass--v2.png"
              />
              See how many people visited different countries
            </li>
            <li>
              <img
                style={{
                  width: "18px",
                  margin: "8px",
                  marginLeft: "0",
                  marginBottom: "12px",
                }}
                alt="compass"
                src="https://img.icons8.com/ios-filled/50/000000/compass--v2.png"
              />
              Sign up and create a free profile
            </li>
            <li>
              <img
                style={{
                  width: "18px",
                  margin: "8px",
                  marginLeft: "0",
                  marginBottom: "12px",
                }}
                alt="compass"
                src="https://img.icons8.com/ios-filled/50/000000/compass--v2.png"
              />
              Add the countries you visited to your personal map
            </li>
            <li>
              <img
                style={{
                  width: "18px",
                  margin: "8px",
                  marginLeft: "0",
                  marginBottom: "12px",
                }}
                alt="compass"
                src="https://img.icons8.com/ios-filled/50/000000/compass--v2.png"
              />
              Tell about Travel Tracker to your friends
            </li>
            <img
              style={{ width: "45px" }}
              alt="link"
              src="https://img.icons8.com/dusk/64/000000/external-link.png"
              onClick={copyLink}
            />
          </ul>
        </Col>
        <Col sm={6}>
          <MapChart setTooltipContent={setContent} />

          <ReactTooltip style={{ borderRadius: "12px" }}>
            <b
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <img
                style={{ margin: "5px", marginBottom: "5px" }}
                alt="compass"
                src="https://img.icons8.com/android/24/ffffff/compass.png"
              />
              {content}
            </b>
          </ReactTooltip>
        </Col>
      </Row>
    </div>
  );
}
