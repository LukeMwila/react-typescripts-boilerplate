import React, { Fragment } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Colors } from "../../Themes";

const PanelWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 350px;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 9995;
  flex-direction: column;
  max-width: 100%;
  padding: 3em;
  overflow-y: auto;
  background: ${Colors.snow};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 11px 0 16px -8px rgba(0, 0, 0, 0.4),
    -12px 0 8px -4px rgba(0, 0, 0, 0.2);
`;

const LoginPanel = props => <PanelWrapper>{props.children}</PanelWrapper>;

LoginPanel.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginPanel;
