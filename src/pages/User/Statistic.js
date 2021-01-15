import React from "react";
import MapChartUser from "../../components/Map/MapChartUser";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

export default function Statistic() {
  const [content, setContent] = useState("");
  return (
    <div>
      user info
      <MapChartUser setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
