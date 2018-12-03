import * as React from "react";
import Helmet from "react-helmet";
import styled from "@emotion/styled";

// Themes
import { Colors } from "../Themes";

const PageLayout = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: ${Colors.snow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessageContainer = styled.div`
  & h1 {
    text-align: center;
    font-size: 206px;
  }
  & p {
    text-align: center;
    font-size: 16px;
  }
`;

export default () => (
  <PageLayout>
    <ErrorMessageContainer>
      <h1 color={Colors.arlaxBlue}>404</h1>
      <br />
      <p>Whoops! Looks like there's nothing to see here.</p>
      <br />
    </ErrorMessageContainer>
    <Helmet title="404" />
  </PageLayout>
);
