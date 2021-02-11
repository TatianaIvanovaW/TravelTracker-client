import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams();
  return <div>user page. user id : {params.id}</div>;
}
