import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import PageWrapper from "../../Components/Layouts/PageWrapper";
import LoginPanel from "../../Components/Layouts/LoginPanel";

import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LoginPanel>
          <LoginForm />
        </LoginPanel>
        <Helmet title="Sign In" />
      </PageWrapper>
    );
  }
}
