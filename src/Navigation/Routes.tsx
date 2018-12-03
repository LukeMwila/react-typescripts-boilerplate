import * as React from "react";
import * as Loadable from "react-loadable";

// Containers
import SignIn from "../Containers/Login";

const AsyncSignIn = Loadable({
  loader: () => Promise.resolve(SignIn),
  loading: () => <div>Loading ...</div>
});

const routes = [
  {
    title: "Sign In",
    path: "/sign-in",
    component: AsyncSignIn,
    exact: true,
    private: false
  }
];

export default routes;
