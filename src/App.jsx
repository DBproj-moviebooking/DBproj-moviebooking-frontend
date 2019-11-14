import React from "react";
import Header from "./utils/Header";
import MovieCarousel from "./utils/MovieCarousel";
import Blog from "./Blog";
import { Switch } from "react-router";
import routes from "./routes";

function App() {
  return <Switch>{routes}</Switch>;
}

export default App;
