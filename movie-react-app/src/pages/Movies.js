import React from "react";

export function MovieList( {movies = [], setMovies = f => f }) {
    if(movies === null || movies === undefined )
        return <h2>No movies available</h2>;
    return (
        <>
        {
            
        movies.map((movie, i) => {
            var poster = "images/" + movie.poster
            return (
                <>
                
                <div className='container text-center w-50border-bottom border-secondary border-1'>
                    <h2 className='mb-1 text-white text-center fw-bold'>{i + 1}. {movie.name}</h2>
                    <img src={poster} alt={movie.name} height="300" width="200" className="border border-secondary border-2"></img>
                    <div className="container w-50">
                        <h4 className='mb-1 text-white'>{movie.year}</h4>
                        <h3 className="text-white">Actors:</h3>
                        <h4 className='text-white'>{movie.actors}</h4>
                        <h3 className='mb-3 text-white'>Rating: {movie.rating}/10</h3>
                    </div>
                    

                    <button className='mb-3 btn btn-primary' onClick= { (e) => {
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
                    
                </div>
                </>
            )
            
        })
        }
        </>
    );
}

