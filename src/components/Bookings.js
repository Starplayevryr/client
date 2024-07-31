import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import './Booking.css';

const Bookings = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`/api/upcomingmovies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Failed to fetch movie details', error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    const renderStars = (rating) => {
        const maxStars = 5;
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }

        if (halfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        for (let i = fullStars + (halfStar ? 1 : 0); i < maxStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    if (!movie) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <h1>Bookings</h1>
            <Container className="image-card-container">
                <img
                    id="Banner"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
                <div className="card1">
                    <h5 className="card-title">{movie.title}</h5>
                    <br></br>
                    <h6 className="card-subtitle">Release Date: {movie.release_date}</h6>
                <br></br>
                    <h6 className="card-subtitle">Popularity: {movie.popularity}</h6>
                    <br></br>
                    <i>
                    <p className="card-text">{movie.overview}</p></i>
                    <br></br>
                    <div className="star-rating">
                        <h6>What Viewers are Saying: {renderStars(movie.vote_average)}</h6>
                    </div>
                    <br></br>
                    <button type="button" id="but" className="btn btn-primary">
                        Confirm Booking
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Bookings;
