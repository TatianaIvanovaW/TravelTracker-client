import React from "react";
import ReactTooltip from "react-tooltip";

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles.css";

import MapChart from "../../components/Map/MapChartMain";

export default function Home() {
  const [countries, set_countries] = useState([]);

  const [content, setContent] = useState("");
  const { data } = useQuery(gql`
    query GetCountryUsers {
      countryUsers {
        code
        users {
          id
        }
      }
    }
  `);
  useEffect(() => {
    if (data) set_countries(data.countryUsers);
  }, [data, countries]);

  // console.log(`after useeffect`, countries);
  return (
    <div>
      <MapChart
        countries={countries ? countries : null}
        setTooltipContent={setContent}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
