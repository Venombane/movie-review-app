import { React } from 'react';

const $ = selector => document.querySelector(selector);

export function PageForm({movies = [], setMovies = f => f }) {
  
  return (
    <div className='container bg-dark w-50'>
      <div className='bg-dark'>
        <h1 className='mb-3 text-white text-center fw-bold'>Add New Movie Review!</h1>
        <hr className="text-white"></hr>
        <form action="" method="POST" className='form-horizontal'>
          <div className='mb-3 col-md-12 text-white fw-bold fs-5'>
            <label>
              Name:
              <input className='form-control' type="text" name="movieName" id="name" />
              <span style={{color: 'red'}}>*</span>
            </label>
          </div>

          <div className='mb-3 col-md-12 text-white fw-bold fs-5'>
            <label>
              Date:
              <input className='form-control' type="date" name="date" id="date" />
              <span style={{color: 'red'}}>*</span>
            </label>
          </div>

          <div className='mb-3 col-md-6 text-white fw-bold fs-5'>
            <div>
              <label>Actors (seperate with a comma) : </label>
            </div>
            <textarea className='form-control' id="actors" rows="3" name="actors"></textarea>
            <span style={{color: 'red'}}>*</span>
          </div>

          <div className='mb-3 col-md-3 text-white fw-bold fs-5'>
            <label>Poster: </label>
            <input className='form-control' type="file" name="posters" id="posters"></input>
            <span style={{color: 'red'}}>*</span>
          </div>

          <div className='mb-3 col-md-1 text-white fw-bold fs-5'>
            <label>Rating: </label>
            <select className='form-control' defaultValue="" name="rating" id="rating">
              <option value="" disabled hidden>Select...</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
            <span style={{color: 'red'}}>*</span>
          </div>
          <input className='btn btn-dark btn-lg border border-1' type="button" id="btnsubmit" value="Submit" onClick={ProcessEntries} ></input>
          <input className='btn btn-dark btn-lg border border-1' type="button" id="clear" value="Clear" onClick={resetForm} ></input>
          <h3 className='mb-3 text-white text-center fw-bold' id="submitted">Not Submitted</h3>
        </form>
      </div>
    </div>
  );

  
  function ProcessEntries() {
    const name = $("#name");
    const date = $("#date");
    const actors = $("#actors");
    const posters = $("#posters");
    const rating = $("#rating");
    let isValid = true;
    if (name.value === "") {
        name.nextElementSibling.textContent = "Name is required!";
        isValid = false;
    } else {
        name.nextElementSibling.textContent = "";
    }
    if (date.value === "") {
        date.nextElementSibling.textContent = "Date is required!";
        isValid = false;
    } else {
        date.nextElementSibling.textContent = "";
    }
    if (actors.value === "") {
        actors.nextElementSibling.textContent = "Actors are required!";
        isValid = false;
    } else {
        actors.nextElementSibling.textContent = "";
    }

    if (posters.value === "") {
        posters.nextElementSibling.textContent = "Poster is required!";
        isValid = false;
    }  else {
        posters.nextElementSibling.textContent = "";
    }
    if (rating.value === "") {
        rating.nextElementSibling.textContent = "Rating is required!";
        isValid = false;
    } else {
        rating.nextElementSibling.textContent = "";
    }
    

    if (isValid === true) {
      const actorList = actors.value.toString().split(",");
      let newObject = { 
        "name": name.value,
        "date": date.value, 
        "actors": actorList, 
        "poster": posters.value, 
        "rating": rating.value 
      };
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": name.value,
        "date": date.value, 
        "actors": actorList, 
        "poster": posters.value, 
        "rating": rating.value 
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("/api/addMovie", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      movies.push(newObject);
      setMovies(movies);

      $('form').reset();
      $("#name").nextElementSibling.textContent = "*";
      $("#date").nextElementSibling.textContent = "*";
      $("#actors").nextElementSibling.textContent = "*";
      $("#posters").nextElementSibling.textContent = "*";
      $("#rating").nextElementSibling.textContent = "*";
      $("#submitted").textContent = "Submitted!";
      if ($("#submitted").textContent != null) {
        setInterval(function() {$("#submitted").textContent = "Submit Another?";}, 5000);
      }
      
    }
  };

  function resetForm() {
    $("#name").nextElementSibling.textContent = "*";
    $("#date").nextElementSibling.textContent = "*";
    $("#actors").nextElementSibling.textContent = "*";
    $("#posters").nextElementSibling.textContent = "*";
    $("#rating").nextElementSibling.textContent = "*";
    $("#submitted").textContent = "Not Submitted";

    $('form').reset();
    $("#name").focus();
  }
}