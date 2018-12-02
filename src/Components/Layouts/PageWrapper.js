import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Colors } from "../../Themes";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: ${props =>
    props.bgImage ? `url(${props.bgImage})` : props.background || Colors.coal};
  align-items: center;
  justify-content: ${props => (props.flexStart ? "flex-start" : "center")};
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
  padding: ${props =>
    props.padding ? props.padding : props.private ? "70px 0 0 0" : "0"};
  margin: ${props => props.margin || "0"};
  flex-direction: column;
  &:before {
    position: fixed;
    display: ${props => (props.overlay ? "block" : "none")};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props =>
      props.overlay ? Colors.overlayBlack : Colors.transparent};
    content: "";
    z-index: 0;
  }
`;

const PageWrapper = props => {
  const {
    children,
    backgroundImage,
    overlay,
    background,
    padding,
    margin,
    flexStart
  } = props;
  return (
    <Wrapper
      flexStart={flexStart}
      overlay={overlay}
      margin={margin}
      padding={padding}
      bgImage={backgroundImage}
      background={background}
    >
      {children}
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  background: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node.isRequired,
  flexStart: PropTypes.string,
  margin: PropTypes.string,
  overlay: PropTypes.bool,
  padding: PropTypes.string
};

Wrapper.propTypes = {
  background: PropTypes.string,
  backgroundImage: PropTypes.string,
  bgImage: PropTypes.string,
  flexStart: PropTypes.string,
  margin: PropTypes.string,
  overlay: PropTypes.bool,
  padding: PropTypes.string
};

export default PageWrapper;
