import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import PageWrapper from "../../Components/Layouts/PageWrapper";
import LoginPanel from "../../Components/Layouts/LoginPanel";
// Themes
import { Images } from "../../Themes";

import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <PageWrapper backgroundImage={Images.landingBackground} overlay={true}>
        <LoginPanel>
          <LoginForm />
        </LoginPanel>
        <Helmet title="Login" />
      </PageWrapper>
    );
  }
}
