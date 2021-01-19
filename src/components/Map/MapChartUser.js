import React, { memo } from "react";
import { geoUrl } from "../../config/constants";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MapChart = ({ setTooltipContent, list }) => {
  const countries = list
    ? list.map((c) => {
        return c.countryId;
      })
    : null;
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME, ISO_A3 } = geo.properties;
              const d = countries ? countries.includes(ISO_A3) : null;
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
                      fill: d ? "#1E3C00" : "#D7E1E9",
                    },
                    hover: {
                      outline: "none",
                      stroke: "black",
                      fill: d ? "#1E3C00" : "#D7E1E9",
                    },

                    pressed: {
                      stroke: "black",
                      fill: "#D7E1E9",
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
