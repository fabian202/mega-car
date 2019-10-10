import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const iconStyle = css`
  margin-top: 10px;
  margin-left: 20px;
`;

const IconStyled = ({ className, children }) => {
  return <FontAwesomeIcon size="lg" icon={faCar} className={className} />;
};

const StyledIcon = styled(IconStyled)`
  ${iconStyle}
`;

export default StyledIcon;
