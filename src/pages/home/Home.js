import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";

import { useState } from "react";

import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <div>
      <Row>
        <Col sm={4}>
          <p>bla bla bla</p>
        </Col>
        <Col sm={6}>
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </Col>
      </Row>
    </div>
  );
}
