import React from "react";
import { Redirect } from "react-router";

export function MovieList( {movies = [], setMovies = f => f }) {
    if(movies === null || movies === undefined )
        return <h2>No movies available</h2>;

    return (
        <>
        {
        movies.map((movie, i) => {
            
            return (
                <>
                <h2>{i + 1}. {movie.name}</h2>
                <img src={movie.poster} alt={movie.name} height="300" width="200"></img>
                <h3>{movie.date}</h3>
                <h3>{movie.actors}</h3>
                <h3>Rating: {movie.rating}</h3>

                <button onClick= { () => {
                    console.log(i);
                    movies.splice(i, 1);
                    console.log(movies);
                    setMovies(movies);
                }} >Delete</button>
                
                <hr></hr>
                </>
            )
            
        })
        }
        </>
    );
}

