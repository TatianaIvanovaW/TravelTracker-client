import React from "react";
import MapChartUser from "../../components/Map/MapChartUser";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/selectors";

export default function Statistic() {
  const user = useSelector(selectUser);
  const [trav, set_trav] = useState("");
  const [visits, set_visits] = useState([]);
  const [content, setContent] = useState("");

  const { data } = useQuery(gql`
    query GetUser {
      user(id: ${user.id}) {
        id
        name
        countries {
          name
          code
        }
      }
    }
  `);

  useEffect(() => {
    set_trav(data);
    if (trav) {
      const array = trav.user.countries.map((country) => {
        return country.code;
      });
      set_visits(array);
    }
  }, [data, trav]);

  return (
    <div>
      <div>
        {trav && !trav.user.countries.length ? "here is hothing" : null}
      </div>
      <MapChartUser
        countries={trav ? visits : null}
        setTooltipContent={setContent}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
