import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";
import { selectUserName } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { GET_ALL_COUNTRIES } from "../../components/graphql/queries";
import { useSubscription } from "@apollo/react-hooks";
import { showMessageWithTimeout } from "../../store/appState/actions";

import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  const [content, setContent] = useState("");
  const name = useSelector(selectUserName);

  const { data } = useSubscription(GET_ALL_COUNTRIES);
  console.log(data);
  const dispatch = useDispatch();
  const copyLink = () => {
    navigator.clipboard.writeText("https://traveltracker.netlify.app");
    dispatch(showMessageWithTimeout("success", true, "Link copied!"));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col style={{ textAlign: "left", marginLeft: "20px" }} sm={4}>
          <h4 style={{ textAlign: "center", marginBottom: "25px" }}>
            Welcome, {name ? name : "Traveler"} !
          </h4>
          <p>
            Ever wanted to show off with your travel? Look no further! With the
            travel tracker app you can create your personal travel log and keep
            track of your visited countries.
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
