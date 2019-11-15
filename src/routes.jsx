import React from "react";
import Blog from "./Blog";
import { Route } from "react-router";
import SignIn from "./Signin";
import Souvenirs from "./Souvenirs";

const routes = [
  { path: "/", component: Blog, exact: true },
  { path: "/Signin", component: SignIn, exact: true },
  { path: "/Souvenir", component: Souvenirs, exact: true}
];

export default routes.map((props, index) => {
  return <Route key={index} {...props} />;
});
