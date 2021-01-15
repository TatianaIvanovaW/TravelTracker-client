import React from "react";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  // const { loading, error, data } = useQuery(gql`
  //   query GetCountires {
  //     countries {
  //       name
  //       code
  //     }
  //   }
  // `);
  // if (data.countries) console.log(data.countries);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
