import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";

import { useState } from "react";

import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col sm={4}>
          <p>
            Ever wanted to show off with your travel? Look no further! With the
            travel tracker app you can create your personal travel log and keep
            track of your visited countries.
          </p>
          <ul>
            <li>Sign up and create a free profile</li>
            <li>Add the countries you visited to your personal map</li>
            <li>Share your map via social media</li>
          </ul>
        </Col>
        <Col sm={6}>
          <MapChart setTooltipContent={setContent} />

          <ReactTooltip style={{ borderRadius: "12px" }}>
            <b
              style={{
                fontSize: "20px",
                fontFamily: "font-family: 'Montserrat', sans-serif;",
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
