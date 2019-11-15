import React from "react";
import Blog from "./Blog";
import { Route } from "react-router";
import SignIn from "./Signin";
import Movie from "./movie";
import Cinema from "./cinema";

const routes = [
  { path: "/", component: Blog, exact: true },
  { path: "/Signin", component: SignIn, exact: true },
  { path: "/movie", component: Movie, exact: true},
  { path: "/cinemas", component: Cinema, exact: true}
];

export default routes.map((props, index) => {
  return <Route key={index} {...props} />;
});
