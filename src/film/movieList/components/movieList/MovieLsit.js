import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/MovieListSlice";
import { Filters } from "../filters/Filters";
import { NotFound } from "./notFound/NotFound";
import { Movie } from "./movie/Movie";
import { UsePagination } from "./pagination/Pagination";

import "./movielist.css";

export const HomePage = () => {
  const { posts } = useSelector((state) => state.movie);
  const loadFilms = useSelector((state) => state.movie.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  let stateOfPage;
  if (loadFilms === true) {
    stateOfPage = <div className="loader">Loading...</div>;
  } else if (loadFilms === false && posts.length > 0) {
    stateOfPage = (
      <section className="container__movie-list">
        {posts.map((post) => (
          <article className="block__movie-list" key={post.id}>
            <Movie
            key={post.id}
              id={post.id}
              title={post.title}
              img={post.poster_path}
              genres={post.genres}
              date={post.release_date}
              rating={post.vote_average}
            />
          </article>
        ))}
      </section>
    );
  } else if (loadFilms === false && posts.length === 0) {
    stateOfPage = <NotFound />;
  }

  return (
    <div className="container__content">
      <div className="line-gap"></div>
      <Filters />
      {stateOfPage}
      <UsePagination />
    </div>
  );
};
