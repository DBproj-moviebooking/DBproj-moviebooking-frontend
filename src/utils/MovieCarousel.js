import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MovieCarousel.css";

class MovieCarousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://dummyimage.com/1920x600/f00/fff" class="d-block w-100" alt="1" />
          </div>
            <div class="carousel-item">
              <img src="https://dummyimage.com/1920x600/0f0/fff" class="d-block w-100" alt="2" />
            </div>
              <div class="carousel-item">
                <img src="https://dummyimage.com/1920x600/00f/fff" class="d-block w-100" alt="3" />
            </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            );
          }
        }
        
        export default MovieCarousel;
