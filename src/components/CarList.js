import React from "react";
import CarItem from "./CarItem";
import { Container, Row, Col } from "reactstrap";
import { useCarList } from "../hooks/useCarList";
// import {useCarContext} from '../hooks/useCarContext'
import {useCarCompare} from '../hooks/useCarCompare'

export default function CarList() {
  const { cars } = useCarList();
  // const { dispatch } = useCarContext();
  const { handleCompare } = useCarCompare()

  // const handleCompare = (car) => {
  //   console.log('compare', car)
  //   dispatch({
  //     type: 'COMPARE_CAR',
  //     car
  //   })
  // }

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          {cars &&
            cars.map((car, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <CarItem car={car} onCompare={handleCompare}/>
              </Col>
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
