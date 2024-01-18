import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './MovieDetails.css'

const SearchResultsDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);
    const Api_key = 'c45a857c193f6302f2b5061c3b85e743';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // Fetch movie details
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
                );
                setMovieDetails(response.data);

                // Fetch cast details
                const creditsResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
                );
                setCast(creditsResponse.data.cast);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    const {
        title,
        release_date,
        vote_average,
        genres,
        overview,
        poster_path,
    } = movieDetails;

    return (
        <div className="movie-details">
            <div className="details-header">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    alt={title}
                />
                <div className="details-title">
                    <h2>{title}</h2>
                    <p>Release Date: {release_date}</p>
                    <p>Rating: {vote_average}</p>
                    <p>
                        Genre:{" "}
                        {genres &&
                            genres.map((genre) => (
                                <span key={genre.id}> {genre.name}</span>
                            ))}
                    </p>
                </div>
            </div>
            <div className="details-content">
                <h3>Overview</h3>
                <p>{overview}</p>

                {cast && cast.length > 0 && (
                    <>
                        <div className="cast-container">
                            <h3>Cast</h3>
                            {cast.map((actor) => (
                                <div key={actor.id} className="cast-item">
                                    {actor.profile_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                                            alt={`${actor.name} Profile`}
                                        />
                                    ) : (
                                        <img
                                            src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-11.jpg"
                                            alt={`${actor.name} Profile`}
                                        />
                                    )}
                                    <p>{actor.name}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchResultsDetails;
