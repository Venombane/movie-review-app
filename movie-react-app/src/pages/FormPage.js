import React from "react";

const $ = selector => document.querySelector(selector);

const FormPage = () => (
    <>
      <h1>Add New Movie Review!</h1>
      <form name="movie-review">
        <div>
          <label>
            Name:
            <input type="text" name="movieName" id="name" />
            <span style={{color: 'red'}}>*</span>
          </label>
        </div>

        <div>
          <label>
            Date:
            <input type="date" name="date" id="date" />
            <span style={{color: 'red'}}>*</span>
          </label>
        </div>

        <div>
          <div>
            <label>Actors (seperate with a comma) : </label>
          </div>
          <textarea id="actors" rows="3" name="actors"></textarea>
          <span style={{color: 'red'}}>*</span>
        </div>

        <div>
          <label>Posters: </label>
          <select defaultValue="" name="posters" id="posters">
            <option value="" disabled hidden>Select...</option>
            <option value="images/Avengers1.jpg">Avengers</option>
            <option value="images/Avengers2.jpg">Avengers: Age of Ultron</option>
            <option value="images/Avengers3.jpg">Avengers: Infinity War</option>
            <option value="images/Avengers4.jpg">Avengers: Endgame</option>
          </select>
          <span style={{color: 'red'}}>*</span>
        </div>

        <div>
          <label>Rating: </label>
          <select defaultValue="" name="rating" id="rating">
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
        <input type="button" id="btnsubmit" value="Submit" onClick={processEntries} ></input>
        <input type="button" id="clear" value="Clear" onClick={resetForm} ></input>
      </form>
    </>
);

    

    
  
function processEntries() {
    console.log("entered")
    const name = $("#name");
    const date = $("#date");
    const actors = $("#actors");
    const posters = $("#posters");
    const rating = $("#rating");

    let isValid = true;
    if (name.value === "") {
        name.nextElementSibling.textContent = "Name is required!"
        isValid = false;
    } else {
        name.nextElementSibling.textContent = ""
    }
    if (date.value === "") {
        date.nextElementSibling.textContent = "Date is required!"
        console.log("date")
        isValid = false;
    } else {
        date.nextElementSibling.textContent = ""
    }
    if (actors.value === "") {
        actors.nextElementSibling.textContent = "Actors are required!"
        console.log("actor")
        isValid = false;
    } else {
        actors.nextElementSibling.textContent = ""
    }

    if (posters.value === "") {
        posters.nextElementSibling.textContent = "Poster is required!"
        console.log("poster")
        isValid = false;
    } else {
        posters.nextElementSibling.textContent = ""
    }
    if (rating.value === "") {
        rating.nextElementSibling.textContent = "Rating is required!"
        console.log("rating")
        isValid = false;
    } else {
        rating.nextElementSibling.textContent = ""
    }
    

    if (isValid === true) {
        $("form").submit();
    }
};

function resetForm() {
    $('form').reset();
    $("#name").focus();
}
  
       


export default FormPage;