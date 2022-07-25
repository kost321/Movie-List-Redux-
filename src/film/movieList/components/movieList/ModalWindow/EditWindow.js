import React from "react";
import { useSelector } from "react-redux";
import closeIcon from "./media/icons8-close.svg";

import "./editWindow.css";

export const EditWindow = ({
  id,
  valueTitle,
  setValueTitle,
  valueRelease,
  setValueRelease,
  valueUrl,
  setValueUrl,
  valueOverview,
  setValueOverview,
  valueRuntime,
  seValueRuntime,
  onSubmit,
  valueGenres,
  seValueGenres,
}) => {
  const movieState = useSelector((state) => state.movie.posts);
  let currentMovieState = movieState.find((item) => item.id === id);

  return (
    <div className="container__modal-window">
      <div className="block__modal-window">
        <img
          className="modal-window__close_icon-edit"
          src={closeIcon}
          alt="sortDown"
        />
        <div className="modal-window__title-text">ADD MOVIE</div>
        <div className="block__input">
          <div className="current-block__input">
            MOVIE ID
            <div>{currentMovieState.id}</div>
          </div>
          <div className="current-block__input">
            <div className="input-name"> TITILE</div>
            <input
              className="input"
              type="text"
              value={valueTitle}
              placeholder={currentMovieState.title}
              onChange={(event) => setValueTitle(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RELEASE DATE</div>
            <input
              className="input"
              type="text"
              value={valueRelease}
              placeholder={currentMovieState.release_date}
              onChange={(event) => setValueRelease(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> MOVIE URL</div>
            <input
              className="input"
              type="text"
              value={valueUrl}
              placeholder={currentMovieState.poster_path}
              onChange={(event) => setValueUrl(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> OVERVIEW</div>
            <input
              className="input"
              type="text"
              value={valueOverview}
              placeholder={currentMovieState.overview}
              onChange={(event) => setValueOverview(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RUNTIME</div>
            <input
              className="input"
              type="text"
              value={valueRuntime}
              placeholder={currentMovieState.runtime}
              onChange={(event) => seValueRuntime(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> GENRES</div>
            <input
              className="input"
              type="text"
              value={valueGenres}
              placeholder={currentMovieState.genres}
              onChange={(event) => seValueGenres(event.target.value)}
            />
          </div>
          <button className="btn__on-submit" onSubmit={onSubmit}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
