import React from "react";
import MapChartUser from "../../components/Map/MapChartUser";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AddCountry from "../AddCountry";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserWithCountries } from "../../store/country/action";
import { selectUserVisits } from "../../store/country/selector";
import ListVisits from "../../components/List.js";

export default function Statistic() {
  const result = useSelector(selectUserVisits);

  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserWithCountries());
  }, [dispatch]);
  if (!result.data) return <p>Loading...</p>;
  return (
    <div>
      <Row>
        <Col sm={4}>
          <ListVisits info={result ? result.data : null} />

          <div>
            {result && result.data && result.data.length
              ? `visited countries : ${result.data.length}`
              : null}
          </div>
        </Col>
        <Col sm={6}>
          <MapChartUser
            list={result ? result.data : null}
            setTooltipContent={setContent}
          />

          <ReactTooltip>{content}</ReactTooltip>
        </Col>{" "}
      </Row>
      <AddCountry />
    </div>
  );
}
