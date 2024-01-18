import React from "react";
import MovieList from "./MovieList";

const Popular = () => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US';
    const linkPrefix = '/popular';

    return <MovieList apiUrl={apiUrl} linkPrefix={linkPrefix} />;
};

export default Popular;