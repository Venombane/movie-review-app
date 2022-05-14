import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { MovieList } from './Movies';

function App() {
  // let movies = {};
  const [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("./movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .then( console.log(movies))
    .catch( e => console.log(e.message) );
  }, [])
  return (
    <>
      <MovieList movies={movies} setMovies={setMovies}/>
    </>
  );
}

export default App;
