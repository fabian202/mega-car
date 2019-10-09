import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import NumberFormat from "react-number-format";
import carDefault from '../assets/img/car.png'

export default function CarItem({ brand, model, year, price, img }) {
  // console.log(props)
  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardImg
        top
        width="100%"
        src={img}
        onError={e => e.target.src = carDefault}
      />
      <CardBody>
        <CardTitle>
          {brand} {model}
        </CardTitle>
        <CardSubtitle>{year}</CardSubtitle>
        <CardSubtitle>
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </CardSubtitle>
        <Button>Compare</Button>
      </CardBody>
    </Card>
  );
}
