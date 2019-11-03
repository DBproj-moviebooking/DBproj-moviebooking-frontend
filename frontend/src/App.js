import React from 'react';
import './App.css';
import Header from './utils/Header';
import MovieCarousel from './utils/MovieCarousel';

function App() {
  return (
    <div className="App">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>

  <body>
  <Header/>
  <div class="container" color="black" >
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-8">
        <MovieCarousel/>
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
  </body>
    </div>
  );
}

export default App;
