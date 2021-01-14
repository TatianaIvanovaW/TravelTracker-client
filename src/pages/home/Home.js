import React from "react";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

import "./styles.css";

import MapChart from "../../components/Map/MapChart";

export default function Home() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
