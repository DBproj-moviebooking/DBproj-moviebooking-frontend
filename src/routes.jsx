import React from "react";
import Blog from "./Blog";
import { Route } from "react-router";
import SignIn from "./Signin";
import SignUp from "./Signup";
import Souvenirs from "./Souvenirs";
import Ticket from "./Ticket";

const routes = [
  { path: "/", component: Blog, exact: true },
  { path: "/Signin", component: SignIn, exact: true },
  { path: "/Signup", component: SignUp, exact: true },
  { path: "/Souvenir", component: Souvenirs, exact: true },
  { path: "/Ticket", component: Ticket, exact: true }
];

export default routes.map((props, index) => {
  return <Route key={index} {...props} />;
});
