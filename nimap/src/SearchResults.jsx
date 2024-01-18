import React, { useState, useEffect } from "react";
import axios from "axios";
import './List.css';
import Pagination from "./Pagination";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
    const { query } = useParams();
    const [movieData, setMovieData] = useState([]);
    const Api_key = 'c45a857c193f6302f2b5061c3b85e743';

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${query}&page=${currentPage}`
            );
            setMovieData(response.data.results);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [query, currentPage]);

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
                        <Link to={`/search/${query}/${item.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                                alt={item.original_title}
                            />
                            <div className="movie_name">{item.original_title}</div>
                            <div className="movie_rating">Rating: {item.vote_average}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination totalItems={movieData.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    );
};

export default SearchResults;