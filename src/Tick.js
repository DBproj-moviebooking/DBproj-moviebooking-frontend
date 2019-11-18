import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Tick.css";
import Button from "@material-ui/core/Button";

const tickets = [
  {
    image: "./green_book.jpg",
    title: "Green Book",
    duration: "105 mins",
    date: "8 NOV 2019",
    seat: "C3, C4",
    theatre: "5",
    time: "12:30",
    price: "500 THB"
  },
  {
    image: "./django_unchained.jpg",
    title: "Django",
    duration: "165 mins",
    date: "8 NOV 2019",
    seat: "E13, E14, E15",
    theatre: "8",
    time: "20:45",
    price: "750 THB"
  },
  {
    image: "./green_book.jpg",
    title: "Green Book",
    duration: "105 mins",
    date: "8 NOV 2019",
    seat: "C12, C3",
    theatre: "4",
    time: "13:15",
    price: "500 THB"
  },
  {
    image: "./x_men.jpg",
    title: "X-Men",
    duration: "144 mins",
    date: "8 NOV 2019",
    seat: "F18, F19",
    theatre: "6",
    time: "14:35",
    price: "500 THB"
  },
  {
    image: "./rick_and_morty.jpg",
    title: "Rick-Morty",
    duration: "23 mins",
    date: "8 NOV 2019",
    seat: "E20",
    theatre: "6",
    time: "19:50",
    price: "250 THB"
  },
  {
    image: "./the_stranded.jpg",
    title: "เคว้ง",
    duration: "105 mins",
    date: "8 NOV 2019",
    seat: "G8, G9",
    theatre: "IMAX Special",
    time: "20:20",
    price: "800 THB"
  }
];

export default function Tick() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      {tickets.map(
        ({ image, title, duration, date, seat, theatre, time, price }) => (
          //   <Tick />
          <div className="box">
            <div className="sub_box1">
              <img src={image} alt={title} />
            </div>
            <div className="sub_box2">
              <div className="title">
                <h1>{title}</h1>
                <h5>{duration}</h5>
              </div>
              <div className="details_left">
                <h5>Date: {date}</h5>
                <h5>Seat No.:{seat}</h5>
                <h5>Price: {price}</h5>
              </div>
              <div className="details_right">
                <h5>Theatre: {theatre}</h5>
                <h5>{time}</h5>
              </div>
            </div>
            <div className="sub_box3">
              <Button class="e_button">E-Ticket</Button>

              <Button class="c_button">Cancel</Button>
            </div>
          </div>
        )
      )}
    </React.Fragment>
  );
}
