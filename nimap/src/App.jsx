import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";
import SearchResultsDetails from "./SearchResultsDetails";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/popular/:id" element={<MovieDetails />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/top-rated/:id" element={<MovieDetails />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/upcoming/:id" element={<MovieDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/search/:query/:id" element={<SearchResultsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
