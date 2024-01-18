import React from "react";
import MovieList from "./MovieList";

const TopRated = () => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US';
    const linkPrefix = '/top-rated';

    return <MovieList apiUrl={apiUrl} linkPrefix={linkPrefix} />;
};

export default TopRated;
