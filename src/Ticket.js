import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import './Ticket.css';
import Button from "@material-ui/core/Button";
import Tick from "./Tick";

export default function Ticket() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <h1 id="ticket_page_title">Tickets</h1>
  <div class="container" id="wrap">
    <Tick />
  </div>
    </React.Fragment>
  );
}
