import React from 'react'
import styled, { css } from "styled-components";
import {
    Card
  } from "reactstrap";
const cardStyle = css`
  margin: 10px 0;
  background-color: #333;
  border-color: #333;
  text-align: center;
`;

const CardStyled = ({ className, children }) => {
  return (
    <Card inverse className={className}>
      {children}
    </Card>
  );
};

const StyledCard = styled(CardStyled)`
  ${cardStyle}
`;

export default StyledCard;