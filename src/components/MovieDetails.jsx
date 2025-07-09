import React from 'react';

const MovieDetails = ({ movie }) => {
    if (!movie) {
        return <div>Select a movie to see the details.</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <h3>Showtimes:</h3>
            <ul>
                {movie.showtimes.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetails;