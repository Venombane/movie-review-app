import { useState, useEffect, React } from 'react';
import { BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { MovieList } from './pages/Movies';
import { PageForm } from './pages/FormPage';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(null);
  
  useEffect( () => {
    const fetchData = async () => {
      const result = await fetch("/api/data");
      const body = await result.json();
      setMovies(body);
    }
    fetchData();
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} />} exact />
          <Route path="/FormPage" element={<PageForm movies={movies} setMovies={setMovies} />}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
