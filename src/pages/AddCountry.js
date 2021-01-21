import React from "react";
import { Form } from "react-bootstrap";
import { motion } from "framer-motion";
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

  useEffect(() => {
    if (data) set_list(data.countries);
  }, [data]);

  return (
    <div>
      <Form.Group>
        <h5>
          <img
            style={{
              margin: "4px",

              marginBottom: "13px",
              width: "40px",
            }}
            alt="map icon"
            src="https://img.icons8.com/ios/100/000000/map-marker--v2.png"
          />
          Add a country to the map:
        </h5>
        <Form.Control
          style={{ margin: "15px" }}
          onChange={(e) => set_country(e.target.value)}
          as="select"
          size="lg"
        >
          <option value="select">Select</option>
          {list
            ? list.map((c) => {
                return (
                  <option key={c.code} value={c.id}>
                    {c.name}
                  </option>
                );
              })
            : null}
        </Form.Control>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <button
            style={{
              backgroundColor: "white",
              outline: "none",
              borderRadius: "50%",
              border: "none",
              padding: "0",
            }}
            onClick={(e) => {
              console.log(`djfhkghskfghsfg`, country);
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
              } else if (!country) {
                dispatch(
                  showMessageWithTimeout(
                    "warning",
                    true,
                    "First you have to choose a country you want to add!"
                  )
                );
              } else {
                dispatch(addCountry(country));
              }
            }}
          >
            <img
              style={{
                width: "75px",
              }}
              alt="add country"
              src="https://img.icons8.com/carbon-copy/100/4a90e2/ok.png"
            />
          </button>
        </motion.div>
      </Form.Group>
    </div>
  );
}
