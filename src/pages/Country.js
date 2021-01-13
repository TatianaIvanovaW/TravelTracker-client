import React from "react";
import { useParams } from "react-router-dom";

export default function Country() {
  const params = useParams();
  console.log(params.id);
  return <div>country {params.id} info </div>;
}
