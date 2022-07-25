import React from "react";
import closeIcon from "./media/icons8-close.svg";

import "./addpost.css";

export const AddPost = ({
  valueTitle,
  setValueTitle,
  valueRelease,
  setValueRelease,
  valueUrl,
  setValueUrl,
  valueOverview,
  setValueOverview,
  valueRuntime,
  setValueRuntime,
  onSubmit,
  valueGenres,
  setValueGenres,
}) => {
  return (
    <div className="container__modal-window">
      <div className="block__modal-window">
        <img
          className="modal-window__close_icon"
          src={closeIcon}
          alt="sortDown"
        />
        <div className="modal-window__title-text">ADD MOVIE</div>
        <div className="block__input">
          <div className="current-block__input">
            <div className="input-name"> TITILE</div>
            <input
              className="input"
              type="text"
              value={valueTitle}
              onChange={(event) => setValueTitle(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RELEASE DATE</div>

            <input
              className="input"
              type="text"
              value={valueRelease}
              onChange={(event) => setValueRelease(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> MOVIE URL</div>
            <input
              className="input"
              type="text"
              value={valueUrl}
              onChange={(event) => setValueUrl(event.target.value)}
            />
          </div >
          <div className="current-block__input">
            <div className="input-name"> OVERVIEW</div>

            <input
              className="input"
              type="text"
              value={valueOverview}
              onChange={(event) => setValueOverview(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RUNTIME</div>
            <input
              className="input"
              type="text"
              value={valueRuntime}
              onChange={(event) => setValueRuntime(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> GENRES</div>

            <input
              className="input"
              type="text"
              value={valueGenres}
              onChange={(event) => setValueGenres(event.target.value)}
            />
          </div>
          <button className="btn__submit-movie " onSubmit={onSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
