import React, { memo } from "react";
import { geoUrl } from "../../config/constants";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// ISO_A3;

const MapChart = ({ setTooltipContent, countries }) => {
  const [array, set_array] = useState([]);
  useEffect(() => {
    console.log(`hey from component`, countries);
    const newArray = countries
      ? countries.map((country) => {
          return {
            code: country.code,
            visits: country.users.length,
          };
        })
      : null;
    console.log(`and i am a new array`, newArray);
    set_array(newArray);
  }, [countries]);
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME, ISO_A3 } = geo.properties;
              const visits = array.find((c) => {
                return c.code === ISO_A3 ? c.visits : null;
              });
              return (
                <Link key={NAME} to={visits ? `/country/${NAME}` : `/`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(
                        `${NAME}, visits: ${visits ? visits.visits : "0"}`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: visits ? "#AFCFEA" : "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: visits ? "#AFCFEA" : "#D6D6DA",
                        outline: "none",
                        stroke: "#1E3C00",
                      },
                      pressed: {
                        fill: "#20B2AA",
                        outline: "none",
                      },
                    }}
                  />
                </Link>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);