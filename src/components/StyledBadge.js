import React from "react";
import { Badge } from "reactstrap";
import styled, { css } from 'styled-components'

const badgeStyle = css`
  display: -webkit-inline-box;
`;

const BadgeStyled = ({ className, children }) => {
  return (
    <Badge href="#" className={className} color="info">
      {children}
    </Badge>
  );
};

const StyledBadge = styled(BadgeStyled)`
  ${badgeStyle}
`;

export default StyledBadge;
