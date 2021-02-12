import React from "react";
import MapChartUser from "../../components/Map/MapChartUser";
import "./styles.css";
import ListVisits from "../../components/List";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AddCountry from "../AddCountry";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserWithCountries } from "../../store/country/action";
import { selectUserVisits } from "../../store/country/selector";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";

export default function Statistic() {
  const result = useSelector(selectUserVisits);

  const history = useHistory();
  const token = useSelector(selectToken);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
    dispatch(fetchUserWithCountries());
  }, [dispatch, history, token]);
  if (!result.data) return <p>Loading...</p>;
  console.log(result?.data, `-----resul data`);
  return (
    <div style={{ marginTop: "15px" }}>
      <Row>
        <Col
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            marginLeft: "30px",
            height: "550px",
            marginTop: "0.7%",
            boxShadow: "3px 3px 20px 3px #888888",
          }}
          sm={4}
        >
          <AddCountry />
          <div>
            <p>
              Visited countries : <b>{result?.data?.length}</b>
            </p>
          </div>
          <ListVisits info={result?.data} />
        </Col>
        <Col sm={6}>
          <MapChartUser list={result?.data} setTooltipContent={setContent} />

          <ReactTooltip>{content}</ReactTooltip>
        </Col>
      </Row>
    </div>
  );
}
