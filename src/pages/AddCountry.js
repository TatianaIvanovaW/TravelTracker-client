import React from "react";
import { Form, Button } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import "./addcountry.css";

export default function AddCountry() {
  const [list, set_list] = useState([]);
  const { data } = useQuery(gql`
    query GetCountries {
      countries {
        name
        code
      }
    }
  `);

  useEffect(() => {
    if (data) set_list(data.countries);
  }, [data]);

  return (
    <div>
      <h5>chose a country:</h5>
      <Form.Group>
        <Form.Control
          onChange={(e) => console.log(e.target.value)}
          as="select"
          size="lg"
        >
          <option>select</option>
          {list
            ? list.map((c) => {
                return (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                );
              })
            : null}
        </Form.Control>
        <Button>Add</Button>
      </Form.Group>
    </div>
  );
}
