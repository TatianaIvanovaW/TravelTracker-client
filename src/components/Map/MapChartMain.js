import React, { memo } from "react";
import { geoUrl } from "../../config/constants";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET_ALL_COUNTRIES } from "../../components/graphql/queries";

import { useSubscription } from "@apollo/react-hooks";

const MapChart = ({ setTooltipContent }) => {
  const [countries, set_countries] = useState([]);
  const { data } = useSubscription(GET_ALL_COUNTRIES);
  console.log(`countries`, data);
  const [array, set_array] = useState([]);
  useEffect(() => {
    if (data) set_countries(data.countryUsers);

    const newArray = countries
      ? countries.map((country) => {
          return {
            code: country.code,
            visits: country.users.length,
          };
        })
      : null;

    set_array(newArray);
  }, [countries, data]);
  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 195 }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME, /* ISO_A2,*/ ISO_A3 } = geo.properties;
              const visits = array.find((c) => {
                return c.code === ISO_A3 ? c.visits : null;
              });
              return (
                // <Link key={NAME} to={visits ? `/country/${ISO_A2}` : `/`}> <<world is not ready for this
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(
                      `${NAME}  👤 
                        
                         ${visits ? visits.visits : "0"}`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: visits ? "#FFDAB9" : "rgba(189, 195, 199, 1)",
                      outline: "none",
                    },
                    hover: {
                      fill: visits ? "#FFDAB9" : "#D6D6DA",
                      outline: "none",
                      stroke: "#1E3C00",
                    },
                    pressed: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                  }}
                />
                // </Link>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
