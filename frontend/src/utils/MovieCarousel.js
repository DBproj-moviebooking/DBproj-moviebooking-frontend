import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MovieCarousel.css';

class MovieCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="avenger.jpg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
        <a className="place_on_link" onClick={()=> {console.log("clicked")} } >
          <h3>Avenger : EndGame</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackpanther.jpg?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
        <a className="place_on_link" onClick={()=> {console.log("clicked")} } >
          <h3>Blackpanther</h3>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pikachu.jpg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
        <a className="place_on_link" onClick={()=> {console.log("clicked")} } >
          <h3>Pikachu!</h3>
          <p>
            Praesent commodo cursus magna, vel sceler.
          </p>
        </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"> </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"> </script>
        </div>
        )
    }
}

export default MovieCarousel;