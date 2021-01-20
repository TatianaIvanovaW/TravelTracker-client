import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./addcountry.css";
import { useDispatch } from "react-redux";
import { addCountry } from "../store/country/action";
import { ALL_COUNTRIES } from "../components/graphql/queries";

import { useSubscription } from "@apollo/react-hooks";

export default function AddCountry({ user }) {
  const [list, set_list] = useState([]);
  const [country, set_country] = useState("");
  const dispatch = useDispatch();
  const { data } = useSubscription(ALL_COUNTRIES);

  useEffect(() => {
    if (data) set_list(data.countries);
  }, [data]);

  return (
    <div>
      {" "}
      <Form.Group>
        <h5>chose a country:</h5>

        <Form.Control
          style={{ margin: "15px" }}
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
          style={{
            backgroundColor: "#45cafc",
            padding: "10px",
            pddingLeft: "20px",
            paddingRight: "20px",
            margin: "10px",
            outline: "none",
            borderRadius: "12px",
            border: "none",
          }}
          onClick={(e) => {
            console.log(country);
            e.preventDefault();
            dispatch(addCountry(country));
          }}
        >
          Add to my list
        </Button>
      </Form.Group>
    </div>
  );
}
