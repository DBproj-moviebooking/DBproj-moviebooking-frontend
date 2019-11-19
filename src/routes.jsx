import React from "react";
import Blog from "./Blog";
import { Route } from "react-router";
import SignIn from "./Signin";
import Movie from "./movie";
import Cinema from "./cinema";
import SignUp from "./Signup";
import Souvenirs from "./Souvenirs";
import Ticket from "./Ticket";
import Review from "./Review";

const routes = [
  { path: "/", component: Blog, exact: true },
  { path: "/Signin", component: SignIn, exact: true },
  { path: "/movie", component: Movie, exact: true },
  { path: "/cinema", component: Cinema, exact: true },
  { path: "/Signup", component: SignUp, exact: true },
  { path: "/Souvenir", component: Souvenirs, exact: true },
  { path: "/Ticket", component: Ticket, exact: true },
  { path: "/Review", component: Review, exact: true }
];

export default routes.map((props, index) => {
  return <Route key={index} {...props} />;
});
