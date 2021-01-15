import React from "react";
import { Form, Button } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import "./addcountry.css";
import { useDispatch } from "react-redux";
import { addCountry } from "../store/country/action";

export default function AddCountry() {
  const [list, set_list] = useState([]);
  const [country, set_country] = useState("");
  const dispatch = useDispatch();
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
          onChange={(e) => set_country(e.target.value)}
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
        <Button
          onClick={(e) => {
            console.log(country);
            e.preventDefault();
            dispatch(addCountry(country));
          }}
        >
          Add
        </Button>
      </Form.Group>
    </div>
  );
}
