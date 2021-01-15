import React from "react";
import MapChartUser from "../../components/Map/MapChartUser";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Col } from "react-bootstrap";

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
        {trav && trav.user.countries.length
          ? `visited countries : ${trav.user.countries.length}`
          : null}
      </div>

      <Col style={{ textAlign: "left" }}>
        List of countries:
        <ul>
          {trav
            ? trav.user.countries.map((c) => {
                return <li key={c.name}>{c.name}</li>;
              })
            : null}
        </ul>
      </Col>
      <Col>
        <MapChartUser
          countries={trav ? visits : null}
          setTooltipContent={setContent}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </Col>
    </div>
  );
}
