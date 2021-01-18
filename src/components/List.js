import React from "react";
import { Col } from "react-bootstrap";
import { ALL_COUNTRIES } from "../components/graphql/queries";
import { useSubscription } from "@apollo/react-hooks";

export default function ListVisits({ info }) {
  const { data } = useSubscription(ALL_COUNTRIES);

  const codeList = info
    ? info.map((c) => {
        return c.countryId;
      })
    : null;
  if (codeList) console.log(`and i am a list`, codeList);
  return (
    <div>
      <Col style={{ textAlign: "left" }}>
        List of countries:
        <ul>
          {data
            ? data.countries.map((c, i) => {
                return codeList.includes(c.code) ? (
                  <li key={c.name}>{c.name}</li>
                ) : null;
              })
            : null}
        </ul>
      </Col>
    </div>
  );
}
