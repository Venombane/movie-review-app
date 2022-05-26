import { React } from 'react';

const $ = selector => document.querySelector(selector);

export function PageForm({movies = [], setMovies = f => f }) {
  
  return (
    <div>
      <div className='container text-left'>
        <h1 className='mb-4 text-white'>New Movie Review</h1>
        <hr className="text-white"></hr>

        <form action="/api/addMovie" method="POST" className='form-horizontal' encType='multipart/form-data'>
          <div className='form-group'>

            <label htmlFor="movieName" className='text-white'>Name:</label>
            <input className='form-control' type="text" name="movieName" id="name" placeholder='Enter Movie Name...'/>
            <span style={{color: 'red'}}>*</span>
          </div>

          <div className='form-group'>

            <label htmlFor="movieYear" className='text-white' >Year:</label>
            <input className='form-control' type="number" name="movieYear" id="year" placeholder='Enter Year...'/>
            <span style={{color: 'red'}}>*</span>
          </div>

          <div className='form-group'>

            <label htmlFor="movieActors" className='text-white' >Actors</label>
            <textarea className='form-control' id="actors" rows="3" name="movieActors" placeholder='Seperate Names with a comma and a space...'></textarea>
            <span style={{color: 'red'}}>*</span>
          </div>
          
          <div className='form-group mb-2'>

            <div><label htmlFor="poster" className='text-white'>Upload Image</label></div>
            <input type="file" className='form-control-file text-white' name="moviePoster" id="poster"/>
            <span style={{color: 'red'}}>*</span>
          </div>

          <div className='form-group mb-2'>

            <div><label htmlFor="movieRating" className='text-white' >Rating: </label></div>
            <select className='form-control-select' defaultValue="" name="movieRating" id="rating" placeholder='Select a Rating...'>
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

          <div className='form-group'>

            <a href="/" className='btn btn-warning'>Cancel</a>
            <button className='btn btn-primary' type="button" id="btnsubmit" value="Submit" onClick={ProcessEntries} >Submit</button>
          </div>
        </form>
        <hr className="text-white"></hr>
      </div>
    </div>
  );

  
  function ProcessEntries() {
    const name = $("#name");
    const year = $("#year");
    const actors = $("#actors");
    const posters = $("#poster");
    const rating = $("#rating");
    console.log(year.value)
    let isValid = true;
    if (name.value === "") {
        name.nextElementSibling.textContent = "Name is required!";
        isValid = false;
    } else {
        name.nextElementSibling.textContent = "";
    }
    if (year.value === "") {
        year.nextElementSibling.textContent = "Year is required!";
        isValid = false;
    } else if (year.value <= 1900) {
        year.nextElementSibling.textContent = "Year is too small!";
        isValid = false;
    } else {
        year.nextElementSibling.textContent = "";
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
        "year": year.value, 
        "actors": actorList, 
        "poster": posters.value, 
        "rating": rating.value 
      };

      movies.push(newObject);
      setMovies(movies);

      $("form").submit();
    }
  };
}