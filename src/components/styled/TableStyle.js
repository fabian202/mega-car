import React from "react";
import styled, { css } from "styled-components";
import { Table } from "reactstrap";

const tableStyle = css`
  color: rgba(255, 255, 255, 0.5);
`;

const TableStyled = ({ className, children }) => {
  return (
    <Table responsive hover borderless striped className={className}>
      {children}
    </Table>
  );
};

export const StyledTable = styled(TableStyled)`
  ${tableStyle}
`;
