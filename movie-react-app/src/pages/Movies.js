import React from "react";

export function MovieList( {movies = [], setMovies = f => f }) {
    if(movies === null || movies === undefined )
        return <h2>No movies available</h2>;
    return (
        <>
        {
            
        movies.map((movie, i) => {
            return (
                <>
                <div className='container bg-dark w-50'>
                    <h2 className='mb-3 text-white text-center fw-bold'>{i + 1}. {movie.name}</h2>
                    <img src={movie.poster} alt={movie.name} height="300" width="200"></img>
                    <h3 className='mb-3 text-white text-center fw-bold'>{movie.date}</h3>
                    <h3 className='mb-3 text-white text-center fw-bold'>{movie.actors}</h3>
                    <h3 className='mb-3 text-white text-center fw-bold'>Rating: {movie.rating}</h3>

                    <button className='btn btn-dark btn-lg border border-1' onClick= { (e) => {
                        const name = e.currentTarget.parentElement.firstChild.lastChild.textContent;
                        const movieResult = movies.filter(movie => movie.name !== name);
                        setMovies(movieResult);

                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({
                            "name": name
                          });

                        var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                        };

                        fetch("/api/deleteMovie", requestOptions)
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));
                        
                        
                    }} >Delete</button>
                    
                    <hr className="text-white"></hr>
                </div>
                </>
            )
            
        })
        }
        </>
    );
}

