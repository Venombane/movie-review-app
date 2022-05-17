import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { MovieList } from './Movies';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import FormPage from './FormPage';


function App() {
  const [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("./movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .then( console.log(movies))
    .catch( e => console.log(e.message) );
  }, [])

  
  return (
    <Router>
      <MovieList movies={movies} setMovies={setMovies}/>
      <Route path='/FormPage' component={FormPage} />
    </Router>
  );
    
  
}

export default App;
