import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "../shared/Navigation";

const Wrapper = styled.div`
  background-color: #3f3f46;
`;

const Content = styled.div`
  margin-top: 60px
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
      <Content>
        <Component {...props} />
      </Content>
    </Wrapper>
  );
}
