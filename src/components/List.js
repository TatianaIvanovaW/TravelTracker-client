import React from "react";

import { ALL_COUNTRIES } from "./graphql/queries";
import { useSubscription } from "@apollo/react-hooks";
import { findFlagUrlByIso3Code } from "country-flags-svg";
import { deleteVisit } from "../store/country/action";
import { useDispatch } from "react-redux";
import "./list.css";

export default function ListVisits({ info }) {
  const { data } = useSubscription(ALL_COUNTRIES);
  const dispatch = useDispatch();
  const codeList = info?.map((c) => {
    return c.countryId;
  });
  const codes = data?.countries?.map((c) => {
    return codeList?.includes(c.id) ? c.code : null;
  });

  const check = codes?.filter((c) => {
    return c;
  });

  return (
    <div
      style={{
        height: "280px",
        overflowY: "scroll",
        marginBottom: "20px",
        textAlign: "left",
      }}
    >
      {data?.countries.map((c, i) => {
        const flagUrl = findFlagUrlByIso3Code(c.code);
        return check?.includes(c.code) ? (
          <div key={i}>
            <img
              style={{
                width: "50px",
                margin: "10px",
                marginBottom: "20px",
              }}
              alt="flag"
              src={
                c.code !== "ATA"
                  ? flagUrl
                  : "https://img.icons8.com/ultraviolet/40/000000/flag.png"
              }
            />
            <span style={{ marginBottom: "20px" }}>{c.name}</span>{" "}
            <button
              className="click"
              onClick={() => {
                dispatch(deleteVisit(c.id));
                console.log("click", c.id);
              }}
            >
              ⓧ
            </button>{" "}
          </div>
        ) : null;
      })}
    </div>
  );
}
