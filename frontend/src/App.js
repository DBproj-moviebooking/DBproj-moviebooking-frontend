import React from 'react';
import './App.css';
import Header from './utils/Header';
import MovieCarousel from './utils/MovieCarousel';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>

  <body>
    <Blog />
  </body>
    </div>
  );
}

export default App;
