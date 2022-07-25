import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./film/movieList/components/movieList/MovieLsit";
import { Header } from "./film/movieList/components/header/Header";
import { MovieInfo } from "./film/movieList/components/currentMovieInfo/MovieInfo";
import {Footer} from "./film/movieList/components/footer/Footer"

import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movieInfo" element={<MovieInfo />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
