import React from "react";
import Header from "./Header";
import "./Review.css";
import { Button } from "@material-ui/core";
// import CustomStarExample from "./Rating";

export default function Review() {
  return (
    <React.Fragment>
      <Header />
      <h1 id="review_page_title">Your Reviews</h1>
      <div class="topnav">
        <input type="text" placeholder="Search Movie.." />
      </div>
      <form>
        First name:
        <input type="text" name="firstname" />
        <br />
        Last name:
        <input type="text" name="lastname" />
        <br />
        <label>Rating: </label>
        <select name="ratings">
          <option value="Five">5</option>
          <option value="Four">4</option>
          <option value="Three">3</option>
          <option value="Two">2</option>
          <option value="One">1</option>
        </select>
        <br />
        <textarea
          className="textfield"
          placeholder="Write review here.."
        ></textarea>
      </form>
      <br />
      <br />
      <Button class="submit">Submit</Button>
    </React.Fragment>
  );
}
