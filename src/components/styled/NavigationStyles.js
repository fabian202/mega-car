import React from "react";
import { A } from "hookrouter";
import styled, { css } from "styled-components";
import { NavItem } from "reactstrap";

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

export const StyledBrand = styled(BrandStyled)`
  ${brandStyle}
`;

export const StyledNavItem = styled(NavItemStyled)`
  ${navItemStyle}
`;
