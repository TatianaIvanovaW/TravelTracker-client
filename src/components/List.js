import React from "react";

import { ALL_COUNTRIES } from "./graphql/queries";
import { useSubscription } from "@apollo/react-hooks";
import { findFlagUrlByIso3Code } from "country-flags-svg";

export default function ListVisits({ info }) {
  const { data } = useSubscription(ALL_COUNTRIES);
  console.log(`fjgkfg`, data);

  const codeList = info
    ? info.map((c) => {
        return c.countryId;
      })
    : null;
  return (
    <div
      style={{
        height: "280px",
        overflowY: "scroll",
        marginBottom: "20px",
        textAlign: "left",
      }}
    >
      {data && codeList
        ? data.countries.map((c, i) => {
            const flagUrl = findFlagUrlByIso3Code(c.code);
            return codeList.includes(c.code) ? (
              <div key={i}>
                <img
                  style={{ width: "50px", margin: "10px" }}
                  alt="flag"
                  src={flagUrl}
                />{" "}
                {c.name}
              </div>
            ) : null;
          })
        : null}
    </div>
  );
}
