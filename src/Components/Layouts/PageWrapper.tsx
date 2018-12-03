import * as React from "react";
import styled from "@emotion/styled";

// Themes
import { Colors } from "../../Themes";
// import { Images } from "../../Themes";

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: ${Colors.coal};
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
  padding: 0;
  margin: 0;
  flex-direction: column;
  &:before {
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Colors.transparent};
    content: "";
    z-index: 0;
  }
`;

export default class PageWrapper extends React.Component<IProps> {
  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}
