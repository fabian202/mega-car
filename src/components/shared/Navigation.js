import React from "react";
import { Navbar, Nav, NavItem, Input } from "reactstrap";
import { A } from "hookrouter";
import { useCarList } from "../../hooks/useCarList";
import { StyledBrand, StyledNavItem } from "../styled/NavigationStyles";
import StyledBadge from "../styled/StyledBadge";
import StyledIcon from "../styled/IconStyled";

export default function Navigation({ showText }) {
  const { handleChange, compare } = useCarList();

  return (
    <Navbar color="dark" dark expand="md">
      <StyledBrand href="/">MegaCar</StyledBrand>
      <Nav className="ml-auto" navbar>
        {showText && (
          <NavItem>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Search by brand"
              onChange={handleChange}
              style={{ marginRight: "10px" }}
              bsSize="sm"
            />
          </NavItem>
        )}

        <StyledNavItem></StyledNavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <A href="/compare">
            <StyledIcon />
          </A>
          <StyledBadge>{compare.length}</StyledBadge>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
