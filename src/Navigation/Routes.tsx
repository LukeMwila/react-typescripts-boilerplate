import * as React from "react";
import * as Loadable from "react-loadable";

// Containers
import SignIn from "../Containers/Login";
import CreateCompany from "../Containers/CreateCompany";

const AsyncSignIn = Loadable({
  loader: () => Promise.resolve(SignIn),
  loading: () => <div>Loading ...</div>
});

const AsyncCreateCompany = Loadable({
  loader: () => Promise.resolve(CreateCompany),
  loading: () => <div>Loading ...</div>
});

const routes = [
  {
    title: "Sign In",
    path: "/sign-in",
    component: AsyncSignIn,
    exact: true,
    private: false
  },
  {
    title: "Create Company",
    path: "/create-company",
    component: AsyncCreateCompany,
    exact: true,
    private: false
  }
];

export default routes;
