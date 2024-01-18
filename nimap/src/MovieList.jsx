import React, { useState, useEffect } from "react";
import axios from "axios";
import './List.css'
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const MovieList = ({ apiUrl, linkPrefix }) => {
    const [movieData, setMovieData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(`${apiUrl}&page=${currentPage}`);
            setMovieData(response.data.results);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [apiUrl, currentPage]);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;

    const currentItems = movieData.slice(firstItemIndex, lastItemIndex);

    return (
        <>
            <div className="flex-container">
                {currentItems.map((item) => (
                    <div
                        className="movie_item"
                        key={item.id}
                    >
                        <Link to={`${linkPrefix}/${item.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                                alt={item.original_title}
                            />
                            <div className="movie_name">{item.original_title}</div>
                            <div className="movie_rating">Rating: {item.vote_average.toFixed(1)}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination totalItems={movieData.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    );
};

export default MovieList;