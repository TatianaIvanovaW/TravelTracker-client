import React, { memo } from "react";
import { geoUrl } from "../../config/constants";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { ALL_COUNTRIES } from "../graphql/queries";
import { useSubscription } from "@apollo/react-hooks";

const MapChart = ({ setTooltipContent, list }) => {
  const { data } = useSubscription(ALL_COUNTRIES);

  const countries = list
    ? list.map((c) => {
        return c.countryId;
      })
    : null;
  const codes =
    countries && data && list
      ? data.countries.map((c) => {
          return countries.includes(c.id) ? c.code : null;
        })
      : null;
  const check =
    countries && data && list && codes
      ? codes.filter((c) => {
          return c;
        })
      : null;

  if (data && list && countries && codes) {
    console.log(`codescodescodes`, check);
  }
  if (countries) console.log(`im to the map`, countries);
  return (
    <>
      <ComposableMap
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        data-tip=""
        projectionConfig={{ scale: 200 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME, ISO_A3 } = geo.properties;
              const d = check ? check.includes(ISO_A3) : null;
              return (
                <Geography
                  className="country"
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      outline: "none",
                      fill: d ? "#303f9f" : "rgba(189, 195, 199, 1)",
                    },
                    hover: {
                      outline: "none",
                      stroke: "black",
                      fill: d ? "#303f9f" : "#D7E1E9",
                    },

                    pressed: {
                      stroke: "black",
                      fill: "#303f9f",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
