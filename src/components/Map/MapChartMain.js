import React, { memo } from "react";
import { geoUrl } from "../../config/constants";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME } = geo.properties;
              return (
                <Link key={NAME} to={`/country/${NAME}`}>
                  <Geography
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
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#D6D6DA",
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
