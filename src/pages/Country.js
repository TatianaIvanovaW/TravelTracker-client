import React from "react";
import { useParams } from "react-router-dom";

export default function Country() {
  const params = useParams();
  const url = `https://www.countryflags.io/${params.id}/shiny/64.png`;
  console.log(params.id);
  return (
    <div>
      country {params.id} info <img alt="flag" src={url}></img>
    </div>
  );
}
