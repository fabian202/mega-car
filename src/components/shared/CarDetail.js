import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useCarDetail } from "../../hooks/useCarDetail";
import {useCarCompare} from '../../hooks/useCarCompare'
import NumberFormat from "react-number-format";
import {DisplayHeader, LeadText} from '../styled/TextStyles'
import { DetailImage } from '../styled/ImageStyles'

export default function CarDetail({ carId }) {
  const { car, setId } = useCarDetail();
  const { handleCompare } = useCarCompare();

  useEffect(() => {
    setId(carId);
  }, [carId, setId]);

  console.log(car);
  const title = `${car.brand} - ${car.model}`;
  return (
    <div>
      <Container fluid>
        {car && (
          <Row>
            <Col sm="6">
              <DetailImage src={car.img} alt="car" />
            </Col>
            <Col>
              <DisplayHeader>
                {title}
              </DisplayHeader>
              <p className="blockquote-footer">{car.year}</p>
              <LeadText>
                <NumberFormat
                  value={car.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </LeadText>
              <LeadText>
                {car.description}
              </LeadText>
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
