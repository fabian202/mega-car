import React from "react";
import {
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter
} from "reactstrap";
import NumberFormat from "react-number-format";
import carDefault from "../../assets/img/car.png";
import { navigate } from "hookrouter";
import StyledCard from '../styled/CardStyled'

export default function CarItem({car, onCompare}) {
  const { id, brand, model, year, price, img } = car;
  const handleRedirect = (e) => {
    navigate(`/cars/${id}`)
  }
  // console.log(props)
  const title = `${brand} - ${model}`;
  return (
    <StyledCard>
      <CardImg top src={img} onError={e => (e.target.src = carDefault)} onClick={handleRedirect} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{year}</CardSubtitle>
        <CardSubtitle>
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button color="secondary" size="sm" onClick={() => onCompare(car)}>
          Compare
        </Button>
        {/* <A href={`/cars/${id}`}>Details</A> */}
        <Button size="sm" color="link" onClick={handleRedirect}>
          Details
        </Button>
      </CardFooter>
    </StyledCard>
  );
}
