import React, { useState, useEffect } from "react";
import CarItem from "./CarItem";
import { Container, Row, Col } from "reactstrap";
import carsData from "../data/cars.json";

export default function CarList() {
  // console.log(carsData)
  const [cars, setCars] = useState();

  useEffect(() => {
    setCars(carsData.data);
  }, []);

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          {cars &&
            cars.map((car, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <CarItem {...car} />
              </Col>
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
