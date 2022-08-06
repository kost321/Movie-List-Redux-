import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./film/movieList/components/movieList/MovieLsit";
import { MovieInfo } from "./film/movieList/components/currentMovieInfo/MovieInfo";
import Footer from "./film/movieList/components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/movieInfo" element={<MovieInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
