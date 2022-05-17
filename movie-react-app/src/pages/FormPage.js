import React from "react";

const FormPage = () => (
    <>
      <h1>Welcome the form page!</h1>
      <form name="movie-review">
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <span style={{color: 'red'}}>*</span>
        </div>

        <div>
          <label>
            Date:
            <input type="date" name="date" />
          </label>
          <span style={{color: 'red'}}>*</span>
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
        <input type="button" id="btnsubmit" value="Submit"></input>
        <input type="button" id="clear" value="Clear"></input>
      </form>
    </>
);

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
  };

export default FormPage;