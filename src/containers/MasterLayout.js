import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "../components/Navigation";

const Wrapper = styled.div`
  background-color: #3f3f46;
`;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #3F3F46;
}
`;

export default function MasterLayout(props) {
  const Component = props.component;
  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation showText={props.showText}></Navigation>
      <Component {...props} />
    </Wrapper>
  );
}
