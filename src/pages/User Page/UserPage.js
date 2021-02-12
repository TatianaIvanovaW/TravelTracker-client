import React from "react";
import gql from "graphql-tag";
import MapChartUser from "../../components/Map/MapChartUser";
import ListVisits from "../../components/List";
import { useParams } from "react-router-dom";
import { useSubscription } from "@apollo/react-hooks";

export default function UserPage() {
  const params = useParams();
  const { data } = useSubscription(gql`
      query GetUser {
        user(id: ${params.id}) {
          name
          countries {
         
              code
          }
        }
      }
    `);
  console.log(data);

  return (
    <div>
      <h4 style={{ padding: "10px", backgroundColor: "white" }}>
        Welcome to {data?.user?.name}'s map!!
      </h4>
      <h6 style={{ padding: "10px", backgroundColor: "white" }}>
        {data?.user?.name} have visited {data?.user?.countries.length}{" "}
        countries!
      </h6>
    </div>
  );
}
