import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

// Config
import AppConfig from "../Config/AppConfig";

// Routes
import Routes from "./Routes";
import NoMatch from "./NoMatch";

const AuthRoute = (props: any) => {
  const Comp = props.component;
  return <Route render={data => <Comp {...data} {...props} />} />;
};

const AppNavigation = () => (
  <Router>
    <React.Fragment>
      <Helmet
        defaultTitle={AppConfig.appName}
        titleTemplate={`${AppConfig.appName} | %s`}
      />
      <Switch>
        {Routes.map((route, i) => {
          return <AuthRoute key={i} {...route} />;
        })}
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppNavigation;
