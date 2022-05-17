import React from "react";
import { useState, useEffect } from 'react';
import { MovieList } from './Movies';

const DisplayMovies= () => {
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
  export default DisplayMovies;