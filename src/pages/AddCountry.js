import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./addcountry.css";
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../store/country/action";
import { ALL_COUNTRIES } from "../components/graphql/queries";
import { selectUserVisits } from "../store/country/selector";
import { showMessageWithTimeout } from "../store/appState/actions";
import { useSubscription } from "@apollo/react-hooks";

export default function AddCountry({ user }) {
  const [list, set_list] = useState([]);
  const [country, set_country] = useState("");
  const dispatch = useDispatch();
  const { data } = useSubscription(ALL_COUNTRIES);
  const visits = useSelector(selectUserVisits);
  if (visits) console.log(`visits isists fkgrjghstgjka`, visits);
  useEffect(() => {
    if (data) set_list(data.countries);
  }, [data]);

  return (
    <div>
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

            if (
              visits.data.find((v) => {
                console.log(`whaaaat?`, v.countryId, country);
                return v.countryId === country;
              })
            ) {
              console.log("we have this country already");
              dispatch(
                showMessageWithTimeout(
                  "warning",
                  true,
                  "You've already added this country to the map!"
                )
              );
            } else {
              dispatch(addCountry(country));
            }
          }}
        >
          Add to my list
        </Button>
      </Form.Group>
    </div>
  );
}
