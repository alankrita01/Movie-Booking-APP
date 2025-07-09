import React, { useState } from 'react';

const BookingForm = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [showtime, setShowtime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here
        console.log('Booking Details:', { selectedMovie, showtime, name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Your Movie</h2>
            <div>
                <label htmlFor="movie">Select Movie:</label>
                <select
                    id="movie"
                    value={selectedMovie}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                    required
                >
                    <option value="">Select a movie</option>
                    {movies.map((movie) => (
                        <option key={movie.id} value={movie.title}>
                            {movie.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="showtime">Select Showtime:</label>
                <input
                    type="datetime-local"
                    id="showtime"
                    value={showtime}
                    onChange={(e) => setShowtime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Your Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;