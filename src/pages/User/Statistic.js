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
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";

// import ListVisits from "../../components/List.js";

export default function Statistic() {
  const result = useSelector(selectUserVisits);
  const token = useSelector(selectToken);
  const history = useHistory();

  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
    dispatch(fetchUserWithCountries());
  }, [dispatch, history, token]);
  if (!result.data) return <p>Loading...</p>;
  return (
    <div style={{ marginTop: "15px" }}>
      <Row>
        <Col sm={4}>
          <AddCountry />
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
      </Row>{" "}
      {/* <ListVisits info={result ? result.data : null} /> */}
    </div>
  );
}
