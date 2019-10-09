import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Input
} from "reactstrap";
import { A } from "hookrouter";
import styled, { css } from "styled-components";
import { useCarList } from "../hooks/useCarList";

const navItemStyle = css`
  display: -webkit-inline-box;
`;

const brandStyle = css`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const NavItemStyled = ({ className, children }) => {
  return <NavItem className={className}>{children}</NavItem>;
};

const BrandStyled = ({ className, children, href }) => {
  return (
    <A href={href} className={className}>
      {children}
    </A>
  );
};

const StyledBrand = styled(BrandStyled)`
  ${brandStyle}
`;

const StyledNavItem = styled(NavItemStyled)`
  ${navItemStyle}
`;

export default function Navigation({ showText }) {
  const { handleChange, compare } = useCarList();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <StyledBrand href="/">MegaCar</StyledBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {showText && (
            <NavItem>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Search by brand"
                onChange={handleChange}
              />
            </NavItem>
          )}

          <StyledNavItem>
            <NavLink href="/components/">Compare</NavLink>
            <Badge href="#" color="info">
              {compare.length}
            </Badge>
          </StyledNavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
