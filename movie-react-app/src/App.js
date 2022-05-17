import logo from './logo.svg';
import { useRoutes, Link } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';
import { useState, useEffect } from 'react';
import { MovieList } from './Movies';


function App() {
  let element = useRoutes([
    {path: '/', element: <L/>},
    {path: '/FormPage', element: <Form />},
  ]);

  return element;
   
}

function L() {
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
      <nav>
        <Link to='/FormPage'>Add Review</Link>
      </nav>
      <h1>Hello</h1>
      <MovieList movies={movies} setMovies={setMovies}/>
    </>
    
  );
}

function Form() {
  return (
    <>
      <nav>
        <Link to='/'>Movies</Link>
      </nav>
      <h1>Welcome the form page!</h1>
    </>
  );
}

export default App;
