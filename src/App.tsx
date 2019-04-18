import * as React from "react";
import styled from "styled-components";
import Toggle from "./components/Toggle/Toggle";

const Wrapper = styled.main`
  max-width: 50%;
  margin: 10rem auto;
`;

const Preview = styled.section`
  display: flex;
  border: 3px solid #952d57;
  border-radius: 10px;
  padding: 2rem;
`;

export default () => (
  <Wrapper>
    <h1>UI Testing Demo</h1>
    <Preview>
      <Toggle />
    </Preview>
  </Wrapper>
);
