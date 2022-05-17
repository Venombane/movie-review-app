import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import DisplayMovies from './pages/ListofMovies'
import FormPage from './pages/FormPage';
import NavBar from './NavBar';
import './App.css';



const App = () => {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<DisplayMovies />} exact />
            <Route path="/FormPage" element={<FormPage />}/>
          </Routes>
        </div>
      </Router>
    );
}




function FormValidation() {
  const $ = selector => document.querySelector(selector);

        const processEntries = () => {
            const name = $("#name");
            const date = $("#date");
            const actors = $("#actors");
            const posters = $("#posters");
            const rating = $("#rating");

            let isValid = true;
            if (name.value === "") {
                alert("Name is required");
                isValid = false;
            }
            if (date.value === "") {
                alert("Date is required");
                isValid = false;
            }
            if (actors.value === "") {
                alert("Actors is required.");
                isValid = false;
            } 

            if (posters.value === "") {
                alert("Posters is required");
                isValid = false;
            } 
            if (rating.value === "") {
                alert("Rating is required");
                isValid = false;
            }
            


            if (isValid === true) {
                $("form").submit();
            }
        };

        const resetForm = () => {
            $('form').reset();
            $("#name").focus();
        }

        document.addEventListener("DOMContentLoaded", () => {
            $('#btnsubmit').addEventListener("click", processEntries);
            $('#clear').addEventListener("click", resetForm);
            $('#recipe-name').focus();
        });
}

export default App;
