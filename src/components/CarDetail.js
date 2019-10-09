import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useCarDetail } from "../hooks/useCarDetail";
import {useCarCompare} from '../hooks/useCarCompare'
import NumberFormat from "react-number-format";

export default function CarDetail({ carId }) {
  const { car, setId } = useCarDetail();
  const { handleCompare } = useCarCompare();

  useEffect(() => {
    setId(carId);
  }, []);

  console.log(car);
  const title = `${car.brand} - ${car.model}`;
  return (
    <div>
      <Container fluid>
        {car && (
          <Row>
            <Col sm="6">
              <img style={{ margin: "0 auto", width: "100%" }} src={car.img} />
            </Col>
            <Col>
              <h1
                className="display-4"
                style={{ color: "rgba(255,255,255,.5)" }}
              >
                {title}
              </h1>
              <p className="blockquote-footer">{car.year}</p>
              <p className="lead" style={{ color: "rgba(255,255,255,.5)" }}>
                <NumberFormat
                  value={car.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
              <p className="lead" style={{ color: "rgba(255,255,255,.5)" }}>
                {car.description}
              </p>
              <Button color="secondary" onClick={() => handleCompare(car)}>
                Compare
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
